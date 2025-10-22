export interface PlotPoint {
  x: number;
  y: number;
}

export interface MathProblem {
  id: string;
  question: string;
  answer: string;
  hints: string[];
  solution?: string;
  topic: string;
  category?: string;
  type?: "numeric" | "plot-points";
  expectedPoints?: PlotPoint[];
  plotConfig?: {
    xMin?: number;
    xMax?: number;
    yMin?: number;
    yMax?: number;
    gridSize?: number;
  };
}

export const algebraProblems: MathProblem[] = [
  // Basic Linear Equations (A.5A) - Keep existing 20
  {
    id: "1",
    question: "x + 8 = 15",
    answer: "7",
    hints: [
      "Think about what this equation is asking: what number plus 8 equals 15? To isolate x, we need to 'undo' the addition of 8. What operation undoes addition?",
      "That's right—subtraction! If we subtract 8 from the left side, we must also subtract 8 from the right side to keep the equation balanced. Try: (x + 8) - 8 = 15 - 8"
    ],
    solution: "To solve x + 8 = 15, we need to get x by itself.\n\nStep 1: Ask yourself—what's being done to x? It's being added to 8.\n\nStep 2: To undo addition, we subtract. Subtract 8 from both sides:\n  x + 8 - 8 = 15 - 8\n  x = 7\n\nStep 3: Check your answer! Does 7 + 8 = 15? Yes! ✓",
    topic: "TEKS A.5A - Solving Linear Equations",
    category: "basic-linear"
  },
  {
    id: "2",
    question: "3x = 27",
    answer: "9",
    hints: [
      "This equation says '3 times some number equals 27.' To find that number, think: what operation undoes multiplication?",
      "Division! Since x is being multiplied by 3, divide both sides by 3 to isolate x. What is 27 ÷ 3?"
    ],
    solution: "To solve 3x = 27, we need to isolate x.\n\nStep 1: Notice that x is being multiplied by 3.\n\nStep 2: To undo multiplication, we divide. Divide both sides by 3:\n  3x ÷ 3 = 27 ÷ 3\n  x = 9\n\nStep 3: Verify! Does 3 × 9 = 27? Yes! ✓\n\nRemember: Whatever you do to one side, do to the other to keep the equation balanced.",
    topic: "TEKS A.5A - Solving Linear Equations",
    category: "basic-linear"
  },
  {
    id: "3",
    question: "2x - 5 = 11",
    answer: "8",
    hints: [
      "This has two operations on x: multiplication by 2 and subtraction of 5. We need to undo them in reverse order (like putting on shoes before socks—you take off socks first!). What should we undo first?",
      "Undo the subtraction first! Add 5 to both sides to get 2x by itself on the left. What do you get?"
    ],
    solution: "To solve 2x - 5 = 11, we undo operations in reverse order.\n\nStep 1: Identify what's happening to x: it's multiplied by 2, then 5 is subtracted.\n\nStep 2: Undo the subtraction first by adding 5 to both sides:\n  2x - 5 + 5 = 11 + 5\n  2x = 16\n\nStep 3: Now undo the multiplication by dividing both sides by 2:\n  2x ÷ 2 = 16 ÷ 2\n  x = 8\n\nStep 4: Check! 2(8) - 5 = 16 - 5 = 11 ✓",
    topic: "TEKS A.5A - Solving Linear Equations",
    category: "basic-linear"
  },
  {
    id: "4",
    question: "4x + 3 = 31",
    answer: "7",
    hints: [
      "You have x being multiplied by 4, then 3 is added. To solve, you need to undo these operations in reverse order. Which operation should you undo first: the addition or the multiplication?",
      "Correct! Undo the addition first by subtracting 3 from both sides to get 4x = 28. Now divide both sides by 4 to find x."
    ],
    solution: "To solve 4x + 3 = 31, we work backwards through the operations.\n\nStep 1: Identify what's happening to x: it's multiplied by 4, then 3 is added.\n\nStep 2: Undo the addition by subtracting 3 from both sides:\n  4x + 3 - 3 = 31 - 3\n  4x = 28\n\nStep 3: Undo the multiplication by dividing both sides by 4:\n  4x ÷ 4 = 28 ÷ 4\n  x = 7\n\nStep 4: Check! 4(7) + 3 = 28 + 3 = 31 ✓",
    topic: "TEKS A.5A - Solving Linear Equations",
    category: "basic-linear"
  },
  {
    id: "5",
    question: "5x - 8 = 22",
    answer: "6",
    hints: [
      "This equation shows x multiplied by 5, then 8 is subtracted. Think about the order of operations: what's the last thing that happened to x?",
      "Right! The subtraction of 8 happened last. So undo it first by adding 8 to both sides. Then you'll have 5x = 30. What should you do next?"
    ],
    solution: "To solve 5x - 8 = 22, we reverse the operations.\n\nStep 1: Notice what's being done to x: multiply by 5, then subtract 8.\n\nStep 2: Undo the subtraction first by adding 8 to both sides:\n  5x - 8 + 8 = 22 + 8\n  5x = 30\n\nStep 3: Undo the multiplication by dividing both sides by 5:\n  5x ÷ 5 = 30 ÷ 5\n  x = 6\n\nStep 4: Verify! 5(6) - 8 = 30 - 8 = 22 ✓",
    topic: "TEKS A.5A - Solving Linear Equations",
    category: "basic-linear"
  },
  {
    id: "6",
    question: "12 + 3x = 27",
    answer: "5",
    hints: [
      "The term 3x means '3 times x.' To isolate 3x, you first need to get rid of the 12 that's being added to it. What operation will eliminate that +12?",
      "Exactly! Subtract 12 from both sides to get 3x = 15. Now you just need to find what number times 3 equals 15. Divide both sides by 3."
    ],
    solution: "To solve 12 + 3x = 27, we isolate the variable term first.\n\nStep 1: Notice that 12 is added to 3x. We need to get 3x by itself.\n\nStep 2: Subtract 12 from both sides:\n  12 + 3x - 12 = 27 - 12\n  3x = 15\n\nStep 3: Divide both sides by 3:\n  3x ÷ 3 = 15 ÷ 3\n  x = 5\n\nStep 4: Check! 12 + 3(5) = 12 + 15 = 27 ✓",
    topic: "TEKS A.5A - Solving Linear Equations",
    category: "basic-linear"
  },
  {
    id: "7",
    question: "6x + 7 = 43",
    answer: "6",
    hints: [
      "In this equation, x is multiplied by 6 and then 7 is added. To solve for x, think about peeling away layers: which layer (operation) is on the outside?",
      "Good thinking! The +7 is the outer layer, so remove it first by subtracting 7 from both sides. This gives you 6x = 36. What's the final step?"
    ],
    solution: "To solve 6x + 7 = 43, we peel away operations layer by layer.\n\nStep 1: Identify the operations: x is multiplied by 6, then 7 is added.\n\nStep 2: Remove the addition by subtracting 7 from both sides:\n  6x + 7 - 7 = 43 - 7\n  6x = 36\n\nStep 3: Remove the multiplication by dividing both sides by 6:\n  6x ÷ 6 = 36 ÷ 6\n  x = 6\n\nStep 4: Verify! 6(6) + 7 = 36 + 7 = 43 ✓",
    topic: "TEKS A.5A - Solving Linear Equations",
    category: "basic-linear"
  },
  {
    id: "8",
    question: "7x - 12 = 30",
    answer: "6",
    hints: [
      "This problem has x multiplied by 7, with 12 subtracted from the result. To isolate x, what's your first move? Think about which operation is affecting the term with x.",
      "Excellent! Add 12 to both sides to cancel out the -12. You'll get 7x = 42. Now divide both sides by 7 to solve for x."
    ],
    solution: "To solve 7x - 12 = 30, we isolate the variable step by step.\n\nStep 1: The equation shows 7x minus 12 equals 30.\n\nStep 2: Add 12 to both sides to eliminate the -12:\n  7x - 12 + 12 = 30 + 12\n  7x = 42\n\nStep 3: Divide both sides by 7:\n  7x ÷ 7 = 42 ÷ 7\n  x = 6\n\nStep 4: Check! 7(6) - 12 = 42 - 12 = 30 ✓",
    topic: "TEKS A.5A - Solving Linear Equations",
    category: "basic-linear"
  },
  {
    id: "9",
    question: "4x + 9 = 41",
    answer: "8",
    hints: [
      "Look at the left side: 4x + 9. There are two operations happening to x. To solve, you need to reverse them. Which operation should you reverse first?",
      "Perfect! Subtract 9 from both sides first to get 4x = 32. Then divide by 4 to find the value of x."
    ],
    solution: "To solve 4x + 9 = 41, we work in reverse order.\n\nStep 1: Identify the operations: x is multiplied by 4, then 9 is added.\n\nStep 2: Undo the addition by subtracting 9 from both sides:\n  4x + 9 - 9 = 41 - 9\n  4x = 32\n\nStep 3: Undo the multiplication by dividing both sides by 4:\n  4x ÷ 4 = 32 ÷ 4\n  x = 8\n\nStep 4: Verify! 4(8) + 9 = 32 + 9 = 41 ✓",
    topic: "TEKS A.5A - Solving Linear Equations",
    category: "basic-linear"
  },
  {
    id: "10",
    question: "8x - 6 = 58",
    answer: "8",
    hints: [
      "The equation shows 8 times x, with 6 subtracted. To get x alone, you'll need to undo both operations. Which one first—the subtraction or the multiplication?",
      "That's right! Undo the subtraction first by adding 6 to both sides. This gives you 8x = 64. Now what operation will get x by itself?"
    ],
    solution: "To solve 8x - 6 = 58, we reverse the order of operations.\n\nStep 1: See that x is multiplied by 8, then 6 is subtracted.\n\nStep 2: Undo the subtraction by adding 6 to both sides:\n  8x - 6 + 6 = 58 + 6\n  8x = 64\n\nStep 3: Undo the multiplication by dividing both sides by 8:\n  8x ÷ 8 = 64 ÷ 8\n  x = 8\n\nStep 4: Check! 8(8) - 6 = 64 - 6 = 58 ✓",
    topic: "TEKS A.5A - Solving Linear Equations",
    category: "basic-linear"
  },
  {
    id: "11",
    question: "15 - 3x = 6",
    answer: "3",
    hints: [
      "This equation is a bit different: it starts with 15, then subtracts 3x. To isolate the term with x, you could subtract 15 from both sides. What will that give you?",
      "Good! Subtracting 15 from both sides gives -3x = -9. Now divide both sides by -3. Remember: dividing two negatives gives a positive result!"
    ],
    solution: "To solve 15 - 3x = 6, we need to isolate the variable term.\n\nStep 1: Subtract 15 from both sides to get the x term alone:\n  15 - 3x - 15 = 6 - 15\n  -3x = -9\n\nStep 2: Divide both sides by -3:\n  -3x ÷ -3 = -9 ÷ -3\n  x = 3\n\nNote: When dividing two negative numbers, the result is positive!\n\nStep 3: Check! 15 - 3(3) = 15 - 9 = 6 ✓",
    topic: "TEKS A.5A - Solving Linear Equations",
    category: "basic-linear"
  },
  {
    id: "12",
    question: "9x + 5 = 86",
    answer: "9",
    hints: [
      "In this equation, x is multiplied by 9, and then 5 is added. What's the goal when solving for x? You want to get x by itself, or 'isolated.' Which operation should you undo first?",
      "Perfect! Subtract 5 from both sides to get 9x = 81. Now divide both sides by 9 to find x."
    ],
    solution: "To solve 9x + 5 = 86, we isolate x step by step.\n\nStep 1: Identify operations: x is multiplied by 9, then 5 is added.\n\nStep 2: Undo addition by subtracting 5 from both sides:\n  9x + 5 - 5 = 86 - 5\n  9x = 81\n\nStep 3: Undo multiplication by dividing both sides by 9:\n  9x ÷ 9 = 81 ÷ 9\n  x = 9\n\nStep 4: Verify! 9(9) + 5 = 81 + 5 = 86 ✓",
    topic: "TEKS A.5A - Solving Linear Equations",
    category: "basic-linear"
  },
  {
    id: "13",
    question: "2x + 11 = 31",
    answer: "10",
    hints: [
      "The equation says 2 times x, plus 11, equals 31. To solve for x, ask yourself: what operation is 'wrapping around' the 2x? That's the one to undo first!",
      "Right! The +11 is the outer operation. Subtract 11 from both sides to get 2x = 20, then divide by 2."
    ],
    solution: "To solve 2x + 11 = 31, we work backwards.\n\nStep 1: Notice x is multiplied by 2, then 11 is added.\n\nStep 2: Undo the addition by subtracting 11 from both sides:\n  2x + 11 - 11 = 31 - 11\n  2x = 20\n\nStep 3: Undo the multiplication by dividing both sides by 2:\n  2x ÷ 2 = 20 ÷ 2\n  x = 10\n\nStep 4: Check! 2(10) + 11 = 20 + 11 = 31 ✓",
    topic: "TEKS A.5A - Solving Linear Equations",
    category: "basic-linear"
  },
  {
    id: "14",
    question: "5x - 7 = 28",
    answer: "7",
    hints: [
      "This equation has 5 times x, with 7 subtracted. When solving, think: which operation was applied last to x? That's the first one to reverse!",
      "Exactly! The subtraction was last, so add 7 to both sides first. You'll get 5x = 35. What's next?"
    ],
    solution: "To solve 5x - 7 = 28, we reverse the operations.\n\nStep 1: x is multiplied by 5, then 7 is subtracted.\n\nStep 2: Undo the subtraction by adding 7 to both sides:\n  5x - 7 + 7 = 28 + 7\n  5x = 35\n\nStep 3: Undo the multiplication by dividing both sides by 5:\n  5x ÷ 5 = 35 ÷ 5\n  x = 7\n\nStep 4: Check! 5(7) - 7 = 35 - 7 = 28 ✓",
    topic: "TEKS A.5A - Solving Linear Equations",
    category: "basic-linear"
  },
  {
    id: "15",
    question: "3x + 14 = 35",
    answer: "7",
    hints: [
      "Look at the left side: 3x + 14. You need x alone. What's blocking you from having just 3x on the left side? How can you remove it?",
      "Good! Subtract 14 from both sides to get 3x = 21. Now divide by 3 to solve for x."
    ],
    solution: "To solve 3x + 14 = 35, we isolate x systematically.\n\nStep 1: x is multiplied by 3, then 14 is added.\n\nStep 2: Undo the addition by subtracting 14 from both sides:\n  3x + 14 - 14 = 35 - 14\n  3x = 21\n\nStep 3: Undo the multiplication by dividing both sides by 3:\n  3x ÷ 3 = 21 ÷ 3\n  x = 7\n\nStep 4: Verify! 3(7) + 14 = 21 + 14 = 35 ✓",
    topic: "TEKS A.5A - Solving Linear Equations",
    category: "basic-linear"
  },
  {
    id: "16",
    question: "6x - 9 = 45",
    answer: "9",
    hints: [
      "This equation shows 6x - 9 = 45. To isolate x, you need to undo both the multiplication and subtraction. Remember: undo operations in reverse order. Which goes first?",
      "Perfect! Add 9 to both sides to cancel the -9. This gives 6x = 54. Now divide by 6."
    ],
    solution: "To solve 6x - 9 = 45, we work step by step.\n\nStep 1: x is multiplied by 6, then 9 is subtracted.\n\nStep 2: Undo the subtraction by adding 9 to both sides:\n  6x - 9 + 9 = 45 + 9\n  6x = 54\n\nStep 3: Undo the multiplication by dividing both sides by 6:\n  6x ÷ 6 = 54 ÷ 6\n  x = 9\n\nStep 4: Check! 6(9) - 9 = 54 - 9 = 45 ✓",
    topic: "TEKS A.5A - Solving Linear Equations",
    category: "basic-linear"
  },
  {
    id: "17",
    question: "10x + 8 = 88",
    answer: "8",
    hints: [
      "The equation shows 10 times x, plus 8, equals 88. To get x alone, what operation do you need to perform first to remove the +8?",
      "Correct! Subtract 8 from both sides to get 10x = 80. Now divide by 10 to find x."
    ],
    solution: "To solve 10x + 8 = 88, we isolate x in two steps.\n\nStep 1: x is multiplied by 10, then 8 is added.\n\nStep 2: Undo the addition by subtracting 8 from both sides:\n  10x + 8 - 8 = 88 - 8\n  10x = 80\n\nStep 3: Undo the multiplication by dividing both sides by 10:\n  10x ÷ 10 = 80 ÷ 10\n  x = 8\n\nStep 4: Verify! 10(8) + 8 = 80 + 8 = 88 ✓",
    topic: "TEKS A.5A - Solving Linear Equations",
    category: "basic-linear"
  },
  {
    id: "18",
    question: "7x - 15 = 34",
    answer: "7",
    hints: [
      "In this problem, x is multiplied by 7, and then 15 is subtracted. To solve, think about reversing these operations. Which operation should you reverse first?",
      "Right! Add 15 to both sides first to undo the subtraction. You'll get 7x = 49. Then divide by 7."
    ],
    solution: "To solve 7x - 15 = 34, we reverse the operations systematically.\n\nStep 1: x is multiplied by 7, then 15 is subtracted.\n\nStep 2: Undo the subtraction by adding 15 to both sides:\n  7x - 15 + 15 = 34 + 15\n  7x = 49\n\nStep 3: Undo the multiplication by dividing both sides by 7:\n  7x ÷ 7 = 49 ÷ 7\n  x = 7\n\nStep 4: Check! 7(7) - 15 = 49 - 15 = 34 ✓",
    topic: "TEKS A.5A - Solving Linear Equations",
    category: "basic-linear"
  },
  {
    id: "19",
    question: "4x + 12 = 48",
    answer: "9",
    hints: [
      "The equation shows 4x + 12 = 48. To isolate x, you need to remove the +12 first. What operation removes addition?",
      "Exactly! Subtract 12 from both sides to get 4x = 36. Now divide both sides by 4 to find the value of x."
    ],
    solution: "To solve 4x + 12 = 48, we work through the operations.\n\nStep 1: x is multiplied by 4, then 12 is added.\n\nStep 2: Undo the addition by subtracting 12 from both sides:\n  4x + 12 - 12 = 48 - 12\n  4x = 36\n\nStep 3: Undo the multiplication by dividing both sides by 4:\n  4x ÷ 4 = 36 ÷ 4\n  x = 9\n\nStep 4: Verify! 4(9) + 12 = 36 + 12 = 48 ✓",
    topic: "TEKS A.5A - Solving Linear Equations",
    category: "basic-linear"
  },
  {
    id: "20",
    question: "9x - 18 = 63",
    answer: "9",
    hints: [
      "In 9x - 18 = 63, you have x multiplied by 9, then 18 subtracted. To solve for x, which operation should you undo first to begin isolating x?",
      "Good! Add 18 to both sides to undo the subtraction. This gives you 9x = 81. Now divide by 9 to solve for x."
    ],
    solution: "To solve 9x - 18 = 63, we isolate x step by step.\n\nStep 1: x is multiplied by 9, then 18 is subtracted.\n\nStep 2: Undo the subtraction by adding 18 to both sides:\n  9x - 18 + 18 = 63 + 18\n  9x = 81\n\nStep 3: Undo the multiplication by dividing both sides by 9:\n  9x ÷ 9 = 81 ÷ 9\n  x = 9\n\nStep 4: Check! 9(9) - 18 = 81 - 18 = 63 ✓",
    topic: "TEKS A.5A - Solving Linear Equations",
    category: "basic-linear"
  },

  // Literal Equations (A.12E) - NEW: 6 problems (with numbers)
  {
    id: "21",
    question: "A rectangle has area A = 24 and length l = 6. Solve for width w using A = lw",
    answer: "4",
    hints: [
      "The formula A = lw tells us that area equals length times width. You're given A and l, and need to find w. What operation can you use to isolate w when it's being multiplied by 6?",
      "Exactly! Substitute the known values to get 24 = 6w, then divide both sides by 6 to solve for w."
    ],
    solution: "To find the width using A = lw:\n\nStep 1: Start with the formula: A = lw\n\nStep 2: Substitute the known values A = 24 and l = 6:\n  24 = 6w\n\nStep 3: To isolate w, divide both sides by 6:\n  24 ÷ 6 = 6w ÷ 6\n  4 = w\n\nStep 4: Check! Does 6 × 4 = 24? Yes! ✓\n\nThe width is 4 units.",
    topic: "TEKS A.12E - Literal Equations",
    category: "literal"
  },
  {
    id: "22",
    question: "A box has volume V = 60, length l = 5, and width w = 3. Solve for height h using V = lwh",
    answer: "4",
    hints: [
      "The volume formula V = lwh means you multiply length, width, and height. You know V, l, and w. First, substitute these values into the formula. What do you get?",
      "Good! After substituting, you should have 60 = 5 × 3 × h. Simplify 5 × 3 = 15, giving you 60 = 15h. Now divide both sides by 15."
    ],
    solution: "To find the height using V = lwh:\n\nStep 1: Start with the volume formula: V = lwh\n\nStep 2: Substitute V = 60, l = 5, and w = 3:\n  60 = 5 × 3 × h\n\nStep 3: Simplify the right side by multiplying 5 × 3:\n  60 = 15h\n\nStep 4: Divide both sides by 15:\n  60 ÷ 15 = 15h ÷ 15\n  4 = h\n\nStep 5: Check! Does 5 × 3 × 4 = 60? Yes! ✓\n\nThe height is 4 units.",
    topic: "TEKS A.12E - Literal Equations",
    category: "literal"
  },
  {
    id: "23",
    question: "A circle has circumference C = 18.84. Solve for radius r using C = 2πr (use π ≈ 3.14)",
    answer: "3",
    hints: [
      "The formula C = 2πr tells us circumference equals 2 times π times the radius. You know C and π. What happens when you substitute C = 18.84 and π = 3.14 into the formula?",
      "Right! You get 18.84 = 2(3.14)r. Multiply 2 × 3.14 = 6.28, giving you 18.84 = 6.28r. Now divide by 6.28."
    ],
    solution: "To find the radius using C = 2πr:\n\nStep 1: Start with the formula: C = 2πr\n\nStep 2: Substitute C = 18.84 and π ≈ 3.14:\n  18.84 = 2(3.14)r\n\nStep 3: Multiply 2 × 3.14:\n  18.84 = 6.28r\n\nStep 4: Divide both sides by 6.28:\n  18.84 ÷ 6.28 = 6.28r ÷ 6.28\n  3 = r\n\nStep 5: Check! Does 2 × 3.14 × 3 = 18.84? Yes! ✓\n\nThe radius is 3 units.",
    topic: "TEKS A.12E - Literal Equations",
    category: "literal"
  },
  {
    id: "24",
    question: "A triangle has area A = 20 and height h = 5. Solve for base b using A = (1/2)bh",
    answer: "8",
    hints: [
      "The triangle area formula is A = (1/2)bh, which means 'half of base times height.' You know A and h. What equation do you get when you substitute these values?",
      "Perfect! Substituting gives 20 = (1/2) × b × 5. Simplify: (1/2) × 5 = 2.5, so 20 = 2.5b. Now divide by 2.5."
    ],
    solution: "To find the base using A = (1/2)bh:\n\nStep 1: Start with the area formula: A = (1/2)bh\n\nStep 2: Substitute A = 20 and h = 5:\n  20 = (1/2) × b × 5\n\nStep 3: Simplify (1/2) × 5 = 2.5:\n  20 = 2.5b\n\nStep 4: Divide both sides by 2.5:\n  20 ÷ 2.5 = 2.5b ÷ 2.5\n  8 = b\n\nStep 5: Check! Does (1/2) × 8 × 5 = 20? Yes! ✓\n\nThe base is 8 units.",
    topic: "TEKS A.12E - Literal Equations",
    category: "literal"
  },
  {
    id: "25",
    question: "A car travels distance d = 150 miles at rate r = 50 mph. Solve for time t using d = rt",
    answer: "3",
    hints: [
      "The formula d = rt connects distance, rate (speed), and time. You know the distance and rate, and need to find time. What equation do you get when you plug in d = 150 and r = 50?",
      "Exactly! Substituting gives 150 = 50t. To find t, divide both sides by 50."
    ],
    solution: "To find the time using d = rt:\n\nStep 1: Start with the distance formula: d = rt\n\nStep 2: Substitute d = 150 and r = 50:\n  150 = 50t\n\nStep 3: Divide both sides by 50:\n  150 ÷ 50 = 50t ÷ 50\n  3 = t\n\nStep 4: Check! Does 50 × 3 = 150? Yes! ✓\n\nThe time is 3 hours.",
    topic: "TEKS A.12E - Literal Equations",
    category: "literal"
  },
  {
    id: "26",
    question: "Given 3x + 2y = 12 and x = 2, solve for y",
    answer: "3",
    hints: [
      "You have an equation with two variables, but you know x = 2. What happens when you replace x with 2 in the equation 3x + 2y = 12?",
      "Good! You get 3(2) + 2y = 12, which simplifies to 6 + 2y = 12. Now subtract 6 from both sides, then divide by 2."
    ],
    solution: "To solve for y when x = 2:\n\nStep 1: Start with the equation: 3x + 2y = 12\n\nStep 2: Substitute x = 2:\n  3(2) + 2y = 12\n\nStep 3: Multiply 3 × 2:\n  6 + 2y = 12\n\nStep 4: Subtract 6 from both sides:\n  2y = 6\n\nStep 5: Divide both sides by 2:\n  y = 3\n\nStep 6: Check! Does 3(2) + 2(3) = 12? Yes, 6 + 6 = 12! ✓",
    topic: "TEKS A.12E - Literal Equations",
    category: "literal"
  },

  // Slope Problems (A.3A) - NEW: 10 problems (points, tables, equations, graphs)
  {
    id: "27",
    question: "Solve for m: A line passes through points (1, 2) and (5, 10)",
    answer: "2",
    hints: [
      "Slope measures how steep a line is—it's the 'rise over run.' To find it from two points, think about: how much does y change (rise) as x changes (run)? The formula is m = (y₂ - y₁)/(x₂ - x₁).",
      "Good! Label your points: (1, 2) is (x₁, y₁) and (5, 10) is (x₂, y₂). Plug into the formula: m = (10 - 2)/(5 - 1). What do you get?"
    ],
    solution: "To find the slope from two points:\n\nStep 1: Recall the slope formula: m = (y₂ - y₁)/(x₂ - x₁)\n  This represents rise over run.\n\nStep 2: Identify the coordinates:\n  Point 1: (x₁, y₁) = (1, 2)\n  Point 2: (x₂, y₂) = (5, 10)\n\nStep 3: Substitute into the formula:\n  m = (10 - 2)/(5 - 1)\n  m = 8/4\n  m = 2\n\nThe slope is 2, meaning for every 1 unit right, the line goes up 2 units! ✓",
    topic: "TEKS A.3A - Slope from Two Points",
    category: "slope"
  },
  {
    id: "28",
    question: "Solve for m: A line passes through points (2, 3) and (6, 11)",
    answer: "2",
    hints: [
      "Slope tells us the rate of change between two points. As you move from one point to the other, how much does y change compared to x? Use the slope formula m = (y₂ - y₁)/(x₂ - x₁).",
      "Perfect! With (2, 3) as the first point and (6, 11) as the second, calculate: m = (11 - 3)/(6 - 2). Simplify the numerator and denominator."
    ],
    solution: "To find the slope from two points:\n\nStep 1: Use the slope formula: m = (y₂ - y₁)/(x₂ - x₁)\n\nStep 2: Label the points:\n  (x₁, y₁) = (2, 3)\n  (x₂, y₂) = (6, 11)\n\nStep 3: Substitute and calculate:\n  m = (11 - 3)/(6 - 2)\n  m = 8/4\n  m = 2\n\nStep 4: Interpret: The line rises 2 units for every 1 unit it moves right. ✓",
    topic: "TEKS A.3A - Slope from Two Points",
    category: "slope"
  },
  {
    id: "29",
    question: "Solve for m: Given table with x: 0,1,2,3 and y: 1,4,7,10",
    answer: "3",
    hints: [
      "A table of values shows points on a line. Each row gives you a point (x, y). To find the slope, you can pick any two points and use the slope formula. Notice how y changes as x increases—what's the pattern?",
      "Great! Let's use the first two points: (0, 1) and (1, 4). Apply m = (y₂ - y₁)/(x₂ - x₁) to find the slope."
    ],
    solution: "To find slope from a table:\n\nStep 1: Recognize that each column gives a point (x, y):\n  (0, 1), (1, 4), (2, 7), (3, 10)\n\nStep 2: Pick any two points. Let's use (0, 1) and (1, 4).\n\nStep 3: Apply the slope formula:\n  m = (4 - 1)/(1 - 0)\n  m = 3/1\n  m = 3\n\nStep 4: Verify with another pair: (1, 4) and (2, 7)\n  m = (7 - 4)/(2 - 1) = 3/1 = 3 ✓\n\nThe slope is constant at 3!",
    topic: "TEKS A.3A - Slope from Table",
    category: "slope"
  },
  {
    id: "30",
    question: "Solve for m: Table shows x: 1,2,3,4 and y: 5,9,13,17",
    answer: "4",
    hints: [
      "Look at the table and see how y changes each time x increases by 1. This consistent change is the slope! You can also verify using the slope formula with any two points.",
      "Excellent! Use points (1, 5) and (2, 9). Calculate m = (9 - 5)/(2 - 1). What's the result?"
    ],
    solution: "To find slope from a table:\n\nStep 1: Convert table rows to points:\n  (1, 5), (2, 9), (3, 13), (4, 17)\n\nStep 2: Notice the pattern: y increases by 4 each time x increases by 1.\n  This suggests m = 4.\n\nStep 3: Verify with the formula using (1, 5) and (2, 9):\n  m = (9 - 5)/(2 - 1)\n  m = 4/1\n  m = 4\n\nStep 4: Double-check with (2, 9) and (3, 13):\n  m = (13 - 9)/(3 - 2) = 4/1 = 4 ✓",
    topic: "TEKS A.3A - Slope from Table",
    category: "slope"
  },
  {
    id: "31",
    question: "What is the slope (m) of the line y = 3x + 7?",
    answer: "3",
    hints: [
      "When an equation is in the form y = mx + b, it's called slope-intercept form. In this form, 'm' represents the slope and 'b' represents the y-intercept. Can you identify which number is m?",
      "That's right! In y = 3x + 7, the coefficient of x (the number multiplying x) is the slope."
    ],
    solution: "To identify slope from an equation in slope-intercept form:\n\nStep 1: Recognize the form y = mx + b where:\n  m = slope\n  b = y-intercept\n\nStep 2: Compare y = 3x + 7 to y = mx + b:\n  The coefficient of x is 3\n  So m = 3\n\nStep 3: The slope is 3.\n  This means the line goes up 3 units for every 1 unit to the right. ✓",
    topic: "TEKS A.3A - Slope from Equation",
    category: "slope"
  },
  {
    id: "32",
    question: "What is the slope (m) of the line y = 5x - 2?",
    answer: "5",
    hints: [
      "This equation is already in slope-intercept form (y = mx + b). The slope is the number that multiplies x. What number is attached to x in this equation?",
      "Perfect! The slope m is the coefficient of x, which is 5 in this case."
    ],
    solution: "To identify slope from slope-intercept form:\n\nStep 1: Identify the form: y = mx + b\n  where m = slope and b = y-intercept\n\nStep 2: In the equation y = 5x - 2:\n  The coefficient of x is 5\n  The constant term is -2\n\nStep 3: Therefore, m = 5 and b = -2.\n\nStep 4: The slope is 5, indicating a steep upward climb: up 5 units for every 1 unit right. ✓",
    topic: "TEKS A.3A - Slope from Equation",
    category: "slope"
  },
  {
    id: "51",
    question: "Solve for m: A line passes through (1, 7) and (4, 19)",
    answer: "4",
    hints: [
      "To find slope, think about the journey from one point to another. How much does y increase (rise) as x increases (run)? The formula m = (y₂ - y₁)/(x₂ - x₁) captures this.",
      "Excellent! Label (1, 7) as your first point and (4, 19) as your second. Substitute into m = (19 - 7)/(4 - 1) and simplify."
    ],
    solution: "To find the slope from two points:\n\nStep 1: Use the slope formula: m = (y₂ - y₁)/(x₂ - x₁)\n\nStep 2: Identify your points:\n  (x₁, y₁) = (1, 7)\n  (x₂, y₂) = (4, 19)\n\nStep 3: Substitute and calculate:\n  m = (19 - 7)/(4 - 1)\n  m = 12/3\n  m = 4\n\nStep 4: Interpret: The line rises 4 units for every 1 unit it moves right. ✓",
    topic: "TEKS A.3A - Slope from Two Points",
    category: "slope"
  },
  {
    id: "52",
    question: "Solve for m: Table with x: 2,4,6,8 and y: 11,17,23,29",
    answer: "3",
    hints: [
      "This table represents points on a line. To find the slope, convert any two rows into points (x, y) and use the slope formula. Do you notice how y increases as x increases?",
      "Perfect! Use (2, 11) and (4, 17). Calculate m = (17 - 11)/(4 - 2) to find the slope."
    ],
    solution: "To find slope from a table:\n\nStep 1: Convert the table to points:\n  (2, 11), (4, 17), (6, 23), (8, 29)\n\nStep 2: Pick two points, like (2, 11) and (4, 17).\n\nStep 3: Apply the slope formula:\n  m = (17 - 11)/(4 - 2)\n  m = 6/2\n  m = 3\n\nStep 4: Verify with another pair: (4, 17) and (6, 23)\n  m = (23 - 17)/(6 - 4) = 6/2 = 3 ✓\n\nThe slope is consistent at 3!",
    topic: "TEKS A.3A - Slope from Table",
    category: "slope"
  },
  {
    id: "55",
    question: "Solve for m: A graph shows a line passing through (0,2) and (3,8)",
    answer: "2",
    hints: [
      "When reading slope from a graph, identify two clear points the line passes through. Then use the slope formula just like you would with any two points. What are the coordinates you can read from the graph?",
      "Great! With (0, 2) and (3, 8), use m = (y₂ - y₁)/(x₂ - x₁). Substitute and calculate."
    ],
    solution: "To find slope from a graph:\n\nStep 1: Identify two points the line passes through:\n  (0, 2) and (3, 8)\n\nStep 2: Apply the slope formula:\n  m = (y₂ - y₁)/(x₂ - x₁)\n  m = (8 - 2)/(3 - 0)\n  m = 6/3\n  m = 2\n\nStep 3: The slope is 2, meaning the line rises 2 units for every 1 unit to the right. ✓",
    topic: "TEKS A.3A - Slope from Graph",
    category: "slope"
  },
  {
    id: "56",
    question: "Solve for m: A graphed line goes through points (1,3) and (4,15)",
    answer: "4",
    hints: [
      "Reading from the graph, you can see the line passes through (1, 3) and (4, 15). Slope is 'rise over run'—how much the line goes up or down (rise) for each unit it moves right (run).",
      "Exactly! Apply the formula m = (15 - 3)/(4 - 1). Calculate the differences and divide."
    ],
    solution: "To find slope from a graph:\n\nStep 1: Read the points from the graph:\n  (1, 3) and (4, 15)\n\nStep 2: Use the slope formula:\n  m = (y₂ - y₁)/(x₂ - x₁)\n  m = (15 - 3)/(4 - 1)\n  m = 12/3\n  m = 4\n\nStep 3: The slope is 4, showing a steep upward climb: up 4 units for every 1 unit right. ✓",
    topic: "TEKS A.3A - Slope from Graph",
    category: "slope"
  },

  // Real-World Modeling (A.1, A.4C) - NEW: 6 problems
  {
    id: "33",
    question: "A plumber charges $40 plus $25 per hour. If the bill is $165, how many hours did the plumber work? (Solve for h: 40 + 25h = 165)",
    answer: "5",
    hints: [
      "Break down the problem: $40 is a flat fee (happens once), and $25 per hour means $25 times the number of hours. The equation 40 + 25h = 165 represents this. To find h, what's your first step to isolate the term with h?",
      "Great! Subtract the flat fee of $40 from both sides to get 25h = 125. Now divide by 25 to find how many hours."
    ],
    solution: "To solve this real-world problem:\n\nStep 1: Understand the equation: 40 + 25h = 165\n  $40 is the flat fee\n  $25h is the hourly charge (h hours)\n  $165 is the total bill\n\nStep 2: Subtract 40 from both sides to isolate the hourly charge:\n  25h = 165 - 40\n  25h = 125\n\nStep 3: Divide both sides by 25:\n  h = 125 ÷ 25\n  h = 5\n\nStep 4: Check! $40 + $25(5) = $40 + $125 = $165 ✓\n\nThe plumber worked 5 hours.",
    topic: "TEKS A.1, A.4C - Real-World Modeling",
    category: "word-problem"
  },
  {
    id: "34",
    question: "A gym membership costs $30 per month plus a $50 signup fee. If you paid $200 total, how many months did you pay for? (Solve: 50 + 30m = 200)",
    answer: "5",
    hints: [
      "Think about the cost structure: there's a one-time $50 signup fee plus $30 per month. The equation 50 + 30m = 200 captures this. To find the number of months (m), what should you do first?",
      "Perfect! Remove the signup fee by subtracting 50 from both sides, giving you 30m = 150. Then divide by 30 to find m."
    ],
    solution: "To solve this gym membership problem:\n\nStep 1: Understand the equation: 50 + 30m = 200\n  $50 is the one-time signup fee\n  $30m is monthly cost (m months)\n  $200 is the total amount paid\n\nStep 2: Subtract the signup fee from both sides:\n  30m = 200 - 50\n  30m = 150\n\nStep 3: Divide both sides by 30:\n  m = 150 ÷ 30\n  m = 5\n\nStep 4: Verify! $50 + $30(5) = $50 + $150 = $200 ✓\n\nYou paid for 5 months.",
    topic: "TEKS A.1, A.4C - Real-World Modeling",
    category: "word-problem"
  },
  {
    id: "35",
    question: "A taxi charges $3.50 plus $2 per mile. If the fare is $19.50, how many miles was the trip? (Solve: 3.50 + 2m = 19.50)",
    answer: "8",
    hints: [
      "The taxi fare has two parts: a base fare of $3.50 and $2 per mile. The equation 3.50 + 2m = 19.50 models this. To find the number of miles (m), how can you isolate the variable term?",
      "Exactly! Subtract the base fare of $3.50 from both sides to get 2m = 16. Now divide by 2 to find the miles."
    ],
    solution: "To solve this taxi fare problem:\n\nStep 1: Break down the equation: 3.50 + 2m = 19.50\n  $3.50 is the base fare\n  $2m is the per-mile charge (m miles)\n  $19.50 is the total fare\n\nStep 2: Subtract the base fare from both sides:\n  2m = 19.50 - 3.50\n  2m = 16\n\nStep 3: Divide both sides by 2:\n  m = 16 ÷ 2\n  m = 8\n\nStep 4: Check! $3.50 + $2(8) = $3.50 + $16 = $19.50 ✓\n\nThe trip was 8 miles.",
    topic: "TEKS A.1, A.4C - Real-World Modeling",
    category: "word-problem"
  },
  {
    id: "36",
    question: "A phone plan costs $45/month plus $0.10 per text over 500 texts. If your bill is $48, how many extra texts did you send? (Solve: 45 + 0.10t = 48)",
    answer: "30",
    hints: [
      "Your monthly plan is $45, plus you pay $0.10 for each text beyond 500. The equation 45 + 0.10t = 48 shows this, where t is the number of extra texts. How much did you pay just for the extra texts?",
      "Right! Subtract $45 from $48 to find you paid $3 for extra texts. Since each costs $0.10, divide 3 by 0.10 to find how many."
    ],
    solution: "To solve this phone bill problem:\n\nStep 1: Understand the equation: 45 + 0.10t = 48\n  $45 is the monthly base cost\n  $0.10t is the charge for t extra texts\n  $48 is the total bill\n\nStep 2: Find the cost of extra texts by subtracting the base cost:\n  0.10t = 48 - 45\n  0.10t = 3\n\nStep 3: Divide both sides by 0.10:\n  t = 3 ÷ 0.10\n  t = 30\n\nStep 4: Verify! $45 + $0.10(30) = $45 + $3 = $48 ✓\n\nYou sent 30 extra texts.",
    topic: "TEKS A.1, A.4C - Real-World Modeling",
    category: "word-problem"
  },
  {
    id: "37",
    question: "Tickets to a concert cost $15 each. If you spent $105, how many tickets did you buy? (Solve: 15t = 105)",
    answer: "7",
    hints: [
      "This is a multiplication problem: the cost per ticket ($15) times the number of tickets (t) equals the total spent ($105). The equation is 15t = 105. How do you undo multiplication?",
      "Perfect! Division undoes multiplication. Divide both sides by 15 to find how many tickets you bought."
    ],
    solution: "To solve this ticket problem:\n\nStep 1: Set up the equation: 15t = 105\n  $15 is the cost per ticket\n  t is the number of tickets\n  $105 is the total spent\n\nStep 2: Divide both sides by 15 to isolate t:\n  t = 105 ÷ 15\n  t = 7\n\nStep 3: Check! $15 × 7 = $105 ✓\n\nYou bought 7 tickets.",
    topic: "TEKS A.1, A.4C - Real-World Modeling",
    category: "word-problem"
  },
  {
    id: "38",
    question: "A streaming service costs $12/month. After paying for several months, you've spent $84. How many months have you subscribed? (Solve: 12m = 84)",
    answer: "7",
    hints: [
      "The total cost equals the monthly cost times the number of months: 12m = 84. To find the number of months (m), what operation can you use?",
      "Exactly! Divide the total cost by the monthly cost. Divide both sides by 12."
    ],
    solution: "To solve this subscription problem:\n\nStep 1: Understand the equation: 12m = 84\n  $12 is the cost per month\n  m is the number of months\n  $84 is the total spent\n\nStep 2: Divide both sides by 12:\n  m = 84 ÷ 12\n  m = 7\n\nStep 3: Verify! $12 × 7 = $84 ✓\n\nYou've subscribed for 7 months.",
    topic: "TEKS A.1, A.4C - Real-World Modeling",
    category: "word-problem"
  },

  // Simplifying Expressions (A.10) - NEW: 6 problems
  {
    id: "39",
    question: "Simplify: 2(x + 3) - 5. What is the coefficient of x?",
    answer: "2",
    hints: [
      "To simplify expressions with parentheses, use the distributive property: multiply everything inside the parentheses by the number outside. What do you get when you distribute 2 to both x and 3?",
      "Great! You should have 2x + 6. Now subtract 5. After combining like terms, what number is multiplying x?"
    ],
    solution: "To simplify 2(x + 3) - 5:\n\nStep 1: Apply the distributive property (multiply 2 by each term inside):\n  2(x + 3) = 2·x + 2·3 = 2x + 6\n\nStep 2: Rewrite the expression:\n  2x + 6 - 5\n\nStep 3: Combine constant terms (6 - 5 = 1):\n  2x + 1\n\nStep 4: Identify the coefficient of x: it's 2\n\nThe answer is 2. ✓",
    topic: "TEKS A.10 - Simplifying Expressions",
    category: "simplify"
  },
  {
    id: "40",
    question: "Simplify: 3x + 2x - x. What is the coefficient of x?",
    answer: "4",
    hints: [
      "When you have multiple terms with the same variable, you can combine them by adding or subtracting their coefficients. All three terms have 'x', so what are the coefficients you're combining?",
      "Perfect! You have 3x, 2x, and -x (which is -1x). Add the coefficients: 3 + 2 - 1. What do you get?"
    ],
    solution: "To simplify 3x + 2x - x:\n\nStep 1: Identify like terms (all have the variable x):\n  3x, 2x, and -x (which is -1x)\n\nStep 2: Combine by adding/subtracting coefficients:\n  (3 + 2 - 1)x\n  = 4x\n\nStep 3: The coefficient of x is 4.\n\nThe answer is 4. ✓",
    topic: "TEKS A.10 - Simplifying Expressions",
    category: "simplify"
  },
  {
    id: "41",
    question: "Simplify: 5(x + 2) - 3x. What is the coefficient of x?",
    answer: "2",
    hints: [
      "Start by handling the parentheses using the distributive property. Multiply 5 by everything inside: what do you get?",
      "Good! You should have 5x + 10 - 3x. Now combine the like terms (the x terms). What's 5x - 3x?"
    ],
    solution: "To simplify 5(x + 2) - 3x:\n\nStep 1: Distribute 5 to both terms in parentheses:\n  5(x + 2) = 5x + 10\n\nStep 2: Rewrite the full expression:\n  5x + 10 - 3x\n\nStep 3: Combine like terms (x terms together):\n  5x - 3x = 2x\n  So: 2x + 10\n\nStep 4: The coefficient of x is 2.\n\nThe answer is 2. ✓",
    topic: "TEKS A.10 - Simplifying Expressions",
    category: "simplify"
  },
  {
    id: "42",
    question: "Simplify: 4(2x - 1) + 3. What is the coefficient of x?",
    answer: "8",
    hints: [
      "First, distribute 4 to both terms inside the parentheses. Remember: 4 times 2x, and 4 times -1. What do you get?",
      "Excellent! You should have 8x - 4 + 3. Now combine the constant terms (-4 + 3). The coefficient of x won't change."
    ],
    solution: "To simplify 4(2x - 1) + 3:\n\nStep 1: Distribute 4 to both terms inside:\n  4(2x) = 8x\n  4(-1) = -4\n  So: 8x - 4\n\nStep 2: Rewrite with the + 3:\n  8x - 4 + 3\n\nStep 3: Combine constant terms (-4 + 3 = -1):\n  8x - 1\n\nStep 4: The coefficient of x is 8.\n\nThe answer is 8. ✓",
    topic: "TEKS A.10 - Simplifying Expressions",
    category: "simplify"
  },
  {
    id: "43",
    question: "Simplify: 6x - 2x + 3x. What is the coefficient of x?",
    answer: "7",
    hints: [
      "All three terms have the variable x, so they're 'like terms' that can be combined. Think of this as: 'I have 6 x's, I take away 2 x's, then I add 3 more x's.' How many x's do I have total?",
      "Perfect! Combine the coefficients: 6 - 2 + 3. Calculate this to find the coefficient."
    ],
    solution: "To simplify 6x - 2x + 3x:\n\nStep 1: Identify all like terms (they all have x):\n  6x, -2x, and +3x\n\nStep 2: Combine coefficients:\n  (6 - 2 + 3)x\n  = 7x\n\nStep 3: The coefficient of x is 7.\n\nThe answer is 7. ✓",
    topic: "TEKS A.10 - Simplifying Expressions",
    category: "simplify"
  },
  {
    id: "44",
    question: "Simplify: 3(x + 4) - 2(x - 1). What is the coefficient of x?",
    answer: "1",
    hints: [
      "This has two sets of parentheses. Distribute both: 3 to (x + 4) and -2 to (x - 1). Be careful with the negative sign! What do you get?",
      "Great! You should have 3x + 12 - 2x + 2 (note: -2 times -1 = +2). Now combine like terms: the x terms and the constant terms separately."
    ],
    solution: "To simplify 3(x + 4) - 2(x - 1):\n\nStep 1: Distribute 3 to (x + 4):\n  3x + 12\n\nStep 2: Distribute -2 to (x - 1):\n  -2x + 2  (remember: -2 × -1 = +2)\n\nStep 3: Combine both parts:\n  3x + 12 - 2x + 2\n\nStep 4: Combine like terms:\n  x terms: 3x - 2x = x (or 1x)\n  Constants: 12 + 2 = 14\n  Result: x + 14\n\nStep 5: The coefficient of x is 1.\n\nThe answer is 1. ✓",
    topic: "TEKS A.10 - Simplifying Expressions",
    category: "simplify"
  },

  // Systems of Equations (A.5C) - NEW: 8 problems (varied answers)
  {
    id: "45",
    question: "Solve the system by substitution: y = 2x and x + y = 9. Find x.",
    answer: "3",
    hints: [
      "A system of equations has two equations that must both be true. The first equation tells you that y equals 2x. Since you know what y equals, you can replace y in the second equation with 2x. What equation do you get?",
      "Perfect! Substituting gives x + 2x = 9. Combine like terms to get 3x = 9, then divide by 3."
    ],
    solution: "To solve this system by substitution:\n\nStep 1: We have two equations:\n  y = 2x ... (equation 1)\n  x + y = 9 ... (equation 2)\n\nStep 2: Since y = 2x, substitute 2x for y in equation 2:\n  x + (2x) = 9\n  3x = 9\n\nStep 3: Divide both sides by 3:\n  x = 3\n\nStep 4: Check! Find y: y = 2(3) = 6\n  Does x + y = 9? Yes: 3 + 6 = 9 ✓",
    topic: "TEKS A.5C - Systems of Equations",
    category: "systems"
  },
  {
    id: "46",
    question: "Solve the system: y = x + 1 and y = 3x - 7. Find x.",
    answer: "4",
    hints: [
      "Both equations equal y, which means they equal each other! If y = x + 1 AND y = 3x - 7, then x + 1 must equal 3x - 7. Can you set them equal and solve for x?",
      "Great! You have x + 1 = 3x - 7. Move all x terms to one side and constants to the other. Add 7 to both sides and subtract x from both sides."
    ],
    solution: "To solve this system:\n\nStep 1: Both equations equal y:\n  y = x + 1\n  y = 3x - 7\n\nStep 2: Set them equal to each other:\n  x + 1 = 3x - 7\n\nStep 3: Solve for x. Add 7 to both sides:\n  x + 1 + 7 = 3x\n  x + 8 = 3x\n\nStep 4: Subtract x from both sides:\n  8 = 2x\n  x = 4\n\nStep 5: Verify! y = 4 + 1 = 5, and y = 3(4) - 7 = 5 ✓",
    topic: "TEKS A.5C - Systems of Equations",
    category: "systems"
  },
  {
    id: "47",
    question: "Solve the system: y = 2x and y = x + 5. Find x.",
    answer: "5",
    hints: [
      "Since both expressions equal y, they must equal each other. Set 2x equal to x + 5. What do you get?",
      "Perfect! You have 2x = x + 5. Subtract x from both sides to isolate x on one side."
    ],
    solution: "To solve this system:\n\nStep 1: We have:\n  y = 2x\n  y = x + 5\n\nStep 2: Since both equal y, set them equal:\n  2x = x + 5\n\nStep 3: Subtract x from both sides:\n  2x - x = 5\n  x = 5\n\nStep 4: Check! y = 2(5) = 10, and y = 5 + 5 = 10 ✓",
    topic: "TEKS A.5C - Systems of Equations",
    category: "systems"
  },
  {
    id: "48",
    question: "Solve the system: y = 3x and x + y = 16. Find x.",
    answer: "4",
    hints: [
      "You know y = 3x from the first equation. Use substitution: replace y in the second equation (x + y = 16) with 3x. What equation results?",
      "Excellent! You should have x + 3x = 16. Combine the x terms, then divide."
    ],
    solution: "To solve by substitution:\n\nStep 1: We have:\n  y = 3x\n  x + y = 16\n\nStep 2: Substitute 3x for y in the second equation:\n  x + 3x = 16\n  4x = 16\n\nStep 3: Divide both sides by 4:\n  x = 4\n\nStep 4: Verify! y = 3(4) = 12\n  Does x + y = 16? Yes: 4 + 12 = 16 ✓",
    topic: "TEKS A.5C - Systems of Equations",
    category: "systems"
  },
  {
    id: "49",
    question: "Solve the system: y = 2x + 1 and y = 3x - 6. Find x.",
    answer: "7",
    hints: [
      "Both equations give you y in terms of x. Since they both equal y, set them equal to each other: 2x + 1 = 3x - 6. Can you solve for x?",
      "Great! Collect x terms on one side and constants on the other. Try adding 6 to both sides and subtracting 2x from both sides."
    ],
    solution: "To solve this system:\n\nStep 1: Both equations equal y:\n  y = 2x + 1\n  y = 3x - 6\n\nStep 2: Set them equal:\n  2x + 1 = 3x - 6\n\nStep 3: Add 6 to both sides:\n  2x + 1 + 6 = 3x\n  2x + 7 = 3x\n\nStep 4: Subtract 2x from both sides:\n  7 = x\n\nStep 5: Check! y = 2(7) + 1 = 15, and y = 3(7) - 6 = 15 ✓",
    topic: "TEKS A.5C - Systems of Equations",
    category: "systems"
  },
  {
    id: "50",
    question: "Solve the system: y = x and x + y = 12. Find x.",
    answer: "6",
    hints: [
      "The first equation tells you that y and x are equal. So in the second equation (x + y = 12), you can replace y with x. What do you get?",
      "Perfect! You have x + x = 12, which is 2x = 12. Divide by 2."
    ],
    solution: "To solve by substitution:\n\nStep 1: We have:\n  y = x\n  x + y = 12\n\nStep 2: Since y = x, substitute x for y:\n  x + x = 12\n  2x = 12\n\nStep 3: Divide by 2:\n  x = 6\n\nStep 4: Check! y = 6 too\n  Does x + y = 12? Yes: 6 + 6 = 12 ✓",
    topic: "TEKS A.5C - Systems of Equations",
    category: "systems"
  },
  {
    id: "53",
    question: "Solve the system: y = 2x and x + y = 15. Find y.",
    answer: "10",
    hints: [
      "To find y, you first need to find x. Substitute y = 2x into the second equation. What equation do you get for x?",
      "Good! You should have x + 2x = 15, so 3x = 15, giving x = 5. Now use y = 2x to find y."
    ],
    solution: "To find y in this system:\n\nStep 1: We have:\n  y = 2x\n  x + y = 15\n\nStep 2: Substitute y = 2x into the second equation:\n  x + 2x = 15\n  3x = 15\n  x = 5\n\nStep 3: Now find y using y = 2x:\n  y = 2(5)\n  y = 10\n\nStep 4: Check! Does 5 + 10 = 15? Yes! ✓",
    topic: "TEKS A.5C - Systems of Equations",
    category: "systems"
  },
  {
    id: "54",
    question: "Solve the system: y = x + 3 and y = 2x. Find y.",
    answer: "6",
    hints: [
      "To find y, first find x. Since both equations equal y, set them equal to each other: x + 3 = 2x. Solve for x.",
      "Great! You should get x = 3. Now substitute x = 3 into either equation to find y."
    ],
    solution: "To find y in this system:\n\nStep 1: Both equations equal y:\n  y = x + 3\n  y = 2x\n\nStep 2: Set them equal:\n  x + 3 = 2x\n\nStep 3: Subtract x from both sides:\n  3 = x\n\nStep 4: Find y using y = 2x:\n  y = 2(3)\n  y = 6\n\nStep 5: Verify! y = 3 + 3 = 6 ✓",
    topic: "TEKS A.5C - Systems of Equations",
    category: "systems"
  },

  // Graphing - Slope-Intercept Form (A.2B, A.3C) - NEW: 10 problems
  {
    id: "57",
    question: "Solve for b: What is the y-intercept of the line y = 3x + 5?",
    answer: "5",
    hints: [
      "The slope-intercept form is y = mx + b, where m is the slope and b is the y-intercept. The y-intercept is where the line crosses the y-axis. In the equation y = 3x + 5, which number represents b?",
      "Exactly! In y = 3x + 5, the constant term at the end (5) is the y-intercept."
    ],
    solution: "To find the y-intercept:\n\nStep 1: Recognize the slope-intercept form: y = mx + b\n  where m = slope and b = y-intercept\n\nStep 2: Identify the parts of y = 3x + 5:\n  m = 3 (the coefficient of x)\n  b = 5 (the constant term)\n\nStep 3: The y-intercept is 5.\n\nThis means the line crosses the y-axis at the point (0, 5). ✓",
    topic: "TEKS A.3C - Identify Y-Intercept",
    category: "graphing"
  },
  {
    id: "58",
    question: "Solve for b: What is the y-intercept of y = -2x + 7?",
    answer: "7",
    hints: [
      "In the slope-intercept form y = mx + b, the y-intercept b is the value where the line crosses the y-axis when x = 0. In y = -2x + 7, what number stands alone without an x attached?",
      "Right! The constant term 7 is the y-intercept."
    ],
    solution: "To identify the y-intercept:\n\nStep 1: Write the equation in y = mx + b form:\n  y = -2x + 7 ✓ (already in this form)\n\nStep 2: Identify b (the constant term):\n  m = -2 (slope)\n  b = 7 (y-intercept)\n\nStep 3: The y-intercept is 7.\n\nWhen x = 0, y = 7, so the line crosses the y-axis at (0, 7). ✓",
    topic: "TEKS A.3C - Identify Y-Intercept",
    category: "graphing"
  },
  {
    id: "59",
    question: "Write the equation: A line has slope m = 4 and y-intercept b = 3. What is the equation in form y = mx + b? (Enter as: 4x+3)",
    answer: "4x+3",
    hints: [
      "You're given the slope (m = 4) and y-intercept (b = 3). The slope-intercept form is y = mx + b. Just substitute the values you know for m and b.",
      "Perfect! Substitute m = 4 and b = 3 into y = mx + b to get y = 4x + 3. Enter this as 4x+3."
    ],
    solution: "To write the equation:\n\nStep 1: Start with the slope-intercept form:\n  y = mx + b\n\nStep 2: Substitute the given values:\n  m = 4 (slope)\n  b = 3 (y-intercept)\n\nStep 3: Write the equation:\n  y = 4x + 3\n\nEntered as: 4x+3 ✓",
    topic: "TEKS A.2B - Write Equation from Slope and Intercept",
    category: "graphing"
  },
  {
    id: "60",
    question: "Write the equation: A line has slope m = 2 and y-intercept b = -5. What is the equation? (Enter as: 2x-5)",
    answer: "2x-5",
    hints: [
      "You have the slope (m = 2) and y-intercept (b = -5). Plug these values into the slope-intercept formula y = mx + b. Remember that adding a negative is the same as subtracting.",
      "Exactly! With m = 2 and b = -5, you get y = 2x + (-5), which is written as y = 2x - 5. Enter as 2x-5."
    ],
    solution: "To write the equation:\n\nStep 1: Use the slope-intercept form:\n  y = mx + b\n\nStep 2: Substitute the values:\n  m = 2 (slope)\n  b = -5 (y-intercept)\n\nStep 3: Write the equation:\n  y = 2x + (-5)\n  y = 2x - 5\n\nEntered as: 2x-5 ✓",
    topic: "TEKS A.2B - Write Equation from Slope and Intercept",
    category: "graphing"
  },
  {
    id: "61",
    question: "Solve for x: Find the x-intercept of y = 2x - 6 (where y = 0)",
    answer: "3",
    hints: [
      "The x-intercept is where the line crosses the x-axis, which happens when y = 0. Substitute y = 0 into the equation y = 2x - 6. What equation do you get?",
      "Great! You have 0 = 2x - 6. Add 6 to both sides, then divide by 2 to solve for x."
    ],
    solution: "To find the x-intercept:\n\nStep 1: The x-intercept occurs where y = 0.\n\nStep 2: Substitute y = 0 into y = 2x - 6:\n  0 = 2x - 6\n\nStep 3: Solve for x. Add 6 to both sides:\n  6 = 2x\n\nStep 4: Divide by 2:\n  x = 3\n\nThe x-intercept is 3, meaning the line crosses the x-axis at (3, 0). ✓",
    topic: "TEKS A.3C - Find X-Intercept",
    category: "graphing"
  },
  {
    id: "62",
    question: "Solve for x: Find the x-intercept of y = 3x - 12 (where y = 0)",
    answer: "4",
    hints: [
      "The x-intercept is the point where the line crosses the x-axis, which means y = 0. Replace y with 0 in the equation and solve for x.",
      "Perfect! With 0 = 3x - 12, add 12 to both sides to get 3x = 12, then divide by 3."
    ],
    solution: "To find the x-intercept:\n\nStep 1: At the x-intercept, y = 0.\n\nStep 2: Substitute y = 0 into y = 3x - 12:\n  0 = 3x - 12\n\nStep 3: Add 12 to both sides:\n  12 = 3x\n\nStep 4: Divide by 3:\n  x = 4\n\nThe x-intercept is 4, so the line crosses the x-axis at (4, 0). ✓",
    topic: "TEKS A.3C - Find X-Intercept",
    category: "graphing"
  },
  {
    id: "63",
    question: "A phone plan costs $20 base fee plus $0.10 per minute. Write the cost equation. What is the slope m? (cost = mx + b where x = minutes)",
    answer: "0.10",
    hints: [
      "In the equation cost = mx + b, the slope m represents the rate of change—how much the cost increases for each additional minute. What's the cost per minute in this problem?",
      "Exactly! The cost per minute is $0.10, so m = 0.10. This is the slope (rate of change)."
    ],
    solution: "To find the slope in this context:\n\nStep 1: Understand the equation structure: cost = mx + b\n  m = slope (rate of change per unit)\n  x = number of minutes\n  b = y-intercept (fixed starting cost)\n\nStep 2: Identify the rate: The plan charges $0.10 per minute.\n  This means for every 1 minute, the cost increases by $0.10.\n\nStep 3: The slope m = 0.10\n\nThe full equation would be: cost = 0.10x + 20 ✓",
    topic: "TEKS A.3B - Rate of Change in Context",
    category: "graphing"
  },
  {
    id: "64",
    question: "A taxi charges $3 initially plus $2 per mile. In y = mx + b, what is b (the y-intercept)?",
    answer: "3",
    hints: [
      "In y = mx + b, the y-intercept b is the starting value when x = 0. Think about what you pay even before traveling any miles. What's the initial charge?",
      "Right! The initial charge is $3, which is what you pay when you've traveled 0 miles. So b = 3."
    ],
    solution: "To identify the y-intercept in context:\n\nStep 1: Understand y = mx + b:\n  m = rate per mile ($2)\n  b = initial value (when x = 0)\n\nStep 2: Find the initial charge:\n  The taxi charges $3 before you travel any distance.\n  When x = 0 miles, cost = $3\n\nStep 3: The y-intercept b = 3\n\nThe full equation: cost = 2x + 3 ✓",
    topic: "TEKS A.3B - Rate of Change in Context",
    category: "graphing"
  },
  {
    id: "65",
    question: "Solve for b: A line passes through (0, 4) and has slope 3. What is the y-intercept b?",
    answer: "4",
    hints: [
      "The y-intercept is the point where the line crosses the y-axis, which happens when x = 0. You're given a point (0, 4). What's special about this point?",
      "Exactly! Since x = 0 in the point (0, 4), this IS the y-intercept. So b = 4."
    ],
    solution: "To find the y-intercept from a point:\n\nStep 1: Recall that the y-intercept is where x = 0.\n\nStep 2: The given point is (0, 4).\n  x = 0 ✓ (This is on the y-axis!)\n  y = 4\n\nStep 3: Therefore, the y-intercept b = 4.\n\nThe slope (m = 3) doesn't affect the y-intercept when you already know a point where x = 0. ✓",
    topic: "TEKS A.2B - Y-Intercept from Point",
    category: "graphing"
  },
  {
    id: "66",
    question: "Solve for m: A line has y-intercept 2 and passes through (3, 11). Find the slope m using y = mx + b.",
    answer: "3",
    hints: [
      "You know b = 2 (y-intercept) and the line passes through (3, 11). Substitute x = 3, y = 11, and b = 2 into y = mx + b. This gives you an equation to solve for m.",
      "Great! You should have 11 = m(3) + 2. Subtract 2 from both sides to get 9 = 3m, then divide by 3."
    ],
    solution: "To find the slope from a point and y-intercept:\n\nStep 1: Use the slope-intercept form: y = mx + b\n  We know: b = 2 (y-intercept)\n  Point: (3, 11) means x = 3 and y = 11\n\nStep 2: Substitute into the equation:\n  11 = m(3) + 2\n  11 = 3m + 2\n\nStep 3: Solve for m. Subtract 2 from both sides:\n  9 = 3m\n\nStep 4: Divide by 3:\n  m = 3\n\nThe slope is 3. ✓",
    topic: "TEKS A.2B - Find Slope from Point and Intercept",
    category: "graphing"
  },

  // Point Plotting Problems (A.2A, A.2C, A.3D) - NEW: 10 problems
  {
    id: "67",
    question: "Plot the point (3, 4) on the coordinate plane.",
    answer: "plot",
    type: "plot-points",
    expectedPoints: [{ x: 3, y: 4 }],
    hints: [
      "Points on a coordinate plane are written as (x, y). The first number tells you how far to move horizontally (left/right), and the second tells you how far to move vertically (up/down) from the origin (0, 0). For (3, 4), which direction do you move first, and how far?",
      "Great! Move 3 units to the right (positive x), then 4 units up (positive y) from the origin. Click on that location to place your point."
    ],
    solution: "To plot the point (3, 4):\n\nStep 1: Understand the coordinate notation (x, y):\n  x = 3 (horizontal position)\n  y = 4 (vertical position)\n\nStep 2: Start at the origin (0, 0)—the center where the x and y axes meet.\n\nStep 3: Move horizontally first:\n  3 is positive, so move 3 units to the RIGHT.\n\nStep 4: Then move vertically:\n  4 is positive, so move 4 units UP.\n\nStep 5: Click to place the point at (3, 4). ✓",
    topic: "TEKS A.2A - Plot Points on Coordinate Plane",
    category: "plot-points"
  },
  {
    id: "68",
    question: "Plot the point (-2, 5) on the coordinate plane.",
    answer: "plot",
    type: "plot-points",
    expectedPoints: [{ x: -2, y: 5 }],
    hints: [
      "In the point (-2, 5), the x-coordinate is -2. What does a negative x-coordinate tell you about which direction to move from the origin?",
      "Exactly! Negative x means move LEFT. So from the origin, move 2 units left, then 5 units up (positive y). Click to place the point."
    ],
    solution: "To plot the point (-2, 5):\n\nStep 1: Identify the coordinates:\n  x = -2 (horizontal position)\n  y = 5 (vertical position)\n\nStep 2: Start at the origin (0, 0).\n\nStep 3: Move horizontally:\n  -2 is negative, so move 2 units to the LEFT.\n\nStep 4: Then move vertically:\n  5 is positive, so move 5 units UP.\n\nStep 5: Click to place the point at (-2, 5) in Quadrant II. ✓",
    topic: "TEKS A.2A - Plot Points on Coordinate Plane",
    category: "plot-points"
  },
  {
    id: "69",
    question: "Plot the point (0, -3) on the coordinate plane.",
    answer: "plot",
    type: "plot-points",
    expectedPoints: [{ x: 0, y: -3 }],
    hints: [
      "When the x-coordinate is 0, the point lies on the y-axis (the vertical line). The y-coordinate is -3. What does negative y tell you about the direction to move?",
      "Right! Negative y means move DOWN. Stay on the y-axis (don't move left or right), and move 3 units down from the origin."
    ],
    solution: "To plot the point (0, -3):\n\nStep 1: Identify the coordinates:\n  x = 0 (on the y-axis)\n  y = -3 (vertical position)\n\nStep 2: Start at the origin (0, 0).\n\nStep 3: Move horizontally:\n  x = 0, so DON'T move left or right. Stay on the y-axis.\n\nStep 4: Move vertically:\n  -3 is negative, so move 3 units DOWN.\n\nStep 5: Click to place the point at (0, -3) on the negative y-axis. ✓",
    topic: "TEKS A.2A - Plot Points on Coordinate Plane",
    category: "plot-points"
  },
  {
    id: "70",
    question: "Plot the point (-4, -2) on the coordinate plane.",
    answer: "plot",
    type: "plot-points",
    expectedPoints: [{ x: -4, y: -2 }],
    hints: [
      "When both coordinates are negative, which quadrant will the point be in? Think about negative x (left) and negative y (down).",
      "Perfect! Both negative means Quadrant III (lower-left). From the origin, move 4 units left, then 2 units down."
    ],
    solution: "To plot the point (-4, -2):\n\nStep 1: Identify the coordinates:\n  x = -4 (horizontal position)\n  y = -2 (vertical position)\n\nStep 2: Start at the origin (0, 0).\n\nStep 3: Move horizontally:\n  -4 is negative, so move 4 units to the LEFT.\n\nStep 4: Then move vertically:\n  -2 is negative, so move 2 units DOWN.\n\nStep 5: The point is in Quadrant III (both coordinates negative).\n  Click to place the point at (-4, -2). ✓",
    topic: "TEKS A.2A - Plot Points on Coordinate Plane",
    category: "plot-points"
  },
  {
    id: "71",
    question: "Plot TWO points: (1, 2) and (4, 5). These are on the line y = x + 1.",
    answer: "plot",
    type: "plot-points",
    expectedPoints: [{ x: 1, y: 2 }, { x: 4, y: 5 }],
    hints: [
      "To graph a line, you need at least two points. For each point (x, y), move x units horizontally and y units vertically from the origin. Start with (1, 2)—where should you place it?",
      "Great! Now plot the second point (4, 5): move 4 right and 5 up. Once you place both points, they should form a straight line!"
    ],
    solution: "To plot two points on the line y = x + 1:\n\nStep 1: First point (1, 2):\n  Start at origin\n  Move 1 unit RIGHT (x = 1)\n  Move 2 units UP (y = 2)\n  Click to place the point\n\nStep 2: Second point (4, 5):\n  Start at origin\n  Move 4 units RIGHT (x = 4)\n  Move 5 units UP (y = 5)\n  Click to place the point\n\nStep 3: Both points satisfy y = x + 1:\n  Check: 2 = 1 + 1 ✓ and 5 = 4 + 1 ✓\n  The points should lie on the same straight line. ✓",
    topic: "TEKS A.2C - Plot Points from Linear Equation",
    category: "plot-points"
  },
  {
    id: "72",
    question: "Plot TWO points on the line y = 2x: (0, 0) and (3, 6).",
    answer: "plot",
    type: "plot-points",
    expectedPoints: [{ x: 0, y: 0 }, { x: 3, y: 6 }],
    hints: [
      "The equation y = 2x means the y-value is always twice the x-value. The first point (0, 0) is at the origin. For the second point (3, 6), what's the relationship between 3 and 6?",
      "Exactly! 6 is 2 times 3, so it fits y = 2x. Plot (0, 0) at the origin, then move 3 right and 6 up for (3, 6). Notice the slope is 2!"
    ],
    solution: "To plot two points on y = 2x:\n\nStep 1: First point (0, 0):\n  This is the origin—where the line crosses both axes.\n  Click at the center (0, 0)\n\nStep 2: Second point (3, 6):\n  Start at origin\n  Move 3 units RIGHT (x = 3)\n  Move 6 units UP (y = 6)\n  Click to place the point\n\nStep 3: Verify both points satisfy y = 2x:\n  Check: 0 = 2(0) ✓ and 6 = 2(3) ✓\n  The slope is rise/run = 6/3 = 2 ✓",
    topic: "TEKS A.2C - Plot Points from Linear Equation",
    category: "plot-points"
  },
  {
    id: "73",
    question: "Plot the solution to the equation x + y = 5 where x = 2. (Hint: Find y first, then plot the point)",
    answer: "plot",
    type: "plot-points",
    expectedPoints: [{ x: 2, y: 3 }],
    hints: [
      "You're given x = 2, and you know x + y = 5. Substitute 2 for x in the equation. What equation do you get for y?",
      "Perfect! You have 2 + y = 5, so y = 3. Now plot the point (2, 3): move 2 right and 3 up from the origin."
    ],
    solution: "To find and plot the solution:\n\nStep 1: Given information:\n  Equation: x + y = 5\n  x = 2\n\nStep 2: Substitute x = 2:\n  2 + y = 5\n\nStep 3: Solve for y:\n  y = 5 - 2\n  y = 3\n\nStep 4: The solution point is (2, 3)\n\nStep 5: Plot (2, 3):\n  Move 2 units RIGHT (x = 2)\n  Move 3 units UP (y = 3)\n  Click to place the point ✓",
    topic: "TEKS A.3D - Graph Solution Sets",
    category: "plot-points"
  },
  {
    id: "74",
    question: "The equation y = -x + 4 passes through (1, 3) and (2, 2). Plot these TWO points.",
    answer: "plot",
    type: "plot-points",
    expectedPoints: [{ x: 1, y: 3 }, { x: 2, y: 2 }],
    hints: [
      "The equation y = -x + 4 has a negative slope, which means as x increases, y decreases. Verify that the points work: when x = 1, what's y? When x = 2, what's y?",
      "Great! When x = 1, y = -1 + 4 = 3 ✓ and when x = 2, y = -2 + 4 = 2 ✓. Plot (1, 3) and (2, 2) to see the downward slope!"
    ],
    solution: "To plot two points on y = -x + 4:\n\nStep 1: Verify the first point (1, 3):\n  y = -(1) + 4 = -1 + 4 = 3 ✓\n\nStep 2: Plot (1, 3):\n  Move 1 unit RIGHT\n  Move 3 units UP\n  Click to place the point\n\nStep 3: Verify the second point (2, 2):\n  y = -(2) + 4 = -2 + 4 = 2 ✓\n\nStep 4: Plot (2, 2):\n  Move 2 units RIGHT\n  Move 2 units UP\n  Click to place the point\n\nStep 5: Notice the slope is negative (line goes down as x increases). ✓",
    topic: "TEKS A.2C - Plot Points from Linear Equation",
    category: "plot-points"
  },
  {
    id: "75",
    question: "Plot THREE points on the line y = x: (-2, -2), (0, 0), and (3, 3).",
    answer: "plot",
    type: "plot-points",
    expectedPoints: [{ x: -2, y: -2 }, { x: 0, y: 0 }, { x: 3, y: 3 }],
    hints: [
      "The line y = x means the y-coordinate always equals the x-coordinate. Look at the three points—what pattern do you notice about their x and y values?",
      "Exactly! In each point, x equals y. Plot (-2, -2) in Quadrant III, (0, 0) at the origin, and (3, 3) in Quadrant I. They should form a diagonal line at 45°!"
    ],
    solution: "To plot three points on y = x:\n\nStep 1: First point (-2, -2):\n  Move 2 units LEFT (x = -2)\n  Move 2 units DOWN (y = -2)\n  Click to place in Quadrant III\n\nStep 2: Second point (0, 0):\n  Click at the origin (center)\n\nStep 3: Third point (3, 3):\n  Move 3 units RIGHT (x = 3)\n  Move 3 units UP (y = 3)\n  Click to place in Quadrant I\n\nStep 4: All three points satisfy y = x:\n  -2 = -2 ✓, 0 = 0 ✓, 3 = 3 ✓\n  The line passes through the origin at a 45° angle. ✓",
    topic: "TEKS A.2C - Plot Points from Linear Equation",
    category: "plot-points"
  },
  {
    id: "76",
    question: "Plot the y-intercept and x-intercept of the line y = 2x - 4. (Hint: y-intercept at x=0, x-intercept at y=0)",
    answer: "plot",
    type: "plot-points",
    expectedPoints: [{ x: 0, y: -4 }, { x: 2, y: 0 }],
    hints: [
      "Intercepts are where the line crosses the axes. The y-intercept is where x = 0, and the x-intercept is where y = 0. Start by finding the y-intercept: substitute x = 0 into y = 2x - 4.",
      "Perfect! The y-intercept is (0, -4). Now find the x-intercept by setting y = 0: solve 0 = 2x - 4 for x. Then plot both intercept points!"
    ],
    solution: "To plot the intercepts of y = 2x - 4:\n\nStep 1: Find y-intercept (where x = 0):\n  y = 2(0) - 4\n  y = -4\n  Point: (0, -4)\n\nStep 2: Plot (0, -4):\n  Stay on y-axis (x = 0)\n  Move 4 units DOWN (y = -4)\n  Click to place the point\n\nStep 3: Find x-intercept (where y = 0):\n  0 = 2x - 4\n  4 = 2x\n  x = 2\n  Point: (2, 0)\n\nStep 4: Plot (2, 0):\n  Move 2 units RIGHT (x = 2)\n  Stay on x-axis (y = 0)\n  Click to place the point\n\nStep 5: These intercepts show where the line crosses both axes. ✓",
    topic: "TEKS A.3C - Graph Intercepts",
    category: "plot-points"
  }
];

export function getRandomProblem(): MathProblem {
  const randomIndex = Math.floor(Math.random() * algebraProblems.length);
  return algebraProblems[randomIndex];
}
