import { useEffect, useState } from 'react';
import Centered from '../Centered';
import NumberInput from '../NumberInput';
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
        <NumberInput
          id="intervals"
          label="Intervals"
          max={MAX_INTERVALS}
          min={MIN_INTERVALS}
          onChange={newValue => {
            setIntervals(newValue);
            setData(randomizeData(count, newValue, sides));
          }}
          value={intervals}
        />
        <NumberInput
          id="sides"
          label="Polygon Sides"
          max={MAX_SIDES}
          min={MIN_SIDES}
          onChange={newValue => {
            setSides(newValue);
            setData(randomizeData(count, intervals, newValue));
          }}
          value={sides}
        />
        <NumberInput
          id="count"
          label="Series Count"
          max={MAX_COUNT}
          min={MIN_COUNT}
          onChange={newValue => {
            setCount(newValue);
            setData(randomizeData(newValue, intervals, sides));
          }}
          value={count}
        />
      </Centered>
    </div>
  );
}

export default RadarChart;
