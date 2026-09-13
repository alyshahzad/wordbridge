export const CATEGORIES = [
  "Technology",
  "Science",
  "Culture",
  "Environment",
  "Education",
  "Society",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const DIFFICULTIES = ["beginner", "intermediate", "advanced"] as const;

export type Difficulty = (typeof DIFFICULTIES)[number];

export const PARTS_OF_SPEECH = [
  "noun",
  "verb",
  "adjective",
  "adverb",
  "phrase",
] as const;

export type PartOfSpeech = (typeof PARTS_OF_SPEECH)[number];

export type LearningLevel = Difficulty;

export type WordStatus = "learning" | "learned";

export type Appearance = "light" | "dark" | "system";

export interface VocabEntry {
  id: string;
  word: string;
  partOfSpeech: PartOfSpeech;
  pronunciation: string;
  definition: string;
  contextualMeaning: string;
  example: string;
}

export interface ComprehensionQuestion {
  id: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  category: Category;
  difficulty: Difficulty;
  readingTime: number;
  author: string;
  source: string;
  vocabulary: VocabEntry[];
  content: string;
  comprehension: ComprehensionQuestion[];
}

export interface SavedWord {
  id: string;
  word: string;
  partOfSpeech: PartOfSpeech;
  pronunciation: string;
  definition: string;
  contextualMeaning: string;
  example: string;
  articleId: string;
  articleTitle: string;
  savedAt: number;
  status: WordStatus;
}

export interface QuizResult {
  id: string;
  mode: PracticeMode;
  score: number;
  total: number;
  completedAt: number;
}

export type PracticeMode = "mixed" | "meaning" | "blank" | "comprehension";

export interface DayActivity {
  articles: number;
  words: number;
  quizzes: number;
}

export interface UserProfile {
  name: string;
  level: LearningLevel;
  topics: Category[];
  goal: string;
  dailyMinutes: 10 | 15 | 20 | 30;
  reminders: boolean;
  weeklySummary: boolean;
  appearance: Appearance;
}

export interface AppSnapshot {
  savedWords: SavedWord[];
  completedArticleIds: string[];
  openedArticleIds: string[];
  lastArticleId: string | null;
  quizResults: QuizResult[];
  activity: Record<string, DayActivity>;
  streakCurrent: number;
  streakLastDate: string | null;
  profile: UserProfile;
}
