import { i as __toESM } from "../_runtime.mjs";
import { a as shuffle, i as sample, t as cn } from "./utils-C95xt6KI.mjs";
import { E as require_react, T as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-DDBe_RZu.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useAppStore, o as useHydrated, s as articles } from "./router-BlwYcoG0.mjs";
import { t as AppShell } from "./app-shell-Cio7Qw0d.mjs";
import { n as Root, t as Indicator } from "../_libs/radix-ui__react-progress.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/practice-DeoHWImT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Progress = import_react.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("relative h-1.5 w-full overflow-hidden rounded-full bg-border", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
		className: "size-full flex-1 bg-indigo transition-transform duration-fast ease-out-smooth",
		style: { transform: `translateX(-${100 - (value ?? 0)}%)` }
	})
}));
Progress.displayName = Root.displayName;
function vocabPool(saved) {
	if (saved.length >= 4) return saved.map((word) => ({
		id: word.id,
		word: word.word,
		partOfSpeech: word.partOfSpeech,
		pronunciation: word.pronunciation,
		definition: word.definition,
		contextualMeaning: word.contextualMeaning,
		example: word.example
	}));
	return articles.flatMap((article) => article.vocabulary);
}
function distractors(correct, pool, field) {
	const others = pool.filter((item) => item.id !== correct.id && item[field] !== correct[field]).map((item) => item[field]);
	return sample(Array.from(new Set(others)), 3);
}
function meaningQuestion(entry, pool) {
	const wrong = distractors(entry, pool, "contextualMeaning");
	if (wrong.length < 3) return null;
	const options = shuffle([entry.contextualMeaning, ...wrong]);
	const wordLabel = `${entry.word[0]?.toUpperCase() ?? ""}${entry.word.slice(1)}`;
	const contextual = entry.contextualMeaning.charAt(0).toLowerCase() + entry.contextualMeaning.slice(1);
	return {
		id: `meaning-${entry.id}`,
		type: "meaning",
		prompt: `What does “${entry.word}” mean in this context?`,
		context: entry.example,
		options,
		correctIndex: options.indexOf(entry.contextualMeaning),
		explanation: `${wordLabel} is ${entry.partOfSpeech}: ${entry.definition} In the passage, it refers to ${contextual}`,
		word: entry.word
	};
}
function blankQuestion(entry, pool) {
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
		word: entry.word
	};
}
function comprehensionQuestion() {
	const withQuestions = articles.filter((article) => article.comprehension.length > 0);
	const article = sample(withQuestions, 1)[0];
	if (!article) return null;
	const item = sample(article.comprehension, 1)[0];
	if (!item) return null;
	const paired = item.options.map((option, optionIndex) => ({
		option,
		optionIndex
	}));
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
		articleId: article.id
	};
}
function buildQuiz(mode, saved, count = 8) {
	const pool = vocabPool(saved);
	const preferred = saved.length ? pool.filter((item) => saved.some((word) => word.id === item.id)) : pool;
	const questions = [];
	const used = /* @__PURE__ */ new Set();
	const push = (question) => {
		if (!question || used.has(question.id) || questions.length >= count) return;
		used.add(question.id);
		questions.push(question);
	};
	const meaningSource = shuffle(preferred.length >= 4 ? preferred : pool);
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
var modes = [
	{
		id: "mixed",
		title: "Mixed practice",
		text: "A balanced set of meaning, fill-in-the-blank, and comprehension questions."
	},
	{
		id: "meaning",
		title: "Vocabulary in context",
		text: "Choose the meaning that fits the way the word is used."
	},
	{
		id: "blank",
		title: "Fill in the blank",
		text: "Complete the sentence with the most precise word."
	},
	{
		id: "comprehension",
		title: "Reading comprehension",
		text: "Short questions based on the essays in the library."
	}
];
function PracticePage() {
	const hydrated = useHydrated();
	const savedWords = useAppStore((state) => state.savedWords);
	const recordQuiz = useAppStore((state) => state.recordQuiz);
	const [mode, setMode] = (0, import_react.useState)(null);
	const [questions, setQuestions] = (0, import_react.useState)([]);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [choice, setChoice] = (0, import_react.useState)(null);
	const [score, setScore] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const start = (nextMode) => {
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
	const submit = (optionIndex) => {
		if (choice !== null || !question) return;
		setChoice(optionIndex);
		if (optionIndex === question.correctIndex) setScore((value) => value + 1);
	};
	const goNext = () => {
		if (!mode || questions.length === 0) return;
		if (index + 1 >= questions.length) {
			recordQuiz({
				mode,
				score,
				total: questions.length
			});
			setDone(true);
			return;
		}
		setIndex((value) => value + 1);
		setChoice(null);
	};
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-40 animate-pulse rounded-md bg-border" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-40 animate-pulse rounded-xl bg-border" })]
	}) });
	if (done && mode) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg py-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase",
				children: "Practice complete"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 text-3xl font-semibold tracking-tight",
				children: "Nice work."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm leading-6 text-muted-foreground",
				children: [
					"You answered ",
					score,
					" of ",
					questions.length,
					" correctly."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col justify-center gap-3 sm:flex-row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => start(mode),
						children: "Practice again"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/vocabulary",
							children: "Review vocabulary"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ghost",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/progress",
							children: "View progress"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-6 text-sm text-muted-foreground hover:text-foreground",
				onClick: resetToMenu,
				children: "Choose another practice type"
			})
		]
	}) });
	if (!mode || !question) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase",
				children: "Review"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-3xl font-semibold tracking-tight",
				children: "Practice"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xl text-sm leading-6 text-muted-foreground",
				children: "Eight focused questions. Saved words are preferred when you have a notebook; otherwise the library supplies the set."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-3 sm:grid-cols-2",
			children: modes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => start(item.id),
				className: "rounded-xl border border-border bg-surface p-5 text-left transition-[border-color,transform] duration-fast ease-out-smooth hover:-translate-y-0.5 hover:border-indigo/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-semibold tracking-tight",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-6 text-muted-foreground",
					children: item.text
				})]
			}, item.id))
		})]
	}) });
	const revealed = choice !== null;
	const progressValue = (index + (revealed ? 1 : 0)) / questions.length * 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase",
					children: question.type === "meaning" ? "Vocabulary" : question.type === "blank" ? "Fill in the blank" : "Comprehension"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs tabular-nums text-muted-foreground",
					children: [
						index + 1,
						" / ",
						questions.length
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
				value: progressValue,
				className: "mt-3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-8 text-2xl leading-snug font-semibold tracking-tight",
				children: question.prompt
			}),
			question.articleTitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: [
					"Based on “",
					question.articleTitle,
					"”"
				]
			}) : null,
			question.context ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 rounded-lg bg-surface px-4 py-3 font-serif text-lg leading-8",
				children: question.context
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-2",
				children: question.options.map((option, optionIndex) => {
					const isCorrect = optionIndex === question.correctIndex;
					const isChosen = choice === optionIndex;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => submit(optionIndex),
						disabled: revealed,
						className: cn("w-full rounded-lg border px-4 py-3 text-left text-sm leading-6 transition-colors duration-quick ease-out-smooth", !revealed && "border-border bg-surface hover:border-indigo/40", revealed && isCorrect && "border-success bg-success-bg text-foreground", revealed && isChosen && !isCorrect && "border-error bg-error-bg text-foreground", revealed && !isCorrect && !isChosen && "border-border bg-surface opacity-70"),
						children: option
					}) }, `${question.id}-${option}`);
				})
			}),
			revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-lg border border-border bg-surface p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: choice === question.correctIndex ? "Correct" : "Not quite"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-6 text-muted-foreground",
						children: question.explanation
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-4",
						onClick: goNext,
						children: index + 1 >= questions.length ? "See results" : "Next question"
					})
				]
			}) : null
		]
	}) });
}
//#endregion
export { PracticePage as component };
