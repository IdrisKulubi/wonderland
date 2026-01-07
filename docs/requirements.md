# Software Requirements Specification (SRS)

**Project:** Wonderland Group Corporate Website  
**Version:** 1.0  
**Status:** Draft

---

## 1. Project Overview
- **Objective:** To design and develop a responsive, modern corporate website for Wonderland Group, an integrated agricultural ecosystem.
- **Primary Goal:** To communicate the "Farm-to-Fork" value proposition ("The Full Circle of Goodness") and funnel users to 4 distinct business units: Feeds, Farms, Products, and Academy.
- **Target Audience:** Farmers (B2B), Household Consumers (B2C), Students, and Investors.

---

## 2. Functional Requirements (Features)

### 2.1. Global Features
- **Dynamic Navigation:** A sticky header that allows easy switching between the 4 business pillars (Feeds, Farms, Foods, Academy).
- **WhatsApp Integration:** A floating WhatsApp button that opens a chat with a pre-filled message based on the page (e.g., "Hello, I am interested in Feeds...").
- **Search Functionality:** Site-wide search to find products, courses, or blog articles.
- **Newsletter Signup:** Footer capture form for email marketing (Mailchimp/ConvertKit integration).

### 2.2. Homepage (The Hub)
- **Scrolly-telling Hero:** A video background capability that supports high-quality looping video (optimized/compressed).
- **Interactive Ecosystem Map:** A custom interactive diagram (SVG/Canvas) where hovering over a section (Feeds/Farm/Food) highlights the relevant text.

### 2.3. Product Catalog (Feeds & Foods)
- **Catalog Mode:** Display products with images, descriptions, specifications (e.g., Protein content), and packing sizes.
- > [!NOTE]
  > No Credit Card payment gateway required for Phase 1.
- **"Enquire to Buy" Button:** Instead of "Add to Cart," buttons trigger a modal form or WhatsApp chat for bulk orders.
- **Filter System:** Filter feeds by animal type (Cow, Chicken, Pig) or products by category (Milk, Yoghurt, Cheese).

### 2.4. The Academy Portal
- **Course Listing:** Dynamic list of available courses with dates, duration, and fees.
- **Registration Form:** A detailed form for students to apply (Name, Location, Previous Experience).
- **Downloadable Brochure:** Ability for users to download a PDF curriculum.

### 2.5. Content Management System (CMS)
The client must be able to edit the following without code:
- Update Product Prices and Photos.
- Change Course Dates.
- Post "News & Updates" (Blog).
- Update Team Members.

---

## 3. Non-Functional Requirements (Technical Constraints)

### 3.1. Performance & Optimization (Critical)
- **Load Time:** Homepage must load in under 2.5 seconds on 4G networks.
- **Image Optimization:** Auto-conversion of images to WebP format to save bandwidth.
- **Lazy Loading:** Images below the fold should only load when the user scrolls to them.

### 3.2. Mobile Responsiveness
- **Mobile-First Approach:** The site must be designed for mobile screens first, then scaled up to desktop.
- **Touch Targets:** All buttons must be at least 44px height for easy tapping on small screens.

### 3.3. SEO (Search Engine Optimization)
- **Schema Markup:** Implementation of "Product" and "Organization" schema for Google Rich Snippets.
- **Meta Tags:** All pages must have dynamic Title and Meta Description fields editable via CMS.
- **Sitemap:** Auto-generated `sitemap.xml`.

### 3.4. Security
- **SSL Certificate:** Mandatory HTTPS encryption.
- **Form Protection:** Google reCAPTCHA v3 on all contact forms to prevent spam bots.