import { n as formatDayLabel, r as lastNDays } from "./utils-C95xt6KI.mjs";
import { T as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-DDBe_RZu.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as GraduationCap, f as Flame, l as Languages, v as BookOpenText } from "../_libs/lucide-react.mjs";
import { a as useAppStore, i as selectProgress, o as useHydrated, s as articles } from "./router-BlwYcoG0.mjs";
import { t as AppShell } from "./app-shell-Cio7Qw0d.mjs";
import { a as Tooltip, i as ResponsiveContainer, n as XAxis, r as Bar, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/progress-BpZxgNpG.js
var import_jsx_runtime = require_jsx_runtime();
function ProgressPage() {
	const hydrated = useHydrated();
	const snapshot = useAppStore((state) => state);
	const stats = selectProgress(snapshot);
	const week = lastNDays(7).map((key) => {
		const day = snapshot.activity[key];
		return {
			key,
			label: formatDayLabel(key),
			activity: (day?.articles ?? 0) + (day?.words ?? 0) + (day?.quizzes ?? 0)
		};
	});
	const recentArticles = articles.filter((article) => snapshot.completedArticleIds.includes(article.id)).slice(-3).reverse();
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-48 animate-pulse rounded-md bg-border" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-4",
			children: Array.from({ length: 4 }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-28 animate-pulse rounded-xl bg-border" }, index))
		})]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase",
					children: "Dashboard"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-3xl font-semibold tracking-tight",
					children: "Your progress"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-sm leading-6 text-muted-foreground",
					children: "A quiet record of reading, saved language, and practice — stored on this device."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						icon: BookOpenText,
						label: "Articles read",
						value: stats.articlesRead
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						icon: Languages,
						label: "Words saved",
						value: stats.wordsSaved,
						hint: `${stats.wordsLearned} learned`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						icon: GraduationCap,
						label: "Quiz accuracy",
						value: `${stats.quizAccuracy}%`,
						hint: `${stats.quizzesTaken} sessions`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						icon: Flame,
						label: "Day streak",
						value: stats.streak
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 rounded-xl border border-border bg-surface p-5 sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-end justify-between gap-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold tracking-tight",
						children: "Weekly activity"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Articles completed, words saved, and practice sessions."
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 h-52",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: week,
							barSize: 28,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "label",
									axisLine: false,
									tickLine: false,
									tick: {
										fill: "currentColor",
										fontSize: 12
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									cursor: { fill: "var(--wb-highlight)" },
									contentStyle: {
										borderRadius: 12,
										border: "1px solid var(--wb-border)",
										background: "var(--wb-surface)",
										fontSize: 12
									},
									formatter: (value) => [value ?? 0, "Activity"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "activity",
									fill: "var(--wb-indigo)",
									radius: [
										6,
										6,
										0,
										0
									]
								})
							]
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 grid gap-3 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold tracking-tight",
						children: "Recently completed"
					}), recentArticles.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm leading-6 text-muted-foreground",
						children: [
							"Finish an article to see it here.",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/articles",
								className: "font-medium text-indigo no-underline hover:underline",
								children: "Start reading"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: recentArticles.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/article/$id",
							params: { id: article.id },
							className: "text-sm font-medium text-foreground no-underline hover:text-indigo",
							children: article.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: article.category
						})] }, article.id))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-semibold tracking-tight",
							children: "Keep going"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-6 text-muted-foreground",
							children: stats.wordsSaved === 0 ? "Save words as you read, then turn them into a short practice session." : "You have words waiting in your notebook. A mixed quiz takes a few minutes."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/practice",
									children: "Practice"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/vocabulary",
									children: "Open notebook"
								})
							})]
						})
					]
				})]
			})
		]
	}) });
}
function Stat({ icon: Icon, label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-4",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide uppercase",
					children: label
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-3xl font-semibold tracking-tight tabular-nums",
				children: value
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: hint
			}) : null
		]
	});
}
//#endregion
export { ProgressPage as component };
