import { Counter } from "../ui/counter/Counter";
import { useFetcher } from "../core/useFetcher";

export const ContactPage = () => {

  const { joke, isLoading, isError, errorMsg } = useFetcher("https://api.chucknorris.io/jokes/random")

  return (
    <>
      <Counter />
      {isLoading && !isError && <p>Je suis en chargement</p>}
      {!isLoading && isError && <p>Je suis en erreur</p>}
      {!isLoading && !isError && joke && <p>{joke}</p>}
    </>
  );
};
