import { t as cn } from "./utils-C95xt6KI.mjs";
import { T as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/logo-CRYcKCGV.js
var import_jsx_runtime = require_jsx_runtime();
function WordBridgeMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-8", className),
		"aria-hidden": "true",
		focusable: "false",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "32",
			height: "32",
			rx: "8",
			className: "fill-mark"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M7.2 9.2 12 22.8h2.15L16 14.4l1.85 8.4H20L24.8 9.2h-2.2L20.05 19.4 18.1 9.2h-4.2L11.95 19.4 9.4 9.2H7.2Z",
			className: "fill-mark-foreground"
		})]
	});
}
function WordBridgeLogo({ className, to = "/", compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: cn("inline-flex items-center gap-2.5 rounded-sm text-foreground no-underline", className),
		"aria-label": "WordBridge home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordBridgeMark, {}), compact ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-sans text-sm font-semibold tracking-tight",
			children: "WordBridge"
		})]
	});
}
//#endregion
export { WordBridgeLogo as t };
