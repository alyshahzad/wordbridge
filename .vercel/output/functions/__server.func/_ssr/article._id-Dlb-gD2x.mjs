import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C95xt6KI.mjs";
import { E as require_react, T as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-DDBe_RZu.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as BookmarkCheck, b as ArrowLeft, g as Bookmark, l as Languages, m as Check, n as Volume2, p as Clock3, t as X } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as useAppStore, l as getArticleById, n as Route, o as useHydrated, u as relatedArticles } from "./router-BlwYcoG0.mjs";
import { n as DifficultyBadge, t as ArticleCard } from "./article-card-BFgJQ_68.mjs";
import { t as AppShell } from "./app-shell-Cio7Qw0d.mjs";
import { t as EmptyState } from "./empty-state-DsOlbFQ-.mjs";
import { t as Drawer } from "../_libs/vaul.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/article._id-Dlb-gD2x.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function VocabWord({ entry, selected, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => onSelect(entry),
		"aria-expanded": selected,
		"aria-controls": "vocab-panel",
		className: cn("rounded-[4px] px-0.5 font-serif font-medium underline decoration-indigo/35 decoration-[1.5px] underline-offset-[5px] transition-[background-color,color,text-decoration-color] duration-quick ease-out-smooth", selected ? "bg-highlight text-highlight-text decoration-indigo" : "text-navy hover:bg-highlight hover:decoration-indigo"),
		children: entry.word
	});
}
function findEntry(token, vocabulary) {
	return vocabulary.find((item) => item.word.toLowerCase() === token.toLowerCase());
}
function Paragraph({ text, vocabulary, selectedId, onSelect }) {
	const parts = text.split(/(\{\{[^}]+\}\})/g);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "article-prose mb-6 last:mb-0",
		children: parts.map((part, index) => {
			const match = part.match(/^\{\{([^}]+)\}\}$/);
			if (!match?.[1]) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: part }, index);
			const entry = findEntry(match[1], vocabulary);
			if (!entry) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: match[1] }, index);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VocabWord, {
				entry,
				selected: selectedId === entry.id,
				onSelect
			}, `${entry.id}-${index}`);
		})
	});
}
function ArticleBody({ content, vocabulary, selectedId, onSelect }) {
	const paragraphs = content.trim().split(/\n\n+/);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paragraph, {
		text: paragraph,
		vocabulary,
		selectedId,
		onSelect
	}, paragraph.slice(0, 24))) });
}
function VocabPanel({ entry, saved, onSave, onClose, variant = "desktop" }) {
	const speak = () => {
		if (typeof window === "undefined" || !window.speechSynthesis) return;
		const utterance = new SpeechSynthesisUtterance(entry.word);
		utterance.lang = "en-US";
		utterance.rate = .9;
		window.speechSynthesis.cancel();
		window.speechSynthesis.speak(utterance);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "vocab-panel",
		role: "dialog",
		"aria-labelledby": "vocab-word-title",
		className: variant === "desktop" ? "wb-panel-enter rounded-xl border border-border bg-surface p-5 shadow-[var(--wb-shadow-md)]" : "wb-sheet-enter px-1 pb-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase",
					children: "In context"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "vocab-word-title",
					className: "mt-2 font-sans text-2xl font-semibold tracking-tight",
					children: entry.word
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					className: "flex size-9 items-center justify-center rounded-sm text-muted-foreground transition-colors duration-quick hover:bg-background hover:text-foreground",
					"aria-label": "Close vocabulary panel",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-serif italic",
						children: entry.pronunciation
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: "·"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "capitalize",
						children: entry.partOfSpeech
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: speak,
						className: "ml-1 inline-flex size-8 items-center justify-center rounded-sm text-indigo transition-colors duration-quick hover:bg-highlight",
						"aria-label": `Pronounce ${entry.word}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-sm leading-6 text-foreground",
				children: entry.definition
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 rounded-md bg-background p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase",
					children: "In this article"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-6",
					children: entry.contextualMeaning
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase",
					children: "Example"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 font-serif text-[15px] leading-7 text-foreground",
					children: [
						"“",
						entry.example,
						"”"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				className: "mt-6 w-full",
				variant: saved ? "outline" : "default",
				onClick: onSave,
				children: [saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookmarkCheck, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-4" }), saved ? "Saved to notebook" : "Save word"]
			})
		]
	});
}
function useDesktop(query = "(min-width: 1024px)") {
	const [matches, setMatches] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const media = window.matchMedia(query);
		const apply = () => setMatches(media.matches);
		apply();
		media.addEventListener("change", apply);
		return () => media.removeEventListener("change", apply);
	}, [query]);
	return matches;
}
function ArticlePage() {
	const { id } = Route.useParams();
	const article = getArticleById(id);
	const hydrated = useHydrated();
	const savedWords = useAppStore((state) => state.savedWords);
	const completed = useAppStore((state) => state.completedArticleIds.includes(id));
	const openArticle = useAppStore((state) => state.openArticle);
	const completeArticle = useAppStore((state) => state.completeArticle);
	const saveWord = useAppStore((state) => state.saveWord);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const isDesktop = useDesktop();
	(0, import_react.useEffect)(() => {
		setSelected(null);
		if (article) openArticle(article.id);
	}, [article, openArticle]);
	const related = (0, import_react.useMemo)(() => article ? relatedArticles(article) : [], [article]);
	if (!article) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
		title: "Article not found",
		description: "That piece is not in the library. Browse the collection instead.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/articles",
				children: "Explore Articles"
			})
		})
	}) });
	const saved = (vocabId) => hydrated && savedWords.some((word) => word.id === vocabId);
	const handleSave = (entry) => {
		if (saved(entry.id)) return;
		saveWord({
			vocab: entry,
			articleId: article.id,
			articleTitle: article.title
		});
		toast.success(`“${entry.word}” saved to your notebook`);
	};
	const handleComplete = () => {
		completeArticle(article.id);
		toast.success("Article marked as complete");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		mainClassName: "lg:pt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/articles",
						className: "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground no-underline hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "size-4",
							"aria-hidden": "true"
						}), "All articles"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "mt-6 max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase",
									children: article.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DifficultyBadge, { difficulty: article.difficulty })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl",
								children: article.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-6 text-muted-foreground",
								children: article.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: article.author }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: article.source }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, {
												className: "size-3.5",
												"aria-hidden": "true"
											}),
											article.readingTime,
											" min"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, {
												className: "size-3.5",
												"aria-hidden": "true"
											}),
											article.vocabulary.length,
											" words"
										]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 max-w-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleBody, {
							content: article.content,
							vocabulary: article.vocabulary,
							selectedId: selected?.id ?? null,
							onSelect: setSelected
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 max-w-2xl rounded-xl border border-border bg-surface p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium tracking-tight",
								children: "Finished this piece?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Mark it complete to update your reading streak and dashboard."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: handleComplete,
								variant: completed ? "outline" : "default",
								disabled: completed,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), completed ? "Completed" : "Mark as complete"]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-14 lg:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold tracking-tight",
							children: "Words in this article"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 divide-y divide-border rounded-lg border border-border bg-surface",
							children: article.vocabulary.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setSelected(entry),
								className: "flex w-full items-center justify-between px-4 py-3 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: entry.word
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground capitalize",
									children: entry.partOfSpeech
								})]
							}) }, entry.id))
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sticky top-10 space-y-4",
						children: selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VocabPanel, {
							entry: selected,
							saved: saved(selected.id),
							onSave: () => handleSave(selected),
							onClose: () => setSelected(null)
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-surface p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold tracking-tight",
									children: "Words in this article"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs leading-5 text-muted-foreground",
									children: "Select a highlighted word in the text, or choose one below."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 space-y-1",
									children: article.vocabulary.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setSelected(entry),
										className: cn("flex w-full items-center justify-between rounded-sm px-2 py-2 text-left text-sm transition-colors duration-quick hover:bg-background", saved(entry.id) && "text-indigo"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium",
											children: entry.word
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground capitalize",
											children: entry.partOfSpeech
										})]
									}) }, entry.id))
								})
							]
						})
					})
				})]
			}),
			related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto mt-16 max-w-6xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold tracking-tight",
					children: "Read next"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-4 md:grid-cols-3",
					children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleCard, { article: item }, item.id))
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Root, {
				open: !isDesktop && Boolean(selected),
				onOpenChange: (open) => {
					if (!open) setSelected(null);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Drawer.Portal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Overlay, { className: "fixed inset-0 z-40 bg-navy/40 lg:hidden" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Drawer.Content, {
					className: "fixed inset-x-0 bottom-0 z-50 rounded-t-xl border border-border bg-surface p-4 outline-none lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mb-3 h-1 w-10 rounded-full bg-border" }), selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VocabPanel, {
						entry: selected,
						saved: saved(selected.id),
						onSave: () => handleSave(selected),
						onClose: () => setSelected(null),
						variant: "sheet"
					}) : null]
				})] })
			})
		]
	});
}
//#endregion
export { ArticlePage as component };
