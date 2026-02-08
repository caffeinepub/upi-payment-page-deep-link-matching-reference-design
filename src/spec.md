# Specification

## Summary
**Goal:** Simplify the payment page by keeping only the primary UPI action and updating its label and size.

**Planned changes:**
- Remove the secondary "Copy Link" button from the payment page, along with all copy-to-clipboard logic, copy status state/handlers, related icon imports, and any copy-status messaging.
- Update the primary UPI payment button to be visually larger and change its label text to exactly "GET PRIMIUM", while preserving the existing UPI deep link (including am=99) and removing/updating any instructional text that mentions copying a link.

**User-visible outcome:** The payment page shows a single, larger primary button labeled "GET PRIMIUM" that still opens the same UPI payment link, with no copy-link option or copy-related messaging.
