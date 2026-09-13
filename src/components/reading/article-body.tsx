import { Fragment } from "react";
import { VocabWord } from "@/components/reading/vocab-word";
import type { VocabEntry } from "@/lib/types";

function findEntry(token: string, vocabulary: VocabEntry[]) {
  return vocabulary.find((item) => item.word.toLowerCase() === token.toLowerCase());
}

function Paragraph({
  text,
  vocabulary,
  selectedId,
  onSelect,
}: {
  text: string;
  vocabulary: VocabEntry[];
  selectedId: string | null;
  onSelect: (entry: VocabEntry) => void;
}) {
  const parts = text.split(/(\{\{[^}]+\}\})/g);
  return (
    <p className="article-prose mb-6 last:mb-0">
      {parts.map((part, index) => {
        const match = part.match(/^\{\{([^}]+)\}\}$/);
        if (!match?.[1]) {
          return <Fragment key={index}>{part}</Fragment>;
        }
        const entry = findEntry(match[1], vocabulary);
        if (!entry) return <Fragment key={index}>{match[1]}</Fragment>;
        return (
          <VocabWord
            key={`${entry.id}-${index}`}
            entry={entry}
            selected={selectedId === entry.id}
            onSelect={onSelect}
          />
        );
      })}
    </p>
  );
}

export function ArticleBody({
  content,
  vocabulary,
  selectedId,
  onSelect,
}: {
  content: string;
  vocabulary: VocabEntry[];
  selectedId: string | null;
  onSelect: (entry: VocabEntry) => void;
}) {
  const paragraphs = content.trim().split(/\n\n+/);
  return (
    <div>
      {paragraphs.map((paragraph) => (
        <Paragraph
          key={paragraph.slice(0, 24)}
          text={paragraph}
          vocabulary={vocabulary}
          selectedId={selectedId}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
