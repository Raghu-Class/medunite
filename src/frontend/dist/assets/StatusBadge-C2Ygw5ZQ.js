import { j as jsxRuntimeExports } from "./index-4utdZC3E.js";
const variantClasses = {
  success: "bg-success/10 text-success border-success/30",
  warning: "bg-warning/15 text-warning border-warning/30",
  danger: "bg-danger/10 text-danger border-danger/30",
  info: "bg-primary/10 text-primary border-primary/20",
  neutral: "bg-muted text-muted-foreground border-border",
  critical: "bg-danger text-danger-foreground border-danger"
};
function StatusBadge({ variant, label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-flex items-center text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded-sm border ${variantClasses[variant]}`,
      children: label
    }
  );
}
export {
  StatusBadge as S
};
