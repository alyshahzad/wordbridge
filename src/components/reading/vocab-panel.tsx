import { Bookmark, BookmarkCheck, Volume2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { VocabEntry } from "@/lib/types";

export function VocabPanel({
  entry,
  saved,
  onSave,
  onClose,
  variant = "desktop",
}: {
  entry: VocabEntry;
  saved: boolean;
  onSave: () => void;
  onClose: () => void;
  variant?: "desktop" | "sheet";
}) {
  const speak = () => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const utterance = new SpeechSynthesisUtterance(entry.word);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div
      id="vocab-panel"
      role="dialog"
      aria-labelledby="vocab-word-title"
      className={
        variant === "desktop"
          ? "wb-panel-enter rounded-xl border border-border bg-surface p-5 shadow-[var(--wb-shadow-md)]"
          : "wb-sheet-enter px-1 pb-2"
      }
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
            In context
          </p>
          <h2 id="vocab-word-title" className="mt-2 font-sans text-2xl font-semibold tracking-tight">
            {entry.word}
          </h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex size-9 items-center justify-center rounded-sm text-muted-foreground transition-colors duration-quick hover:bg-background hover:text-foreground"
          aria-label="Close vocabulary panel"
        >
          <X className="size-4" />
        </button>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <span className="font-serif italic">{entry.pronunciation}</span>
        <span aria-hidden="true">·</span>
        <span className="capitalize">{entry.partOfSpeech}</span>
        <button
          type="button"
          onClick={speak}
          className="ml-1 inline-flex size-8 items-center justify-center rounded-sm text-indigo transition-colors duration-quick hover:bg-highlight"
          aria-label={`Pronounce ${entry.word}`}
        >
          <Volume2 className="size-4" />
        </button>
      </div>

      <p className="mt-5 text-sm leading-6 text-foreground">{entry.definition}</p>

      <div className="mt-5 rounded-md bg-background p-4">
        <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
          In this article
        </p>
        <p className="mt-2 text-sm leading-6">{entry.contextualMeaning}</p>
      </div>

      <div className="mt-4">
        <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
          Example
        </p>
        <p className="mt-2 font-serif text-[15px] leading-7 text-foreground">“{entry.example}”</p>
      </div>

      <Button className="mt-6 w-full" variant={saved ? "outline" : "default"} onClick={onSave}>
        {saved ? <BookmarkCheck className="size-4" /> : <Bookmark className="size-4" />}
        {saved ? "Saved to notebook" : "Save word"}
      </Button>
    </div>
  );
}
