import { Link } from "@tanstack/react-router";
import { Clock3, Languages } from "lucide-react";
import { DifficultyBadge } from "@/components/shared/difficulty-badge";
import type { Article } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ArticleCard({
  article,
  completed = false,
}: {
  article: Article;
  completed?: boolean;
}) {
  return (
    <Link
      to="/article/$id"
      params={{ id: article.id }}
      className={cn(
        "group flex h-full flex-col rounded-xl border border-border bg-surface p-5 no-underline transition-[border-color,transform,box-shadow] duration-fast ease-out-smooth hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[var(--wb-shadow-md)]",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
          {article.category}
        </span>
        <DifficultyBadge difficulty={article.difficulty} />
      </div>
      <h3 className="mt-4 font-sans text-lg leading-snug font-semibold tracking-tight text-foreground group-hover:text-navy">
        {article.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{article.description}</p>
      <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Clock3 className="size-3.5" aria-hidden="true" />
          {article.readingTime} min
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Languages className="size-3.5" aria-hidden="true" />
          {article.vocabulary.length} words
        </span>
        {completed ? <span className="ml-auto text-success">Read</span> : null}
      </div>
    </Link>
  );
}
