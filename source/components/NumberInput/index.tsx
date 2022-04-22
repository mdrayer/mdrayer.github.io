interface NumberInputProps {
  id: string;
  label: string;
  max: number;
  min: number;
  onChange: (newValue: number) => void;
  value: number;
}

function NumberInput({
  id,
  label,
  min,
  max,
  onChange,
  value,
}: NumberInputProps): JSX.Element {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="number"
        id={id}
        name={id}
        value={value}
        onChange={e => {
          let newValue = Number(e.target.value);
          if (isNaN(newValue)) {
            throw new Error(`Value ${newValue} not a number.`);
          }
          // Ensure that the new value stays within range.
          if (newValue < min) {
            newValue = min;
          } else if (newValue > max) {
            newValue = max;
          }
          onChange(newValue);
        }}
        min={min}
        max={max}
      />
    </div>
  );
}

export default NumberInput;
