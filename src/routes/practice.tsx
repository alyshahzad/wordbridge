import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { buildQuiz, type QuizQuestion } from "@/lib/quiz";
import { useAppStore, useHydrated } from "@/lib/store";
import type { PracticeMode } from "@/lib/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/practice")({
  component: PracticePage,
  head: () => ({ meta: [{ title: "Practice — WordBridge" }] }),
});

const modes: { id: PracticeMode; title: string; text: string }[] = [
  {
    id: "mixed",
    title: "Mixed practice",
    text: "A balanced set of meaning, fill-in-the-blank, and comprehension questions.",
  },
  {
    id: "meaning",
    title: "Vocabulary in context",
    text: "Choose the meaning that fits the way the word is used.",
  },
  {
    id: "blank",
    title: "Fill in the blank",
    text: "Complete the sentence with the most precise word.",
  },
  {
    id: "comprehension",
    title: "Reading comprehension",
    text: "Short questions based on the essays in the library.",
  },
];

function PracticePage() {
  const hydrated = useHydrated();
  const savedWords = useAppStore((state) => state.savedWords);
  const recordQuiz = useAppStore((state) => state.recordQuiz);
  const [mode, setMode] = useState<PracticeMode | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const start = (nextMode: PracticeMode) => {
    const quiz = buildQuiz(nextMode, savedWords, 8);
    setMode(nextMode);
    setQuestions(quiz);
    setIndex(0);
    setChoice(null);
    setScore(0);
    setDone(false);
  };

  const resetToMenu = () => {
    setMode(null);
    setDone(false);
    setQuestions([]);
    setChoice(null);
    setIndex(0);
    setScore(0);
  };

  const question = questions[index];

  const submit = (optionIndex: number) => {
    if (choice !== null || !question) return;
    setChoice(optionIndex);
    if (optionIndex === question.correctIndex) setScore((value) => value + 1);
  };

  const goNext = () => {
    if (!mode || questions.length === 0) return;
    if (index + 1 >= questions.length) {
      recordQuiz({ mode, score, total: questions.length });
      setDone(true);
      return;
    }
    setIndex((value) => value + 1);
    setChoice(null);
  };

  if (!hydrated) {
    return (
      <AppShell>
        <div className="mx-auto max-w-2xl">
          <div className="h-8 w-40 animate-pulse rounded-md bg-border" />
          <div className="mt-4 h-40 animate-pulse rounded-xl bg-border" />
        </div>
      </AppShell>
    );
  }

  if (done && mode) {
    return (
      <AppShell>
        <div className="mx-auto max-w-lg py-8 text-center">
          <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
            Practice complete
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">Nice work.</h1>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            You answered {score} of {questions.length} correctly.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button onClick={() => start(mode)}>Practice again</Button>
            <Button asChild variant="outline">
              <Link to="/vocabulary">Review vocabulary</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/progress">View progress</Link>
            </Button>
          </div>
          <button
            type="button"
            className="mt-6 text-sm text-muted-foreground hover:text-foreground"
            onClick={resetToMenu}
          >
            Choose another practice type
          </button>
        </div>
      </AppShell>
    );
  }

  if (!mode || !question) {
    return (
      <AppShell>
        <div className="mx-auto max-w-3xl">
          <header>
            <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
              Review
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Practice</h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
              Eight focused questions. Saved words are preferred when you have a notebook; otherwise the library supplies the set.
            </p>
          </header>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {modes.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => start(item.id)}
                className="rounded-xl border border-border bg-surface p-5 text-left transition-[border-color,transform] duration-fast ease-out-smooth hover:-translate-y-0.5 hover:border-indigo/40"
              >
                <h2 className="font-semibold tracking-tight">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </button>
            ))}
          </div>
        </div>
      </AppShell>
    );
  }

  const revealed = choice !== null;
  const progressValue = ((index + (revealed ? 1 : 0)) / questions.length) * 100;

  return (
    <AppShell>
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
            {question.type === "meaning"
              ? "Vocabulary"
              : question.type === "blank"
                ? "Fill in the blank"
                : "Comprehension"}
          </p>
          <p className="text-xs tabular-nums text-muted-foreground">
            {index + 1} / {questions.length}
          </p>
        </div>
        <Progress value={progressValue} className="mt-3" />

        <h1 className="mt-8 text-2xl leading-snug font-semibold tracking-tight">{question.prompt}</h1>
        {question.articleTitle ? (
          <p className="mt-2 text-sm text-muted-foreground">Based on “{question.articleTitle}”</p>
        ) : null}
        {question.context ? (
          <p className="mt-5 rounded-lg bg-surface px-4 py-3 font-serif text-lg leading-8">
            {question.context}
          </p>
        ) : null}

        <ul className="mt-6 space-y-2">
          {question.options.map((option, optionIndex) => {
            const isCorrect = optionIndex === question.correctIndex;
            const isChosen = choice === optionIndex;
            return (
              <li key={`${question.id}-${option}`}>
                <button
                  type="button"
                  onClick={() => submit(optionIndex)}
                  disabled={revealed}
                  className={cn(
                    "w-full rounded-lg border px-4 py-3 text-left text-sm leading-6 transition-colors duration-quick ease-out-smooth",
                    !revealed && "border-border bg-surface hover:border-indigo/40",
                    revealed && isCorrect && "border-success bg-success-bg text-foreground",
                    revealed && isChosen && !isCorrect && "border-error bg-error-bg text-foreground",
                    revealed && !isCorrect && !isChosen && "border-border bg-surface opacity-70",
                  )}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>

        {revealed ? (
          <div className="mt-6 rounded-lg border border-border bg-surface p-4">
            <p className="text-sm font-medium">
              {choice === question.correctIndex ? "Correct" : "Not quite"}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{question.explanation}</p>
            <Button className="mt-4" onClick={goNext}>
              {index + 1 >= questions.length ? "See results" : "Next question"}
            </Button>
          </div>
        ) : null}
      </div>
    </AppShell>
  );
}
