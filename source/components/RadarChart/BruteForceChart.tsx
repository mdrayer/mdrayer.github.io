// Original brute force approach to setting up a radar chart.
// Started with just a triangle (3 points), then a square/diamond (4 points),
// then realized there is a better way.
// Keeping this file for posterity as there are still some interesting
// geometry things going on in the functions.
import { useState } from 'react';
import Centered from '../Centered';
import {
  formPolygonPoints,
  interpolateValue,
  Point,
  POLYGON_FILLS,
  RadarData,
  randomizeData,
} from './util';

const MIN_INTERVALS = 1;
const MAX_INTERVALS = 9;
const MIN_SIDES = 3;
const MAX_SIDES = 5;
const MIN_COUNT = 1;
const MAX_COUNT = 4;
const labels = ['A', 'B', 'C', 'D'];

// Triangle vars and functions
function getAltitude(sideLength: number): number {
  // Altitude (height) of an equilateral triangle is ((√3)/2)*a where a is the length of a given side.
  return (Math.sqrt(3) / 2) * sideLength;
}

interface AltitudeSegments {
  segmentAO: number;
  segmentOD: number;
}
function getAltitudeSegments(sideLength: number): AltitudeSegments {
  return {
    segmentAO: (Math.sqrt(3) / 3) * sideLength,
    segmentOD: (Math.sqrt(3) / 6) * sideLength,
  };
}

function getTrianglePoints(sideLength: number, center?: Point): Point[] {
  const halfLength = sideLength / 2;
  const altitude = getAltitude(sideLength);

  if (center) {
    const { segmentOD } = getAltitudeSegments(sideLength);
    const bottomY = center.y - segmentOD;

    const pointOne: Point = {
      x: center.x - halfLength,
      y: bottomY,
    };
    const pointTwo: Point = {
      x: center.x,
      y: bottomY + altitude,
    };
    const pointThree: Point = {
      x: center.x + halfLength,
      y: bottomY,
    };
    const newPoints = [pointOne, pointTwo, pointThree];
    return newPoints;
  }

  const points: Point[] = [
    { x: 0, y: 0 },
    { x: halfLength, y: altitude },
    { x: sideLength, y: 0 },
  ];

  return points;
}
function getTrianglePointsFromZero(sideLength: number): Point[] {
  return getTrianglePoints(sideLength, { x: 0, y: 0 });
}

function getTrianglePointsFromRadius(radius: number): Point[] {
  const altitude = radius * 1.5;
  const sideLength = (2 / Math.sqrt(3)) * altitude;
  return getTrianglePointsFromZero(sideLength);
}

// Diamond vars and functions
function getDiamondPointsFromRadius(radius: number): Point[] {
  // Assume starting position and center is (0, 0);
  return [
    { x: 0, y: radius },
    { x: radius, y: 0 },
    { x: 0, y: -radius },
    { x: -radius, y: 0 },
  ];
}

function getPointsFromRadius(radius: number, sides: number): Point[] {
  switch (sides) {
    case 3:
      return getTrianglePointsFromRadius(radius);
    case 4:
      return getDiamondPointsFromRadius(radius);
    default:
      throw new Error('Side count not allowed.');
  }
}

const DEFAULT_COUNT = 3;
const DEFAULT_INTERVALS = 6;
const DEFAULT_SIDES = 3;

function BruteForceChart(): JSX.Element {
  const [showLines, setShowLines] = useState(true);
  const [intervals, setIntervals] = useState(DEFAULT_INTERVALS);
  const [showPoints, setShowPoints] = useState(false);
  const [showIntervalPolygons, setShowIntervalPolygons] = useState(true);
  const [sides, setSides] = useState(DEFAULT_SIDES);
  const [count, setCount] = useState(DEFAULT_COUNT);
  const [data, setData] = useState<RadarData>(
    randomizeData(count, intervals, sides),
  );
  const [showOuterCircle, setShowOuterCircle] = useState(true);

  const radius = 250;

  const intervalArr: number[] = [];
  for (let i = 1; i <= intervals; i++) {
    intervalArr.push(i);
  }
  const centroidPoint: Point = {
    x: radius,
    y: radius,
  };

  // Chart dimensions
  const chartHeight = radius * 2;
  const chartWidth = radius * 2;
  const margins = {
    top: 50,
    left: 50,
    right: 50,
    bottom: 50,
  };
  const svgHeight = chartHeight + margins.top + margins.bottom;
  const svgWidth = chartWidth + margins.left + margins.bottom;

  const outerPolygonPoints = getPointsFromRadius(radius, sides);

  return (
    <Centered>
      <div>
        <svg
          style={{ height: svgHeight, width: svgWidth }}
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        >
          {/* Inner */}
          <g transform={`translate(${margins.left},${margins.top})`}>
            {/* Start from (0,0) at the bottom left of the chart. */}
            <g transform={`translate(0,${chartHeight})`}>
              {/* Reset center to centroid point. */}
              <g
                transform={`translate(${centroidPoint.x},${-centroidPoint.y})`}
              >
                {showOuterCircle && (
                  <circle r={radius} fill="none" stroke="black" />
                )}
                {showIntervalPolygons &&
                  intervalArr.map(interval => (
                    <polygon
                      key={interval}
                      points={formPolygonPoints(
                        getPointsFromRadius(
                          radius * (interval / intervals),
                          sides,
                        ),
                      )}
                      fill="none"
                      stroke="black"
                      opacity={0.5}
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
              </g>
              {data.map((vals, di) => {
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
                  <g
                    key={di}
                    transform={`translate(${
                      centroidPoint.x
                    },${-centroidPoint.y})`}
                  >
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
                            {labels[pi]}:{p.value}
                          </text>
                        </g>
                      ))}
                  </g>
                );
              })}
            </g>
          </g>
        </svg>
        <Centered>
          <button onClick={() => setShowLines(s => !s)}>Toggle lines</button>
          <button onClick={() => setShowIntervalPolygons(s => !s)}>
            Toggle interval polygons
          </button>
          <button onClick={() => setShowOuterCircle(s => !s)}>
            Toggle outer circle
          </button>
          <button onClick={() => setShowPoints(s => !s)}>Toggle points</button>
          <button
            onClick={() => setData(randomizeData(count, intervals, sides))}
          >
            Generate new data
          </button>
        </Centered>
        <Centered>
          <div>
            <label htmlFor="intervals">Intervals</label>
            <input
              type="number"
              id="intervals"
              name="intervals"
              value={intervals}
              onChange={e => {
                let newValue = Number(e.target.value);
                if (isNaN(newValue)) {
                  return;
                }
                // Ensure that the new value stays within range.
                if (newValue < MIN_INTERVALS) {
                  newValue = MIN_INTERVALS;
                } else if (newValue > MAX_INTERVALS) {
                  newValue = MAX_INTERVALS;
                }
                setIntervals(newValue);
                setData(randomizeData(count, newValue, sides));
              }}
              min={MIN_INTERVALS}
              max={MAX_INTERVALS}
            />
          </div>
          <div>
            <label htmlFor="sides">Polygon Sides</label>
            <input
              type="number"
              id="sides"
              name="sides"
              value={sides}
              onChange={e => {
                let newValue = Number(e.target.value);
                if (isNaN(newValue)) {
                  return;
                }
                // Ensure that the new value stays within range.
                if (newValue < MIN_SIDES) {
                  newValue = MIN_SIDES;
                } else if (newValue > MAX_SIDES) {
                  newValue = MAX_SIDES;
                }
                setSides(newValue);
                setData(randomizeData(count, intervals, newValue));
              }}
              min={MIN_SIDES}
              max={MAX_SIDES}
            />
          </div>
          <div>
            <label htmlFor="count">Series Count</label>
            <input
              type="number"
              id="count"
              name="count"
              value={count}
              onChange={e => {
                let newValue = Number(e.target.value);
                if (isNaN(newValue)) {
                  return;
                }
                // Ensure that the new value stays within range.
                if (newValue < MIN_COUNT) {
                  newValue = MIN_COUNT;
                } else if (newValue > MAX_COUNT) {
                  newValue = MAX_COUNT;
                }
                setCount(newValue);
                setData(randomizeData(newValue, intervals, sides));
              }}
              min={MIN_COUNT}
              max={MAX_COUNT}
            />
          </div>
        </Centered>
      </div>
    </Centered>
  );
}

export default BruteForceChart;
