# Restaurant Website Template Generator

A powerful React-based tool that generates beautiful, type-specific restaurant websites in minutes. No design skills required.

## Features

- **8 Restaurant Types**: Mediterranean, Tacos, Pizza, BBQ, Sushi, Breakfast, Burgers, Fine Dining
- **Auto-Generated Aesthetics**: Each type comes with its own color palette, typography, and patterns
- **Live Preview**: See your website in real-time as you configure it
- **Device Preview**: Test your design on desktop, tablet, and mobile
- **Export Ready**: Download production-ready React code

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## How It Works

1. **Choose Restaurant Type** - Select from 8 preset types, each with its own vibe
2. **Fill in Details** - Add your business name, location, phone, hours
3. **Preview** - See your website come to life instantly
4. **Export** - Download the generated React code

## Restaurant Presets

| Type | Vibe | Primary Colors |
|------|------|----------------|
| Mediterranean | Warm, nostalgic, family-friendly | Cream, Terracotta, Gold |
| Tacos | Fun, energetic, authentic | Cornsilk, Fiery Orange, Lime |
| Pizza | Classic, neighborhood-friendly | Soft Cream, Red, Basil Green |
| BBQ | Rustic, bold, southern charm | Dark Wood, Smoke Red, Amber |
| Sushi | Minimal, elegant, premium | White, Deep Navy, Red |
| Breakfast | Bright, cheerful, casual | Butter Yellow, Sunny Orange, Mint |
| Burgers | Bold, American classic | Beige, Dark Red, Mustard |
| Fine Dining | Elegant, sophisticated | Charcoal, Gold, Taupe |

## Using Exported Code

After exporting your website code:

1. Create a new Vite project:
   ```bash
   npm create vite@latest my-restaurant -- --template react
   cd my-restaurant
   ```

2. Install Tailwind CSS:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. Configure Tailwind (tailwind.config.js):
   ```javascript
   export default {
     content: ["./index.html", "./src/**/*.{js,jsx}"],
     theme: { extend: {} },
     plugins: [],
   }
   ```

4. Add to src/index.css:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. Add Google Fonts to index.html (fonts depend on restaurant type)

6. Replace src/App.jsx with your exported code

7. Run:
   ```bash
   npm run dev
   ```

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Icons

## License

MIT

