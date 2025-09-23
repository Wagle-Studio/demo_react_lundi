import { Button } from "../button/Button";

interface CounterIncrementProps {
  count: number;
  setCount: (newCount: number) => void;
}

export const CounterIncrement = ({
  count,
  setCount,
}: CounterIncrementProps) => {
  return (
    <Button
      variant="secondary"
      name="Increment"
      onClick={() => setCount(count + 1)}
    />
  );
};
