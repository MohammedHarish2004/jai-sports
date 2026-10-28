# Jai Sports — Modern Sports & Trophies Shop Website

> **Tagline:** “Passion Starts Here.”

A complete, modern, responsive, animated website built for **Jai Sports**, a premier retailer for sports equipment, trophies, medals, awards, kids' sports gear, and custom athletic wear.

---

## 🚀 Technology Stack

- **React with JSX** (JavaScript, no TypeScript required)
- **Vite** for ultra-fast bundling and development
- **Tailwind CSS v4** for modern sports retail styling
- **Framer Motion** for smooth, energetic animations
- **React Router** for multi-page routing
- **Lucide React** for crisp UI icons
- **Direct WhatsApp Click-to-Chat** integration with URL encoding

---

## 🎨 Brand Identity & Colors

| Token | Hex Code | Purpose |
|---|---|---|
| Navy Blue | `#101B4B` | Primary brand background & headers |
| Electric Orange | `#F04423` | Call-to-action buttons, badges & highlights |
| Pure White | `#FFFFFF` | Card surfaces & clean contrast |
| Light Grey | `#F5F6F8` | Page body background |
| Dark Text | `#222222` | High-readability body copy |

**Typography:**
- Display & Headings: `Outfit` & `Paytone One` (Google Fonts)
- Interface & Body: `Poppins` (Weights: 400, 500, 600, 700)

---

## 📂 Project Structure

```text
src/
  components/
    common/
      Breadcrumbs.jsx         # Breadcrumb navigation
      EmptyState.jsx          # Friendly empty states for search/filters
      ImageWithFallback.jsx   # Graceful image fallback handler
      SectionHeading.jsx      # Reusable styled section headers with badges
      SocialIcons.jsx         # Clean SVGs for Facebook, Instagram, YouTube, Twitter
      WhatsAppButton.jsx      # Dynamic WhatsApp enquiry action button
    home/
      HeroSection.jsx         # Energetic hero with CTAs and visual showcase
      CategorySection.jsx     # Dynamically generated category cards
      FeaturedProducts.jsx    # Products where featured === true
      WhyChooseUs.jsx         # Benefits and trust badges
      ServicesPreview.jsx     # Preview cards linking to Services
      CTASection.jsx          # High-converting navy & orange CTA banner
    layout/
      Header.jsx              # Sticky desktop navbar with dynamic category dropdown
      Footer.jsx              # Footer with dynamic categories & centralized contact info
      MobileMenu.jsx          # Smooth animated drawer menu for tablets/phones
    products/
      CategoryFilter.jsx      # Dynamic category pills with item counts
      ProductCard.jsx         # Product card with price formatting & WhatsApp CTA
      ProductGrid.jsx         # 1-to-4 column responsive grid
      ProductSearch.jsx       # Real-time search with clear action
  config/
    siteConfig.js             # Central store details: phone, WhatsApp, address, hours
  data/
    services.js               # Editable service cards & highlights
    shopData.js               # Single source of truth for categories & products
  pages/
    Home.jsx                  # Homepage
    About.jsx                 # About Us, mission, vision & values
    Products.jsx              # Dynamic product catalogue with URL query params
    Services.jsx              # Specialized services & tournament procurement
    Contact.jsx               # Contact details & validated WhatsApp form
    NotFound.jsx              # Custom sports-themed 404 page
  utils/
    productFilters.js         # Search & category filter logic, price formatter
    whatsapp.js               # WhatsApp URL builders & message encoders
  App.jsx                     # Router & scroll-to-top configuration
  index.css                   # Tailwind CSS v4 theme tokens
  main.jsx                    # React entry point
```

---

## 🛠️ How to Run Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

---

## ✏️ How to Edit Store Information & WhatsApp Number

Open `src/config/siteConfig.js`. You can edit:
- `whatsappNumber`: Set your WhatsApp number (digits only with country code, e.g., `919876543210`)
- `displayPhone`: Formatted phone number displayed in headers and footers
- `email`: Your store email address
- `address`: Street, area, city, and pincode
- `businessHours`: Weekdays and weekend timings
- `socialLinks`: URLs for Facebook, Instagram, YouTube, and Twitter

Every WhatsApp button, contact section, and footer automatically updates!

---

## 📦 How to Add or Edit Products & Categories

All product and category data is stored in `src/data/shopData.js`.

### Adding a Category:
```js
{
  id: "swimwear",
  name: "Swimwear",
  slug: "swimwear",
  description: "Goggles, swimming caps, and competitive swimwear",
  image: "/images/categories/swimwear.svg"
}
```
*Adding a category here will automatically render it across:*
- Navbar dropdown
- Mobile navigation drawer
- Homepage "Shop by Category" section
- Products page category filter tabs
- Footer category links

### Adding a Product:
```js
{
  id: "prod-017",
  name: "Speedo Training Goggles",
  slug: "speedo-training-goggles",
  categoryId: "swimwear",
  description: "Anti-fog UV protection swimming goggles with silicone strap.",
  image: "/images/products/goggles.svg",
  price: 699, // Set a number or set to null for "Price on Request"
  featured: true // Set to true to display on homepage
}
```

---

## 📱 WhatsApp Click-to-Chat Flow

When a customer clicks any product enquiry button:
1. It opens `https://wa.me/{whatsappNumber}?text=...` in a new tab.
2. The message is automatically pre-filled:
   > *"Hello Jai Sports, I would like to enquire about {ProductName}. Please share the price and availability."*
3. When submitting the Contact Us form, all fields (Name, Phone, Email, Enquiry Type, and Message) are neatly formatted with emojis and sent directly to your WhatsApp.
