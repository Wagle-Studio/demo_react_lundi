import { Button } from "../button/Button";

interface CounterDecrementProps {
  count: number;
  setCount: (newCount: number) => void;
}

export const CounterDecrement = ({
  count,
  setCount,
}: CounterDecrementProps) => {
  return (
    <Button
      variant="primary"
      name="Decrement"
      onClick={() => setCount(count - 1)}
    />
  );
};
