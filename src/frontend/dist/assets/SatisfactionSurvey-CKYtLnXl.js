import { c as createLucideIcon, f as useActor, r as reactExports, j as jsxRuntimeExports, B as Button } from "./index-4utdZC3E.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-CMzOpeqR.js";
import { T as Textarea } from "./textarea-BQtbz16y.js";
import { C as CircleCheckBig } from "./circle-check-big-BlGxcqiI.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
const SURVEY_CATEGORIES = [
  { id: "overall", label: "Overall Experience" },
  { id: "communication", label: "Provider Communication" },
  { id: "efficiency", label: "Wait Time & Efficiency" }
];
function StarRating({
  value,
  onChange,
  id
}) {
  const [hovered, setHovered] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", "aria-label": `Rating for ${id}`, children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      "data-ocid": `survey.${id}.star.${star}`,
      onClick: () => onChange(star),
      onMouseEnter: () => setHovered(star),
      onMouseLeave: () => setHovered(0),
      className: "transition-colors focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none rounded-sm",
      "aria-label": `${star} star`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Star,
        {
          className: "w-7 h-7 transition-colors",
          style: {
            fill: (hovered || value) >= star ? "var(--warning)" : "transparent",
            stroke: (hovered || value) >= star ? "var(--warning)" : "currentColor"
          }
        }
      )
    },
    star
  )) });
}
function SatisfactionSurvey() {
  const { actor } = useActor();
  const [ratings, setRatings] = reactExports.useState({
    overall: 0,
    communication: 0,
    efficiency: 0
  });
  const [comments, setComments] = reactExports.useState("");
  const [submitted, setSubmitted] = reactExports.useState(false);
  const setRating = (id, value) => {
    setRatings((prev) => ({ ...prev, [id]: value }));
  };
  const handleSubmit = () => {
    const survey = {
      id: Date.now(),
      submittedAt: (/* @__PURE__ */ new Date()).toISOString(),
      ratings,
      comments
    };
    const existing = JSON.parse(
      localStorage.getItem("medunite_surveys") ?? "[]"
    );
    localStorage.setItem(
      "medunite_surveys",
      JSON.stringify([...existing, survey])
    );
    setSubmitted(true);
    if (actor) {
      actor.saveSurveyResponse({
        id: 0n,
        patientId: 4n,
        submittedAt: BigInt(Date.now()),
        comment: comments,
        rating: BigInt(ratings.overall || 1)
      }).catch(() => {
      });
    }
  };
  const allRated = Object.values(ratings).every((v) => v > 0);
  if (submitted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-lg mx-auto py-16 flex flex-col items-center gap-5 text-center",
        "data-ocid": "survey.success_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-success/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-8 h-8 text-success" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-foreground", children: "Thank you for your feedback!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2 max-w-sm", children: "Your response helps us improve care for everyone. We appreciate you taking the time to share your experience." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              "data-ocid": "survey.done.button",
              onClick: () => {
                setSubmitted(false);
                setRatings({ overall: 0, communication: 0, efficiency: 0 });
                setComments("");
              },
              children: "Submit Another Response"
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto py-8 px-4", "data-ocid": "survey.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-foreground", children: "Share Your Feedback" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1.5", children: "Help us improve your care experience" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border border-border shadow-card bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-5 py-4 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-foreground", children: "Rate Your Visit" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 space-y-6", children: [
        SURVEY_CATEGORIES.map(({ id, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StarRating,
            {
              id,
              value: ratings[id],
              onChange: (v) => setRating(id, v)
            }
          ),
          ratings[id] > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: ["Poor", "Fair", "Good", "Very Good", "Excellent"][ratings[id] - 1] })
        ] }, id)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-2 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "label",
            {
              htmlFor: "survey-comments",
              className: "text-sm font-medium text-foreground block",
              children: [
                "Additional Comments",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal", children: "(optional)" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "survey-comments",
              "data-ocid": "survey.comments.textarea",
              value: comments,
              onChange: (e) => setComments(e.target.value),
              placeholder: "Share anything else about your visit...",
              className: "resize-none",
              rows: 4
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: "w-full",
            "data-ocid": "survey.submit.button",
            disabled: !allRated,
            onClick: handleSubmit,
            children: "Submit Feedback"
          }
        ),
        !allRated && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center", children: "Please rate all three categories to submit" })
      ] })
    ] })
  ] });
}
export {
  SatisfactionSurvey as default
};
