interface CounterScoreProps {
  count: number;
}

export const CounterScore = ({ count }: CounterScoreProps) => {
  const sentenceForInitialState = "Utilisez les boutons pour commencer";
  const sentenceForNegativeCount = "Attention, valeur négative";
  const sentenceForBigCount = "Ça fait beaucoup la non ?";

  return (
    <>
      <div>
        {count === 0 && <p>{sentenceForInitialState}</p>}
        {count !== 0 && <p>{count}</p>}
      </div>
      <div>
        {count < 0 && <p>{sentenceForNegativeCount}</p>}
        {count > 10 && <p>{sentenceForBigCount}</p>}
      </div>
    </>
  );
};
