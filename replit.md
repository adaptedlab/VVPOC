# The Variable Valley - Interactive Story with Math Puzzles

## Overview

This is an interactive storytelling application that combines narrative choices with Algebra I puzzle challenges. Players navigate through "The Variable Valley" story, set on Mathematics Island, where they take on the role of a Protocol Agent working with ARIA (an AI assistant) to restore a fractured mathematical world. The game features four main regions (Variable Valley, Equation Engine, Function Fields, Graphing Grounds), each with three sub-locations, leading to 24 unique endings based on player choices. The application features a clean, educational design inspired by Khan Academy and Brilliant.org, with immediate visual feedback for both story choices and puzzle solutions.

The application is built as a full-stack TypeScript project with React on the frontend and Express on the backend, following a modern monorepo structure with shared code between client and server. This is a text-based proof of concept designed to demonstrate the game concept to investors and VCs.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool and development server. The application uses a client-side routing approach with `wouter` for navigation between pages.

**UI Component System**: Built on shadcn/ui (Radix UI primitives) with Tailwind CSS for styling. The design system implements a "New York" style variant with custom color schemes for both light and dark modes. Key design principles emphasize clarity, minimal distraction, and encouraging feedback for educational content.

**Visual Identity**:
- ARIA Avatar: Sparkles icon with purple-blue gradient background appears in all hint boxes and solution reveals, giving the AI assistant a visual presence
- Region Color Themes: Each of the four main regions has distinct gradient color theming:
  - Variable Valley: Emerald to teal (nature/growth)
  - Equation Engine: Orange to red (mechanical/energy)
  - Function Fields: Amber to yellow (fields/agriculture)
  - Graphing Grounds: Cyan to blue (analytical/mathematical)
- Region badges display on story screens showing current location
- Background gradients subtly shift based on current region for visual immersion

**State Management**: Uses React Query (@tanstack/react-query) for server state management, with local component state for UI interactions. The query client is configured with specific behaviors for handling authentication (401 responses) and no automatic refetching to reduce unnecessary network calls.

**Component Structure**: 
- Main components: `StoryScene` (narrative display with region-specific colors and choice selection), `MathPuzzle` (problem presentation with ARIA avatar in progressive hints and answer reveal), `GraphPlotter` (interactive SVG coordinate plane for point-plotting problems), `RepairMessage` (displays after each correctly solved puzzle showing world repair), and `RestorationMessage` (displays when 3 puzzles are solved correctly)
- Reusable UI components stored in `client/src/components/ui/` following shadcn patterns
- Page components in `client/src/pages/` (currently `home.tsx` and `not-found.tsx`)
- Region theming configuration in `shared/regionColors.ts` provides gradient styles and metadata for each region

**Interactive Graphing System**:
- `GraphPlotter` component provides SVG-based coordinate plane with click-to-plot functionality
- Default range: -10 to 10 on both axes with grid lines and axis labels
- Students click to place points, click again to remove; "Clear All" button available
- Point validation uses ±0.5 unit tolerance for student answers
- `MathPuzzle` detects `type: "plot-points"` problems and renders GraphPlotter instead of text input
- Visual feedback: plotted points shown as circles with coordinate labels on hover

**Progressive Hint System with ARIA Teaching**: 
- After 1st incorrect attempt → Hint 1 (Conceptual): ARIA avatar appears with guiding questions, analogies, and conceptual explanations
- After 2nd incorrect attempt → Hint 2 (Guided): ARIA provides procedural guidance while encouraging student thinking
- After 3rd incorrect attempt → Full worked solution with ARIA avatar showing step-by-step explanation, reasoning, and verification
- All 76 problems feature this two-tier pedagogical approach
- State resets cleanly when moving to a new puzzle

**Styling Approach**: Utility-first with Tailwind CSS, using HSL color values defined as CSS custom properties for theme support. Custom elevate classes (`hover-elevate`, `active-elevate-2`) provide consistent interactive feedback across components.

### Backend Architecture

**Server Framework**: Express.js with TypeScript, running in ESM module mode. The server handles both API routes (prefixed with `/api`) and serves the Vite development server in development or static assets in production.

**Request Logging**: Custom middleware logs API requests with duration tracking and response body capture (truncated to 80 characters for readability).

**Data Storage**: Currently implements an in-memory storage layer (`MemStorage` class) with a defined `IStorage` interface. The interface is designed to be swappable with a database implementation. User CRUD operations are defined but the application's primary data (story nodes and math problems) are stored as static TypeScript objects in the `shared/` directory.

**Error Handling**: Centralized error handling middleware captures errors and returns appropriate HTTP status codes with JSON error messages.

### Data Layer

**Database ORM**: Drizzle ORM configured for PostgreSQL (via Neon serverless driver). Schema defined in `shared/schema.ts` with Zod validation schemas generated from Drizzle tables.

**Schema Design**: Currently defines a `users` table with username/password authentication fields. The database is configured but not actively used for core application functionality, which relies on static data structures.

**Migrations**: Managed through Drizzle Kit with migrations output to `./migrations` directory and schema reading from `shared/schema.ts`.

### Shared Code Architecture

**Problem Data Structure**: Math problems are defined as typed TypeScript objects in `shared/mathProblems.ts` with fields for question text, answer, hints array, topic categorization, and unique IDs. Problems are organized by subject (algebra) and aligned with Texas TEKS Algebra I standards. The database now contains **76 problems** achieving **90%+ TEKS coverage**:
- 20 basic linear equations (A.5A)
- 6 literal equations with concrete values (A.12E) 
- 10 slope problems - all say "Solve for m:" to align with y = mx + b notation (A.3A - complete)
- 6 real-world modeling word problems (A.1, A.4C)
- 6 simplifying expressions (A.10)
- 8 systems of equations (A.5C)
- 10 graphing/slope-intercept problems - identify intercepts, write equations, find x-intercepts, real-world rate of change (A.2B, A.3B, A.3C)
- 10 interactive point-plotting problems - plot points on coordinate plane, visualize linear equations, identify intercepts graphically (A.2A, A.2C, A.3D - NEW)

**Story Structure**: Story nodes stored as a typed record in `client/src/pages/home.tsx` with narrative text, choices, and references to next nodes. Choices can optionally require puzzle completion (`requiresPuzzle` flag). The story features a three-level branching structure starting from Mathematics Island, branching into 4 main regions (Variable Valley, Equation Engine, Function Fields, Graphing Grounds), then 12 sub-locations, and culminating in 24 unique endings. The new Graphing Grounds chapter introduces concepts of slope, y-intercept, and linear equations in the form y = mx + b, with three sub-locations: Slope Calibrator, Intercept Anchor, and Equation Forge.

**Type Safety**: Schema types exported from `shared/schema.ts` using Drizzle's type inference (`$inferSelect`) and Zod schemas for runtime validation, ensuring type safety across client and server boundaries.

## External Dependencies

### UI Framework & Components
- **Radix UI**: Comprehensive set of unstyled, accessible component primitives (accordion, dialog, dropdown, popover, etc.)
- **Tailwind CSS**: Utility-first CSS framework with PostCSS and Autoprefixer
- **shadcn/ui**: Component patterns and configurations built on Radix UI
- **class-variance-authority**: Type-safe variant API for component styling
- **Lucide React**: Icon library for consistent iconography

### Forms & Validation
- **React Hook Form**: Form state management with `@hookform/resolvers` for validation
- **Zod**: TypeScript-first schema validation used with Drizzle ORM

### Database & ORM
- **Drizzle ORM**: TypeScript ORM for SQL databases with `drizzle-zod` integration
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database platform
- **drizzle-kit**: CLI tool for database migrations and schema management

### State Management & Data Fetching
- **@tanstack/react-query**: Server state management with caching and synchronization

### Routing & Navigation
- **wouter**: Lightweight client-side routing library (implied from App.tsx usage)

### Development Tools
- **Vite**: Build tool and development server with React plugin
- **Replit-specific plugins**: Runtime error modal, cartographer, and dev banner for Replit development environment
- **TypeScript**: Type system across entire codebase
- **esbuild**: Used for production server bundling

### Design & Typography
- **Google Fonts**: Lora, Space Grotesk, and Playfair Display font families loaded via CDN

### Session Management
- **connect-pg-simple**: PostgreSQL session store for Express (configured but session middleware not currently implemented)

### Utilities
- **date-fns**: Date manipulation and formatting
- **clsx & tailwind-merge**: Utility for conditional CSS class composition
- **nanoid**: Unique ID generation