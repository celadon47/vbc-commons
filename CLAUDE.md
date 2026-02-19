# VBC Commons

## What This Project Is

VBC Commons (vbccommons.org) is an independent, open-access knowledge base for CMS value-based care models. It serves two audiences simultaneously:

1. **Non-technical readers** (ACO administrators, practice managers, policy analysts) who need to understand CMS models at a deep conceptual level
2. **Technical builders** (actuaries, data scientists, analytics engineers) who need implementation-grade reference material to build their own models

The site has three components:
- **Knowledge base**: Permanent reference pages covering CMS model methodology (MSSP, LEAD, ACCESS, TEAM, and others over time)
- **Paid templates**: Excel/Python models implementing the methodologies, sold via Stripe one-time purchases
- **Free newsletter**: Biweekly CMS intelligence brief with vendor ecosystem coverage

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Content**: MDX for knowledge base pages
- **Fonts**: Google Fonts — Libre Baskerville (headings), DM Sans (body), JetBrains Mono (data/labels/code)
- **Hosting**: Vercel
- **Payments**: Stripe Checkout (one-time purchases)
- **Newsletter**: Beehiiv (API integration for signup forms)
- **Domain**: vbccommons.org

## Design System

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `deep-ink` | `#1a1a2e` | Primary text, headings, dark backgrounds |
| `clean-white` | `#fafafa` | Page background |
| `signal-green` | `#00c896` | Accent, links, highlights, brand color |
| `signal-green-dim` | `#00c89615` | Light green backgrounds |
| `signal-green-soft` | `#00c89630` | Green borders, hover states |
| `slate` | `#64748b` | Secondary text, metadata, captions |
| `light-gray` | `#f1f5f9` | Card backgrounds, alternating table rows |
| `soft-border` | `#e2e8f0` | Borders, dividers |
| `blue` | `#3b82f6` | Info callouts |
| `amber` | `#f59e0b` | Warning callouts, "changed" badges |
| `red` | `#ef4444` | Error states, loss indicators |
| `purple` | `#8b5cf6` | Adjusted/intermediate values in charts |

### Typography

- **Headings** (`h1`, `h2`): Libre Baskerville, normal weight, slight negative letter-spacing (-0.02em to -0.03em)
- **Body text**: DM Sans, 16-17px, line-height 1.8-1.85, color `slate` or `#374151`
- **Data/labels/code**: JetBrains Mono, smaller size (12-14px), used for dates, tags, formulas, table numbers, code blocks
- **Labels/tags**: JetBrains Mono, uppercase, letter-spacing 0.06-0.08em, small (11-12px)

### Component Library

These are the reusable components for knowledge base pages. Every page uses a subset of these.

#### Article Layout
- Sticky TOC sidebar on left (220px), article body on right (max 720px)
- Breadcrumb navigation: Program > Topic (links in signal-green)
- Program tag (green pill) and difficulty tag (amber pill) below title
- "Last updated" timestamp with calendar icon
- Reading time estimate with clock icon
- "The Short Version" summary box at top (light-gray background, rounded)

#### Worked Example Card
- Light-gray background with 4px signal-green left border
- Header: icon + "WORKED EXAMPLE" label in JetBrains Mono green
- Title in Libre Baskerville
- Contains calculation steps, data tables, or prose explanations
- Calculation steps: grid with step-label | math | result columns
- Final step row: signal-green-dim background, bold result in green

#### Formula Block
- Deep-ink (dark) background, rounded corners
- Label in JetBrains Mono green uppercase
- Content in JetBrains Mono
- Variables in signal-green, operators in amber, comments in slate

#### Data Table
- Deep-ink header row with white text
- Alternating row shading (white / light-gray)
- Numbers right-aligned in JetBrains Mono
- Total/summary rows: signal-green-dim background with green top border

#### Callout Boxes (three variants)
- **Info** (blue): light blue background, blue border, blue text. Use for context and explanations.
- **Warning** (amber): light amber background, amber border. Use for methodology changes, common mistakes, things that changed.
- **Tip** (green): signal-green-dim background, green border. Use for practical advice, strategic implications.

#### Definition Tooltip
- Dashed signal-green underline on technical terms
- Hover shows dark tooltip with plain-English definition
- Use for first occurrence of jargon: HCC, ACPT, MSR, RAF, etc.

#### "For Model Builders" Expandable Section
- Collapsible section at the bottom of relevant pages
- Contains: coefficient tables, edge case handling, data source specs, code-level detail
- This is where template upsell CTAs live

#### Tool/Template CTA Banner
- Deep-ink background, rounded, flex layout
- Title in Libre Baskerville white, description in slate
- Signal-green button with arrow icon
- Used to link from knowledge base pages to related paid templates

#### Previous/Next Navigation
- Bottom of each article
- Links to adjacent pages within the same program section
- Bordered cards with hover state (green border)

### Visual Principles

1. **Restrained**: No gradients, no shadows heavier than subtle, no decorative elements. Let typography and whitespace do the work.
2. **Data-forward**: Numbers, formulas, and worked examples are the hero content. Give them visual prominence.
3. **Dual-audience friendly**: Technical detail is always accessible but never overwhelming. Progressive disclosure via expandable sections.
4. **Consistent**: Every knowledge base page follows the same structure. Readers should know exactly where to find what they need.

## Content Structure

### Site Map

```
vbccommons.org
├── / (home)
├── /knowledge-base/
│   ├── /mssp/
│   │   ├── overview
│   │   ├── beneficiary-assignment
│   │   ├── benchmark-calculation
│   │   ├── risk-adjustment
│   │   ├── regional-ffs-trending
│   │   ├── expenditure-calculation
│   │   ├── quality-scoring
│   │   ├── shared-savings-losses
│   │   ├── key-levers
│   │   └── data-sources
│   ├── /team/
│   │   ├── overview
│   │   ├── episode-definition
│   │   ├── target-price
│   │   ├── risk-tracks
│   │   ├── expenditure-reconciliation
│   │   ├── quality-measures
│   │   └── post-acute-levers
│   ├── /lead/
│   │   ├── overview
│   │   ├── beneficiary-alignment
│   │   ├── benchmark-methodology
│   │   ├── payment-mechanics
│   │   ├── caras
│   │   ├── quality-measures
│   │   ├── medicaid-integration
│   │   ├── transition-from-reach
│   │   └── open-questions
│   └── /access/
│       ├── overview
│       ├── clinical-tracks
│       ├── eligibility
│       ├── payment-methodology
│       ├── beneficiary-enrollment
│       ├── technology-requirements
│       ├── co-management
│       └── key-levers
├── /templates/ (paid products)
├── /newsletter/ (signup + archive)
├── /about/
└── /methodology/
```

### Knowledge Base Page Structure (MDX)

Every knowledge base page follows this structure:

```
---
title: "Page Title"
program: "MSSP" | "LEAD" | "ACCESS" | "TEAM"
difficulty: "Foundational" | "Intermediate" | "Advanced"
lastUpdated: "2026-02-19"
readingTime: "12 min"
summary: "One-paragraph plain-English summary"
prev: { title: "Previous Page", href: "/knowledge-base/..." }
next: { title: "Next Page", href: "/knowledge-base/..." }
---

## Section Title

Body text explaining the concept in plain English...

<WorkedExample title="Example Title" icon="📊">
  Worked numerical example with realistic figures...
  <CalcSteps>
    <Step label="Description" math="formula" result="$X,XXX" />
    <Step label="Final" math="sum" result="$XX,XXX" final />
  </CalcSteps>
</WorkedExample>

<FormulaBlock label="Formula Name">
  Variable = X × Y + Z
</FormulaBlock>

<Callout type="warning">
  Important caveat or methodology change...
</Callout>

<DataTable>
  | Column 1 | Column 2 | Column 3 |
  |----------|----------|----------|
  | data     | data     | data     |
</DataTable>

<ForModelBuilders>
  Deep technical detail, coefficient tables, edge cases...
  <TemplateCTA template="mssp-benchmark" />
</ForModelBuilders>
```

### Writing Voice

- **Precise but approachable**: Write like a knowledgeable colleague explaining something at a whiteboard, not like a textbook or a CMS regulation
- **Show don't tell**: Always use worked numerical examples with realistic figures. Never explain a formula without walking through it with actual numbers.
- **Acknowledge complexity**: Don't oversimplify. Say "this is complicated" when it is, then make it clear anyway.
- **Flag what changed**: When CMS methodology changed from a previous version, always call it out with a warning callout. People coming from older knowledge need to know what's different.
- **Flag what's unknown**: For newer models (LEAD, ACCESS), clearly distinguish confirmed information from expected/speculated details. Use language like "CMS has not yet specified..." or "Based on the REACH precedent, we expect..."
- **No marketing language**: Never use phrases like "unlock insights" or "leverage synergies." This is a reference resource, not a sales page.
- **Active voice**: "CMS calculates the benchmark by..." not "The benchmark is calculated by CMS through..."

## Development Conventions

- Use TypeScript for all components
- Use Tailwind utility classes; define design tokens in tailwind.config
- MDX files go in `/content/knowledge-base/[program]/[page].mdx`
- Custom components go in `/components/knowledge-base/`
- Pages use App Router: `/app/knowledge-base/[program]/[slug]/page.tsx`
- Images and SVG diagrams are inline or in `/public/images/`
- All monetary values in worked examples should use realistic Medicare figures
- Mobile responsive: TOC sidebar collapses on screens < 900px

## Important Notes

- This is a solo project built by someone with beginner coding skills using Claude Code as the primary development tool. Prioritize simplicity and maintainability over clever abstractions.
- Every knowledge base page should work as a standalone reference — someone should be able to bookmark a single page and get full value from it without reading other pages first.
- The knowledge base documents PUBLIC CMS methodology from publicly available final rules, regulations, and data. It does not contain or reference any proprietary information.
- When in doubt about a design or implementation decision, match the patterns established in the MSSP section, which is the first and most thoroughly developed part of the knowledge base.
