# VELOCITY — Component Specification

**Project:** Velocity
**Document:** Component Specification
**Document ID:** VR-COMP-001
**Version:** 0.1.0
**Status:** Design Planning
**Related Documents:** Requirements Specification, UI/UX Design Specification, Design System, Page Specification

---

# 1. Purpose

This document defines the reusable UI components that will be used to build the Velocity website.

The objective is to avoid unnecessary duplication and create a consistent frontend architecture.

Components should be:

* Reusable
* Predictable
* Accessible
* Responsive
* Maintainable
* Consistent with the design system

---

# 2. Component Philosophy

Velocity should use a **component-based design approach**.

Instead of creating separate implementations for visually similar elements, reusable components should be created.

For example:

Instead of creating five different buttons:

```text
Button A
Button B
Button C
Button D
Button E
```

the project should have one reusable button system with controlled variants.

---

# 3. Component Hierarchy

The initial component hierarchy is:

```text
VELOCITY
│
├── Navigation
│   ├── Logo
│   ├── NavLinks
│   ├── ViewSwitcher
│   ├── PrimaryButton
│   └── MobileMenu
│
├── Hero
│   ├── Label
│   ├── Heading
│   ├── Description
│   └── Button
│
├── Vehicle
│   ├── VehicleCard
│   ├── VehicleImage
│   ├── VehicleInfo
│   └── VehicleSpecs
│
├── Performance
│   └── PerformanceMetric
│
├── Technology
│   └── TechnologyFeature
│
├── Gallery
│   ├── GalleryItem
│   └── GalleryControls
│
├── CTA
│   └── Button
│
└── Footer
    ├── FooterColumn
    └── SocialLinks
```

---

# 4. Component Classification

Components will be divided into three levels.

## Level 1 — Global Components

Used throughout the website.

Examples:

* Navigation
* Button
* Link
* View Switcher
* Footer

## Level 2 — Content Components

Used within multiple sections.

Examples:

* Vehicle Card
* Performance Metric
* Technology Feature
* Gallery Item

## Level 3 — Section Components

Specific to one major section.

Examples:

* Hero
* Design Story
* Featured Vehicle
* Final CTA

---

# 5. Component: Navigation

## Purpose

Provide primary site navigation.

## Content

* Logo
* Navigation links
* View switcher
* Primary CTA
* Mobile menu trigger

## States

* Default
* Scrolled
* Focus
* Mobile
* Menu open

## Interaction

* Navigation links respond to hover.
* Links have visible focus states.
* Mobile menu opens and closes.
* View switcher changes visual mode.

## Responsive

Desktop:

```text
Logo | Navigation | View | CTA
```

Mobile:

```text
Logo | Menu
```

## Accessibility

* Semantic navigation element
* Keyboard accessible links
* Accessible menu button
* Proper expanded/collapsed state
* Focus management

---

# 6. Component: Logo

## Purpose

Identify the Velocity brand.

## Requirements

The logo should remain visually simple.

It should work on:

* Dark background
* Light background

## Interaction

Clicking the logo should return to the beginning of the main experience.

## Accessibility

If implemented as an image, appropriate alternative text must be provided.

If implemented as text/SVG, accessible labeling should be considered.

---

# 7. Component: Button

## Purpose

Provide primary user actions.

## Variants

### Primary

Strongest action.

### Secondary

Supporting action.

### Text

Minimal action.

## States

* Default
* Hover
* Focus
* Active
* Disabled

## Behavior

Buttons should provide immediate visual feedback.

## Accessibility

* Keyboard accessible
* Clear label
* Visible focus
* Sufficient touch target

---

# 8. Component: Link

## Purpose

Provide secondary navigation and content actions.

## Variants

* Standard navigation link
* Text link
* Arrow link

## Interaction

Possible:

* Underline transition
* Arrow movement
* Opacity transition

## Accessibility

Links must remain identifiable as links.

---

# 9. Component: Mobile Menu

## Purpose

Provide navigation on smaller screens.

## Behavior

### Closed

Navigation is hidden.

### Open

Navigation becomes visible.

The background page should not remain interactable while a full-screen menu is active.

## Interaction

* Open button
* Close button
* Navigation link selection
* Escape key support

## Accessibility

The component should provide:

* Accessible menu button
* `aria-expanded`
* Appropriate labels
* Keyboard navigation
* Focus management

---

# 10. Component: View Switcher

## Purpose

Allow users to switch between Velocity visual modes.

## Options

* Cinematic
* Editorial
* Performance

## States

* Default
* Selected
* Hover
* Focus

## Behavior

The selected view should be visually obvious.

The transition should feel like a change in presentation rather than a completely separate website.

## Accessibility

The control must communicate:

* Current selection
* Available options
* Keyboard accessibility

---

# 11. Component: Hero

## Purpose

Create the primary first impression.

## Content

* Label
* Headline
* Description
* CTA
* Vehicle imagery

## Behavior

The hero should adapt to the selected visual mode.

## Animation

Possible:

* Text reveal
* Image entrance
* CTA entrance

## Responsive

Desktop:

Large visual composition.

Mobile:

Stacked and carefully cropped composition.

---

# 12. Component: Section Header

## Purpose

Provide consistent section introductions.

## Content

* Optional label
* Heading
* Supporting description

## Example

```text
PERFORMANCE

BUILT FOR
MOMENTUM

Engineering designed around movement.
```

## Behavior

The component should support different alignment options.

Possible:

* Left
* Center
* Right

---

# 13. Component: Featured Vehicle

## Purpose

Present the main vehicle.

## Content

* Vehicle image
* Vehicle name
* Category
* Description
* Specifications
* CTA

## Layout

Desktop may use:

```text
Image | Information
```

Mobile:

```text
Image
Information
Specifications
CTA
```

---

# 14. Component: Vehicle Card

## Purpose

Display vehicles within the collection.

## Content

* Image
* Vehicle name
* Category
* Key specification
* Action

## States

* Default
* Hover
* Focus
* Active

## Interaction

Possible:

* Image scale
* Image movement
* Arrow movement
* Information emphasis

## Accessibility

The complete interactive card should have a logical keyboard interaction if the card is clickable.

---

# 15. Component: Vehicle Selector

## Purpose

Allow users to change or explore vehicles.

## Possible use

* Vehicle collection
* Featured vehicle exploration
* Vehicle comparison

## States

* Default
* Selected
* Hover
* Focus

## Behavior

Selecting a vehicle updates the associated content.

---

# 16. Component: Vehicle Specification

## Purpose

Display a single vehicle specification.

## Structure

```text
LABEL
VALUE
UNIT
```

Example:

```text
POWER
630
HP
```

## Requirements

The value should have the strongest visual hierarchy.

---

# 17. Component: Performance Metric

## Purpose

Present major performance data.

## Content

* Label
* Number
* Unit
* Optional description

## Example

```text
0–100 KM/H

3.2

SECONDS
```

## Animation

The number may animate when the component enters the viewport.

The animation should not repeat unnecessarily.

## Accessibility

The final value must remain available even if animation is disabled.

---

# 18. Component: Technology Feature

## Purpose

Present an individual technology capability.

## Content

* Feature number
* Feature name
* Short description
* Supporting image or icon

## Interaction

Selecting a feature may update supporting content.

---

# 19. Component: Design Story Block

## Purpose

Present visual storytelling content.

## Content

* Image
* Label
* Heading
* Description
* Optional secondary image

## Layout

Should support editorial/asymmetric composition.

## Responsive

The layout should reorganize naturally on mobile.

---

# 20. Component: Gallery

## Purpose

Present vehicle imagery in an editorial composition.

## Content

* Gallery images
* Optional captions
* Controls where necessary

## Layout

May support:

* Feature image
* Supporting images
* Wide image
* Detail image

## Interaction

Possible:

* Image expansion
* Next/previous controls
* Keyboard navigation

---

# 21. Component: Gallery Item

## Purpose

Represent an individual gallery image.

## Content

* Image
* Optional caption

## States

* Default
* Hover
* Focus
* Active

## Interaction

Possible subtle image movement or expansion.

---

# 22. Component: CTA

## Purpose

Provide a strong call-to-action.

## Content

* Label
* Heading
* Supporting text
* Primary action

## Design

The component should be visually strong but simple.

---

# 23. Component: Footer

## Purpose

Provide final navigation and supporting information.

## Content

* Brand
* Navigation groups
* Social links
* Legal links
* Copyright

## Responsive

Desktop may use multiple columns.

Mobile should stack the groups.

---

# 24. Component: Footer Column

## Purpose

Group related footer links.

## Content

* Heading
* Links

## Behavior

On mobile, columns may optionally become expandable groups if the number of links becomes large.

---

# 25. Component: Social Links

## Purpose

Provide access to social platforms.

## Content

* Platform name
* Icon where appropriate
* Link

## Accessibility

Accessible names must be provided.

Icons should not be the only source of meaning.

---

# 26. Component: Image

## Purpose

Provide consistent image behavior.

## Requirements

Images should support:

* Responsive sizing
* Lazy loading where appropriate
* Alternative text
* Controlled object positioning
* Appropriate aspect ratio

---

# 27. Component: Divider

## Purpose

Provide visual separation.

## Usage

Use dividers selectively for:

* Technical data
* Navigation
* Footer
* Content groups

Avoid excessive lines.

---

# 28. Component: Label

## Purpose

Provide small supporting metadata.

Examples:

```text
PERFORMANCE
```

```text
ELECTRIC
```

```text
MODEL 01
```

## Visual Rules

Labels should use:

* Small size
* Controlled letter spacing
* Strong contrast
* Consistent casing

---

# 29. Component States

Reusable interactive components should use a consistent state model.

```text
Default
↓
Hover
↓
Focus
↓
Active
↓
Disabled
```

Not every component requires every state.

States should only be implemented where meaningful.

---

# 30. Component Interaction Rules

Interactive components must:

* Clearly communicate interactivity
* Provide visual feedback
* Remain keyboard accessible
* Maintain sufficient contrast
* Avoid unexpected behavior

---

# 31. Component Responsive Rules

Components must not assume a fixed viewport.

Each component should define:

* Desktop behavior
* Tablet behavior
* Mobile behavior

Components should adapt internally where possible rather than requiring duplicate markup.

---

# 32. Component Accessibility Rules

All reusable components should consider:

### Keyboard

Users should be able to operate controls without a mouse.

### Focus

Focus must be visible.

### Semantics

Use appropriate HTML elements.

### Labels

Interactive elements need meaningful labels.

### Motion

Respect reduced-motion preferences.

### Images

Important images require meaningful alternative text.

---

# 33. Component Naming

Component names should describe their responsibility.

Preferred:

```text
VehicleCard
PerformanceMetric
ViewSwitcher
MobileMenu
GalleryItem
```

Avoid unclear names such as:

```text
Box1
Section2
CardNew
Thing
ContainerA
```

---

# 34. Component File Organization

The exact architecture will depend on the selected frontend technology.

For a modular frontend, the conceptual structure may be:

```text
frontend/
├── components/
│   ├── navigation/
│   ├── vehicle/
│   ├── performance/
│   ├── technology/
│   ├── gallery/
│   └── common/
│
├── sections/
│   ├── hero/
│   ├── featured-vehicle/
│   ├── design/
│   ├── collection/
│   └── cta/
│
├── styles/
├── assets/
└── pages/
```

The final folder structure will be confirmed before implementation.

---

# 35. Reusability Rules

A component should become reusable when:

* It appears more than once.
* It represents a common interaction.
* It contains a consistent visual pattern.
* Reusing it improves maintainability.

However, not everything needs to become a component.

Over-componentization should be avoided.

---

# 36. Component Variation Rules

Variations should be controlled.

For example:

```text
Button
├── Primary
├── Secondary
└── Text
```

is preferable to creating:

```text
HeroButton
PerformanceButton
GalleryButton
FooterButton
SpecialButton
```

unless their behavior genuinely differs.

---

# 37. Component Documentation

Important reusable components should be documented during implementation.

Documentation should explain:

* Purpose
* Usage
* Variants
* States
* Responsive behavior
* Accessibility requirements

---

# 38. Component Testing

Reusable components should be tested independently where practical.

Testing should include:

* Visual appearance
* Interaction
* Keyboard access
* Responsive behavior
* Focus state
* Disabled state
* Animation
* Content variations

---

# 39. Component Performance

Components should avoid unnecessary:

* JavaScript
* Event listeners
* Re-rendering
* Large assets
* Third-party libraries

Interactive behavior should be implemented as efficiently as practical.

---

# 40. Component Acceptance Criteria

A reusable component is considered complete when:

* Its purpose is clearly defined.
* It follows the design system.
* Required states are implemented.
* Responsive behavior works.
* Accessibility requirements are addressed.
* It works with realistic content.
* It does not introduce unnecessary duplication.
* Its implementation is maintainable.

---

# 41. Initial Component Inventory

| Component             | Priority | Reusable |
| --------------------- | -------- | -------- |
| Navigation            | P0       | Yes      |
| Logo                  | P0       | Yes      |
| Button                | P0       | Yes      |
| Link                  | P0       | Yes      |
| Mobile Menu           | P0       | Yes      |
| View Switcher         | P1       | Yes      |
| Hero                  | P0       | Section  |
| Section Header        | P0       | Yes      |
| Featured Vehicle      | P0       | Section  |
| Vehicle Card          | P1       | Yes      |
| Vehicle Selector      | P2       | Yes      |
| Vehicle Specification | P0       | Yes      |
| Performance Metric    | P0       | Yes      |
| Technology Feature    | P1       | Yes      |
| Design Story Block    | P0       | Yes      |
| Gallery               | P1       | Yes      |
| Gallery Item          | P1       | Yes      |
| CTA                   | P0       | Yes      |
| Footer                | P0       | Yes      |
| Footer Column         | P1       | Yes      |
| Social Links          | P1       | Yes      |
| Image                 | P0       | Yes      |
| Divider               | P2       | Yes      |
| Label                 | P1       | Yes      |

---

# 42. Implementation Order

Components should be developed in the following order:

### Phase 1 — Foundation

* Logo
* Button
* Link
* Label
* Image

### Phase 2 — Navigation

* Navigation
* Mobile Menu
* View Switcher

### Phase 3 — Vehicle

* Vehicle Specification
* Performance Metric
* Vehicle Card
* Featured Vehicle

### Phase 4 — Content

* Section Header
* Design Story Block
* Technology Feature

### Phase 5 — Gallery and CTA

* Gallery
* Gallery Item
* CTA

### Phase 6 — Footer

* Footer
* Footer Column
* Social Links

---

# 43. Final Component Principle

Velocity should follow:

> **Build reusable patterns where consistency matters, but keep the architecture simple enough to understand.**

The purpose of components is not to create more files.

The purpose is to create a frontend that is easier to maintain, extend, and improve.
