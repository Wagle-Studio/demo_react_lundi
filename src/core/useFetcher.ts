import { useEffect, useState } from "react";

export const useFetcher = (url: string) => {
  const [joke, setJoke] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
        // AHAH j'allais quand même pas vous donner le fetch
        setJoke("J’ai demandé à mon ordi de me faire une blague… il a planté.");
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        setErrorMsg(error as string);
      }
    };

    getData();
  }, []);

  return { joke, isLoading, isError, errorMsg };
};
