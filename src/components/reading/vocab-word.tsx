import type { VocabEntry } from "@/lib/types";
import { cn } from "@/lib/utils";

export function VocabWord({
  entry,
  selected,
  onSelect,
}: {
  entry: VocabEntry;
  selected: boolean;
  onSelect: (entry: VocabEntry) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(entry)}
      aria-expanded={selected}
      aria-controls="vocab-panel"
      className={cn(
        "rounded-[4px] px-0.5 font-serif font-medium underline decoration-indigo/35 decoration-[1.5px] underline-offset-[5px] transition-[background-color,color,text-decoration-color] duration-quick ease-out-smooth",
        selected
          ? "bg-highlight text-highlight-text decoration-indigo"
          : "text-navy hover:bg-highlight hover:decoration-indigo",
      )}
    >
      {entry.word}
    </button>
  );
}
