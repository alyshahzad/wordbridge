import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import type { ReactNode } from "react";
import { ArticleCard } from "@/components/articles/article-card";
import { AppShell } from "@/components/layout/app-shell";
import { EmptyState } from "@/components/shared/empty-state";
import { Input } from "@/components/ui/input";
import { articles, filterArticles, topicOptions } from "@/lib/data/articles";
import { useAppStore, useHydrated } from "@/lib/store";
import type { Category, Difficulty } from "@/lib/types";
import { DIFFICULTIES } from "@/lib/types";
import { cn } from "@/lib/utils";

type ArticlesSearch = {
  q?: string;
  topic?: string;
  level?: string;
};

export const Route = createFileRoute("/articles")({
  validateSearch: (search: Record<string, unknown>): ArticlesSearch => ({
    q: typeof search.q === "string" ? search.q : undefined,
    topic: typeof search.topic === "string" ? search.topic : undefined,
    level: typeof search.level === "string" ? search.level : undefined,
  }),
  component: ArticlesPage,
  head: () => ({ meta: [{ title: "Explore articles — WordBridge" }] }),
});

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "h-9 rounded-full border px-3.5 text-sm font-medium transition-colors duration-quick ease-out-smooth",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-surface text-muted-foreground hover:border-border-strong hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}

function ArticlesPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/articles" });
  const hydrated = useHydrated();
  const completed = useAppStore((state) => state.completedArticleIds);
  const lastArticleId = useAppStore((state) => state.lastArticleId);
  const preferredTopics = useAppStore((state) => state.profile.topics);

  const query = search.q ?? "";
  const topic = (search.topic as Category | undefined) ?? "all";
  const level = (search.level as Difficulty | undefined) ?? "all";

  const filtered = filterArticles({
    query,
    category: topic === "all" ? "all" : topic,
    difficulty: level === "all" ? "all" : level,
  }).sort((a, b) => {
    if (!preferredTopics.length) return 0;
    return Number(preferredTopics.includes(b.category)) - Number(preferredTopics.includes(a.category));
  });

  const lastArticle = articles.find((article) => article.id === lastArticleId);

  const setSearch = (patch: ArticlesSearch) => {
    void navigate({
      search: {
        q: patch.q !== undefined ? patch.q || undefined : search.q,
        topic: patch.topic !== undefined ? patch.topic || undefined : search.topic,
        level: patch.level !== undefined ? patch.level || undefined : search.level,
      },
    });
  };

  return (
    <AppShell>
      <div className="mx-auto max-w-5xl">
        <header className="wb-enter">
          <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
            Library
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Explore articles</h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
            Short original essays written for learners. Filter by topic or level, then tap any word you want to keep.
          </p>
        </header>

        {hydrated && lastArticle ? (
          <p className="mt-6 text-sm text-muted-foreground">
            Continue{" "}
            <Link
              to="/article/$id"
              params={{ id: lastArticle.id }}
              className="font-medium text-indigo no-underline hover:underline"
            >
              {lastArticle.title}
            </Link>
          </p>
        ) : null}

        <div className="relative mt-8 max-w-xl">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" />
          <Input
            value={query}
            onChange={(event) => setSearch({ q: event.target.value })}
            placeholder="Search titles, topics, or words"
            aria-label="Search articles"
            className="pl-9"
          />
        </div>

        <div className="mt-5 flex flex-col gap-3">
          <div className="flex flex-wrap gap-2" aria-label="Topics">
            <Chip active={topic === "all"} onClick={() => setSearch({ topic: "" })}>
              All topics
            </Chip>
            {topicOptions.map((item) => (
              <Chip
                key={item}
                active={topic === item}
                onClick={() => setSearch({ topic: topic === item ? "" : item })}
              >
                {item}
              </Chip>
            ))}
          </div>
          <div className="flex flex-wrap gap-2" aria-label="Difficulty">
            <Chip active={level === "all"} onClick={() => setSearch({ level: "" })}>
              All levels
            </Chip>
            {DIFFICULTIES.map((item) => (
              <Chip
                key={item}
                active={level === item}
                onClick={() => setSearch({ level: level === item ? "" : item })}
              >
                {item[0]?.toUpperCase()}
                {item.slice(1)}
              </Chip>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            className="mt-10"
            title="No articles found"
            description="Try another topic or search term."
            action={
              <button
                type="button"
                className="text-sm font-medium text-indigo"
                onClick={() => void navigate({ search: {} })}
              >
                Clear filters
              </button>
            }
          />
        ) : (
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {filtered.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                completed={hydrated && completed.includes(article.id)}
              />
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}
