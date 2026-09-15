# Velocity — Responsive Design Specification

**Project:** Velocity
**Project Type:** Premium Automotive UI Showcase
**Document:** Responsive Design Specification
**Version:** 1.0
**Status:** Approved for Development

---

## 1. Purpose

This document defines the responsive behavior of the Velocity website across different screen sizes.

The goal is to ensure that Velocity provides a polished and intentional experience on:

* Large desktop screens
* Standard desktop/laptop screens
* Tablets
* Mobile phones

Responsive design must not be treated as an afterthought.

The layout, typography, imagery, spacing, navigation, interactions, and animations must adapt according to available screen space while preserving the core visual identity of Velocity.

---

# 2. Responsive Design Principles

Velocity will follow these principles:

1. Design for content, not individual device models.
2. Avoid horizontal scrolling.
3. Preserve visual hierarchy at every screen size.
4. Maintain readable typography.
5. Maintain comfortable spacing.
6. Keep interactive elements touch-friendly.
7. Reduce unnecessary animation on smaller screens.
8. Do not depend on hover interactions on touch devices.
9. Preserve image quality while controlling asset size.
10. Keep the premium visual character consistent across breakpoints.

Responsive behavior should feel intentional rather than like a desktop layout compressed onto a smaller screen.

---

# 3. Breakpoint Strategy

Velocity will use four primary responsive ranges.

| Range            |  Screen Width | Primary Purpose                             |
| ---------------- | ------------: | ------------------------------------------- |
| Large Desktop    |      ≥ 1440px | Immersive premium experience                |
| Laptop / Desktop | 1024px–1439px | Standard desktop experience                 |
| Tablet           |  768px–1023px | Compact layout with simplified compositions |
| Mobile           |       < 768px | Touch-first single-column experience        |

These breakpoints are guidelines rather than rigid device-specific rules.

Layout changes should happen when the content requires them.

---

# 4. Container System

The main content container should remain centered and maintain controlled horizontal spacing.

## Large Desktop

Recommended horizontal padding:

**48–80px**

Maximum content width:

**1440px**

Large screens should use additional whitespace rather than stretching content indefinitely.

---

## Laptop / Desktop

Recommended horizontal padding:

**40–64px**

Content should remain comfortably readable without becoming excessively wide.

---

## Tablet

Recommended horizontal padding:

**32–48px**

The layout should become more compact while maintaining sufficient breathing room.

---

## Mobile

Recommended horizontal padding:

**20–24px**

Content should use the available width efficiently without touching the screen edges.

---

# 5. Responsive Grid

## Large Desktop

Primary grid:

**12 columns**

Used for:

* Hero compositions
* Vehicle showcase
* Design storytelling
* Gallery
* Technology sections
* Editorial layouts

---

## Laptop

Primary grid:

**12 columns**

Some sections may simplify their column usage when required.

---

## Tablet

Primary grid:

**8 columns**

Layouts should become less asymmetric where the original composition becomes difficult to maintain.

---

## Mobile

Primary grid:

**4 columns**

Most major sections will become single-column or carefully controlled two-column layouts.

---

# 6. Navigation

## Desktop

The navigation should display:

* Velocity logo
* Primary navigation links
* View switcher
* Main action
* Supporting navigation elements where required

Navigation should remain visually minimal.

---

## Laptop

The same navigation structure should remain where space allows.

If required:

* Reduce spacing between navigation items
* Reduce secondary elements
* Maintain the main CTA
* Preserve logo visibility

---

## Tablet

Navigation may transition toward a simplified structure.

Possible behavior:

* Logo remains visible
* Important navigation links remain available
* Secondary links may be hidden
* Menu trigger becomes available

---

## Mobile

Mobile navigation should use a dedicated menu.

Required behavior:

* Visible logo
* Menu button
* Full-screen or panel-based navigation
* Clear navigation hierarchy
* Accessible close action
* Keyboard accessibility where applicable
* Focus management

The mobile menu must not feel like a desktop navigation compressed into a small space.

---

# 7. Typography Responsiveness

Typography must scale according to screen size.

Large display text should not remain at desktop size on mobile.

Recommended direction:

| Type       | Desktop |   Tablet |   Mobile |
| ---------- | ------: | -------: | -------: |
| Display XL |   ~96px | ~56–64px | ~40–48px |
| Display LG |   ~72px | ~48–56px | ~36–42px |
| Heading XL |   ~56px | ~40–48px | ~32–36px |
| Heading LG |   ~44px |    ~36px | ~28–32px |
| Heading MD |   ~32px |    ~28px |    ~24px |
| Body LG    |    20px |     18px |  17–18px |
| Body MD    |    16px |     16px |  15–16px |
| Label      |    12px |     12px |  11–12px |

These values may be refined during implementation.

Typography should prioritize:

* Readability
* Hierarchy
* Line length
* Visual impact
* Consistent rhythm

---

# 8. Hero Section

The hero is the most visually important section.

## Desktop

The hero should support:

* Large cinematic vehicle imagery
* Strong headline
* Supporting text
* Primary action
* Secondary action if required
* Strong visual composition
* Controlled overlay
* Subtle entrance animation

The vehicle image should dominate the visual hierarchy.

---

## Laptop

The hero should remain immersive but use slightly smaller typography and reduced spacing.

The composition must remain balanced without allowing text to cover important vehicle details.

---

## Tablet

The hero may simplify into:

**Image + content**

or

**Content over image**

depending on the selected visual composition.

The headline must remain readable.

---

## Mobile

The hero should prioritize:

1. Vehicle image
2. Headline
3. Supporting text
4. Primary CTA

The composition may become vertically stacked.

Important vehicle details must not be hidden by text overlays.

No horizontal overflow is allowed.

---

# 9. Featured Vehicle Section

## Desktop

Recommended layout:

**Two-column composition**

Example:

* Large vehicle image
* Vehicle information and specifications

The image should receive strong visual emphasis.

---

## Tablet

The layout may remain two-column if sufficient space exists.

Otherwise:

**Image → Information**

---

## Mobile

Use a vertical layout:

**Vehicle image**

↓

**Vehicle name**

↓

**Description**

↓

**Key specifications**

↓

**CTA**

Vehicle information must remain easy to scan.

---

# 10. Performance Section

Performance information should remain visually technical and easy to compare.

## Desktop

Possible layout:

**Horizontal performance metrics**

Example:

* 0–100 km/h
* Top Speed
* Power
* Torque

Metrics can appear in a single row or structured grid.

---

## Tablet

Use a:

**2 × 2 metric grid**

where appropriate.

---

## Mobile

Use either:

* 2-column metric grid

or

* Vertical metric list

depending on content length.

Metrics should not become too small simply to preserve a desktop arrangement.

---

# 11. Design Story Section

The Design Story section uses editorial composition.

## Desktop

Use:

* Asymmetric layouts
* Large imagery
* Offset text
* Editorial spacing
* Large typography

The section should feel like a premium automotive magazine.

---

## Tablet

Reduce extreme asymmetry.

The layout may use:

* Two-column composition
* Image + text
* Controlled offsets

---

## Mobile

The section should become primarily vertical:

**Image**

↓

**Label**

↓

**Heading**

↓

**Description**

↓

**Supporting content**

Large decorative offsets should be removed when they reduce usability.

---

# 12. Technology Section

## Desktop

Possible composition:

**Large technology image + feature information**

Technology features may be arranged in multiple columns.

---

## Tablet

Use:

* Two-column layout
* Or image followed by feature grid

---

## Mobile

Use a single-column structure.

Technology features should be easy to scan.

Avoid excessively long horizontal cards.

---

# 13. Vehicle Collection

The vehicle collection should behave like a premium catalogue.

## Desktop

Use a multi-column grid.

Possible structure:

**3 columns**

or

**4 columns**

depending on available width.

Cards should have sufficient breathing room.

---

## Tablet

Use:

**2-column grid**

Vehicle cards should remain visually strong.

---

## Mobile

Use:

**1-column grid**

or a carefully designed horizontal presentation when it improves the experience.

Cards should not become cramped.

---

# 14. Gallery

The gallery is an editorial visual experience.

## Desktop

Use:

* Asymmetric image sizes
* Large feature image
* Supporting images
* Controlled spacing
* Editorial rhythm

---

## Tablet

Simplify the composition.

Use:

* Two-column arrangements
* Controlled image sizes
* Reduced asymmetry

---

## Mobile

Prefer a vertical editorial gallery.

Large images should remain visually dominant.

Avoid extremely small thumbnails that make the gallery difficult to appreciate.

---

# 15. Image Responsiveness

Images must adapt to the available screen size.

Important rules:

* Preserve important subject positioning.
* Use `object-fit` appropriately.
* Adjust `object-position` when necessary.
* Avoid distorted images.
* Avoid unnecessary oversized mobile images.
* Lazy-load images below the initial viewport.
* Use appropriate image dimensions for different layouts where practical.

The main vehicle should remain the visual focus.

---

# 16. CTA Section

## Desktop

The final CTA should use a strong visual composition.

Possible structure:

**Large statement + supporting text + primary action**

---

## Tablet

Reduce excessive spacing while preserving visual impact.

---

## Mobile

Use:

* Strong headline
* Short supporting text
* Full-width or comfortable CTA
* Adequate spacing

CTA buttons must remain easy to tap.

---

# 17. Footer

## Desktop

Footer may use multiple columns:

* Navigation
* Vehicles
* Company
* Social
* Legal

---

## Tablet

Reduce column spacing and combine smaller groups where appropriate.

---

## Mobile

Footer should become vertically structured.

Possible order:

1. Logo
2. Primary links
3. Secondary links
4. Social links
5. Legal information

Avoid extremely wide footer rows.

---

# 18. Touch Targets

Interactive elements must be comfortable for touch interaction.

Minimum recommended touch target:

**44 × 44px**

This applies to:

* Buttons
* Menu buttons
* Navigation controls
* View switcher controls
* Gallery controls
* Interactive icons

Spacing between nearby controls must also prevent accidental taps.

---

# 19. Hover and Touch Behavior

Hover effects must never be required to understand or use the website.

Desktop may use:

* Hover transitions
* Image movement
* Underline animations
* Button transitions
* Card image scaling

Touch devices should receive equivalent functionality through:

* Tap
* Focus
* Visible states

Important information must never exist only inside a hover state.

---

# 20. Responsive Animation

Animation should become more restrained as screen size decreases.

## Desktop

May use:

* Image reveals
* Parallax
* Scroll-based movement
* Text entrance animations
* Image transitions

---

## Tablet

Reduce animation distance and complexity.

---

## Mobile

Prefer:

* Fade
* Small translate movement
* Simple reveals

Avoid excessive:

* Parallax
* Large transforms
* Continuous movement
* Heavy scroll effects

---

# 21. Reduced Motion

The website must respect the user's reduced-motion preference.

When:

`prefers-reduced-motion: reduce`

is enabled:

* Disable non-essential animation
* Reduce transition duration
* Disable strong parallax
* Remove unnecessary movement
* Preserve functional transitions

The website must remain fully usable without animation.

---

# 22. Responsive Spacing

Section spacing should scale with screen size.

Recommended direction:

| Screen        | Section Spacing |
| ------------- | --------------: |
| Large Desktop |        96–160px |
| Laptop        |        96–140px |
| Tablet        |        72–120px |
| Mobile        |         56–96px |

Spacing should be adjusted according to content rather than applying identical values everywhere.

---

# 23. Responsive Layout Principles

When a desktop layout does not fit smaller screens, the priority should be:

1. Preserve content hierarchy.
2. Preserve readability.
3. Preserve visual quality.
4. Preserve important interactions.
5. Simplify the composition.
6. Remove unnecessary decorative elements.
7. Avoid shrinking everything excessively.

The solution should be **recomposition**, not simply **scaling down**.

---

# 24. Overflow Prevention

The website must not produce unintended horizontal scrolling.

Check for:

* Oversized headings
* Fixed-width elements
* Large images
* Absolute-positioned elements
* Navigation items
* Long text
* Buttons
* Decorative elements
* Gallery compositions

Every major section must be tested at narrow mobile widths.

---

# 25. Accessibility on Responsive Layouts

Responsive behavior must maintain accessibility.

Requirements:

* Maintain sufficient text contrast.
* Preserve logical heading hierarchy.
* Keep keyboard navigation functional.
* Maintain visible focus states.
* Provide accessible labels for icon-only controls.
* Ensure mobile menu controls are accessible.
* Do not hide important content only on smaller screens.
* Maintain usable touch targets.

---

# 26. Responsive Performance

Smaller screens often operate on slower networks and less powerful hardware.

Therefore:

* Optimize image sizes.
* Avoid unnecessary JavaScript.
* Lazy-load below-the-fold images.
* Minimize expensive animations.
* Avoid unnecessary DOM complexity.
* Load only required resources.
* Prevent layout shifts where possible.

The first viewport should load efficiently.

---

# 27. Responsive Testing Matrix

Velocity must be tested at minimum at:

### Desktop

* 1920 × 1080
* 1440 × 900
* 1366 × 768

### Tablet

* 1024 × 768
* 834 × 1194
* 768 × 1024

### Mobile

* 430 × 932
* 412 × 915
* 390 × 844
* 375 × 812
* 360 × 800

These are testing reference sizes, not the only supported screen sizes.

---

# 28. Responsive Acceptance Criteria

Velocity is considered responsive when:

* No unintended horizontal scrolling exists.
* Navigation works on all supported screen sizes.
* Mobile menu works correctly.
* Typography remains readable.
* Images remain visually appropriate.
* Vehicle information remains accessible.
* Performance metrics remain readable.
* Gallery remains usable.
* CTA buttons remain easy to interact with.
* Touch targets are sufficiently large.
* Animations do not negatively affect usability.
* Reduced-motion preferences are respected.
* Footer remains organized.
* Layout does not appear broken at intermediate widths.

---

# 29. Responsive Development Order

Responsive implementation should follow this order:

1. Desktop structure
2. Laptop refinement
3. Tablet adaptation
4. Mobile layout
5. Typography refinement
6. Image refinement
7. Interaction refinement
8. Animation refinement
9. Accessibility testing
10. Performance testing
11. Cross-browser testing

---

# 30. Final Principle

Velocity should not look like:

**Desktop → Shrink → Mobile**

It should look like:

**One design system → Multiple intentional compositions**

Every screen size should feel designed rather than compromised.

The goal is a responsive automotive experience that maintains the same:

* Premium character
* Visual hierarchy
* Typography quality
* Interaction quality
* Brand identity
* Performance
* Accessibility

across all supported screen sizes.
