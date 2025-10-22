import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lightbulb, CheckCircle, XCircle, AlertCircle, Sparkles } from "lucide-react";
import type { MathProblem } from "@shared/mathProblems";
import { GraphPlotter, type PlottedPoint } from "@/components/GraphPlotter";

interface MathPuzzleProps {
  problem: MathProblem;
  onCorrect: () => void;
  onSkip: () => void;
}

export default function MathPuzzle({ problem, onCorrect, onSkip }: MathPuzzleProps) {
  const [answer, setAnswer] = useState("");
  const [plottedPoints, setPlottedPoints] = useState<PlottedPoint[]>([]);
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const isPlotProblem = problem.type === "plot-points";

  // Reset state when a new problem is loaded
  useEffect(() => {
    setAnswer("");
    setPlottedPoints([]);
    setFeedback(null);
    setAttempts(0);
    setShowAnswer(false);
  }, [problem.id]);

  // Validate plotted points against expected points
  const validatePlottedPoints = (): boolean => {
    if (!problem.expectedPoints) return false;
    
    const tolerance = 0.5; // Allow 0.5 unit tolerance
    const expectedPoints = problem.expectedPoints;
    
    // Must have same number of points
    if (plottedPoints.length !== expectedPoints.length) return false;
    
    // Check if each expected point has a matching plotted point
    return expectedPoints.every((expected) => {
      return plottedPoints.some((plotted) => {
        const dx = Math.abs(plotted.x - expected.x);
        const dy = Math.abs(plotted.y - expected.y);
        return dx <= tolerance && dy <= tolerance;
      });
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if answer is correct (either numeric or plot-points)
    const isCorrect = isPlotProblem 
      ? validatePlottedPoints()
      : answer.trim() === problem.answer;
    
    if (isCorrect) {
      setFeedback("correct");
      setTimeout(() => {
        onCorrect();
      }, 1500);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setFeedback("incorrect");
      
      // After 3 incorrect attempts, reveal the answer
      if (newAttempts >= 3) {
        setTimeout(() => {
          setShowAnswer(true);
          setFeedback(null);
        }, 1500);
      } else {
        setTimeout(() => {
          setFeedback(null);
        }, 2000);
      }
    }
  };

  const handleContinueAfterReveal = () => {
    onSkip();
  };

  // Get the hint to show based on attempts
  const getProgressiveHint = () => {
    if (attempts === 0) return null;
    
    if (attempts === 1 && problem.hints.length > 0) {
      return {
        title: "ARIA: Try this hint",
        text: problem.hints[0]
      };
    }
    
    if (attempts === 2) {
      if (problem.hints.length > 1) {
        return {
          title: "ARIA: Here's another hint",
          text: problem.hints[1]
        };
      } else if (problem.hints.length === 1) {
        return {
          title: "ARIA: Remember the hint",
          text: problem.hints[0]
        };
      }
    }
    
    return null;
  };

  const progressiveHint = getProgressiveHint();

  // Extract the variable to solve for from the question
  const getVariableToSolve = () => {
    // Pattern 1: "Solve for m:" at the start
    const startMatch = problem.question.match(/^Solve for (\w+):/);
    if (startMatch) {
      return startMatch[1];
    }
    
    // Pattern 2: "Solve for width w using" or "Solve for variable using" anywhere in question
    const middleMatch = problem.question.match(/Solve for (?:\w+\s+)?(\w)\s+using/);
    if (middleMatch) {
      return middleMatch[1];
    }
    
    // Pattern 3: "Find the [description] [variable]" or "Find [variable]"
    const findMatch = problem.question.match(/Find (?:the\s+)?(?:\w+\s+)?(\w)(?:\s+using|\s*[.,?]|$)/);
    if (findMatch) {
      return findMatch[1];
    }
    
    // Default to x for basic linear equations
    return "x";
  };

  const variable = getVariableToSolve();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 w-full max-w-2xl px-6 py-12">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium" data-testid="text-topic-badge">
              {problem.topic}
            </div>
            <h2 className="text-2xl font-display font-bold text-foreground" data-testid="text-puzzle-title">
              Solve the Puzzle to Continue
            </h2>
          </div>

          <div className="w-full bg-card border-2 border-card-border rounded-xl p-8 space-y-6">
            <div className="text-center">
              {!isPlotProblem && <p className="text-lg text-muted-foreground mb-4">Solve for {variable}:</p>}
              <p className={`font-bold text-foreground tracking-wider ${isPlotProblem ? 'text-xl' : 'text-4xl font-mono'}`} data-testid="text-math-problem">
                {problem.question}
              </p>
            </div>

            {/* Show answer reveal after 3 failed attempts */}
            {showAnswer ? (
              <div className="space-y-6">
                <div className="p-6 bg-orange-500/10 border-2 border-orange-500/50 rounded-lg space-y-4 animate-in slide-in-from-top-2" data-testid="container-answer-reveal">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <p className="font-semibold text-orange-700 dark:text-orange-400">
                        ARIA: Let me show you the solution
                      </p>
                      {isPlotProblem && problem.expectedPoints ? (
                        <div>
                          <p className="text-foreground mb-2">The correct points to plot are:</p>
                          <div className="flex flex-wrap gap-2">
                            {problem.expectedPoints.map((point, index) => (
                              <span key={index} className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-md font-mono font-bold">
                                ({point.x}, {point.y})
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p className="text-foreground">
                          The correct answer is: <span className="font-mono font-bold text-2xl text-primary">{variable} = {problem.answer}</span>
                        </p>
                      )}
                      {problem.solution ? (
                        <div className="mt-4 pt-4 border-t border-orange-500/30">
                          <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 mb-3">Here's how to solve it:</p>
                          <div className="text-sm text-foreground space-y-2 whitespace-pre-line" data-testid="text-worked-solution">
                            {problem.solution}
                          </div>
                        </div>
                      ) : problem.hints.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-orange-500/30">
                          <p className="text-sm text-muted-foreground mb-2">How to solve it:</p>
                          {problem.hints.map((hint, index) => (
                            <p key={index} className="text-sm text-muted-foreground ml-4" data-testid={`text-solution-step-${index}`}>
                              {index + 1}. {hint}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <Button
                  onClick={handleContinueAfterReveal}
                  className="w-full"
                  size="lg"
                  data-testid="button-continue-after-reveal"
                >
                  Continue Story
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {isPlotProblem ? (
                  <div className="space-y-4">
                    <GraphPlotter
                      onPointsChange={setPlottedPoints}
                      plottedPoints={plottedPoints}
                      xMin={problem.plotConfig?.xMin}
                      xMax={problem.plotConfig?.xMax}
                      yMin={problem.plotConfig?.yMin}
                      yMax={problem.plotConfig?.yMax}
                      gridSize={problem.plotConfig?.gridSize}
                    />
                  </div>
                ) : (
                  <div className="space-y-2">
                    <label htmlFor="answer" className="text-sm font-medium text-foreground">
                      Your Answer ({variable} =)
                    </label>
                    <Input
                      id="answer"
                      type="text"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      className="text-2xl h-14 text-center font-mono"
                      placeholder="?"
                      data-testid="input-answer"
                      autoFocus
                    />
                  </div>
                )}

                {feedback === "correct" && (
                  <div className="flex items-center gap-2 p-4 bg-green-500/10 border-l-4 border-green-500 rounded-lg animate-in slide-in-from-top-2" data-testid="text-feedback-correct">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-green-600 dark:text-green-400 font-medium">Correct! Well done!</span>
                  </div>
                )}

                {feedback === "incorrect" && (
                  <div className="flex items-center gap-2 p-4 bg-red-500/10 border-l-4 border-red-500 rounded-lg animate-in slide-in-from-top-2" data-testid="text-feedback-incorrect">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="text-red-600 dark:text-red-400 font-medium">
                      {attempts >= 2 ? "Not quite. One more try..." : "Not quite. Try again!"}
                    </span>
                  </div>
                )}

                {/* Progressive hint display - show when there's a hint available and we haven't shown the answer yet */}
                {progressiveHint && (
                  <div className="p-4 bg-yellow-500/10 border-l-4 border-yellow-500 rounded-lg animate-in slide-in-from-top-2" data-testid={`container-hint-${attempts}`}>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <p className="font-semibold text-yellow-700 dark:text-yellow-400 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4" />
                          {progressiveHint.title}
                        </p>
                        <p className="text-sm text-muted-foreground whitespace-pre-line" data-testid={`text-progressive-hint-${attempts}`}>
                          {progressiveHint.text}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button
                    type="submit"
                    className="flex-1"
                    disabled={
                      isPlotProblem 
                        ? plottedPoints.length === 0 || feedback === "correct"
                        : !answer.trim() || feedback === "correct"
                    }
                    data-testid="button-submit"
                  >
                    {isPlotProblem ? "Check Points" : "Submit Answer"}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {!showAnswer && (
            <Button
              variant="ghost"
              onClick={onSkip}
              className="text-muted-foreground"
              data-testid="button-skip"
            >
              Skip this puzzle →
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
