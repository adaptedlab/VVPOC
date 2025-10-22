import MathPuzzle from "../MathPuzzle";
import { algebraProblems } from "@shared/mathProblems";

export default function MathPuzzleExample() {
  const handleCorrect = () => {
    console.log("Puzzle solved correctly!");
  };

  const handleSkip = () => {
    console.log("Puzzle skipped");
  };

  return (
    <MathPuzzle
      problem={algebraProblems[0]}
      onCorrect={handleCorrect}
      onSkip={handleSkip}
    />
  );
}
