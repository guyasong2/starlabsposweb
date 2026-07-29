# Implementation Plan: Standardize B2B UI Primitives

## Context
The application recently transitioned to a clean, B2B Enterprise SaaS aesthetic defined in `app/globals.css`. An audit revealed design-system drift where specific components bypass the standard CSS primitives using inline Tailwind overrides, resulting in inconsistent component geometry and color hierarchy.

## Selected Changes
This plan addresses the following findings:
1. **Inconsistent button geometry overrides**: `SiteHeader.tsx` and `sections.tsx` (Hero) bypass the `.btn` standard padding with arbitrary utilities (`!py-2`, `px-8`).
2. **Inconsistent border-radius**: `AppPreview.tsx` tabs use a pill-shape (`rounded-full`), contradicting the sharp B2B geometry (`radius-sm`, `radius-md`).
3. **Color hierarchy clash**: The popular pricing tier highlights with blue but uses a clashing red (`btn-primary`) call-to-action.

## Execution Steps

### Step 1: Update CSS System Modifiers
File: `app/globals.css`
1. Locate the `/* ─── Buttons ────────────────────────────────────────────── */` section.
2. Below the `.btn` base class, add new sizing modifiers:
   ```css
   .btn-sm {
     padding: 0.5rem 1rem;
     font-size: 0.875rem; /* text-sm */
   }
   .btn-lg {
     padding: 0.875rem 2rem;
     font-size: 1rem;
   }
   ```
3. Add a new color variant mapped to the blue brand token:
   ```css
   .btn-accent {
     background-color: var(--brand-blue);
     color: #FFFFFF;
     border: 1px solid var(--brand-blue);
     box-shadow: var(--shadow-sm);
   }
   .btn-accent:hover {
     background-color: var(--brand-blue-hover);
     border-color: var(--brand-blue-hover);
   }
   ```

### Step 2: Refactor SiteHeader Buttons
File: `components/site/SiteHeader.tsx`
1. Locate the CTAs container (around line 47).
2. Remove the inline utility overrides `!py-2 !px-4 !text-sm`.
3. Apply the new `.btn-sm` modifier.
   - Change: `className="btn btn-secondary !py-2 !px-4 !text-sm"` to `className="btn btn-secondary btn-sm"`
   - Change: `className="btn btn-primary !py-2 !px-4 !text-sm"` to `className="btn btn-primary btn-sm"`

### Step 3: Refactor Hero Buttons
File: `components/site/sections.tsx`
1. Locate the Hero CTAs container (around line 52).
2. Remove the inline utility overrides `px-8 py-3.5`.
3. Apply the new `.btn-lg` modifier.
   - Change: `className="btn btn-primary px-8 py-3.5"` to `className="btn btn-primary btn-lg"`
   - Change: `className="btn btn-secondary px-8 py-3.5"` to `className="btn btn-secondary btn-lg"`

### Step 4: Fix AppPreview Tab Radius
File: `components/site/AppPreview.tsx`
1. Locate the button mapping for tabs (around line 32).
2. Replace `rounded-full` with `rounded-md` to match the B2B design contract.
   - Change: `className={"px-4 py-2 text-sm font-medium rounded-full transition-colors border...`
   - To: `className={"px-4 py-2 text-sm font-medium rounded-md transition-colors border...`

### Step 5: Fix Pricing Card Color Clash
File: `components/site/Pricing.tsx`
1. Locate the `plans` array definition (around line 23).
2. For the "Professional" tier object, change `variant: "primary" as const` to `variant: "accent" as const`.
3. Update the CTA renderer at the bottom of the component (around line 96) to handle the `accent` variant.
   - Change:
     ```tsx
     className={`btn w-full ${plan.variant === "primary" ? "btn-primary" : "btn-secondary"}`}
     ```
   - To:
     ```tsx
     className={`btn w-full btn-${plan.variant}`}
     ```
   *(Ensure TypeScript types for `variant` in the array infer `"primary" | "secondary" | "accent"` properly).*

## Verification
- Run the application (`npm run dev`).
- Ensure the header buttons are slightly smaller but proportionately padded.
- Ensure the hero buttons are large and appropriately padded without relying on Tailwind overrides.
- Ensure the AppPreview tabs have slightly rounded corners (`rounded-md`), not pill-shaped.
- Ensure the popular pricing tier's button is deep blue (`btn-accent`) and matches the card's badge.
