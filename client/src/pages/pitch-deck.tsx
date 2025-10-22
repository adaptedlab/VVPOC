import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, BarChart3, Gamepad2, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Import concept art
import crashedMothershipArt from "@assets/Adepted_VarValley_Crashed_MotherShip_1761133228290.png";
import boyCharacterArt from "@assets/tpose_boy_1761133228290.jpg";
import girlCharacterArt from "@assets/Copy_of_tpose_girl_copy_1761133228290.jpg";
import cockpitCrashArt from "@assets/Cockpit_Crash_1761133228291.png";
import aiCharacterArt from "@assets/ai_char_exploration_copy_1761133228291.jpg";
import abandonedVillageArt from "@assets/Adapted_VarValley_AbandonedVillage2_1761133228291.png";
import grayboxArt from "@assets/GrayboxA_1761133228291.png";

const slides = [
  {
    id: 1,
    component: CoverSlide,
  },
  {
    id: 2,
    component: ProblemSlide,
  },
  {
    id: 3,
    component: VisionSlide,
  },
  {
    id: 4,
    component: POCSlide,
  },
  {
    id: 5,
    component: HowItWorksSlide,
  },
  {
    id: 6,
    component: RoadmapSlide,
  },
  {
    id: 7,
    component: MarketSlide,
  },
  {
    id: 8,
    component: TeamSlide,
  },
  {
    id: 9,
    component: BusinessModelSlide,
  },
  {
    id: 10,
    component: CompetitionSlide,
  },
  {
    id: 11,
    component: TheAskSlide,
  },
  {
    id: 12,
    component: WhyWeWinSlide,
  },
];

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (e.key === "ArrowLeft" && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Slide container */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-6xl">
          <CurrentSlideComponent />
        </div>
      </div>

      {/* Navigation controls */}
      <div className="border-t bg-card p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            disabled={currentSlide === 0}
            data-testid="button-prev-slide"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Button>

          {/* Progress indicator */}
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover-elevate"
                }`}
                data-testid={`button-progress-${index + 1}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
            disabled={currentSlide === slides.length - 1}
            data-testid="button-next-slide"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}

// Slide 1: Cover
function CoverSlide() {
  return (
    <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-lg p-6 md:p-16 text-center min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        AdaptEd Labs
      </h1>
      <p className="text-xl md:text-3xl text-muted-foreground mb-6 md:mb-8 px-4">
        Personalizing Education Through Adaptive Gaming
      </p>
      <div className="w-24 h-1 bg-primary rounded-full mb-6 md:mb-8" />
      <p className="text-base md:text-lg text-muted-foreground">
        Investor Pitch Deck
      </p>
    </div>
  );
}

// Slide 2: Problem
function ProblemSlide() {
  return (
    <div className="bg-card rounded-lg p-6 md:p-16 min-h-[500px] md:min-h-[600px]">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-destructive">Up to 40% of Students Fail Algebra I</h2>
      
      <div className="space-y-6 text-lg">
        <p className="text-xl text-muted-foreground">
          Traditional platforms test understanding instead of building it:
        </p>
        
        <div className="grid gap-4 mt-8">
          <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
            <div className="flex-shrink-0">
              <BarChart3 className="w-8 h-8 text-blue-500" />
            </div>
            <div>
              <p className="font-semibold">Khan Academy: Low sustained engagement</p>
              <p className="text-muted-foreground">Only 9% of students meet recommended usage levels</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
            <div className="flex-shrink-0">
              <Gamepad2 className="w-8 h-8 text-purple-500" />
            </div>
            <div>
              <p className="font-semibold">DreamBox: Mechanical drill-and-practice</p>
              <p className="text-muted-foreground">Gamification without meaning doesn't sustain engagement</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
            <div className="flex-shrink-0">
              <Bot className="w-8 h-8 text-green-500" />
            </div>
            <div>
              <p className="font-semibold">AI Tutors: Effective but students disengage</p>
              <p className="text-muted-foreground">No narrative context for why math matters</p>
            </div>
          </div>
        </div>

        <p className="text-2xl font-semibold text-primary mt-8 pt-8 border-t">
          The core issue: Students don't see WHY math matters
        </p>
      </div>
    </div>
  );
}

// Slide 3: Vision - 3D Platform
function VisionSlide() {
  return (
    <div className="bg-card rounded-lg p-6 md:p-16 min-h-[500px] md:min-h-[600px]">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Our Vision: AdaptEd Platform</h2>
      <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">Immersive 3D adaptive learning environments</p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <img 
            src={crashedMothershipArt} 
            alt="3D environment concept - Crashed mothership in lush valley" 
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-muted-foreground mt-2 text-center">Mathematics Island - Variable Valley</p>
        </div>
        <div>
          <img 
            src={abandonedVillageArt} 
            alt="3D environment concept - Abandoned village with magical elements" 
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-muted-foreground mt-2 text-center">Abandoned Village Concept</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <span className="text-primary">✓</span> Immersive 3D game worlds
          </h3>
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <span className="text-primary">✓</span> AI-powered adaptive difficulty
          </h3>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <span className="text-primary">✓</span> Multi-subject curriculum
          </h3>
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <span className="text-primary">✓</span> Real-time performance analytics
          </h3>
        </div>
      </div>
    </div>
  );
}

// Slide 4: POC - Variable Valley
function POCSlide() {
  return (
    <div className="bg-card rounded-lg p-6 md:p-16 min-h-[500px] md:min-h-[600px]">
      <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">Proof of Concept: Variable Valley</h2>
      <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">Our working Algebra I prototype</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 md:mb-8">
        <div>
          <img 
            src={boyCharacterArt} 
            alt="Male protagonist character design" 
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-muted-foreground mt-2 text-center">Protagonist Character</p>
        </div>
        <div>
          <img 
            src={girlCharacterArt} 
            alt="Female protagonist character design" 
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-muted-foreground mt-2 text-center">Protagonist Character</p>
        </div>
        <div>
          <img 
            src={aiCharacterArt} 
            alt="ARIA AI assistant character concepts" 
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-muted-foreground mt-2 text-center">ARIA AI Assistant</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 text-lg">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-primary">What We Built:</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Working narrative adventure game</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>76 TEKS-aligned algebra problems</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>ARIA AI teaching assistant</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Adaptive hint system</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Interactive graphing system</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-primary/10 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Why This Matters:</h3>
          <p className="text-muted-foreground leading-relaxed">
            Variable Valley proves our teaching model works. Students engage with math when it has narrative meaning. 
            ARIA's progressive hints adapt to student struggles, teaching concepts instead of just testing them.
          </p>
          <Link href="/" data-testid="link-demo">
            <p className="text-primary font-semibold mt-4 hover:underline cursor-pointer">
              Demo-ready today →
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Slide 5: How It Works
function HowItWorksSlide() {
  return (
    <div className="bg-card rounded-lg p-12 md:p-16 min-h-[600px]">
      <h2 className="text-5xl font-bold mb-8">How Variable Valley Works</h2>
      
      <div className="space-y-8">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl font-bold">
            1
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Story Choice</h3>
            <p className="text-lg text-muted-foreground">
              Student navigates Mathematics Island, making narrative choices that lead to different regions
            </p>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
              <p className="italic">"Investigate Variable Valley - glowing crystals hold trapped expressions"</p>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl font-bold">
            2
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Math Puzzle Appears</h3>
            <p className="text-lg text-muted-foreground">
              Story context requires solving an algebra problem to progress
            </p>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg border-l-4 border-secondary">
              <p className="font-mono text-lg">Solve for x: 3x + 7 = 22</p>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl font-bold">
            3
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">ARIA Teaches Through Progressive Hints</h3>
            <p className="text-lg text-muted-foreground mb-4">
              After incorrect attempts, ARIA provides conceptual guidance → procedural steps → full solution
            </p>
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              <div className="p-3 bg-blue-500/10 rounded border border-blue-500/30">
                <p className="font-semibold text-blue-600 dark:text-blue-400">After 1st miss:</p>
                <p className="text-muted-foreground">Conceptual hint</p>
              </div>
              <div className="p-3 bg-amber-500/10 rounded border border-amber-500/30">
                <p className="font-semibold text-amber-600 dark:text-amber-400">After 2nd miss:</p>
                <p className="text-muted-foreground">Guided steps</p>
              </div>
              <div className="p-3 bg-green-500/10 rounded border border-green-500/30">
                <p className="font-semibold text-green-600 dark:text-green-400">After 3rd miss:</p>
                <p className="text-muted-foreground">Worked solution</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-primary/10 rounded-lg border-2 border-primary">
          <p className="text-xl font-semibold text-center">
            Math isn't separate from the story — it IS the story
          </p>
        </div>
      </div>
    </div>
  );
}

// Slide 6: Roadmap
function RoadmapSlide() {
  return (
    <div className="bg-card rounded-lg p-12 md:p-16 min-h-[600px]">
      <h2 className="text-5xl font-bold mb-8">From POC to Platform</h2>
      
      <div className="space-y-6">
        <div className="relative pl-8 pb-8 border-l-4 border-green-500">
          <div className="absolute -left-[13px] top-0 w-6 h-6 bg-green-500 rounded-full" />
          <h3 className="text-2xl font-bold mb-2 text-green-600 dark:text-green-400">
            Phase 1: Text-Based POC ✓
          </h3>
          <p className="text-lg text-muted-foreground mb-2">
            <span className="font-semibold">Variable Valley</span> - Algebra I narrative adventure
          </p>
          <ul className="space-y-1 text-muted-foreground ml-4">
            <li>• 76 TEKS-aligned problems with ARIA teaching</li>
            <li>• Prove teaching model works</li>
            <li>• Demo-ready for investors</li>
          </ul>
        </div>

        <div className="relative pl-8 pb-8 border-l-4 border-primary">
          <div className="absolute -left-[13px] top-0 w-6 h-6 bg-primary rounded-full" />
          <h3 className="text-2xl font-bold mb-2">
            Phase 2: Expand & Validate ($500K Seed)
          </h3>
          <p className="text-lg text-muted-foreground mb-2">
            Complete curriculum + pilot deployment
          </p>
          <ul className="space-y-1 text-muted-foreground ml-4">
            <li>• 6 months: Vertical slice of full experience</li>
            <li>• 12 months: Complete Algebra I curriculum (150+ problems)</li>
            <li>• 18 months: 10-school pilots with learning outcomes</li>
            <li>• 24 months: Demonstrate measurable improvement → Series A ready</li>
          </ul>
          <div className="mt-3 text-sm font-semibold">
            Timeline: 2 years → Series A readiness
          </div>
        </div>

        <div className="relative pl-8 border-l-4 border-secondary">
          <div className="absolute -left-[13px] top-0 w-6 h-6 bg-secondary rounded-full" />
          <h3 className="text-2xl font-bold mb-2">
            Phase 3: Build Vision (Series A)
          </h3>
          <p className="text-lg text-muted-foreground mb-2">
            Full 3D adaptive platform
          </p>
          <ul className="space-y-1 text-muted-foreground ml-4">
            <li>• 3D environment development</li>
            <li>• Multi-subject expansion (Geometry, Chemistry, etc.)</li>
            <li>• Scale to 100+ schools nationally</li>
            <li>• Advanced AI adaptive systems</li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <img 
          src={grayboxArt} 
          alt="3D graybox level design in progress" 
          className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
        />
        <p className="text-sm text-muted-foreground mt-2 text-center">
          3D development already underway - level design grayboxing
        </p>
      </div>
    </div>
  );
}

// Slide 7: Market
function MarketSlide() {
  return (
    <div className="bg-card rounded-lg p-12 md:p-16 min-h-[600px]">
      <h2 className="text-5xl font-bold mb-8">Market Opportunity</h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="text-center p-8 bg-primary/10 rounded-lg">
          <div className="text-6xl font-bold text-primary mb-2">$7-10B</div>
          <p className="text-xl text-muted-foreground">U.S. K-12 Math EdTech Market</p>
        </div>
        
        <div className="text-center p-8 bg-secondary/10 rounded-lg">
          <div className="text-6xl font-bold text-secondary mb-2">~3.5M</div>
          <p className="text-xl text-muted-foreground">Students take Algebra I annually</p>
        </div>
      </div>

      <div className="space-y-6 text-lg">
        <div className="p-6 bg-muted/50 rounded-lg">
          <h3 className="text-2xl font-semibold mb-3 text-primary">Starting Point: Texas</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Largest state market for algebra students</li>
            <li>• STAAR testing creates measurable outcomes</li>
            <li>• Strong district relationships</li>
          </ul>
        </div>

        <div className="p-6 bg-muted/50 rounded-lg">
          <h3 className="text-2xl font-semibold mb-3 text-secondary">Expansion Path</h3>
          <div className="space-y-2 text-muted-foreground">
            <p><span className="font-semibold">Years 1-3:</span> Algebra I in Texas</p>
            <p><span className="font-semibold">Years 4-5:</span> Full secondary math curriculum</p>
            <p><span className="font-semibold">Years 5+:</span> Chemistry, Physics, History → Every STEM subject</p>
          </div>
        </div>

        <div className="mt-6 p-6 bg-primary/10 rounded-lg border-2 border-primary">
          <p className="text-xl font-semibold text-center">
            Vision: Every subject where mastery requires practice + understanding
          </p>
        </div>
      </div>
    </div>
  );
}

// Slide 8: Team
function TeamSlide() {
  return (
    <div className="bg-card rounded-lg p-12 md:p-16 min-h-[600px]">
      <h2 className="text-5xl font-bold mb-8">Team</h2>
      
      <div className="space-y-8">
        <div className="p-6 bg-primary/10 rounded-lg border-l-4 border-primary">
          <h3 className="text-2xl font-bold mb-3">Chris Morris - Founder & Tech Designer</h3>
          <ul className="space-y-2 text-lg text-muted-foreground">
            <li>• <span className="font-semibold">Video Game Design Teacher</span> - Understands educational + game design</li>
            <li>• <span className="font-semibold">8 years game development</span> - Can build the vision</li>
            <li>• <span className="font-semibold">9 years Navy Intelligence Analyst</span> - Disciplined execution</li>
          </ul>
          <p className="mt-4 text-primary font-semibold">
            Unique blend: Educational design + game mechanics + execution discipline
          </p>
        </div>

        <div className="p-6 bg-secondary/10 rounded-lg border-l-4 border-secondary">
          <h3 className="text-2xl font-bold mb-3">Jason Weiman - Art & Design Director</h3>
          <p className="text-lg text-muted-foreground">
            Leading visual design and game systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-muted/50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Core Team</h3>
            <p className="text-lg text-muted-foreground">
              + 12 developers, designers, and artists
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              14 total team members
            </p>
          </div>

          <div className="p-6 bg-muted/50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Global Team</h3>
            <ul className="text-muted-foreground">
              <li>• United States</li>
              <li>• Canada</li>
              <li>• France</li>
              <li>• Ukraine</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-6 bg-green-500/10 rounded-lg border border-green-500/30">
          <p className="text-lg font-semibold text-green-600 dark:text-green-400">
            We're not teachers who learned to code. We're game developers who understand education.
          </p>
        </div>
      </div>
    </div>
  );
}

// Slide 9: Business Model
function BusinessModelSlide() {
  return (
    <div className="bg-card rounded-lg p-12 md:p-16 min-h-[600px]">
      <h2 className="text-5xl font-bold mb-8">Business Model</h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="p-6 bg-primary/10 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-primary">Revenue Streams</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-lg">B2B School Licenses</p>
              <p className="text-3xl font-bold text-primary">$8/student/year</p>
              <p className="text-sm text-muted-foreground">Primary revenue source</p>
            </div>
            <div>
              <p className="font-semibold text-lg">B2C Direct-to-Student</p>
              <p className="text-3xl font-bold text-secondary">$50/year</p>
              <p className="text-sm text-muted-foreground">Alternative for homeschool/tutoring</p>
            </div>
            <div>
              <p className="font-semibold text-lg">Custom Content</p>
              <p className="text-sm text-muted-foreground">Enterprise partnerships for specialized curriculum</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-secondary/10 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-secondary">Path to Revenue</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="font-semibold">Years 1-2</span>
              <div className="text-right">
                <p className="font-mono text-lg">1,000 students</p>
                <p className="text-sm text-muted-foreground">Pilots (free)</p>
              </div>
            </div>
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="font-semibold">Year 3</span>
              <div className="text-right">
                <p className="font-mono text-lg text-primary">$160K</p>
                <p className="text-sm text-muted-foreground">20,000 students in Texas</p>
              </div>
            </div>
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="font-semibold">Year 4</span>
              <div className="text-right">
                <p className="font-mono text-lg text-primary">$2.4M</p>
                <p className="text-sm text-muted-foreground">300,000 students nationally</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Year 5+</span>
              <div className="text-right">
                <p className="font-mono text-lg text-primary">$10M+</p>
                <p className="text-sm text-muted-foreground">Multi-subject platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-muted/50 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Unit Economics</h3>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-sm text-muted-foreground mb-1">CAC (School)</p>
            <p className="text-2xl font-bold">$15</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">LTV (3-year retention)</p>
            <p className="text-2xl font-bold">$24</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">LTV:CAC</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">1.6:1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 10: Competition
function CompetitionSlide() {
  return (
    <div className="bg-card rounded-lg p-6 md:p-16 min-h-[600px]">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">Competitive Landscape</h2>
      
      {/* Desktop: Quadrant Chart */}
      <div className="mb-8 hidden md:block">
        <div className="relative w-full h-96 bg-muted/30 rounded-lg p-8">
          {/* Axes */}
          <div className="absolute bottom-8 left-8 right-8 h-px bg-foreground/30" />
          <div className="absolute bottom-8 left-8 top-8 w-px bg-foreground/30" />
          
          {/* Labels */}
          <div className="absolute bottom-2 right-8 text-sm text-muted-foreground">Engagement →</div>
          <div className="absolute top-8 left-2 text-sm text-muted-foreground writing-mode-vertical-rl transform -rotate-180">Rigor →</div>
          
          {/* Competitors */}
          <div className="absolute bottom-16 left-16 p-3 bg-blue-500/20 border-2 border-blue-500 rounded-lg">
            <p className="font-semibold text-sm">Khan Academy</p>
            <p className="text-xs text-muted-foreground">High rigor, low engagement</p>
          </div>
          
          <div className="absolute top-16 right-24 p-3 bg-purple-500/20 border-2 border-purple-500 rounded-lg">
            <p className="font-semibold text-sm">Prodigy</p>
            <p className="text-xs text-muted-foreground">High engagement, low rigor</p>
          </div>
          
          <div className="absolute top-20 left-20 p-3 bg-orange-500/20 border-2 border-orange-500 rounded-lg">
            <p className="font-semibold text-sm">IXL</p>
            <p className="text-xs text-muted-foreground">Medium both</p>
          </div>
          
          {/* AdaptEd */}
          <div className="absolute top-16 right-16 p-4 bg-primary/30 border-4 border-primary rounded-lg shadow-lg">
            <p className="font-bold text-lg">AdaptEd</p>
            <p className="text-sm">HIGH BOTH</p>
          </div>
        </div>
      </div>

      {/* Mobile: Simplified List */}
      <div className="mb-8 md:hidden space-y-3">
        <div className="p-4 bg-primary/30 border-4 border-primary rounded-lg">
          <p className="font-bold text-lg">AdaptEd (Us)</p>
          <p className="text-sm text-muted-foreground">High engagement + High rigor</p>
        </div>
        <div className="p-3 bg-blue-500/20 border-2 border-blue-500 rounded-lg">
          <p className="font-semibold">Khan Academy</p>
          <p className="text-sm text-muted-foreground">High rigor, low engagement</p>
        </div>
        <div className="p-3 bg-purple-500/20 border-2 border-purple-500 rounded-lg">
          <p className="font-semibold">Prodigy</p>
          <p className="text-sm text-muted-foreground">High engagement, low rigor</p>
        </div>
        <div className="p-3 bg-orange-500/20 border-2 border-orange-500 rounded-lg">
          <p className="font-semibold">IXL</p>
          <p className="text-sm text-muted-foreground">Medium engagement & rigor</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 md:p-6 bg-muted/50 rounded-lg">
          <h3 className="text-lg md:text-xl font-semibold mb-3">What Makes Us Different</h3>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
            <li>✓ Narrative immersion (not just gamification)</li>
            <li>✓ AI teaching (not just testing)</li>
            <li>✓ Standards-aligned curriculum</li>
            <li>✓ Measurable learning outcomes</li>
          </ul>
        </div>

        <div className="p-4 md:p-6 bg-primary/10 rounded-lg border-l-4 border-primary">
          <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">Our Moat</h3>
          <p className="text-sm md:text-base text-muted-foreground">
            First platform combining narrative storytelling, AI-adaptive teaching, and rigorous curriculum.
            Students engage because the story matters. They learn because ARIA teaches, not tests.
          </p>
        </div>
      </div>
    </div>
  );
}

// Slide 11: The Ask
function TheAskSlide() {
  return (
    <div className="bg-card rounded-lg p-6 md:p-16 min-h-[500px] md:min-h-[600px]">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">The Ask</h2>
      
      <div className="text-center mb-8 md:mb-12">
        <p className="text-xl md:text-2xl text-muted-foreground mb-3 md:mb-4">We're raising:</p>
        <div className="text-5xl md:text-7xl font-bold text-primary mb-2">$500K</div>
        <p className="text-lg md:text-xl text-muted-foreground">Seed Round</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
        <div className="p-4 md:p-6 bg-primary/10 rounded-lg">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Use of Funds</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="font-semibold">Product Development</span>
              <span className="text-primary font-bold">40%</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="font-semibold">Pilot Programs</span>
              <span className="text-primary font-bold">20%</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="font-semibold">Content Creation</span>
              <span className="text-primary font-bold">20%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Operations</span>
              <span className="text-primary font-bold">20%</span>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-6 bg-secondary/10 rounded-lg">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Key Milestones</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-lg">Month 6</p>
              <p className="text-muted-foreground">Vertical slice of full experience</p>
            </div>
            <div>
              <p className="font-semibold text-lg">Month 12</p>
              <p className="text-muted-foreground">Complete Algebra I curriculum (150+ problems)</p>
            </div>
            <div>
              <p className="font-semibold text-lg">Month 18</p>
              <p className="text-muted-foreground">10-school pilots with outcome data</p>
            </div>
            <div>
              <p className="font-semibold text-lg">Month 24</p>
              <p className="text-muted-foreground">Demonstrate learning gains → Series A ready</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg border-2 border-primary">
        <p className="text-2xl font-bold text-center mb-4">
          This runway gets us to product-market fit with measurable outcomes
        </p>
        <p className="text-center text-muted-foreground text-lg">
          Proving learning gains unlocks Series A to build full 3D platform
        </p>
      </div>
    </div>
  );
}

// Slide 12: Why We'll Win
function WhyWeWinSlide() {
  return (
    <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-lg p-12 md:p-16 min-h-[600px]">
      <h2 className="text-5xl font-bold mb-12 text-center">Why We'll Win</h2>
      
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="flex items-start gap-4 p-6 bg-card rounded-lg hover-elevate">
          <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl font-bold">
            1
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Working POC proves concept</h3>
            <p className="text-muted-foreground">Variable Valley demonstrates the teaching model works—students engage when math has meaning</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-6 bg-card rounded-lg hover-elevate">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-2xl font-bold">
            2
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Team capable of executing vision</h3>
            <p className="text-muted-foreground">14-person team with game dev + educational design expertise, already shipping</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-6 bg-card rounded-lg hover-elevate">
          <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-2xl font-bold">
            3
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Founder lived the problem</h3>
            <p className="text-muted-foreground">Video game design teacher who understands both domains deeply</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-6 bg-card rounded-lg hover-elevate">
          <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold">
            4
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">First-mover advantage</h3>
            <p className="text-muted-foreground">Only platform combining narrative + AI teaching + rigorous curriculum</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-6 bg-card rounded-lg hover-elevate">
          <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-2xl font-bold">
            5
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Measurable outcomes</h3>
            <p className="text-muted-foreground">STAAR testing provides clear proof of learning gains for investors and schools</p>
          </div>
        </div>
      </div>

      <div className="mt-12 p-8 bg-card rounded-lg border-4 border-primary shadow-xl">
        <p className="text-3xl font-bold text-center mb-4 text-primary">
          "We're not building a game company."
        </p>
        <p className="text-2xl font-semibold text-center text-muted-foreground">
          We're building a teaching company that uses games to unlock human potential.
        </p>
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg text-muted-foreground mb-4">Starting with 2.5M students who fail algebra annually</p>
        <p className="text-2xl font-bold text-primary">
          Algebra I → Geometry → Full Secondary Math → Every Subject
        </p>
      </div>
    </div>
  );
}
