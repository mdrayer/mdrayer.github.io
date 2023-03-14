import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { ChangeEventHandler, useState } from 'react';
import BackLink from '../../../source/components/BackLink';
import Centered from '../../../source/components/Centered';
import PageTemplate from '../../../source/layouts/PageTemplate';

const MathComponent = dynamic(
  () => import('../../../source/components/MathJaxComponent'),
  {
    loading: () => <p>...</p>,
    ssr: false,
  },
);

const MAX_Y = 4;
const MIN_Y = 0;
const TICKS: number[] = [];
for (let i = MIN_Y; i <= MAX_Y; i++) {
  TICKS.push(i);
}

const MARGINS = {
  bottom: 22,
  left: 20,
  right: 5,
  top: 10,
};
const CHART_INNER_HEIGHT = 400;
const CHART_INNER_WIDTH = 600;

const SVG_HEIGHT = MARGINS.bottom + CHART_INNER_HEIGHT + MARGINS.top;
const SVG_WIDTH = MARGINS.left + CHART_INNER_WIDTH + MARGINS.right;

function interpolate(
  x0: number,
  x1: number,
  y0: number,
  y1: number,
  x: number,
): number {
  return (y0 * (x1 - x) + y1 * (x - x0)) / (x1 - x0);
}

function xScale(i: number, maxN: number): number {
  const domain: [number, number] = [0, maxN];
  const range: [number, number] = [0, CHART_INNER_WIDTH];
  const x = interpolate(domain[0], domain[1], range[0], range[1], i);
  return x;
}

function yScale(n: number): number {
  const domain: [number, number] = [MAX_Y, MIN_Y];
  const range: [number, number] = [0, CHART_INNER_HEIGHT];
  const y = interpolate(domain[0], domain[1], range[0], range[1], n);
  return y;
}

function getSeries(n: number) {
  let sum = 0;
  const items: number[] = [];
  for (let i = 0; i <= n; i++) {
    const numer = Math.pow(-1, i);
    const denom = 2 * i + 1;
    sum += numer / denom;
    items.push(sum);
  }
  return items;
}
interface Point {
  coords: [number, number];
  i: number;
  value: number;
}
function getPoints(series: number[], n: number): Point[] {
  const points = series.map<Point>((a, i) => {
    const newValue = a * 4;
    const x = xScale(i, n);
    const y = yScale(newValue);
    return {
      coords: [x, y],
      i,
      value: newValue,
    };
  });
  return points;
}

function getLine(points: Array<[number, number]>): string {
  let pathD = '';
  points.forEach(([x, y], i) => {
    pathD += `${i === 0 ? 'M' : 'L'}${x},${y}`;
  });
  return pathD;
}

const INPUT_MIN = 0;
const INPUT_MAX = 1000;

const PiInfiniteSeries: NextPage = () => {
  const [value, setValue] = useState(25);
  const series = getSeries(value);
  const points = getPoints(series, value);
  const line = getLine(points.map(a => a.coords));

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    const newVal = Number(e.target.value);
    // Enforce limits to the value.
    const n =
      newVal < INPUT_MIN
        ? INPUT_MIN
        : newVal > INPUT_MAX
        ? INPUT_MAX
        : Math.round(newVal);
    setValue(n);
  };

  return (
    <PageTemplate>
      <h2 style={{ textAlign: 'center' }}>Calculating Pi - Infinite Series</h2>
      <div>
        <Centered>
          <p>
            The{' '}
            <a href="https://en.wikipedia.org/wiki/Leibniz_formula_for_%CF%80">
              Leibniz formula for &pi;
            </a>{' '}
            states that
          </p>
        </Centered>
        <Centered>
          <MathComponent
            tex={String.raw`1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \frac{1}{9} \cdots = \frac{\pi}{4}`}
          />
        </Centered>
        <Centered>
          <p>Which can be represented as</p>
        </Centered>
        <Centered>
          <MathComponent
            tex={String.raw`\sum_{n=0}^{\infty} \frac{(-1)^n}{2n + 1} = \frac{\pi}{4}`}
          />
        </Centered>
        <Centered>
          <svg
            style={{ height: SVG_HEIGHT, width: SVG_WIDTH }}
            viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
          >
            {/* Inner */}
            <g transform={`translate(${MARGINS.left},${MARGINS.top})`}>
              {/* Y AXIS */}
              <g>
                <line
                  stroke="grey"
                  strokeDasharray={'5, 5'}
                  x1={0}
                  x2={0}
                  y1={yScale(MAX_Y)}
                  y2={yScale(MIN_Y)}
                />
                {TICKS.map(tick => {
                  return <Tick key={tick} value={tick} />;
                })}
              </g>

              {/* PI LINE */}
              <Tick color="red" value={Math.PI} text="π" useDasharray={false} />

              <path d={line} fill="none" stroke="black" opacity={0.75} />

              {/* POINTS */}
              {value === 0 &&
                points.map(({ coords: [x, y] }, i) => {
                  return (
                    <g key={i} transform={`translate(${x},${y})`}>
                      <circle r={2} fill="black" stroke="black" />
                    </g>
                  );
                })}

              {/* X AXIS LABEL */}
              <g transform={`translate(0,${CHART_INNER_HEIGHT})`}>
                <text dx={-6} y={5} dy="1rem">
                  n&#10132;
                </text>
              </g>
            </g>
          </svg>
        </Centered>
        <Centered>
          <label htmlFor="limit">
            Limit:
            <input
              id="limit"
              name="limit"
              type="number"
              min={INPUT_MIN}
              max={INPUT_MAX}
              onChange={handleInputChange}
              step={1}
              value={value}
            />
          </label>
        </Centered>
        <Centered>
          <table cellSpacing={20}>
            <thead>
              <tr>
                <th scope="col">n</th>
                <th scope="col">sum</th>
                <th scope="col">sum * 4</th>
              </tr>
            </thead>
            <tbody>
              {series.map((sum, i) => {
                const sum4 = sum * 4;
                return (
                  <tr key={i}>
                    <th scope="row">{i}</th>
                    <td>{renderNumber(sum)}</td>
                    <td>{renderNumber(sum4)}</td>
                  </tr>
                );
              })}
              <tr>
                <th>...</th>
                <td align="center">...</td>
                <td align="center">...</td>
              </tr>
              <tr>
                <th scope="row">&infin;</th>
                <td>{renderNumber(Math.PI / 4)}</td>
                <td>{renderNumber(Math.PI)}</td>
              </tr>
            </tbody>
          </table>
        </Centered>
      </div>
      <BackLink href="/charts" />
    </PageTemplate>
  );
};

function renderNumber(n: number): string {
  return Number.isInteger(n) ? String(n) : `${n.toFixed(10)}...`;
}

interface TickProps {
  color?: string;
  value: number;
  text?: string;
  useDasharray?: boolean;
}
function Tick({
  color,
  value,
  text = String(value),
  useDasharray = true,
}: TickProps): JSX.Element {
  return (
    <g transform={`translate(0,${yScale(value)})`}>
      <text
        alignmentBaseline="middle"
        fontSize="0.825rem"
        stroke={color}
        textAnchor="end"
        x={-7}
      >
        {text}
      </text>
      <line
        stroke={color || 'grey'}
        strokeDasharray={useDasharray ? '5, 5' : undefined}
        x1={-5}
        x2={CHART_INNER_WIDTH + MARGINS.right}
        y1={0}
        y2={0}
      />
    </g>
  );
}

export default PiInfiniteSeries;
