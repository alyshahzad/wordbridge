import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C95xt6KI.mjs";
import { E as require_react, T as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/input-BTJJ1Fgj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-10 w-full rounded-sm border border-input bg-surface px-3 py-2 text-sm text-foreground shadow-none transition-[border-color,box-shadow] duration-quick ease-out-smooth placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
//#endregion
export { Input as t };
