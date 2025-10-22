import { Button } from "@/components/ui/button";
import { getRegionTheme } from "@shared/regionColors";

export interface Choice {
  id: number;
  text: string;
}

export interface StorySceneProps {
  title?: string;
  narrative: string;
  choices: Choice[];
  onChoiceSelect: (choiceId: number) => void;
  isTransitioning?: boolean;
  nodeId?: string;
}

export default function StoryScene({
  title,
  narrative,
  choices,
  onChoiceSelect,
  isTransitioning = false,
  nodeId = "start",
}: StorySceneProps) {
  const regionTheme = getRegionTheme(nodeId);
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className={`absolute inset-0 ${regionTheme.gradient} opacity-20`} />
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-transparent"
      />

      <div
        className={`relative z-10 w-full max-w-4xl px-6 py-12 transition-opacity duration-500 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          {title && (
            <div className="text-center mb-8">
              <div className={`inline-block px-4 py-2 rounded-full ${regionTheme.gradient} text-white text-sm font-medium mb-4 opacity-90`}>
                {regionTheme.name}
              </div>
              <h1
                className="text-4xl md:text-5xl font-display font-bold text-center text-primary tracking-tight"
                data-testid="text-story-title"
              >
                {title}
              </h1>
            </div>
          )}

          <div
            className="prose prose-lg md:prose-xl max-w-prose text-center mb-16 animate-in fade-in duration-700"
            data-testid="text-narrative"
          >
            <p className="font-serif leading-relaxed text-foreground">
              {narrative}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 max-w-2xl mx-auto animate-in slide-in-from-bottom-4 duration-500 delay-300">
          {choices.map((choice) => (
            <Button
              key={choice.id}
              variant="outline"
              size="lg"
              className="w-full h-16 text-left justify-start text-base md:text-lg font-sans border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-200"
              onClick={() => onChoiceSelect(choice.id)}
              data-testid={`button-choice-${choice.id}`}
            >
              <span className="text-primary font-semibold mr-3">{choice.id}.</span>
              <span>{choice.text}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
