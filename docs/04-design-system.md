# VELOCITY — Design System

**Project:** Velocity
**Document:** Design System
**Document ID:** VR-DS-001
**Version:** 0.1.0
**Status:** Design Planning
**Related Documents:** UI/UX Design Specification, Requirements Specification

---

# 1. Purpose

This document defines the visual rules and reusable design tokens for the Velocity website.

The design system ensures that all pages, sections, components, interactions, and responsive layouts follow one consistent visual language.

It defines:

* Colors
* Typography
* Spacing
* Layout
* Containers
* Grid
* Borders
* Radius
* Shadows
* Buttons
* Links
* Navigation
* Cards
* Performance metrics
* Gallery
* View switcher
* Animation
* Interaction states
* Accessibility rules

The design system should be treated as the visual source of truth during development.

---

# 2. Design System Philosophy

Velocity should use a **minimal premium design system**.

The system should prioritize:

1. Strong typography
2. Precise spacing
3. High-quality imagery
4. Clear hierarchy
5. Controlled contrast
6. Subtle interaction
7. Consistency

The design system should avoid unnecessary decoration.

---

# 3. Brand Design Language

The core visual language is:

**Cinematic + Editorial + Technical**

These three characteristics should work together.

### Cinematic

Used for:

* Hero
* Large imagery
* Brand moments
* Major transitions

### Editorial

Used for:

* Design storytelling
* Typography
* Content composition
* Gallery

### Technical

Used for:

* Performance
* Specifications
* Technology
* Data presentation

---

# 4. Color System

The color palette should remain restrained.

## 4.1 Base Colors

| Token                    | Value     | Purpose                      |
| ------------------------ | --------- | ---------------------------- |
| `--color-bg-primary`     | `#0A0A0A` | Main dark background         |
| `--color-bg-secondary`   | `#111111` | Secondary dark sections      |
| `--color-bg-tertiary`    | `#181818` | Elevated areas               |
| `--color-surface`        | `#202020` | Interactive/elevated surface |
| `--color-text-primary`   | `#F5F5F2` | Main text                    |
| `--color-text-secondary` | `#B7B7B2` | Supporting text              |
| `--color-text-muted`     | `#777771` | Low-emphasis text            |
| `--color-border`         | `#2A2A2A` | Borders/dividers             |

These values may be refined during visual implementation.

---

# 5. Accent Color

Velocity should use one primary accent.

Initial direction:

```text
--color-accent: #C8FF3D
```

The accent represents:

* Performance
* Energy
* Precision
* Technology

The accent should be used selectively.

### Appropriate uses

* Primary CTA
* Active state
* Selected view
* Small highlights
* Important indicators
* Performance emphasis

### Avoid

The accent should not cover large areas unnecessarily.

It should remain visually valuable because it is limited.

---

# 6. Editorial Theme

The Editorial view will use a lighter environment.

Suggested semantic tokens:

| Token                        | Purpose                 |
| ---------------------------- | ----------------------- |
| `--editorial-bg`             | Light page background   |
| `--editorial-surface`        | Secondary light surface |
| `--editorial-text`           | Primary dark text       |
| `--editorial-text-secondary` | Supporting text         |
| `--editorial-border`         | Light divider           |
| `--editorial-accent`         | Shared Velocity accent  |

Exact values can be refined during implementation.

The same typography, spacing, buttons, and component logic should continue to apply.

---

# 7. Typography System

Typography is a major part of the Velocity identity.

The system should use a modern sans-serif family.

The final font selection should prioritize:

* Excellent readability
* Strong display weights
* Multiple font weights
* Professional appearance
* Good browser support

---

# 8. Typography Scale

Initial desktop scale:

| Token        | Size | Purpose                 |
| ------------ | ---: | ----------------------- |
| `display-xl` | 96px | Major hero/display      |
| `display-lg` | 72px | Large section statement |
| `heading-xl` | 56px | Major heading           |
| `heading-lg` | 44px | Section heading         |
| `heading-md` | 32px | Subheading              |
| `heading-sm` | 24px | Small heading           |
| `body-lg`    | 20px | Large supporting text   |
| `body-md`    | 16px | Main body text          |
| `body-sm`    | 14px | Secondary information   |
| `label`      | 12px | Metadata/labels         |

These values are starting tokens and may be adjusted after visual testing.

---

# 9. Typography Weight

Recommended weights:

| Weight | Usage                        |
| ------ | ---------------------------- |
| 400    | Body                         |
| 500    | Navigation / supporting text |
| 600    | Buttons / subheadings        |
| 700    | Headings                     |
| 800    | Major display text           |

Heavy weights should be used selectively.

---

# 10. Typography Rules

### Headings

Headings should be:

* Clear
* Strong
* Short
* Visually dominant

### Body text

Body text should be:

* Comfortable to read
* Short where possible
* Properly spaced

### Labels

Labels may use:

* Uppercase
* Letter spacing
* Small font size

Labels should support hierarchy rather than compete with headings.

---

# 11. Line Height

Recommended starting values:

| Type    | Line Height |
| ------- | ----------: |
| Display |   0.95–1.05 |
| Heading |   1.05–1.15 |
| Body    |     1.5–1.7 |
| Label   |     1.2–1.4 |

Large display text should use tighter line height.

Body text should remain comfortable.

---

# 12. Letter Spacing

Large headings may use slightly tighter tracking.

Labels and uppercase metadata may use positive letter spacing.

The system should avoid excessive letter spacing.

Typography should feel natural rather than artificially stretched.

---

# 13. Spacing System

Velocity will use a consistent spacing scale.

Base unit:

**4px**

Suggested tokens:

| Token      | Value |
| ---------- | ----: |
| `space-1`  |   4px |
| `space-2`  |   8px |
| `space-3`  |  12px |
| `space-4`  |  16px |
| `space-5`  |  20px |
| `space-6`  |  24px |
| `space-8`  |  32px |
| `space-10` |  40px |
| `space-12` |  48px |
| `space-16` |  64px |
| `space-20` |  80px |
| `space-24` |  96px |
| `space-32` | 128px |

Spacing should be adjusted according to hierarchy.

---

# 14. Section Spacing

Large sections should generally have generous vertical spacing.

Desktop starting range:

**96px–160px**

Tablet:

**72px–120px**

Mobile:

**56px–96px**

Exact values should depend on content and composition.

---

# 15. Container System

The main content should be contained within a maximum width.

Suggested maximum width:

**1440px**

The content should have responsive horizontal padding.

### Desktop

Approximately:

**48px–80px**

### Tablet

Approximately:

**32px–48px**

### Mobile

Approximately:

**20px–24px**

The container should prevent content from becoming excessively wide.

---

# 16. Grid System

The main layout should use a flexible grid.

Desktop:

**12-column grid**

Tablet:

**8-column grid**

Mobile:

**4-column grid**

The grid should support:

* Editorial layouts
* Asymmetric compositions
* Image/text relationships
* Performance metrics
* Vehicle cards

---

# 17. Borders

Borders should be subtle.

Default border:

```text
1px solid var(--color-border)
```

Borders should be used for:

* Dividers
* Navigation states
* Technical information
* Component separation
* Interactive boundaries

Borders should not appear around every element.

---

# 18. Border Radius

Velocity should use restrained corner radii.

Suggested values:

| Token       | Value |
| ----------- | ----: |
| `radius-sm` |   4px |
| `radius-md` |   8px |
| `radius-lg` |  12px |

Large pill-shaped components should be used only when the component requires that behavior.

The design should avoid excessive rounded cards.

---

# 19. Shadows

Shadows should be minimal.

The primary visual hierarchy should come from:

* Contrast
* Spacing
* Typography
* Imagery

rather than heavy shadows.

If shadows are required, they should be soft and subtle.

---

# 20. Button System

Velocity will use three primary button levels.

## Primary Button

Used for the most important action.

Characteristics:

* Strong contrast
* Clear label
* Accent emphasis
* Smooth hover state

Examples:

* Explore Vehicle
* Discover Performance

---

## Secondary Button

Used for supporting actions.

Characteristics:

* Less visual emphasis
* Transparent or neutral background
* Clear border or text treatment

---

## Text Link

Used for low-priority navigation.

Characteristics:

* Minimal visual weight
* Directional interaction
* Subtle underline or movement

---

# 21. Button Dimensions

Starting values:

### Desktop

Height:

**48px–52px**

Horizontal padding:

**20px–28px**

### Mobile

Minimum interactive height:

**44px**

Touch targets should remain comfortable.

---

# 22. Button States

Buttons should support:

* Default
* Hover
* Focus
* Active
* Disabled

Each state should be visually distinguishable.

Transitions should be short and smooth.

---

# 23. Link System

Links should clearly look interactive.

Possible interaction:

**Underline expands → text remains stable**

or

**Arrow moves slightly → link remains in place**

The movement should be subtle.

---

# 24. Navigation System

Navigation should use:

* Clear typography
* Strong alignment
* Minimal decoration
* Controlled spacing

The navigation should not dominate the hero.

---

# 25. Navigation States

Required states:

* Default
* Hover
* Active
* Focus
* Menu open

The active section may be represented through:

* Accent indicator
* Typography change
* Underline
* Opacity difference

Only one primary indication should be used.

---

# 26. Mobile Menu

The mobile menu should be a full designed experience.

Possible behavior:

1. User taps menu.
2. Menu opens smoothly.
3. Navigation links appear.
4. Background interaction is disabled.
5. User selects a section or closes menu.

The menu must support keyboard navigation where applicable.

---

# 27. Vehicle Card

Vehicle cards should not become generic UI blocks.

Each card should prioritize:

1. Vehicle imagery
2. Vehicle name
3. Category
4. One or two key specifications
5. Action

The image should remain the primary visual element.

---

# 28. Vehicle Card Interaction

Possible interactions:

* Image scale
* Image position shift
* Metadata reveal
* Arrow movement

Interaction should remain subtle.

---

# 29. Performance Metric

Performance metrics should use strong numerical hierarchy.

Example structure:

```text
0–100
3.2
SECONDS
```

The primary number should be visually dominant.

Supporting information should remain secondary.

---

# 30. Technical Data

Technical information may use:

* Small labels
* Dividers
* Monospaced or technical-style secondary typography where appropriate
* Structured alignment

The design should remain readable.

---

# 31. Gallery System

The gallery should support different image sizes.

Possible layouts:

* 2-column
* 3-column
* Feature image + supporting images
* Full-width image
* Editorial asymmetric grid

The gallery should remain responsive.

---

# 32. Image Aspect Ratios

Possible standard ratios:

* 16:9
* 4:3
* 3:2
* 1:1
* Full viewport

The ratio should be selected based on the storytelling purpose.

---

# 33. Image Treatment

Images should generally use:

```text
object-fit: cover
```

where cropping is intentional.

Important vehicle details should not be accidentally cropped.

Responsive image positioning may be adjusted using focal points.

---

# 34. View Switcher

The view switcher should be compact and clear.

Options:

* Cinematic
* Editorial
* Performance

The selected option should have a strong but restrained active state.

The control should not look like a generic tab component.

---

# 35. Animation System

Animations should use a consistent timing system.

Suggested durations:

| Token                | Duration |
| -------------------- | -------: |
| `duration-fast`      |    150ms |
| `duration-standard`  |    250ms |
| `duration-medium`    |    400ms |
| `duration-slow`      |    700ms |
| `duration-cinematic` |   1000ms |

Most UI interactions should use fast or standard durations.

Cinematic transitions may use longer durations.

---

# 36. Easing

Preferred easing should feel natural and controlled.

Examples:

* Ease-out for entering elements
* Ease-in-out for transitions
* Custom cubic-bezier for premium motion where justified

Animation should not feel mechanical.

---

# 37. Motion Categories

### Micro Motion

Used for:

* Buttons
* Links
* Icons
* Hover states

### UI Motion

Used for:

* Menus
* View switching
* Gallery interactions

### Storytelling Motion

Used for:

* Hero
* Section reveals
* Image transitions

Different motion levels should have different visual importance.

---

# 38. Reduced Motion

The system must support:

```css
@media (prefers-reduced-motion: reduce)
```

When enabled:

* Disable unnecessary movement
* Remove parallax
* Reduce transition duration
* Avoid large transforms

Functionality must remain intact.

---

# 39. Focus System

All interactive controls must have a visible focus state.

Focus should be:

* Clearly visible
* Consistent
* Accessible
* Not dependent only on color

A keyboard user should always know which element is focused.

---

# 40. Iconography

Icons should be minimal.

Preferred characteristics:

* Simple
* Geometric
* Consistent stroke width
* Easy to understand

Icons should support text rather than replace important labels.

---

# 41. Icon Usage

Icons may be used for:

* Menu
* Arrow
* Close
* Navigation
* Gallery controls
* Performance indicators

Decorative icons should not be added without purpose.

---

# 42. Loading States

If loading states are required, they should remain minimal.

Avoid large generic spinners.

Possible approach:

* Subtle progress indicator
* Image loading transition
* Skeleton only where necessary

The loading experience should match the brand.

---

# 43. Error States

If an interactive feature encounters an error, the interface should:

* Remain usable
* Communicate the problem clearly
* Avoid technical error messages
* Provide a reasonable recovery action where possible

---

# 44. Accessibility Rules

The design system should target accessible implementation.

Minimum principles:

* Sufficient text contrast
* Keyboard access
* Visible focus
* Semantic HTML
* Proper labels
* Meaningful alt text
* Accessible controls
* Reduced-motion support

---

# 45. Responsive Design Tokens

The system should support three primary responsive categories.

### Desktop

Large compositions and maximum visual impact.

### Tablet

Flexible layout and reduced spacing.

### Mobile

Simplified hierarchy and touch-first interaction.

The exact breakpoint strategy will be defined in:

`07-responsive-design.md`

---

# 46. Z-Index Strategy

The project should avoid arbitrary z-index values.

Suggested hierarchy:

```text
Base content
↓
Images / decorative layers
↓
Sticky navigation
↓
Dropdown / mobile menu
↓
Modal / overlay
↓
Critical interface layer
```

A small documented z-index scale should be used during implementation.

---

# 47. Design Token Implementation

Design tokens should eventually be represented through CSS custom properties.

Example structure:

```text
:root
├── Colors
├── Typography
├── Spacing
├── Layout
├── Radius
├── Shadows
├── Motion
└── Z-index
```

The final implementation should avoid repeating arbitrary values unnecessarily.

---

# 48. Component Consistency

Components should use the design system rather than creating their own independent visual rules.

For example:

All primary buttons should share:

* Typography
* Height
* Padding
* Radius
* Accent
* Focus behavior
* Transition

Individual components may have controlled variations when justified.

---

# 49. Design System Validation

Before final deployment, the following should be reviewed:

* Typography consistency
* Color consistency
* Spacing consistency
* Button consistency
* Responsive behavior
* Focus states
* Animation timing
* Image treatment
* Component consistency

---

# 50. Design System Success Criteria

The design system is successful when:

* New sections can be designed without inventing new visual rules.
* Components look related.
* Spacing feels consistent.
* Typography hierarchy is clear.
* Color usage is controlled.
* Interactive states are predictable.
* Responsive behavior follows the same principles.
* The three visual views still feel like one brand.

---

# 51. Final Design Principle

Velocity should follow:

> **Fewer visual rules, applied consistently, create a stronger brand than many visual effects applied randomly.**

The design system exists to make every part of Velocity feel intentional.
