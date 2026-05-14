import { f as useActor, r as reactExports, j as jsxRuntimeExports } from "./index-4utdZC3E.js";
const initialThreads = [
  {
    id: 1,
    subject: "Follow-up on blood pressure results",
    category: "Dr. Sarah Johnson",
    lastMessage: "Your blood pressure readings have improved. Continue with the current medication.",
    lastTimestamp: "Mar 12, 2026",
    unread: true,
    messages: [
      {
        id: 1,
        sender: "Alex Johnson",
        senderType: "patient",
        content: "Hi, I wanted to ask about my latest blood pressure readings. My home monitor has been showing values around 140/90. Should I be concerned?",
        timestamp: "Mar 10, 2026 at 2:15 PM"
      },
      {
        id: 2,
        sender: "Dr. Sarah Johnson",
        senderType: "staff",
        content: "Thank you for reaching out. Readings of 140/90 are mildly elevated. Given that we recently adjusted your lisinopril dose, this is expected while the medication reaches steady state. Please continue monitoring daily and log the readings.",
        timestamp: "Mar 11, 2026 at 9:30 AM"
      },
      {
        id: 3,
        sender: "Alex Johnson",
        senderType: "patient",
        content: "Thank you, that's reassuring. I've been logging them — the past 3 days have been 138/86, 135/84, and 132/82. It does seem to be coming down.",
        timestamp: "Mar 11, 2026 at 4:00 PM"
      },
      {
        id: 4,
        sender: "Dr. Sarah Johnson",
        senderType: "staff",
        content: "Your blood pressure readings have improved. Continue with the current medication dose and the low-sodium diet. See you at our scheduled follow-up on March 25th.",
        timestamp: "Mar 12, 2026 at 11:00 AM"
      }
    ]
  },
  {
    id: 2,
    subject: "Appointment reminder — March 20th",
    category: "Reception",
    lastMessage: "Your appointment is confirmed for March 20 at 10:00 AM with Dr. Johnson.",
    lastTimestamp: "Mar 11, 2026",
    unread: false,
    messages: [
      {
        id: 1,
        sender: "Reception",
        senderType: "staff",
        content: "This is a reminder that you have an upcoming appointment on Friday, March 20th at 10:00 AM with Dr. Sarah Johnson. Please arrive 10 minutes early to complete any updated intake forms. Reply to confirm or request a reschedule.",
        timestamp: "Mar 11, 2026 at 8:00 AM"
      },
      {
        id: 2,
        sender: "Alex Johnson",
        senderType: "patient",
        content: "Confirmed, thank you!",
        timestamp: "Mar 11, 2026 at 9:15 AM"
      },
      {
        id: 3,
        sender: "Reception",
        senderType: "staff",
        content: "Your appointment is confirmed for March 20 at 10:00 AM with Dr. Johnson. See you then!",
        timestamp: "Mar 11, 2026 at 9:30 AM"
      }
    ]
  }
];
const providers = [
  "Dr. Sarah Johnson — Primary Care",
  "Dr. Marcus Williams — Cardiology",
  "Dr. Emily Chen — Endocrinology",
  "Dr. Amanda Reyes — Nephrology",
  "Dr. Rachel Nguyen — Pulmonology",
  "Dr. Kevin Park — General Surgery",
  "Nurse Patricia Lee — Care Team",
  "Reception / Scheduling"
];
function MyMessages() {
  const { actor, isFetching } = useActor();
  const [threads, setThreads] = reactExports.useState(initialThreads);
  const [selectedId, setSelectedId] = reactExports.useState(1);
  const [replyText, setReplyText] = reactExports.useState("");
  const [composeOpen, setComposeOpen] = reactExports.useState(false);
  const [composeForm, setComposeForm] = reactExports.useState({
    provider: "",
    subject: "",
    body: ""
  });
  const [_loadingMessages, setLoadingMessages] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!actor || isFetching) return;
    setLoadingMessages(true);
    actor.listMessages().then((msgs) => {
      if (Array.isArray(msgs) && msgs.length > 0) {
        const backendThreads = msgs.map((m, i) => ({
          id: initialThreads.length + i + 1,
          subject: "Secure Message",
          category: "Care Team",
          lastMessage: m.content ?? "",
          lastTimestamp: m.createdAt ? new Date(Number(m.createdAt) / 1e6).toLocaleDateString(
            "en-US",
            { month: "short", day: "numeric", year: "numeric" }
          ) : "Recently",
          unread: false,
          messages: [
            {
              id: 1,
              sender: "Care Team",
              senderType: "staff",
              content: m.content ?? "",
              timestamp: m.createdAt ? new Date(Number(m.createdAt) / 1e6).toLocaleString() : (/* @__PURE__ */ new Date()).toLocaleString()
            }
          ]
        }));
        if (backendThreads.length > 0) {
          setThreads([...initialThreads, ...backendThreads]);
        }
      }
    }).catch(() => {
    }).finally(() => {
      setLoadingMessages(false);
    });
  }, [actor, isFetching]);
  const selectedThread = threads.find((t) => t.id === selectedId) ?? threads[0];
  const localMessages = selectedThread.messages;
  const handleSend = () => {
    if (!replyText.trim()) return;
    if (actor) {
      actor.sendMessage(1n, 10n, replyText).catch(() => {
      });
    }
    setThreads(
      (prev) => prev.map(
        (t) => t.id === selectedId ? {
          ...t,
          messages: [
            ...t.messages,
            {
              id: t.messages.length + 1,
              sender: "Alex Johnson",
              senderType: "patient",
              content: replyText,
              timestamp: (/* @__PURE__ */ new Date()).toLocaleString()
            }
          ],
          lastMessage: replyText,
          lastTimestamp: "Just now"
        } : t
      )
    );
    setReplyText("");
  };
  const handleNewMessage = () => {
    if (!composeForm.provider || !composeForm.subject || !composeForm.body)
      return;
    if (actor) {
      actor.sendMessage(1n, 10n, composeForm.body).catch(() => {
      });
    }
    const newThread = {
      id: threads.length + 1,
      subject: composeForm.subject,
      category: composeForm.provider,
      lastMessage: composeForm.body,
      lastTimestamp: "Just now",
      unread: false,
      messages: [
        {
          id: 1,
          sender: "Alex Johnson",
          senderType: "patient",
          content: composeForm.body,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleString()
        }
      ]
    };
    setThreads((prev) => [newThread, ...prev]);
    setSelectedId(newThread.id);
    setComposeOpen(false);
    setComposeForm({ provider: "", subject: "", body: "" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "messages.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-start gap-3 px-4 py-3 border border-border bg-muted/40 rounded-sm",
        "data-ocid": "messages.info.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              className: "w-4 h-4 text-primary flex-shrink-0 mt-0.5",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Messages are reviewed by your care team." }),
            " For urgent medical concerns, please call the clinic directly or call 911 in an emergency. Response times are typically within 1 business day."
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "messages.compose.button",
          onClick: () => setComposeOpen(!composeOpen),
          className: "inline-flex items-center gap-1.5 h-8 px-3 text-sm font-medium bg-primary text-primary-foreground transition-colors rounded-sm hover:bg-primary/90",
          children: "+ New Message"
        }
      ),
      composeOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "mt-2 p-4 border border-border bg-card rounded-sm space-y-3",
          "data-ocid": "messages.compose.panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "New Message to Care Team" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "compose-provider",
                  className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                  children: "Provider"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  id: "compose-provider",
                  value: composeForm.provider,
                  onChange: (e) => setComposeForm((p) => ({ ...p, provider: e.target.value })),
                  "data-ocid": "messages.compose.select",
                  className: "mt-1 w-full h-8 px-2 text-sm border border-input bg-background rounded-sm focus:outline-none focus:ring-1 ring-ring",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select provider..." }),
                    providers.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p, children: p }, p))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "compose-subject",
                  className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                  children: "Subject"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "compose-subject",
                  value: composeForm.subject,
                  onChange: (e) => setComposeForm((p) => ({ ...p, subject: e.target.value })),
                  placeholder: "e.g. Question about my medication",
                  "data-ocid": "messages.compose.input",
                  className: "mt-1 w-full h-8 px-2 text-sm border border-input bg-background rounded-sm focus:outline-none focus:ring-1 ring-ring"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "compose-body",
                  className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                  children: "Message"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "compose-body",
                  value: composeForm.body,
                  onChange: (e) => setComposeForm((p) => ({ ...p, body: e.target.value })),
                  rows: 3,
                  "data-ocid": "messages.compose.textarea",
                  className: "mt-1 w-full px-3 py-2 text-sm border border-input bg-background rounded-sm focus:outline-none focus:ring-1 ring-ring resize-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleNewMessage,
                  "data-ocid": "messages.compose.submit_button",
                  className: "h-8 px-4 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-sm transition-colors",
                  children: "Send Message"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setComposeOpen(false),
                  "data-ocid": "messages.compose.cancel_button",
                  className: "h-8 px-4 text-sm font-medium border border-border rounded-sm hover:bg-muted transition-colors",
                  children: "Cancel"
                }
              )
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 h-[580px]", "data-ocid": "messages.panel", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "w-72 flex-shrink-0 bg-card border border-border rounded-sm overflow-hidden flex flex-col",
          "data-ocid": "messages.list",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-border bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: "Inbox" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                threads.filter((t) => t.unread).length,
                " unread"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto", children: [
              threads.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex flex-col items-center justify-center h-full gap-2 px-4 py-8 text-center",
                  "data-ocid": "messages.empty_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "No messages yet" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Send a message to your care team." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setComposeOpen(true),
                        "data-ocid": "messages.compose.open_modal_button",
                        className: "mt-1 inline-flex items-center gap-1.5 h-7 px-3 text-xs font-medium bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors",
                        children: "Message My Provider"
                      }
                    )
                  ]
                }
              ),
              threads.map((thread, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "data-ocid": `messages.item.${i + 1}`,
                  onClick: () => setSelectedId(thread.id),
                  className: `w-full text-left px-4 py-3 border-b border-border transition-colors hover:bg-muted/40 border-l-2 ${selectedId === thread.id ? "border-l-primary bg-primary/5" : "border-l-transparent"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-0.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground", children: thread.category }),
                      thread.unread && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-primary flex-shrink-0" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: thread.subject }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: thread.lastMessage }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: thread.lastTimestamp })
                  ]
                },
                thread.id
              ))
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex-1 bg-card border border-border rounded-sm flex flex-col overflow-hidden",
          "data-ocid": "messages.thread.panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-3 border-b border-border flex-shrink-0 bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: selectedThread.subject }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: selectedThread.category })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto px-5 py-4 space-y-4", children: localMessages.map((msg) => {
              const isPatient = msg.senderType === "patient";
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `flex flex-col ${isPatient ? "items-end" : "items-start"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `max-w-[75%] rounded-sm px-4 py-2.5 ${isPatient ? "bg-primary text-primary-foreground" : "bg-muted text-foreground border border-border"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "text-xs font-semibold mb-1",
                              style: { opacity: 0.85 },
                              children: msg.sender
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", children: msg.content })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 px-1", children: msg.timestamp })
                  ]
                },
                msg.id
              );
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "px-5 py-3 border-t border-border flex-shrink-0",
                "data-ocid": "messages.reply.panel",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      "data-ocid": "messages.reply.textarea",
                      value: replyText,
                      onChange: (e) => setReplyText(e.target.value),
                      rows: 2,
                      placeholder: "Type a message to your care team...",
                      className: "w-full px-3 py-2 text-sm bg-background border border-input rounded-sm focus:outline-none focus:ring-1 ring-ring resize-none",
                      onKeyDown: (e) => {
                        if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleSend();
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Ctrl+Enter to send" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        "data-ocid": "messages.reply.submit_button",
                        onClick: handleSend,
                        disabled: !replyText.trim(),
                        className: "h-8 px-4 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-sm transition-colors",
                        children: "Send Message"
                      }
                    )
                  ] })
                ]
              }
            )
          ]
        }
      )
    ] })
  ] });
}
export {
  MyMessages as default
};
