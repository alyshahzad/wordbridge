import { useEffect, useState } from "react";

export function useDesktop(query = "(min-width: 1024px)") {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const apply = () => setMatches(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, [query]);

  return matches;
}
