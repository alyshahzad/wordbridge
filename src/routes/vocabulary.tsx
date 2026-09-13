import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpenText, Search, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { EmptyState } from "@/components/shared/empty-state";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppStore, useHydrated } from "@/lib/store";
import type { SavedWord, WordStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/vocabulary")({
  component: VocabularyPage,
  head: () => ({ meta: [{ title: "Vocabulary notebook — WordBridge" }] }),
});

type Filter = "all" | WordStatus;

function VocabularyPage() {
  const hydrated = useHydrated();
  const savedWords = useAppStore((state) => state.savedWords);
  const setWordStatus = useAppStore((state) => state.setWordStatus);
  const removeWord = useAppStore((state) => state.removeWord);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return savedWords.filter((word) => {
      if (filter !== "all" && word.status !== filter) return false;
      if (!q) return true;
      return `${word.word} ${word.definition} ${word.articleTitle}`.toLowerCase().includes(q);
    });
  }, [savedWords, query, filter]);

  return (
    <AppShell>
      <div className="mx-auto max-w-4xl">
        <header>
          <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
            Notebook
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Vocabulary</h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
            Words you save while reading live here. Mark them learned when they feel familiar.
          </p>
        </header>

        {!hydrated ? (
          <div className="mt-8 space-y-3">
            <div className="h-28 animate-pulse rounded-xl bg-border" />
            <div className="h-28 animate-pulse rounded-xl bg-border" />
          </div>
        ) : savedWords.length === 0 ? (
          <EmptyState
            className="mt-10"
            icon={<BookOpenText className="size-5" />}
            title="Your vocabulary notebook is empty"
            description="Words you save while reading will appear here."
            action={
              <Button asChild>
                <Link to="/articles">Explore Articles</Link>
              </Button>
            }
          />
        ) : (
          <>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" />
                <Input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search saved words"
                  aria-label="Search saved words"
                  className="pl-9"
                />
              </div>
              <div className="flex gap-2" aria-label="Status filter">
                {(["all", "learning", "learned"] as const).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setFilter(item)}
                    className={cn(
                      "h-9 rounded-full border px-3.5 text-sm font-medium capitalize transition-colors duration-quick",
                      filter === item
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-surface text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {visible.length === 0 ? (
              <EmptyState
                className="mt-8"
                title="No matching words"
                description="Try another search or status filter."
              />
            ) : (
              <ul className="mt-6 space-y-3">
                {visible.map((word) => (
                  <VocabCard
                    key={word.id}
                    word={word}
                    onToggle={() =>
                      setWordStatus(word.id, word.status === "learned" ? "learning" : "learned")
                    }
                    onRemove={() => removeWord(word.id)}
                  />
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </AppShell>
  );
}

function VocabCard({
  word,
  onToggle,
  onRemove,
}: {
  word: SavedWord;
  onToggle: () => void;
  onRemove: () => void;
}) {
  return (
    <li className="rounded-xl border border-border bg-surface p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-xl font-semibold tracking-tight">{word.word}</h2>
            <span className="text-sm text-muted-foreground capitalize">{word.partOfSpeech}</span>
            <span
              className={cn(
                "rounded-sm px-2 py-0.5 text-[11px] font-medium",
                word.status === "learned" ? "bg-success-bg text-success" : "bg-highlight text-highlight-text",
              )}
            >
              {word.status === "learned" ? "Learned" : "Learning"}
            </span>
          </div>
          <p className="mt-1 font-serif text-sm italic text-muted-foreground">{word.pronunciation}</p>
          <p className="mt-3 text-sm leading-6">{word.definition}</p>
          <p className="mt-3 font-serif text-[15px] leading-7 text-foreground">“{word.example}”</p>
          <p className="mt-3 text-xs text-muted-foreground">
            From{" "}
            <Link
              to="/article/$id"
              params={{ id: word.articleId }}
              className="font-medium text-indigo no-underline hover:underline"
            >
              {word.articleTitle}
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button size="sm" variant={word.status === "learned" ? "outline" : "muted"} onClick={onToggle}>
            {word.status === "learned" ? "Keep learning" : "Mark as learned"}
          </Button>
          <Button size="icon" variant="ghost" aria-label={`Remove ${word.word}`} onClick={onRemove}>
            <Trash2 className="size-4" />
          </Button>
        </div>
      </div>
    </li>
  );
}
