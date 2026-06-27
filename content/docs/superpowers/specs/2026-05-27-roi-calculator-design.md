# Design Doc: Interactive ROI Calculator for Lead Generation

## Objective
Implement an interactive ROI (Return on Investment) Calculator on the homepage of `masri-programmer-app` to attract high-value B2B/Enterprise clients by demonstrating concrete savings through automation and AI.

## Architecture
- **Component**: `resources/js/pages/home/ROICalculator.vue`.
- **Integration**: Inserted into `Homepage.vue` between the "Services" and "Features" sections.
- **Content Model**: Data (labels, titles, multipliers) will be managed via Obsidian in `content/Home/roi-calculator.md` and synced into the database via the `obsidian:sync` command.

## User Interface
- **Inputs**:
  - `teamSize`: Slider (1 - 500+ employees).
  - `manualHours`: Slider (1 - 40 hours per week per employee).
  - `hourlyRate`: Input/Slider (€20 - €200+ average cost per hour).
- **Visualization**:
  - A central "Annual Potential Savings" counter that dynamically updates.
  - A "Weekly Savings" breakdown.
- **Aesthetic**: Modern, "high-tech" look using Glassmorphism (semi-transparent blurred background) and emerald/primary accents.

## Data Flow & CTA
1.  **Reactive State**: Local Vue `ref` objects for inputs.
2.  **Computed Savings**: `savings = teamSize * manualHours * hourlyRate * 0.7 * 52`.
3.  **Dynamic CTA**:
    - Default: "Book Your Free Discovery Call".
    - High-Value (>€100k): "Apply for Private Automation Audit".
4.  **Lead Context**: The calculated ROI will be stored in `localStorage` to prepopulate context when the user navigates to the Booking/Contact page.

## Obsidian Sync Integration
The `obsidian:sync` command will be updated to:
1.  Read `content/Home/roi-calculator.md`.
2.  Parse YAML for:
    - `title`: Section title.
    - `description`: Sub-description.
    - `efficiency_multiplier`: Default 0.7.
    - `cta_threshold`: Value for changing CTA text.
3.  Store these in a generic `HomeSection` or `PageMeta` model for frontend consumption.

## Verification & Success Criteria
- User can interact with sliders and see immediate math updates.
- CTA text changes correctly based on savings threshold.
- Obsidian sync correctly updates the multiplier and labels.
- Layout remains responsive on mobile.
