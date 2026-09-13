import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Clock3, Languages } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Drawer } from "vaul";
import { ArticleCard } from "@/components/articles/article-card";
import { AppShell } from "@/components/layout/app-shell";
import { ArticleBody } from "@/components/reading/article-body";
import { VocabPanel } from "@/components/reading/vocab-panel";
import { DifficultyBadge } from "@/components/shared/difficulty-badge";
import { EmptyState } from "@/components/shared/empty-state";
import { Button } from "@/components/ui/button";
import { getArticleById, relatedArticles } from "@/lib/data/articles";
import { useAppStore, useHydrated } from "@/lib/store";
import { useDesktop } from "@/lib/use-desktop";
import type { VocabEntry } from "@/lib/types";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/article/$id")({
  component: ArticlePage,
  head: ({ params }) => {
    const article = getArticleById(params.id);
    return { meta: [{ title: article ? `${article.title} — WordBridge` : "Article — WordBridge" }] };
  },
});

function ArticlePage() {
  const { id } = Route.useParams();
  const article = getArticleById(id);
  const hydrated = useHydrated();
  const savedWords = useAppStore((state) => state.savedWords);
  const completed = useAppStore((state) => state.completedArticleIds.includes(id));
  const openArticle = useAppStore((state) => state.openArticle);
  const completeArticle = useAppStore((state) => state.completeArticle);
  const saveWord = useAppStore((state) => state.saveWord);
  const [selected, setSelected] = useState<VocabEntry | null>(null);
  const isDesktop = useDesktop();

  useEffect(() => {
    setSelected(null);
    if (article) openArticle(article.id);
  }, [article, openArticle]);

  const related = useMemo(() => (article ? relatedArticles(article) : []), [article]);

  if (!article) {
    return (
      <AppShell>
        <EmptyState
          title="Article not found"
          description="That piece is not in the library. Browse the collection instead."
          action={
            <Button asChild>
              <Link to="/articles">Explore Articles</Link>
            </Button>
          }
        />
      </AppShell>
    );
  }

  const saved = (vocabId: string) => hydrated && savedWords.some((word) => word.id === vocabId);

  const handleSave = (entry: VocabEntry) => {
    if (saved(entry.id)) return;
    saveWord({ vocab: entry, articleId: article.id, articleTitle: article.title });
    toast.success(`“${entry.word}” saved to your notebook`);
  };

  const handleComplete = () => {
    completeArticle(article.id);
    toast.success("Article marked as complete");
  };

  return (
    <AppShell mainClassName="lg:pt-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <article>
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground no-underline hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All articles
          </Link>

          <header className="mt-6 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                {article.category}
              </span>
              <DifficultyBadge difficulty={article.difficulty} />
            </div>
            <h1 className="mt-3 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
              {article.title}
            </h1>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{article.description}</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
              <span>{article.author}</span>
              <span aria-hidden="true">·</span>
              <span>{article.source}</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="size-3.5" aria-hidden="true" />
                {article.readingTime} min
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Languages className="size-3.5" aria-hidden="true" />
                {article.vocabulary.length} words
              </span>
            </div>
          </header>

          <div className="mt-10 max-w-2xl">
            <ArticleBody
              content={article.content}
              vocabulary={article.vocabulary}
              selectedId={selected?.id ?? null}
              onSelect={setSelected}
            />
          </div>

          <div className="mt-10 max-w-2xl rounded-xl border border-border bg-surface p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium tracking-tight">Finished this piece?</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Mark it complete to update your reading streak and dashboard.
                </p>
              </div>
              <Button onClick={handleComplete} variant={completed ? "outline" : "default"} disabled={completed}>
                <Check className="size-4" />
                {completed ? "Completed" : "Mark as complete"}
              </Button>
            </div>
          </div>

          <section className="mt-14 lg:hidden">
            <h2 className="text-sm font-semibold tracking-tight">Words in this article</h2>
            <ul className="mt-3 divide-y divide-border rounded-lg border border-border bg-surface">
              {article.vocabulary.map((entry) => (
                <li key={entry.id}>
                  <button
                    type="button"
                    onClick={() => setSelected(entry)}
                    className="flex w-full items-center justify-between px-4 py-3 text-left"
                  >
                    <span className="font-medium">{entry.word}</span>
                    <span className="text-xs text-muted-foreground capitalize">{entry.partOfSpeech}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-10 space-y-4">
            {selected ? (
              <VocabPanel
                entry={selected}
                saved={saved(selected.id)}
                onSave={() => handleSave(selected)}
                onClose={() => setSelected(null)}
              />
            ) : (
              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="text-sm font-semibold tracking-tight">Words in this article</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Select a highlighted word in the text, or choose one below.
                </p>
                <ul className="mt-4 space-y-1">
                  {article.vocabulary.map((entry) => (
                    <li key={entry.id}>
                      <button
                        type="button"
                        onClick={() => setSelected(entry)}
                        className={cn(
                          "flex w-full items-center justify-between rounded-sm px-2 py-2 text-left text-sm transition-colors duration-quick hover:bg-background",
                          saved(entry.id) && "text-indigo",
                        )}
                      >
                        <span className="font-medium">{entry.word}</span>
                        <span className="text-xs text-muted-foreground capitalize">{entry.partOfSpeech}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      </div>

      {related.length > 0 ? (
        <section className="mx-auto mt-16 max-w-6xl">
          <h2 className="text-lg font-semibold tracking-tight">Read next</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <ArticleCard key={item.id} article={item} />
            ))}
          </div>
        </section>
      ) : null}

      <Drawer.Root
        open={!isDesktop && Boolean(selected)}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-40 bg-navy/40 lg:hidden" />
          <Drawer.Content className="fixed inset-x-0 bottom-0 z-50 rounded-t-xl border border-border bg-surface p-4 outline-none lg:hidden">
            <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-border" />
            {selected ? (
              <VocabPanel
                entry={selected}
                saved={saved(selected.id)}
                onSave={() => handleSave(selected)}
                onClose={() => setSelected(null)}
                variant="sheet"
              />
            ) : null}
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </AppShell>
  );
}
