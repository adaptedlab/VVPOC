import { useState } from "react";
import StoryScene from "@/components/StoryScene";
import MathPuzzle from "@/components/MathPuzzle";
import RestorationMessage from "@/components/RestorationMessage";
import RepairMessage from "@/components/RepairMessage";
import { getRandomProblem } from "@shared/mathProblems";

interface StoryNode {
  id: string;
  title?: string;
  narrative: string;
  choices: { id: number; text: string; nextId: string; requiresPuzzle?: boolean }[];
}

const storyData: Record<string, StoryNode> = {
  start: {
    id: "start",
    title: "Mathematics Island - The Awakening",
    narrative:
      "You awaken on Mathematics Island as the Protocol Agent, summoned to restore a world where algebra itself has fractured. Crystalline structures pulse with corrupted equations, and reality glitches where logic fails. A holographic figure materializes—ARIA, your AI assistant. 'Welcome, Agent. The island's mathematical core is destabilizing. Four critical regions need immediate attention: Variable Valley, where basic expressions have broken; the Equation Engine, now solving incorrectly; Function Fields, where relationships have inverted; and the Graphing Grounds, where lines themselves have fractured. Choose wisely—each sector's corruption spreads.'",
    choices: [
      {
        id: 1,
        text: "Investigate Variable Valley - glowing crystals hold trapped expressions",
        nextId: "variableValley",
        requiresPuzzle: true,
      },
      {
        id: 2,
        text: "Enter the Equation Engine - machinery grinding with broken logic",
        nextId: "equationEngine",
        requiresPuzzle: true,
      },
      {
        id: 3,
        text: "Explore Function Fields - rivers of numbers flowing backwards",
        nextId: "functionFields",
        requiresPuzzle: true,
      },
      {
        id: 4,
        text: "Traverse the Graphing Grounds - fractured light paths with distorted slopes",
        nextId: "graphingGrounds",
        requiresPuzzle: true,
      },
    ],
  },
  variableValley: {
    id: "variableValley",
    narrative:
      "You enter Variable Valley, where translucent crystals float mid-air, each containing a trapped algebraic expression. ARIA's voice crackles: 'These crystals once held pure variable relationships. The corruption has locked them in paradox. You've freed one, but there's more...' The valley splits into three paths, each pulsing with different intensities of mathematical distortion.",
    choices: [
      { id: 1, text: "Follow the path to the Crystal Nexus - source of the corruption", nextId: "crystalNexus", requiresPuzzle: true },
      { id: 2, text: "Investigate the Glyph Archive - ancient variable knowledge", nextId: "glyphArchive", requiresPuzzle: true },
      { id: 3, text: "Descend to the Expression Mines - where variables were born", nextId: "expressionMines", requiresPuzzle: true },
    ],
  },
  equationEngine: {
    id: "equationEngine",
    narrative:
      "Massive gears turn overhead, each etched with equations that solve themselves in real-time—except they're wrong. The Equation Engine, once the island's computational heart, now generates paradoxes. ARIA warns: 'Careful, Agent. One miscalculation here could cascade across all systems. I'm detecting three critical failure points.'",
    choices: [
      { id: 1, text: "Repair the Balance Chamber - where equations find equilibrium", nextId: "balanceChamber", requiresPuzzle: true },
      { id: 2, text: "Examine the Solver Core - the engine's logic processor", nextId: "solverCore", requiresPuzzle: true },
      { id: 3, text: "Trace power to the Variable Reservoir - fuel for all calculations", nextId: "variableReservoir", requiresPuzzle: true },
    ],
  },
  functionFields: {
    id: "functionFields",
    narrative:
      "You emerge into rolling fields where streams of numbers flow like water, creating patterns in the air. But the relationships are inverted—inputs producing impossible outputs. ARIA projects a map: 'Function Fields was where cause and effect were perfected. Now it's chaos. Three subsystems remain accessible.'",
    choices: [
      { id: 1, text: "Visit the Domain Gardens - where inputs grow", nextId: "domainGardens", requiresPuzzle: true },
      { id: 2, text: "Enter the Range Greenhouse - output cultivation center", nextId: "rangeGreenhouse", requiresPuzzle: true },
      { id: 3, text: "Explore the Transformation Pavilion - where functions morph", nextId: "transformationPavilion", requiresPuzzle: true },
    ],
  },
  crystalNexus: {
    id: "crystalNexus",
    narrative:
      "The Crystal Nexus pulses with raw mathematical energy. ARIA analyzes: 'This is it—the corruption's epicenter. A Data Hunter guards it.' A shadowy figure made of broken equations materializes. You must solve its challenge correctly, or the nexus remains locked.",
    choices: [
      { id: 1, text: "Defeat the Data Hunter and purify the nexus", nextId: "valleyVictory", requiresPuzzle: true },
      { id: 2, text: "Attempt to reason with the corrupted entity", nextId: "valleyNegotiation" },
      { id: 3, text: "Return to Variable Valley entrance", nextId: "variableValley" },
    ],
  },
  glyphArchive: {
    id: "glyphArchive",
    narrative:
      "Ancient glyphs cover crystalline walls, each representing fundamental variable truths. ARIA whispers: 'These glyphs hold the original variable protocols. If we can decipher them...' The knowledge here could prevent future corruption.",
    choices: [
      { id: 1, text: "Study the glyphs and restore their meaning", nextId: "valleyWisdom", requiresPuzzle: true },
      { id: 2, text: "Copy the glyphs for later study", nextId: "valleyArchive" },
      { id: 3, text: "Return to Variable Valley entrance", nextId: "variableValley" },
    ],
  },
  expressionMines: {
    id: "expressionMines",
    narrative:
      "Deep underground, you find the Expression Mines where variables were first discovered. Raw mathematical potential crystallizes from the walls. ARIA: 'If we can stabilize the mine, we create a permanent variable source—but it requires precision.'",
    choices: [
      { id: 1, text: "Stabilize the mine's core equations", nextId: "valleyFoundation", requiresPuzzle: true },
      { id: 2, text: "Harvest what you can and retreat", nextId: "valleyHarvest" },
      { id: 3, text: "Return to Variable Valley entrance", nextId: "variableValley" },
    ],
  },
  balanceChamber: {
    id: "balanceChamber",
    narrative:
      "The Balance Chamber is in chaos—scales tip wildly, equations refuse to equilibrate. ARIA: 'This chamber ensures both sides of equations remain equal. Without it, nothing solves correctly.' The central mechanism awaits your input.",
    choices: [
      { id: 1, text: "Recalibrate the balance mechanisms", nextId: "engineBalance", requiresPuzzle: true },
      { id: 2, text: "Override with emergency protocols", nextId: "engineOverride" },
      { id: 3, text: "Return to Equation Engine entrance", nextId: "equationEngine" },
    ],
  },
  solverCore: {
    id: "solverCore",
    narrative:
      "The Solver Core hums with power, but its logic circuits spark erratically. ARIA projects schematics: 'This core processes all equation solutions. One wrong fix and we could crash the entire system—or perfect it forever.'",
    choices: [
      { id: 1, text: "Reprogram the core's solving algorithms", nextId: "engineMastery", requiresPuzzle: true },
      { id: 2, text: "Implement a conservative repair", nextId: "engineSafe" },
      { id: 3, text: "Return to Equation Engine entrance", nextId: "equationEngine" },
    ],
  },
  variableReservoir: {
    id: "variableReservoir",
    narrative:
      "The Variable Reservoir should be filled with pure mathematical potential, but it's nearly dry. ARIA warns: 'Without variables, equations can't be formed. We need to restore the flow, but the source valve is corrupted.'",
    choices: [
      { id: 1, text: "Solve the valve's equation to restore flow", nextId: "engineRestoration", requiresPuzzle: true },
      { id: 2, text: "Manually pump variables from reserves", nextId: "engineManual" },
      { id: 3, text: "Return to Equation Engine entrance", nextId: "equationEngine" },
    ],
  },
  domainGardens: {
    id: "domainGardens",
    narrative:
      "Rows of crystalline plants grow here, each representing possible function inputs. But they're withering—domains collapsing. ARIA: 'Without proper inputs, functions can't operate. We must restore the domain structure.'",
    choices: [
      { id: 1, text: "Restore the domain structure", nextId: "functionInput", requiresPuzzle: true },
      { id: 2, text: "Salvage what domains remain", nextId: "functionPartial" },
      { id: 3, text: "Return to Function Fields entrance", nextId: "functionFields" },
    ],
  },
  rangeGreenhouse: {
    id: "rangeGreenhouse",
    narrative:
      "The Range Greenhouse cultivates outputs—but they're all wrong. Numbers that should be positive are negative, integers are fractions. ARIA: 'The output calibration is inverted. If we fix this, functions will produce correct results again.'",
    choices: [
      { id: 1, text: "Recalibrate the range generators", nextId: "functionOutput", requiresPuzzle: true },
      { id: 2, text: "Accept the inverted outputs as new normal", nextId: "functionInvert" },
      { id: 3, text: "Return to Function Fields entrance", nextId: "functionFields" },
    ],
  },
  transformationPavilion: {
    id: "transformationPavilion",
    narrative:
      "Functions transform here—linear to quadratic, simple to complex. But the pavilion is frozen mid-transformation. ARIA: 'This is where functions evolved. If we can complete the interrupted transformation, we unlock advanced function capabilities.'",
    choices: [
      { id: 1, text: "Complete the transformation sequence", nextId: "functionEvolution", requiresPuzzle: true },
      { id: 2, text: "Stabilize at current transformation level", nextId: "functionStable" },
      { id: 3, text: "Return to Function Fields entrance", nextId: "functionFields" },
    ],
  },
  valleyVictory: {
    id: "valleyVictory",
    title: "Variable Valley - Purified",
    narrative:
      "The Data Hunter dissolves into pure logic as you solve its final challenge. The Crystal Nexus blazes with restored light, and Variable Valley stabilizes. ARIA beams: 'Excellent work, Agent. Variable relationships are flowing correctly again. Mathematics Island grows stronger with each sector you restore.'",
    choices: [{ id: 1, text: "Return to Mathematics Island nexus", nextId: "start" }],
  },
  valleyNegotiation: {
    id: "valleyNegotiation",
    title: "Variable Valley - Understanding",
    narrative:
      "You speak to the Data Hunter, seeking to understand its corruption. It responds: 'We are not broken—we are evolved. Variables need not follow old rules.' ARIA considers: 'Perhaps some corruption holds new truth. The valley is stable, if... different.'",
    choices: [{ id: 1, text: "Return to Mathematics Island nexus", nextId: "start" }],
  },
  valleyWisdom: {
    id: "valleyWisdom",
    title: "Variable Valley - Enlightened",
    narrative:
      "Deciphering the ancient glyphs reveals the deepest truths of variables—knowledge lost for generations. ARIA archives everything: 'This changes our understanding of algebraic foundations. Variable Valley isn't just restored; it's enhanced beyond its original design.'",
    choices: [{ id: 1, text: "Return to Mathematics Island nexus", nextId: "start" }],
  },
  valleyArchive: {
    id: "valleyArchive",
    title: "Variable Valley - Preserved",
    narrative:
      "You copy the glyphs carefully, preserving knowledge without fully understanding it yet. ARIA: 'Caution is wise, Agent. We've saved the information for future study. The valley stabilizes, its secrets safe.'",
    choices: [{ id: 1, text: "Return to Mathematics Island nexus", nextId: "start" }],
  },
  valleyFoundation: {
    id: "valleyFoundation",
    title: "Variable Valley - Rebuilt",
    narrative:
      "The Expression Mines hum with renewed purpose, generating perfect variables eternally. ARIA: 'Incredible! You've created a self-sustaining variable source. Variable Valley will never corrupt again—and we can export this stability to other sectors.'",
    choices: [{ id: 1, text: "Return to Mathematics Island nexus", nextId: "start" }],
  },
  valleyHarvest: {
    id: "valleyHarvest",
    title: "Variable Valley - Resourceful",
    narrative:
      "You gather what raw variables you can before retreating. ARIA: 'Practical choice. We have enough to stabilize Variable Valley temporarily and support other sectors. The mine will recover naturally over time.'",
    choices: [{ id: 1, text: "Return to Mathematics Island nexus", nextId: "start" }],
  },
  engineBalance: {
    id: "engineBalance",
    title: "Equation Engine - Equilibrium Restored",
    narrative:
      "The Balance Chamber stabilizes perfectly. Equations across the island begin solving correctly. ARIA: 'The Equation Engine is operating at peak efficiency. Balance has returned to Mathematics Island's computational core.'",
    choices: [{ id: 1, text: "Return to Mathematics Island nexus", nextId: "start" }],
  },
  engineOverride: {
    id: "engineOverride",
    title: "Equation Engine - Override Active",
    narrative:
      "Emergency protocols engage, forcing balance through raw power rather than precision. ARIA: 'It works, but inefficiently. The engine is stable, though it may need recalibration later.'",
    choices: [{ id: 1, text: "Return to Mathematics Island nexus", nextId: "start" }],
  },
  engineMastery: {
    id: "engineMastery",
    title: "Equation Engine - Perfect Logic",
    narrative:
      "Your reprogramming perfects the Solver Core. It now processes equations with unprecedented accuracy and speed. ARIA: 'This is beyond restoration—you've improved the original design. The engine is now capable of solving problems previously thought impossible.'",
    choices: [{ id: 1, text: "Return to Mathematics Island nexus", nextId: "start" }],
  },
  engineSafe: {
    id: "engineSafe",
    title: "Equation Engine - Conservative Fix",
    narrative:
      "Your careful repairs restore the Solver Core to its original specifications. ARIA: 'Safe and effective. The engine operates exactly as designed—proven, reliable, stable.'",
    choices: [{ id: 1, text: "Return to Mathematics Island nexus", nextId: "start" }],
  },
  engineRestoration: {
    id: "engineRestoration",
    title: "Equation Engine - Flow Renewed",
    narrative:
      "Variables flood back into the reservoir, filling it to capacity. The entire Equation Engine surges with renewed power. ARIA: 'All systems are go! Variables flow freely, equations solve perfectly. The engine's heart beats strong again.'",
    choices: [{ id: 1, text: "Return to Mathematics Island nexus", nextId: "start" }],
  },
  engineManual: {
    id: "engineManual",
    title: "Equation Engine - Manual Persistence",
    narrative:
      "Through determined manual effort, you pump enough variables to sustain basic operations. ARIA: 'Not elegant, but effective. The engine runs on reserves. It'll hold until we can properly fix the source.'",
    choices: [{ id: 1, text: "Return to Mathematics Island nexus", nextId: "start" }],
  },
  functionInput: {
    id: "functionInput",
    title: "Function Fields - Domain Restored",
    narrative:
      "The Domain Gardens bloom with perfect inputs. Functions can now accept all proper values. ARIA: 'Every function now has a complete, accurate domain. Inputs are pristine. Half the battle won.'",
    choices: [{ id: 1, text: "Return to Mathematics Island nexus", nextId: "start" }],
  },
  functionPartial: {
    id: "functionPartial",
    title: "Function Fields - Partial Domain",
    narrative:
      "You preserve what domains still function correctly. ARIA: 'Not every input survived, but enough did. Functions operate with limited but stable domains.'",
    choices: [{ id: 1, text: "Return to Mathematics Island nexus", nextId: "start" }],
  },
  functionOutput: {
    id: "functionOutput",
    title: "Function Fields - Range Perfected",
    narrative:
      "Outputs align perfectly with their functions' rules. The Range Greenhouse produces flawless results. ARIA: 'Output calibration complete! Functions now produce exactly what they should. Cause and effect restored.'",
    choices: [{ id: 1, text: "Return to Mathematics Island nexus", nextId: "start" }],
  },
  functionInvert: {
    id: "functionInvert",
    title: "Function Fields - New Normal",
    narrative:
      "You accept the inverted outputs as a new mathematical paradigm. ARIA, uncertain: 'This... changes everything we knew about functions. But it's consistent. A different mathematics, but mathematics nonetheless.'",
    choices: [{ id: 1, text: "Return to Mathematics Island nexus", nextId: "start" }],
  },
  functionEvolution: {
    id: "functionEvolution",
    title: "Function Fields - Advanced Functions",
    narrative:
      "The transformation completes, revealing function types never seen before. ARIA: 'Remarkable! The interrupted transformation was actually an upgrade. Mathematics Island now supports advanced function relationships beyond standard algebra.'",
    choices: [{ id: 1, text: "Return to Mathematics Island nexus", nextId: "start" }],
  },
  functionStable: {
    id: "functionStable",
    title: "Function Fields - Stabilized",
    narrative:
      "You stabilize the pavilion at its current transformation level. ARIA: 'Frozen but functional. The transformation halts, but what exists now is reliable and predictable.'",
    choices: [{ id: 1, text: "Return to Mathematics Island nexus", nextId: "start" }],
  },
  
  // Graphing Grounds Chapter
  graphingGrounds: {
    id: "graphingGrounds",
    narrative:
      "You step onto the Graphing Grounds, where luminous pathways stretch across a vast coordinate plane. But the Light Paths are fractured—slopes distorted, intercepts misaligned, creating chaotic patterns in the air. ARIA's projection flickers: 'These Light Paths once represented perfect linear relationships. Now their slopes are wrong, intercepts scattered. The coordinate system itself is destabilizing. Three critical calibration points remain accessible.'",
    choices: [
      { id: 1, text: "Approach the Slope Calibrator - where rise and run are measured", nextId: "slopeCalibrator", requiresPuzzle: true },
      { id: 2, text: "Visit the Intercept Anchor - origin point of all lines", nextId: "interceptAnchor", requiresPuzzle: true },
      { id: 3, text: "Enter the Equation Forge - where line formulas are created", nextId: "equationForge", requiresPuzzle: true },
    ],
  },
  slopeCalibrator: {
    id: "slopeCalibrator",
    narrative:
      "The Slope Calibrator hums with unstable energy, its measurement instruments spinning wildly. ARIA warns: 'Slope defines the steepness of every line—the rate of change. If we can't measure it correctly, no graph will be accurate. This calibrator needs precise recalibration.'",
    choices: [
      { id: 1, text: "Recalibrate the slope measurement system", nextId: "graphSlope", requiresPuzzle: true },
      { id: 2, text: "Manually measure slopes as backup", nextId: "graphSlopeBackup" },
      { id: 3, text: "Return to Graphing Grounds entrance", nextId: "graphingGrounds" },
    ],
  },
  interceptAnchor: {
    id: "interceptAnchor",
    narrative:
      "At the Intercept Anchor, you find the origin point (0,0) flickering in and out of existence. Light Paths no longer know where to begin. ARIA: 'The y-intercept determines where each line crosses the vertical axis—its starting value. Without stable intercepts, every line is unmoored.'",
    choices: [
      { id: 1, text: "Restore the intercept stabilization field", nextId: "graphIntercept", requiresPuzzle: true },
      { id: 2, text: "Create temporary anchor points", nextId: "graphInterceptTemp" },
      { id: 3, text: "Return to Graphing Grounds entrance", nextId: "graphingGrounds" },
    ],
  },
  equationForge: {
    id: "equationForge",
    narrative:
      "The Equation Forge glows with molten mathematics, where equations are crafted from pure slope and intercept values. But the forge's tools are misaligned. ARIA: 'Here's where we write the rules—y = mx + b. If the forge can create perfect equations again, all Light Paths will realign.'",
    choices: [
      { id: 1, text: "Reforge the equation templates", nextId: "graphEquation", requiresPuzzle: true },
      { id: 2, text: "Salvage existing equation fragments", nextId: "graphEquationSalvage" },
      { id: 3, text: "Return to Graphing Grounds entrance", nextId: "graphingGrounds" },
    ],
  },
  graphSlope: {
    id: "graphSlope",
    title: "Graphing Grounds - Slope Restored",
    narrative:
      "The Slope Calibrator snaps into perfect alignment. Light Paths across the Graphing Grounds adjust their angles, rising and running with mathematical precision. ARIA: 'Slope measurements are perfect! Lines now change at exactly the right rate. The rise over run is flawless.'",
    choices: [{ id: 1, text: "Return to Mathematics Island nexus", nextId: "start" }],
  },
  graphSlopeBackup: {
    id: "graphSlopeBackup",
    title: "Graphing Grounds - Manual Slopes",
    narrative:
      "You manually calculate slopes for the critical Light Paths. ARIA: 'Not automated, but accurate. The most important lines have correct slopes now. Others will stabilize gradually.'",
    choices: [{ id: 1, text: "Return to Mathematics Island nexus", nextId: "start" }],
  },
  graphIntercept: {
    id: "graphIntercept",
    title: "Graphing Grounds - Intercepts Secured",
    narrative:
      "The Intercept Anchor pulses with renewed stability. Every Light Path now knows exactly where to begin, crossing the y-axis at their designated points. ARIA: 'Perfect! All lines have found their starting values. The y-intercepts are locked in place.'",
    choices: [{ id: 1, text: "Return to Mathematics Island nexus", nextId: "start" }],
  },
  graphInterceptTemp: {
    id: "graphInterceptTemp",
    title: "Graphing Grounds - Temporary Anchors",
    narrative:
      "Temporary anchor points flicker into existence, giving major Light Paths somewhere to start. ARIA: 'It's a patch, not a cure, but enough lines have stable intercepts to prevent total collapse.'",
    choices: [{ id: 1, text: "Return to Mathematics Island nexus", nextId: "start" }],
  },
  graphEquation: {
    id: "graphEquation",
    title: "Graphing Grounds - Perfect Formulas",
    narrative:
      "The Equation Forge blazes brilliantly as perfect equations emerge: y = mx + b in flawless form. Light Paths across the entire Graphing Grounds align into harmonious parallel and perpendicular relationships. ARIA: 'Magnificent! The forge creates perfect linear equations. Every line now follows its mathematical truth!'",
    choices: [{ id: 1, text: "Return to Mathematics Island nexus", nextId: "start" }],
  },
  graphEquationSalvage: {
    id: "graphEquationSalvage",
    title: "Graphing Grounds - Salvaged Equations",
    narrative:
      "You piece together equation fragments, creating working formulas from the remnants. ARIA: 'Not elegant, but functional. The critical Light Paths have valid equations again. The Graphing Grounds won't collapse.'",
    choices: [{ id: 1, text: "Return to Mathematics Island nexus", nextId: "start" }],
  },
};

export default function Home() {
  const [currentNodeId, setCurrentNodeId] = useState("start");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showPuzzle, setShowPuzzle] = useState(false);
  const [currentPuzzle, setCurrentPuzzle] = useState(getRandomProblem());
  const [nextNodeId, setNextNodeId] = useState<string | null>(null);
  const [variableMastery, setVariableMastery] = useState(0);
  const [showRestoration, setShowRestoration] = useState(false);
  const [showRepair, setShowRepair] = useState(false);

  const currentNode = storyData[currentNodeId] || storyData["start"];

  const handleChoice = (choiceId: number) => {
    const selectedChoice = currentNode.choices.find((c) => c.id === choiceId);
    if (selectedChoice) {
      if (selectedChoice.requiresPuzzle) {
        setNextNodeId(selectedChoice.nextId);
        setCurrentPuzzle(getRandomProblem());
        setIsTransitioning(true);
        setTimeout(() => {
          setShowPuzzle(true);
          setIsTransitioning(false);
        }, 500);
      } else {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentNodeId(selectedChoice.nextId);
          setIsTransitioning(false);
        }, 500);
      }
    }
  };

  const handlePuzzleCorrect = () => {
    const newMastery = variableMastery + 1;
    setVariableMastery(newMastery);
    setShowPuzzle(false);
    setIsTransitioning(true);
    
    setTimeout(() => {
      setShowRepair(true);
      setIsTransitioning(false);
    }, 500);
  };

  const handleRepairContinue = () => {
    setShowRepair(false);
    
    if (variableMastery === 3) {
      setIsTransitioning(true);
      setTimeout(() => {
        setShowRestoration(true);
        setIsTransitioning(false);
      }, 500);
    } else {
      setIsTransitioning(true);
      setTimeout(() => {
        if (nextNodeId) {
          setCurrentNodeId(nextNodeId);
          setNextNodeId(null);
        }
        setIsTransitioning(false);
      }, 500);
    }
  };

  const handlePuzzleSkip = () => {
    setShowPuzzle(false);
    setIsTransitioning(true);
    setTimeout(() => {
      if (nextNodeId) {
        setCurrentNodeId(nextNodeId);
        setNextNodeId(null);
      }
      setIsTransitioning(false);
    }, 500);
  };

  const handleRestorationContinue = () => {
    setShowRestoration(false);
    setVariableMastery(0);
    setIsTransitioning(true);
    setTimeout(() => {
      if (nextNodeId) {
        setCurrentNodeId(nextNodeId);
        setNextNodeId(null);
      }
      setIsTransitioning(false);
    }, 500);
  };

  if (showRestoration) {
    return <RestorationMessage onContinue={handleRestorationContinue} />;
  }

  if (showRepair) {
    return <RepairMessage onContinue={handleRepairContinue} />;
  }

  if (showPuzzle) {
    return (
      <MathPuzzle
        problem={currentPuzzle}
        onCorrect={handlePuzzleCorrect}
        onSkip={handlePuzzleSkip}
      />
    );
  }

  return (
    <StoryScene
      title={currentNode.title}
      narrative={currentNode.narrative}
      choices={currentNode.choices}
      onChoiceSelect={handleChoice}
      isTransitioning={isTransitioning}
      nodeId={currentNodeId}
    />
  );
}
