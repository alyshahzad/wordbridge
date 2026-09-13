import { articles } from "@/lib/data/articles";
import type { PracticeMode, SavedWord, VocabEntry } from "@/lib/types";
import { sample, shuffle } from "@/lib/utils";

export type QuestionType = "meaning" | "blank" | "comprehension";

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  prompt: string;
  context?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  articleTitle?: string;
  articleId?: string;
  word?: string;
}

function vocabPool(saved: SavedWord[]): VocabEntry[] {
  if (saved.length >= 4) {
    return saved.map((word) => ({
      id: word.id,
      word: word.word,
      partOfSpeech: word.partOfSpeech,
      pronunciation: word.pronunciation,
      definition: word.definition,
      contextualMeaning: word.contextualMeaning,
      example: word.example,
    }));
  }
  return articles.flatMap((article) => article.vocabulary);
}

function distractors(
  correct: VocabEntry,
  pool: VocabEntry[],
  field: "contextualMeaning" | "word",
): string[] {
  const others = pool
    .filter((item) => item.id !== correct.id && item[field] !== correct[field])
    .map((item) => item[field]);
  return sample(Array.from(new Set(others)), 3);
}

function meaningQuestion(entry: VocabEntry, pool: VocabEntry[]): QuizQuestion | null {
  const wrong = distractors(entry, pool, "contextualMeaning");
  if (wrong.length < 3) return null;
  const options = shuffle([entry.contextualMeaning, ...wrong]);
  const wordLabel = `${entry.word[0]?.toUpperCase() ?? ""}${entry.word.slice(1)}`;
  const contextual =
    entry.contextualMeaning.charAt(0).toLowerCase() + entry.contextualMeaning.slice(1);
  return {
    id: `meaning-${entry.id}`,
    type: "meaning",
    prompt: `What does “${entry.word}” mean in this context?`,
    context: entry.example,
    options,
    correctIndex: options.indexOf(entry.contextualMeaning),
    explanation: `${wordLabel} is ${entry.partOfSpeech}: ${entry.definition} In the passage, it refers to ${contextual}`,
    word: entry.word,
  };
}

function blankQuestion(entry: VocabEntry, pool: VocabEntry[]): QuizQuestion | null {
  const blanked = entry.example.replace(new RegExp(entry.word, "i"), "______");
  if (blanked === entry.example) return null;
  const wrong = distractors(entry, pool, "word");
  if (wrong.length < 3) return null;
  const options = shuffle([entry.word, ...wrong]);
  return {
    id: `blank-${entry.id}`,
    type: "blank",
    prompt: "Choose the word that best completes the sentence.",
    context: blanked,
    options,
    correctIndex: options.indexOf(entry.word),
    explanation: `The missing word is “${entry.word}” — ${entry.definition}`,
    word: entry.word,
  };
}

function comprehensionQuestion(): QuizQuestion | null {
  const withQuestions = articles.filter((article) => article.comprehension.length > 0);
  const article = sample(withQuestions, 1)[0];
  if (!article) return null;
  const item = sample(article.comprehension, 1)[0];
  if (!item) return null;
  const paired = item.options.map((option, optionIndex) => ({ option, optionIndex }));
  const shuffled = shuffle(paired);
  const correctIndex = shuffled.findIndex((entry) => entry.optionIndex === item.correctIndex);
  return {
    id: `comp-${item.id}-${Math.random().toString(36).slice(2, 7)}`,
    type: "comprehension",
    prompt: item.question,
    options: shuffled.map((entry) => entry.option),
    correctIndex: correctIndex < 0 ? 0 : correctIndex,
    explanation: item.explanation,
    articleTitle: article.title,
    articleId: article.id,
  };
}

export function buildQuiz(mode: PracticeMode, saved: SavedWord[], count = 8): QuizQuestion[] {
  const pool = vocabPool(saved);
  const preferred = saved.length
    ? pool.filter((item) => saved.some((word) => word.id === item.id))
    : pool;
  const questions: QuizQuestion[] = [];
  const used = new Set<string>();

  const push = (question: QuizQuestion | null) => {
    if (!question || used.has(question.id) || questions.length >= count) return;
    used.add(question.id);
    questions.push(question);
  };

  const meaningSource = shuffle(preferred.length ? [...preferred, ...pool.filter((item) => !preferred.some((p) => p.id === item.id))] : pool);
  const blankSource = shuffle(pool);

  const addMeaning = () => {
    for (const entry of meaningSource) {
      if (questions.length >= count) break;
      push(meaningQuestion(entry, pool));
    }
  };
  const addBlank = () => {
    for (const entry of blankSource) {
      if (questions.length >= count) break;
      push(blankQuestion(entry, pool));
    }
  };
  const addComp = () => {
    let attempts = 0;
    while (questions.length < count && attempts < 24) {
      attempts += 1;
      push(comprehensionQuestion());
    }
  };

  if (mode === "meaning") addMeaning();
  else if (mode === "blank") addBlank();
  else if (mode === "comprehension") addComp();
  else {
    addMeaning();
    addBlank();
    addComp();
    if (questions.length < count) addMeaning();
    if (questions.length < count) addBlank();
  }

  return shuffle(questions).slice(0, count);
}
