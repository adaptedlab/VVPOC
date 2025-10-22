import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export interface PlottedPoint {
  x: number;
  y: number;
  id: string;
}

interface GraphPlotterProps {
  onPointsChange: (points: PlottedPoint[]) => void;
  plottedPoints: PlottedPoint[];
  xMin?: number;
  xMax?: number;
  yMin?: number;
  yMax?: number;
  gridSize?: number;
}

export function GraphPlotter({
  onPointsChange,
  plottedPoints,
  xMin = -10,
  xMax = 10,
  yMin = -10,
  yMax = 10,
  gridSize = 1,
}: GraphPlotterProps) {
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

  const width = 500;
  const height = 500;
  const padding = 40;
  const graphWidth = width - 2 * padding;
  const graphHeight = height - 2 * padding;

  const xRange = xMax - xMin;
  const yRange = yMax - yMin;

  // Convert coordinate to SVG pixel position
  const coordToPixel = (x: number, y: number) => {
    const px = padding + ((x - xMin) / xRange) * graphWidth;
    const py = padding + ((yMax - y) / yRange) * graphHeight;
    return { px, py };
  };

  // Convert SVG pixel position to coordinate
  const pixelToCoord = (px: number, py: number) => {
    const x = xMin + ((px - padding) / graphWidth) * xRange;
    const y = yMax - ((py - padding) / graphHeight) * yRange;
    
    // Snap to grid
    const snappedX = Math.round(x / gridSize) * gridSize;
    const snappedY = Math.round(y / gridSize) * gridSize;
    
    return { x: snappedX, y: snappedY };
  };

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;

    const { x, y } = pixelToCoord(px, py);

    // Check bounds
    if (x < xMin || x > xMax || y < yMin || y > yMax) {
      return;
    }

    // Check if point already exists at this location
    const existingPoint = plottedPoints.find(
      (p) => Math.abs(p.x - x) < 0.01 && Math.abs(p.y - y) < 0.01
    );

    if (existingPoint) {
      // Remove point if clicking on existing point
      onPointsChange(plottedPoints.filter((p) => p.id !== existingPoint.id));
    } else {
      // Add new point
      const newPoint: PlottedPoint = {
        x,
        y,
        id: `point-${Date.now()}-${Math.random()}`,
      };
      onPointsChange([...plottedPoints, newPoint]);
    }
  };

  const removePoint = (id: string) => {
    onPointsChange(plottedPoints.filter((p) => p.id !== id));
  };

  const clearAll = () => {
    onPointsChange([]);
  };

  // Generate grid lines
  const verticalLines = [];
  for (let x = xMin; x <= xMax; x += gridSize) {
    if (x === 0) continue; // Skip origin line
    const { px: x1 } = coordToPixel(x, yMin);
    const { px: x2 } = coordToPixel(x, yMax);
    verticalLines.push(
      <line
        key={`v-${x}`}
        x1={x1}
        y1={padding}
        x2={x2}
        y2={height - padding}
        stroke="hsl(var(--border))"
        strokeWidth="0.5"
        opacity="0.3"
      />
    );
  }

  const horizontalLines = [];
  for (let y = yMin; y <= yMax; y += gridSize) {
    if (y === 0) continue; // Skip origin line
    const { py: y1 } = coordToPixel(xMin, y);
    const { py: y2 } = coordToPixel(xMax, y);
    horizontalLines.push(
      <line
        key={`h-${y}`}
        x1={padding}
        y1={y1}
        x2={width - padding}
        y2={y2}
        stroke="hsl(var(--border))"
        strokeWidth="0.5"
        opacity="0.3"
      />
    );
  }

  // Axes
  const { px: originX, py: originY } = coordToPixel(0, 0);
  const xAxisVisible = originY >= padding && originY <= height - padding;
  const yAxisVisible = originX >= padding && originX <= width - padding;

  // Axis labels
  const xLabels = [];
  for (let x = xMin; x <= xMax; x += gridSize) {
    if (x === 0) continue;
    if (Math.abs(x) < 0.01) continue;
    const { px } = coordToPixel(x, 0);
    if (xAxisVisible && Math.abs(x % (gridSize * 2)) < 0.01) {
      xLabels.push(
        <text
          key={`xl-${x}`}
          x={px}
          y={originY + 20}
          textAnchor="middle"
          fontSize="11"
          fill="hsl(var(--muted-foreground))"
        >
          {x}
        </text>
      );
    }
  }

  const yLabels = [];
  for (let y = yMin; y <= yMax; y += gridSize) {
    if (y === 0) continue;
    if (Math.abs(y) < 0.01) continue;
    const { py } = coordToPixel(0, y);
    if (yAxisVisible && Math.abs(y % (gridSize * 2)) < 0.01) {
      yLabels.push(
        <text
          key={`yl-${y}`}
          x={originX - 10}
          y={py + 4}
          textAnchor="end"
          fontSize="11"
          fill="hsl(var(--muted-foreground))"
        >
          {y}
        </text>
      );
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Click on the graph to plot points. Click again to remove.
        </p>
        {plottedPoints.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearAll}
            data-testid="button-clear-points"
          >
            Clear All
          </Button>
        )}
      </div>

      <div className="flex flex-col items-center gap-4">
        <svg
          width={width}
          height={height}
          onClick={handleClick}
          className="border rounded-lg bg-card cursor-crosshair"
          data-testid="graph-plotter"
        >
          {/* Grid lines */}
          {verticalLines}
          {horizontalLines}

          {/* Axes */}
          {xAxisVisible && (
            <line
              x1={padding}
              y1={originY}
              x2={width - padding}
              y2={originY}
              stroke="hsl(var(--foreground))"
              strokeWidth="2"
            />
          )}
          {yAxisVisible && (
            <line
              x1={originX}
              y1={padding}
              x2={originX}
              y2={height - padding}
              stroke="hsl(var(--foreground))"
              strokeWidth="2"
            />
          )}

          {/* Axis labels */}
          {xLabels}
          {yLabels}

          {/* Origin label */}
          {xAxisVisible && yAxisVisible && (
            <text
              x={originX - 10}
              y={originY + 20}
              textAnchor="end"
              fontSize="12"
              fill="hsl(var(--foreground))"
              fontWeight="600"
            >
              0
            </text>
          )}

          {/* Axis arrows */}
          {xAxisVisible && (
            <>
              <polygon
                points={`${width - padding + 5},${originY} ${width - padding - 5},${originY - 5} ${width - padding - 5},${originY + 5}`}
                fill="hsl(var(--foreground))"
              />
              <text
                x={width - padding + 15}
                y={originY + 5}
                fontSize="14"
                fill="hsl(var(--foreground))"
                fontWeight="600"
              >
                x
              </text>
            </>
          )}
          {yAxisVisible && (
            <>
              <polygon
                points={`${originX},${padding - 5} ${originX - 5},${padding + 5} ${originX + 5},${padding + 5}`}
                fill="hsl(var(--foreground))"
              />
              <text
                x={originX + 10}
                y={padding}
                fontSize="14"
                fill="hsl(var(--foreground))"
                fontWeight="600"
              >
                y
              </text>
            </>
          )}

          {/* Plotted points */}
          {plottedPoints.map((point) => {
            const { px, py } = coordToPixel(point.x, point.y);
            const isHovered = hoveredPoint === point.id;
            return (
              <g key={point.id}>
                <circle
                  cx={px}
                  cy={py}
                  r={isHovered ? 8 : 6}
                  fill="hsl(var(--primary))"
                  stroke="hsl(var(--primary-foreground))"
                  strokeWidth="2"
                  className="transition-all cursor-pointer"
                  onMouseEnter={() => setHoveredPoint(point.id)}
                  onMouseLeave={() => setHoveredPoint(null)}
                  data-testid={`plotted-point-${point.x}-${point.y}`}
                />
                {isHovered && (
                  <text
                    x={px}
                    y={py - 15}
                    textAnchor="middle"
                    fontSize="12"
                    fill="hsl(var(--foreground))"
                    fontWeight="600"
                    className="pointer-events-none"
                  >
                    ({point.x}, {point.y})
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        {/* List of plotted points */}
        {plottedPoints.length > 0 && (
          <div className="flex flex-col gap-2 w-full max-w-md">
            <p className="text-sm font-medium">Plotted Points:</p>
            <div className="flex flex-wrap gap-2">
              {plottedPoints.map((point) => (
                <div
                  key={point.id}
                  className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-md text-sm"
                  data-testid={`point-label-${point.x}-${point.y}`}
                >
                  <span>
                    ({point.x}, {point.y})
                  </span>
                  <button
                    onClick={() => removePoint(point.id)}
                    className="hover-elevate active-elevate-2 rounded-full p-0.5"
                    data-testid={`button-remove-point-${point.x}-${point.y}`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
