# Product Requirements Document

## Autofictional Sidebar MVP (Night-by-Night)

---

## ⚠️ Scope Lock (Read First)

**ONLY support shadcn Sidebar**

**ONLY adapt sidebar**

**NO scanning arbitrary components**

**NO codemods beyond sidebar + provider**

**NO undo command**

**NO multi-component system**

**NO framework abstraction**

> **This is a focused, real MVP, not infrastructure.**

---

## 🎯 Overall Goal

In **~4–5 nights** (4 hours each), build a working prototype where:

- ✅ Sidebar changes automatically
- ✅ Based on real user behavior
- ✅ With remote metrics
- ✅ With AI grouping
- ✅ Installed via one command
- ✅ Secure by default

---

## 🌙 NIGHT 1 — INSTALL + RUNTIME SKELETON

### Goal

`npx autofictional` runs and installs a working runtime without breaking the app.

### Objectives

Create a CLI that:

- Detects React + Tailwind
- Assumes shadcn Sidebar is already installed
- Installs `@autofictional/runtime`
- Patch the app root to include:

```tsx
<AutofictionalProvider appId="generated-id">
  <App />
</AutofictionalProvider>
```

### Deliverables

- `packages/cli`
- `packages/runtime`
- Provider renders children without behavior
- No UI change yet

### Hard Rules

- ❌ If patch fails, exit safely
- ❌ Do not touch sidebar yet
- ❌ No backend yet

### Success Check

- ✅ App boots
- ✅ No console errors
- ✅ Provider is mounted

---

## 🌙 NIGHT 2 — METRICS LOOP (REMOTE DATA IS REAL)

### Goal

Real usage data flows from sidebar → backend → back to client.

### Objectives

**Track route_view**

- Listen to router changes
- Strip query params

**Track sidebar clicks**

- Event delegation on sidebar container
- Capture:
  - `href` OR `data` attribute

**Send events to backend:**

```json
{
  "workspace_id": "...",
  "anon_user_id": "...",
  "event_type": "...",
  "target_id": "...",
  "timestamp": "..."
}
```

### Backend

- Simple Node API
- In-memory or Postgres

**Endpoints:**

- `POST /events`
- `GET /top-items?user=`

### Security Defaults

- ✅ anon UUID only
- ✅ no labels
- ✅ no DOM text
- ✅ TLS only

### Success Check

- ✅ Click sidebar items
- ✅ Backend receives events
- ✅ `/top-items` returns counts

---

## 🌙 NIGHT 3 — AUTONOMOUS SIDEBAR CHANGE

### Goal

Sidebar changes itself without human input.

### Objectives

- Add `<AutofictionalQuickSidebar />`
- Insert it above existing sidebar items
- Render:
  - "Quick" section
  - Top 3–5 items from backend
  - Clicking Quick navigates

### UI Constraints

- ✅ Use shadcn components
- ✅ Match existing sidebar styles
- ❌ Do NOT remove or reorder original items

### Success Check

- ✅ Sidebar visually changes
- ✅ After ~5 clicks, Quick section updates
- ✅ No layout breakage

---

## 🌙 NIGHT 4 — AI GROUPING (REAL AI, SMALL SCOPE)

### Goal

Sidebar feels intelligent, not heuristic.

### Objectives

- Send top sidebar item IDs to AI
- AI returns:

```json
{
  "groups": [
    { "label": "Money", "item_ids": [...] },
    { "label": "Users", "item_ids": [...] },
    { "label": "Reports", "item_ids": [...] }
  ]
}
```

- Cache result (per workspace/day)
- Render grouped Quick section:

```
Quick
  — Money
  — Users
  — Reports
```

### AI Rules

- ✅ Grouping + labeling ONLY
- ❌ No renaming items
- ❌ No new items
- ❌ No hiding items

### Success Check

- ✅ Group labels appear
- ✅ Labels make sense
- ✅ Still deterministic underneath

---

## 🌙 NIGHT 5 — POLISH + FAILSAFES (OPTIONAL BUT IDEAL)

### Goal

Make it shareable with other devs.

### Objectives

- Add local fallback
  - If backend unreachable, use localStorage
- Add basic logging + error boundaries
- Add minimal README:
  - `npx autofictional`
  - What it does, how to remove it

### Success Check

- ✅ Friend can run it
- ✅ Works without backend
- ✅ No scary behavior

---

## 🚫 Explicit Non-Goals (DO NOT BUILD)

- ❌ Arbitrary UI rewriting
- ❌ Saved views
- ❌ Settings UI
- ❌ Dashboard
- ❌ Multi-component adaptation
- ❌ LLM-generated JSX
- ❌ Sidebar detection heuristics

---

## ✅ Definition of "Done"

This MVP is done when:

- ✅ Sidebar changes automatically
- ✅ Based on usage
- ✅ With AI grouping
- ✅ No config
- ✅ No breakage
- ✅ One command install

---

## 📋 Instruction to AI (Paste This)

```
Implement this PRD night by night.
Do not build abstractions beyond what is specified.
Prefer correctness and simplicity over extensibility.
The goal is a convincing autonomous sidebar, not a framework.
```

---

## 💡 Next Steps

If you want next, I can:

- Convert this into 5 Cursor prompts, one per night
- Write the exact shadcn Sidebar insertion code

