import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface RepairMessageProps {
  onContinue: () => void;
}

const repairNarratives = [
  "A crystal fracture seals itself with golden light. ARIA's sensors detect stability increasing by 12%. Mathematical harmony spreads outward in concentric waves.",
  "The corrupted equations shimmer and resolve into clean, balanced forms. Variables click into place like puzzle pieces. Reality feels more solid here now.",
  "A section of broken machinery hums back to life, gears turning in perfect mathematical rhythm. The air itself seems to calculate more smoothly.",
  "Numbers that were flowing backwards suddenly reverse course, streaming in their proper direction. ARIA notes: 'Causality restored in this sector.'",
  "Glitching reality stabilizes—what was flickering between states now holds firm. The mathematical foundations strengthen beneath your feet.",
  "A dormant function awakens, its graph tracing elegant curves through the air. Systems that were failing now compute with precision.",
  "Corrupted symbols transform back into pure algebraic truth. The island's core temperature drops 3 degrees as chaos energy dissipates.",
  "A variable that was trapped in paradox finally resolves. Its value ripples outward, correcting dependent equations across the sector.",
  "Mathematical laws reassert themselves—what was impossible becomes predictable again. Order spreads like crystallization in supercooled water.",
  "The fractured world knits itself together, line by line, equation by equation. ARIA observes: 'Structural integrity improving. Continue, Agent.'",
];

export default function RepairMessage({ onContinue }: RepairMessageProps) {
  const randomNarrative = repairNarratives[Math.floor(Math.random() * repairNarratives.length)];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-primary/5">
      <Card className="w-full max-w-3xl p-8 space-y-6 animate-in fade-in-50 duration-700">
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <Sparkles className="h-16 w-16 text-primary animate-pulse" />
            <div className="absolute inset-0 h-16 w-16 text-primary/30 animate-ping">
              <Sparkles className="h-16 w-16" />
            </div>
          </div>
        </div>
        
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-primary">Sector Stabilizing</h2>
          <p className="text-lg leading-relaxed text-foreground">
            {randomNarrative}
          </p>
        </div>

        <div className="flex justify-center pt-4">
          <Button
            onClick={onContinue}
            size="lg"
            className="min-w-[200px]"
            data-testid="button-continue-repair"
          >
            Continue Mission
          </Button>
        </div>
      </Card>
    </div>
  );
}
