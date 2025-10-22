# Math Puzzle Application - Design Guidelines

## Design Approach
**Design System + Educational Reference:** Material Design principles combined with inspiration from Khan Academy and Brilliant.org. Prioritizing clarity, immediate feedback, and encouraging progression through clean information architecture and purposeful color coding.

## Core Design Principles
- **Clarity First:** Mathematical content must be instantly readable with zero ambiguity
- **Encouraging Feedback:** Visual responses celebrate success and gently guide through mistakes
- **Progressive Disclosure:** Show complexity gradually; hints reveal only when needed
- **Distraction-Free Focus:** Minimal decoration; every element serves learning

## Color Palette

**Light Mode (Primary):**
- Background: 210 20% 98% (soft cool white)
- Surface: 0 0% 100% (pure white cards)
- Text Primary: 220 15% 15% (near black for readability)
- Text Secondary: 220 10% 45% (supporting information)
- Success: 142 76% 36% (confident green for correct answers)
- Error: 0 84% 60% (gentle red for mistakes)
- Warning: 38 92% 50% (warm amber for hints)
- Primary Action: 221 83% 53% (vibrant blue for interaction)
- Border: 220 13% 91% (subtle divisions)

**Dark Mode:**
- Background: 220 15% 10%
- Surface: 220 12% 14%
- Text Primary: 210 15% 92%
- Text Secondary: 210 12% 65%
- Success: 142 70% 45%
- Error: 0 72% 65%
- Warning: 38 85% 60%
- Primary Action: 221 75% 60%

## Typography

**Font Families:**
- Primary UI: 'Inter' (clean, highly legible)
- Mathematical Expressions: 'JetBrains Mono' or 'Fira Code' (monospace for alignment)
- Headings: 'Inter' with semibold weight

**Text Hierarchy:**
- Page Title: text-3xl, font-semibold
- Problem Statement: text-2xl, leading-relaxed, font-medium
- Math Expressions: text-3xl to text-4xl, font-mono, tracking-wide
- Hint Text: text-base, leading-relaxed
- Feedback Messages: text-lg, font-medium
- Button Labels: text-base, font-medium

## Layout System

**Spacing Primitives:** 2, 4, 6, 8, 12, 16 (p-4, gap-6, m-8, etc.)

**Container Strategy:**
- Max-width: max-w-4xl centered for problem area
- Problem card: Full attention with generous padding (p-8 to p-12)
- Vertical spacing: space-y-8 between major sections
- Form elements: Consistent h-14 for touch targets

**Grid Layout:**
- Single column focus on mobile
- Two-column on desktop: Problem (60%) | Progress sidebar (40%)
- Hint panel slides in below problem when activated

## Component Library

**Problem Card:**
- White surface with subtle shadow (shadow-lg)
- Rounded-2xl corners
- Border border-2 in subtle gray
- Padding p-8 on mobile, p-12 on desktop
- Background blurred backdrop when modal hints appear

**Answer Input Field:**
- Height h-16 for comfortable typing
- Large text (text-2xl) matching problem size
- Rounded-lg with border-2
- Focus state: border becomes primary action color with ring-4 ring-opacity-20
- Background surface color with high contrast text

**Action Buttons:**
- Primary (Check Answer): bg-primary with white text, h-12, rounded-lg, px-8
- Secondary (Show Hint): variant-outline with warning color, h-12, rounded-lg
- Skip/Next: variant-ghost with secondary text
- Full width on mobile, inline on desktop

**Feedback Banner:**
- Success: bg-success/10 with success text, border-l-4 border-success
- Error: bg-error/10 with error text, border-l-4 border-error
- Rounded-lg, p-4, appears with slide-down animation
- Positioned above input field for immediate visibility

**Hint Panel:**
- Collapsible accordion-style component
- Warning color accent (border-l-4)
- Light warning background (bg-warning/5)
- Icon indicator (lightbulb) with hint count badge
- Padding p-6, rounded-lg

**Progress Indicator:**
- Horizontal progress bar showing problems completed
- Height h-2, rounded-full
- Success color fill, gray background
- Current problem number displayed: "Problem 5 of 10"
- Text-sm with secondary color

**Topic Badge:**
- Small pill-shaped indicator showing CCSS standard
- Background primary/10, text primary, rounded-full
- Padding px-3 py-1, text-sm
- Positioned above problem statement

## Visual Enhancements

**Mathematical Expression Rendering:**
- Increase spacing around operators (margin utilities)
- Use monospace font for alignment
- Variables in italic (font-italic)
- Subscripts/superscripts properly sized (text-sm with relative positioning)

**Interactive Feedback:**
- Correct answer: Success color fills input border with subtle scale animation
- Incorrect: Error color with gentle shake animation (duration-150)
- Button press: Scale-95 transform on active state
- Smooth transitions (transition-all duration-200)

**Card Shadows:**
- Default: shadow-lg
- Hover (for interactive cards): shadow-xl
- Focus: shadow-2xl with colored ring

## Images

No hero image required. This is a utility-focused application where:
- Background remains clean (solid background color)
- Focus stays on problem-solving interface
- Small decorative illustrations appear in success states (confetti burst SVG)
- Empty state illustrations when no problems loaded (friendly abstract shapes)

## Animations

Minimal, purposeful feedback only:
- Answer check: 300ms fade-in for feedback banner
- Correct answer: Subtle confetti particle burst (duration 500ms, then auto-clear)
- Hint reveal: Smooth 200ms slide-down expansion
- Problem transition: 250ms crossfade between problems
- NO: Background animations, continuous motion, decorative effects

## Accessibility

- WCAG AAA contrast ratios for all text
- Keyboard navigation: Tab through all interactive elements
- Focus indicators clearly visible (ring-2 ring-offset-2)
- Screen reader labels on all math symbols
- Error messages announce via aria-live regions
- Dark mode fully supported with consistent contrast
- Touch targets minimum 44x44px

This design creates a focused, encouraging learning environment where students can confidently practice algebra without visual overwhelm, receiving clear feedback that supports their mathematical development.