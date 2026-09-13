import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useEffect, useState } from "react";
import type {
  AppSnapshot,
  Appearance,
  Category,
  DayActivity,
  PracticeMode,
  QuizResult,
  SavedWord,
  UserProfile,
  VocabEntry,
} from "@/lib/types";
import { todayKey, yesterdayKey } from "@/lib/utils";

const defaultProfile: UserProfile = {
  name: "",
  level: "intermediate",
  topics: [],
  goal: "Build a stronger academic vocabulary",
  dailyMinutes: 15,
  reminders: true,
  weeklySummary: true,
  appearance: "light",
};

const emptyActivity = (): DayActivity => ({
  articles: 0,
  words: 0,
  quizzes: 0,
});

export const defaultSnapshot: AppSnapshot = {
  savedWords: [],
  completedArticleIds: [],
  openedArticleIds: [],
  lastArticleId: null,
  quizResults: [],
  activity: {},
  streakCurrent: 0,
  streakLastDate: null,
  profile: defaultProfile,
};

interface AppState extends AppSnapshot {
  saveWord: (input: {
    vocab: VocabEntry;
    articleId: string;
    articleTitle: string;
  }) => void;
  removeWord: (id: string) => void;
  setWordStatus: (id: string, status: SavedWord["status"]) => void;
  openArticle: (id: string) => void;
  completeArticle: (id: string) => void;
  recordQuiz: (input: { mode: PracticeMode; score: number; total: number }) => void;
  updateProfile: (patch: Partial<UserProfile>) => void;
  resetProgress: () => void;
}

function withStreak(state: AppSnapshot): Pick<AppSnapshot, "streakCurrent" | "streakLastDate"> {
  const today = todayKey();
  if (state.streakLastDate === today) {
    return {
      streakCurrent: Math.max(state.streakCurrent, 1),
      streakLastDate: today,
    };
  }
  if (state.streakLastDate === yesterdayKey(today)) {
    return { streakCurrent: state.streakCurrent + 1, streakLastDate: today };
  }
  return { streakCurrent: 1, streakLastDate: today };
}

function bumpActivity(
  activity: Record<string, DayActivity>,
  field: keyof DayActivity,
): Record<string, DayActivity> {
  const key = todayKey();
  const current = activity[key] ?? emptyActivity();
  return {
    ...activity,
    [key]: { ...current, [field]: current[field] + 1 },
  };
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      ...defaultSnapshot,

      saveWord: ({ vocab, articleId, articleTitle }) => {
        if (get().savedWords.some((word) => word.id === vocab.id)) return;
        set((state) => ({
          savedWords: [
            {
              id: vocab.id,
              word: vocab.word,
              partOfSpeech: vocab.partOfSpeech,
              pronunciation: vocab.pronunciation,
              definition: vocab.definition,
              contextualMeaning: vocab.contextualMeaning,
              example: vocab.example,
              articleId,
              articleTitle,
              savedAt: Date.now(),
              status: "learning",
            },
            ...state.savedWords,
          ],
          activity: bumpActivity(state.activity, "words"),
          ...withStreak(state),
        }));
      },

      removeWord: (id) => {
        set((state) => ({
          savedWords: state.savedWords.filter((word) => word.id !== id),
        }));
      },

      setWordStatus: (id, status) => {
        set((state) => ({
          savedWords: state.savedWords.map((word) =>
            word.id === id ? { ...word, status } : word,
          ),
          ...withStreak(state),
        }));
      },

      openArticle: (id) => {
        set((state) => ({
          lastArticleId: id,
          openedArticleIds: state.openedArticleIds.includes(id)
            ? state.openedArticleIds
            : [...state.openedArticleIds, id],
        }));
      },

      completeArticle: (id) => {
        if (get().completedArticleIds.includes(id)) {
          set({ lastArticleId: id });
          return;
        }
        set((state) => ({
          lastArticleId: id,
          completedArticleIds: [...state.completedArticleIds, id],
          openedArticleIds: state.openedArticleIds.includes(id)
            ? state.openedArticleIds
            : [...state.openedArticleIds, id],
          activity: bumpActivity(state.activity, "articles"),
          ...withStreak(state),
        }));
      },

      recordQuiz: ({ mode, score, total }) => {
        const result: QuizResult = {
          id: `${Date.now()}-${mode}`,
          mode,
          score,
          total,
          completedAt: Date.now(),
        };
        set((state) => ({
          quizResults: [result, ...state.quizResults].slice(0, 50),
          activity: bumpActivity(state.activity, "quizzes"),
          ...withStreak(state),
        }));
      },

      updateProfile: (patch) => {
        set((state) => ({
          profile: { ...state.profile, ...patch },
        }));
      },

      resetProgress: () => {
        const { profile } = get();
        set({
          ...defaultSnapshot,
          profile,
        });
      },
    }),
    { name: "wordbridge-v1" },
  ),
);

export function useHydrated(): boolean {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const unsub = useAppStore.persist.onFinishHydration(() => setHydrated(true));
    if (useAppStore.persist.hasHydrated()) setHydrated(true);
    return unsub;
  }, []);

  return hydrated;
}

export function resolveAppearance(appearance: Appearance): "light" | "dark" {
  if (appearance === "system") {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return appearance;
}

export function selectProgress(state: AppSnapshot) {
  const learned = state.savedWords.filter((word) => word.status === "learned").length;
  const quizTotal = state.quizResults.reduce((sum, item) => sum + item.total, 0);
  const quizScore = state.quizResults.reduce((sum, item) => sum + item.score, 0);
  const accuracy = quizTotal === 0 ? 0 : Math.round((quizScore / quizTotal) * 100);
  return {
    articlesRead: state.completedArticleIds.length,
    wordsSaved: state.savedWords.length,
    wordsLearned: learned,
    quizAccuracy: accuracy,
    quizzesTaken: state.quizResults.length,
    streak: state.streakCurrent,
  };
}
