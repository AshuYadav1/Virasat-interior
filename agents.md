name: ui-section-builder
description: Generate high-quality responsive UI sections using Next.js, Tailwind, and Framer Motion for an interior design website

---

# When to Use

* When building any UI section (hero, services, portfolio, etc.)
* When user asks for React/Next.js components

---

# Instructions

## Component Rules

* Use functional components
* Use Tailwind classes only
* Follow design tokens from AGENTS.md

## Structure

* Place in /components/sections
* Keep UI reusable and modular

## Animation

* Use Framer Motion for:
  * fade-in
  * hover effects
* Keep animations subtle

## Responsiveness

* Mobile-first
* Use Tailwind breakpoints

## Output

* Return full component code
* Include imports
* Clean formatting

---

# Design Tokens (Virasat Interiors)

## Colors
* **Primary (Charcoal)**: `#1A1A1A` - Text, dark backgrounds, strong borders.
* **Secondary (Stone)**: `#F7F7F7` - Page backgrounds, subtle sections.
* **Accent (Brass)**: `#C5A059` - Highlights, buttons, premium details.
* **Muted (Sage)**: `#7A8B7C` - Natural elements, secondary accents.
* **Contrast (Terracotta)**: `#B05B4B` - Focus points, warmth.

## Typography
* **Headings**: `Playfair Display`, serif (Elegant, Editorial)
* **Body**: `Inter`, sans-serif (Clean, Modern)

## Spacing & Layout
* **Gutter**: `2rem` (32px) desktop, `1rem` (16px) mobile.
* **Max Width**: `1440px`.
* **Border Radius**: `0px` for sharp modern look.

---

# Constraints

* No inline CSS
* No unnecessary dependencies
* No hardcoded layout inconsistencies
* **Always** use high-quality interior photography (use generate_image)
* **Animation**: Subtle transitions only (duration: 0.4s, ease: "easeInOut")

---

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
