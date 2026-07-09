## Area: Accessibility
**Observation:** - Layout uses generic <div>s instead of semantic HTML5 tags (`<nav>, <section>, <article>`), across the whole site.

**Why it matters** - Screen readers rely on semantic tags for landmark navigation, so assistive-tech users can't jump directly to nav/main content. Also hurts SEO and code maintainability

**Suggested fix** - Swap divs for the matching semantic tags where structurally appropriate. No visual/CSS changes needed — can be done incrementally, component by component.

## Area: Accessibility
**Observation** - Filter controls (e.g. checkboxes/dropdowns in the filter panel) can't be operated via keyboard — Tab/Enter/Space don't focus or trigger them, only mouse clicks work.

**Why it matters** - Keyboard-only and screen reader users can't apply or change filters at all, blocking a core part of the browsing/search flow for them.

**Suggested fix** - fixEnsure filter elements are focusable and handle keydown for Enter/Space to trigger the same action as click.

## Area: Perceived performance
**Observation** - Page loaded over HTTPS attempts to load a script over insecure HTTP (http://rogde...). Browser blocks it as mixed content, so the resource never loads.

**Why it matters** - The blocked script silently fails to load — whatever functionality/tracking it provides simply doesn't run, with no visible error to the user, only in devtools. This can mean broken ads, analytics, or third-party widgets, and signals insecure third-party dependencies.

**Suggested fix** - Update the script reference to load over HTTPS (https://...), or if the third-party vendor doesn't support HTTPS, replace/remove the dependency.

## Area: Responsive design
**Observation** - On mobile, the page appears zoomed out — the desktop layout loads unchanged (same proportions/font sizes), forcing the user to pinch-zoom to read content. - https://moldcell.md/rom/private

**Why it matters** - Content is effectively unreadable and unusable on phones without manual zooming, which most users won't bother doing — they'll just leave. 

**Suggested fix** - Add responsive CSS breakpoints (media queries) so layout, font sizes, and spacing adapt below ~768px width.
