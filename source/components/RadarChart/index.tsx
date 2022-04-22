import { useEffect, useState } from 'react';
import Centered from '../Centered';
import CircleChart from './CircleChart';
import { RadarData, randomizeData } from './util';

const MIN_INTERVALS = 1;
const MAX_INTERVALS = 9;
const MIN_SIDES = 3;
const MAX_SIDES = 10;
const MIN_COUNT = 0;
const MAX_COUNT = 4;

const labels = 'ABCDEFGHIJKLMNOP'.split('');

const DEFAULT_COUNT = 3;
const DEFAULT_INTERVALS = 6;
const DEFAULT_SIDES = 3;

function RadarChart(): JSX.Element {
  const [showLines, setShowLines] = useState(true);
  const [intervals, setIntervals] = useState(DEFAULT_INTERVALS);
  const [showPoints, setShowPoints] = useState(false);
  const [showIntervalPolygons, setShowIntervalPolygons] = useState(true);
  const [sides, setSides] = useState(DEFAULT_SIDES);
  const [count, setCount] = useState(DEFAULT_COUNT);
  const [data, setData] = useState<RadarData | undefined>(undefined);
  const [showOuterCircle, setShowOuterCircle] = useState(false);
  const [showLineLabels, setShowLineLabels] = useState(true);

  useEffect(() => {
    if (!data) {
      setData(randomizeData(count, intervals, sides));
    }
  }, [count, data, intervals, sides]);

  const radius = 250;

  const intervalArr: number[] = [];
  for (let i = 1; i <= intervals; i++) {
    intervalArr.push(i);
  }

  const margins = {
    top: 50,
    left: 50,
    right: 50,
    bottom: 50,
  };

  return (
    <div>
      <Centered>
        <CircleChart
          data={data}
          intervals={intervals}
          labels={labels}
          margins={margins}
          numberOfPoints={sides}
          radius={radius}
          showIntervalPolygons={showIntervalPolygons}
          showLineLabels={showLineLabels}
          showLines={showLines}
          showOuterCircle={showOuterCircle}
          showPoints={showPoints}
        />
      </Centered>
      <Centered>
        <button onClick={() => setShowLines(s => !s)}>Toggle lines</button>
        <button onClick={() => setShowLineLabels(s => !s)}>
          Toggle line labels
        </button>
        <button onClick={() => setShowIntervalPolygons(s => !s)}>
          Toggle interval polygons
        </button>
        <button onClick={() => setShowOuterCircle(s => !s)}>
          Toggle outer circle
        </button>
        <button onClick={() => setShowPoints(s => !s)}>Toggle points</button>
        <button onClick={() => setData(randomizeData(count, intervals, sides))}>
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
  );
}

export default RadarChart;
