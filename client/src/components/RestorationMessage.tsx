import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface RestorationMessageProps {
  onContinue: () => void;
}

export default function RestorationMessage({ onContinue }: RestorationMessageProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-primary/20 to-primary/30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-2xl px-6 py-12 animate-in zoom-in-95 duration-700">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="relative">
            <Sparkles className="w-24 h-24 text-primary animate-pulse" />
            <div className="absolute inset-0 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse" />
          </div>

          <div className="space-y-4">
            <h2
              className="text-4xl md:text-5xl font-display font-bold text-primary animate-in slide-in-from-top-4 duration-500 delay-200"
              data-testid="text-restoration-title"
            >
              Sector Restored!
            </h2>
            <p
              className="text-xl md:text-2xl text-foreground font-serif leading-relaxed animate-in slide-in-from-top-4 duration-500 delay-300"
              data-testid="text-restoration-message"
            >
              You have restored this sector.
            </p>
            <p className="text-lg text-muted-foreground animate-in fade-in duration-500 delay-500">
              Your mastery of variables grows stronger with each puzzle solved.
            </p>
          </div>

          <Button
            size="lg"
            onClick={onContinue}
            className="animate-in slide-in-from-bottom-4 duration-500 delay-700"
            data-testid="button-continue"
          >
            Continue Your Journey
          </Button>
        </div>
      </div>
    </div>
  );
}
