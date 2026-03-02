# PROJECT RULES – PRODUCTION LANDING

This project must follow strict production standards.

## React Architecture
- Functional components only
- No business logic inside UI components
- Components under 150 lines
- Single responsibility per file
- No inline complex functions in JSX
- Reusable UI components in /components/ui

## Performance
- Avoid unnecessary re-renders
- Memoize when needed
- Lazy load below-the-fold sections
- Optimize images
- Avoid unnecessary state
- No heavy client-side libraries

## Organizational Design
- Clear separation:
  components / hooks / services / lib
- No circular dependencies
- Strict typing (TypeScript required)

## Security
- No secrets in frontend
- Validate all form inputs
- Sanitize external data
- No dangerouslySetInnerHTML
- Safe external links (rel="noopener noreferrer")

Before generating code:
Validate against this document.
Refactor before outputting.
