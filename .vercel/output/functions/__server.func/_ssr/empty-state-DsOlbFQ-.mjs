import { t as cn } from "./utils-C95xt6KI.mjs";
import { T as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/empty-state-DsOlbFQ-.js
var import_jsx_runtime = require_jsx_runtime();
function EmptyState({ icon, title, description, action, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col items-center rounded-xl border border-dashed border-border bg-surface px-6 py-16 text-center", className),
		children: [
			icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 flex size-11 items-center justify-center rounded-md bg-accent text-indigo",
				children: icon
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-semibold tracking-tight",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-sm text-sm leading-6 text-muted-foreground",
				children: description
			}),
			action ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: action
			}) : null
		]
	});
}
//#endregion
export { EmptyState as t };
