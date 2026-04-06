# Schema and Rich Results

## Conceptual Schema Map
We use JSON-LD schema to help search engines understand the Atrellis entity.

### Primary Types
- **Organization**: Brand name, logo, social profiles.
- **LocalBusiness**: Address, phone, hours, and geographic area served.
- **Service**: Specifically used on pages in `04_SERVICE_CATEGORY_SYSTEM`.
- **FAQPage**: Used on any page with an FAQ block.
- **Review**: Used to highlight individual client success stories.

## Implementation Principles
- **Truthfulness**: Schema must match the visible content on the page.
- **Non-Spammy**: Do not use "aggregateRating" unless there is a legitimate source for the data.
- **Maintained**: Update schema when service offerings or locations change.
