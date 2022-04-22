import {
  formPolygonPoints,
  interpolatePercent,
  interpolateValue,
  Point,
  POLYGON_FILLS,
  RadarData,
} from './util';

const zerodTheta = (Math.PI * 2) / 4;

function getPoints(numberOfPoints: number, radius: number) {
  const points: Point[] = [];
  const theta = (Math.PI * 2) / numberOfPoints;
  for (let i = 0; i < numberOfPoints; i++) {
    // Add the zero'd theta to get the first point above our (0, 0) center.
    const a = theta * i + zerodTheta;
    const x = radius * Math.cos(a);
    const y = radius * Math.sin(a);
    points.push({ x, y });
  }
  return points;
}

interface Margins {
  bottom: number;
  left: number;
  right: number;
  top: number;
}

interface CircleChartProps {
  data: RadarData | undefined;
  intervals: number;
  labels: string[];
  margins: Margins;
  numberOfPoints: number;
  radius: number;
  showIntervalPolygons?: boolean;
  showLineLabels?: boolean;
  showLines?: boolean;
  showOuterCircle?: boolean;
  showPoints?: boolean;
}

function CircleChart({
  data,
  intervals,
  labels,
  margins,
  numberOfPoints,
  radius,
  showIntervalPolygons = true,
  showLineLabels = false,
  showLines = true,
  showOuterCircle = false,
  showPoints = false,
}: CircleChartProps): JSX.Element {
  const chartHeight = radius * 2;
  const chartWidth = radius * 2;
  const svgHeight = margins.top + chartHeight + margins.bottom;
  const svgWidth = margins.left + chartWidth + margins.right;

  const outerPolygonPoints = getPoints(numberOfPoints, radius);

  const intervalArr: number[] = [];
  for (let i = 1; i <= intervals; i++) {
    intervalArr.push(i);
  }

  return (
    <svg
      style={{ height: svgHeight, width: svgWidth }}
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
    >
      {/* Inner */}
      <g transform={`translate(${margins.left},${margins.top})`}>
        {/* Set the middle of the circle to (0, 0) */}
        <g transform={`translate(${radius},${radius})`}>
          {showOuterCircle && <circle r={radius} fill="none" stroke="black" />}
          {showIntervalPolygons &&
            intervalArr.map(interval => (
              <polygon
                key={interval}
                points={formPolygonPoints(
                  getPoints(numberOfPoints, radius * (interval / intervals)),
                )}
                fill="none"
                stroke="black"
                // opacity={0.5}
              />
            ))}
          {/* Draw lines to the center point */}
          {showLines &&
            outerPolygonPoints.map((point, i) => (
              <line
                key={i}
                x1={point.x}
                y1={-point.y}
                x2={0}
                y2={0}
                stroke="black"
              />
            ))}
          {showLineLabels &&
            outerPolygonPoints.map(({ x, y }, i) => {
              const coords = interpolatePercent({ x: 0, y: 0 }, { x, y }, 1.05);
              return (
                <g key={i} transform={`translate(${coords.x},${-coords.y})`}>
                  <text
                    x={0}
                    y={0}
                    alignmentBaseline="middle"
                    textAnchor="middle"
                  >
                    {labels[i]}
                  </text>
                </g>
              );
            })}
          {data &&
            data.map((vals, di) => {
              const fill = POLYGON_FILLS[di * 2];
              const points = vals.map((v, vi) => {
                return {
                  ...interpolateValue(
                    { x: 0, y: 0 },
                    outerPolygonPoints[vi],
                    v,
                    intervals,
                  ),
                  value: v,
                };
              });
              return (
                <g key={di}>
                  <polygon
                    points={formPolygonPoints(points)}
                    fill={fill}
                    opacity={0.5}
                  />
                  {showPoints &&
                    points.map((p, pi) => (
                      <g key={pi} transform={`translate(${p.x},${-p.y})`}>
                        <circle r={4} fill={fill} opacity={0.5} />
                        <text textAnchor="middle" dy="-0.37em">
                          {di}:{labels[pi]}
                        </text>
                      </g>
                    ))}
                </g>
              );
            })}
        </g>
      </g>
    </svg>
  );
}

export default CircleChart;
