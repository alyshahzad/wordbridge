import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C95xt6KI.mjs";
import { E as require_react, T as require_jsx_runtime, a as Overlay2, c as Title2, i as Description2, l as Trigger2, n as Cancel, o as Portal2, r as Content2, s as Root2, t as Action } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { n as buttonVariants, t as Button } from "./button-DDBe_RZu.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as useAppStore, d as topicOptions, o as useHydrated } from "./router-BlwYcoG0.mjs";
import { t as AppShell } from "./app-shell-Cio7Qw0d.mjs";
import { t as Input } from "./input-BTJJ1Fgj.mjs";
import { t as DIFFICULTIES } from "./types-BU80LOet.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/@radix-ui/react-switch+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-Cun2Ift7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AlertDialog = Root2;
var AlertDialogTrigger = Trigger2;
var AlertDialogPortal = Portal2;
var AlertDialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay2, {
	className: cn("fixed inset-0 z-50 bg-navy/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
AlertDialogOverlay.displayName = Overlay2.displayName;
var AlertDialogContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: cn("fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-surface p-6 shadow-[var(--wb-shadow-md)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
	...props
})] }));
AlertDialogContent.displayName = Content2.displayName;
function AlertDialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-2", className),
		...props
	});
}
function AlertDialogFooter({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
		...props
	});
}
var AlertDialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title2, {
	ref,
	className: cn("text-lg font-semibold", className),
	...props
}));
AlertDialogTitle.displayName = Title2.displayName;
var AlertDialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description2, {
	ref,
	className: cn("text-sm leading-6 text-muted-foreground", className),
	...props
}));
AlertDialogDescription.displayName = Description2.displayName;
var AlertDialogAction = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
	ref,
	className: cn(buttonVariants(), className),
	...props
}));
AlertDialogAction.displayName = Action.displayName;
var AlertDialogCancel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cancel, {
	ref,
	className: cn(buttonVariants({ variant: "outline" }), className),
	...props
}));
AlertDialogCancel.displayName = Cancel.displayName;
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-sm font-medium text-foreground", className),
	...props
}));
Label.displayName = Root.displayName;
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	className: cn("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-colors duration-quick ease-out-smooth data-[state=checked]:bg-indigo data-[state=unchecked]:bg-border focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: "pointer-events-none block size-5 rounded-full bg-surface shadow-sm transition-transform duration-quick ease-out-smooth data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5" })
}));
Switch.displayName = Switch$1.displayName;
var goals = [
	"Build a stronger academic vocabulary",
	"Improve reading fluency",
	"Prepare for seminars and lectures",
	"Read news and essays with more ease"
];
var minuteOptions = [
	10,
	15,
	20,
	30
];
function ProfilePage() {
	const hydrated = useHydrated();
	const profile = useAppStore((state) => state.profile);
	const updateProfile = useAppStore((state) => state.updateProfile);
	const resetProgress = useAppStore((state) => state.resetProgress);
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-40 animate-pulse rounded-md bg-border" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-64 animate-pulse rounded-xl bg-border" })]
	}) });
	const toggleTopic = (topic) => {
		const next = profile.topics.includes(topic) ? profile.topics.filter((item) => item !== topic) : [...profile.topics, topic];
		updateProfile({ topics: next });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase",
				children: "Settings"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-3xl font-semibold tracking-tight",
				children: "Profile"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-6 text-muted-foreground",
				children: "Preferences stay on this device. They shape filters and the look of the reading room."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8 space-y-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Name",
					htmlFor: "name",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "name",
						value: profile.name,
						placeholder: "Your name",
						onChange: (event) => updateProfile({ name: event.target.value })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: "Learning level"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Used as a suggestion when you browse."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: DIFFICULTIES.map((level) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Choice, {
							active: profile.level === level,
							onClick: () => updateProfile({ level }),
							children: [level[0]?.toUpperCase(), level.slice(1)]
						}, level))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: "Preferred topics"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Leave empty to keep the full library in view."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: topicOptions.map((topic) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							active: profile.topics.includes(topic),
							onClick: () => toggleTopic(topic),
							children: topic
						}, topic))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: "Learning goal"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid gap-2",
					children: goals.map((goal) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
						active: profile.goal === goal,
						onClick: () => updateProfile({ goal }),
						className: "h-auto rounded-md px-4 py-2.5 text-left",
						children: goal
					}, goal))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: "Daily reading goal"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: minuteOptions.map((minutes) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Choice, {
						active: profile.dailyMinutes === minutes,
						onClick: () => updateProfile({ dailyMinutes: minutes }),
						children: [minutes, " min"]
					}, minutes))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 rounded-xl border border-border bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "Notifications"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
							label: "Reading reminders",
							description: "A preference only — WordBridge does not send push messages yet.",
							checked: profile.reminders,
							onCheckedChange: (checked) => updateProfile({ reminders: checked })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
							label: "Weekly summary",
							description: "Remember to look back at words you saved this week.",
							checked: profile.weeklySummary,
							onCheckedChange: (checked) => updateProfile({ weeklySummary: checked })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: "Appearance"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: [
						"light",
						"dark",
						"system"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Choice, {
						active: profile.appearance === item,
						onClick: () => updateProfile({ appearance: item }),
						children: [item[0]?.toUpperCase(), item.slice(1)]
					}, item))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: "Reset progress"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-6 text-muted-foreground",
							children: "Removes saved words, completed articles, quiz history, and your streak. Profile preferences are kept."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "destructive",
								className: "mt-4",
								children: "Reset progress"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, { children: "Reset all learning progress?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, { children: "This cannot be undone. Your name, level, and appearance settings will remain." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, { children: "Cancel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
							onClick: () => {
								resetProgress();
								toast.success("Progress has been reset");
							},
							children: "Reset"
						})] })] })] })
					]
				})
			]
		})]
	}) });
}
function Field({ label, htmlFor, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor,
			children: label
		}), children]
	});
}
function Choice({ active, onClick, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		"aria-pressed": active,
		className: cn("h-9 rounded-full border px-3.5 text-sm font-medium transition-colors duration-quick", active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-surface text-muted-foreground hover:text-foreground", className),
		children
	});
}
function ToggleRow({ label, description, checked, onCheckedChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-medium",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm leading-5 text-muted-foreground",
			children: description
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
			checked,
			onCheckedChange,
			"aria-label": label
		})]
	});
}
//#endregion
export { ProfilePage as component };
