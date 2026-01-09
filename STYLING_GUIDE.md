# Styling Guide

## Spacing Rules

**IMPORTANT: Always use semantic spacing classes. Never use Tailwind's default numeric spacing classes.**

### ✅ DO USE (Semantic Spacing)

Use our custom semantic spacing classes based on a 4px grid:

- **Padding**: `p-xs`, `p-s`, `p-m`, `p-l`, `p-xl`, `p-2xl`, `p-3xl`, `p-4xl`, `p-5xl`, `p-6xl`
- **Margin**: `m-xs`, `m-s`, `m-m`, `m-l`, `m-xl`, `m-2xl`, `m-3xl`, `m-4xl`, `m-5xl`, `m-6xl`
- **Gap**: `gap-xs`, `gap-s`, `gap-m`, `gap-l`, `gap-xl`, `gap-2xl`, `gap-3xl`, `gap-4xl`, `gap-5xl`, `gap-6xl`

**Directional variants:**
- `pt-xs`, `pb-s`, `pl-m`, `pr-l` (padding)
- `mt-xs`, `mb-s`, `ml-m`, `mr-l` (margin)
- `px-xs`, `py-s` (horizontal/vertical padding)
- `mx-xs`, `my-s` (horizontal/vertical margin)

**Examples:**
```tsx
<div className="p-l gap-m mb-xl">
  <button className="px-m py-xs">Click me</button>
</div>
```

### ❌ DON'T USE (Default Tailwind Spacing)

Never use Tailwind's default numeric spacing classes:

- `p-0`, `p-1`, `p-2`, `p-4`, `p-8`, `p-16`, etc.
- `m-0`, `m-1`, `m-2`, `m-4`, `m-8`, `m-16`, etc.
- `gap-0`, `gap-1`, `gap-2`, `gap-4`, `gap-8`, `gap-16`, etc.
- `px-4`, `py-8`, `mt-16`, `mb-4`, etc.

**Why?**
- Our semantic spacing is based on a consistent 4px grid system
- Semantic names (`xs`, `s`, `m`, `l`) are more maintainable than arbitrary numbers
- Ensures design consistency across the entire application
- Makes it easier to update spacing globally by changing CSS variables

## Spacing Scale Reference

| Class | Value | Pixels |
|-------|-------|--------|
| `xs`  | 4px   | 1 × 4px |
| `s`   | 8px   | 2 × 4px |
| `m`   | 12px  | 3 × 4px |
| `l`   | 16px  | 4 × 4px |
| `xl`  | 20px  | 5 × 4px |
| `2xl` | 24px  | 6 × 4px |
| `3xl` | 32px  | 8 × 4px |
| `4xl` | 40px  | 10 × 4px |
| `5xl` | 48px  | 12 × 4px |
| `6xl` | 64px  | 16 × 4px |

## Colors

Use semantic color classes for status indicators:

- `bg-semantic-error` / `text-semantic-error`
- `bg-semantic-success` / `text-semantic-success`
- `bg-semantic-warning` / `text-semantic-warning`
- `bg-semantic-info` / `text-semantic-info`
- `bg-semantic-background` / `text-semantic-foreground`

For other colors, use Tailwind's standard color utilities or shadcn/ui color tokens.

## Code Review Checklist

When reviewing code, ensure:
- ✅ No numeric spacing classes (`p-4`, `m-8`, `gap-2`, etc.)
- ✅ Only semantic spacing classes are used (`p-xs`, `m-l`, `gap-m`, etc.)
- ✅ Consistent spacing patterns across similar components
- ✅ Semantic colors are used for status indicators

## Migration Guide

If you find old Tailwind spacing classes, convert them:

| Old (Don't Use) | New (Use) |
|----------------|----------|
| `p-1` | `p-xs` |
| `p-2` | `p-s` |
| `p-3` | `p-m` |
| `p-4` | `p-l` |
| `p-5` | `p-xl` |
| `p-6` | `p-2xl` |
| `p-8` | `p-3xl` |
| `p-10` | `p-4xl` |
| `p-12` | `p-5xl` |
| `p-16` | `p-6xl` |

Same mapping applies for margin (`m-*`) and gap (`gap-*`).

