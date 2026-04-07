# 03_PRODUCTS

## Purpose

This folder defines the main products or systems page type for Atrellis.

Its role is to explain:
- how product-system-led offerings should be presented,
- how this page differs from broad services,
- how category-specific intent should be handled,
- and how product-system pages should support both authority and conversion.

This folder matters because Atrellis includes system-led offerings such as blinds, roofing-related systems, pergolas, and other structured product categories that users may search for directly.

## What belongs here

- Products / systems page purpose
- Page structure for system-led categories
- Authority and comparison support
- Relevance and conversion logic
- Relationship between products and broader services

## What does not belong here

- Individual SKU data
- Detailed technical spec sheets
- Supplier contract details
- Generic service landing logic
- Deep future configurator implementation notes

Those belong elsewhere.

## Core files in this folder

- `PRODUCTS_MASTER.md`
- `SYSTEM_CATEGORY_LOGIC.md`
- `PRODUCTS_CONVERSION_ROLE.md`
- `NOTES.md`

## Source of truth

The main source of truth is:

- `PRODUCTS_MASTER.md`

## Usage rules

- Treat products as systems, not just items.
- Build authority through clarity and structure.
- Support direct-intent visitors well.
- Connect product-system pages back to the broader Atrellis story.

## Relationship to other folders

This folder supports:
- `04_SERVICE_CATEGORY_SYSTEM/`
- `05_CONTENT_SEO_AIO/`
- `07_CONVERSION_ARCHITECTURE/`
- future configurator and quote logic

This page type supports specific-intent entry and deeper system understanding.
