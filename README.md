# LocalWebBuilders

Professional website templates for restaurants and food brands. Beautiful, customizable, and ready to launch.

## Features

- **8+ Restaurant Templates**: Mediterranean, Catering, BBQ, African, Vegan, Plant-Based, Burgers, Gourmet Meats
- **Custom Design System**: Each template comes with its own color palette, typography, and patterns
- **Modern Tech Stack**: Built with React, Tailwind CSS, and Vite for optimal performance
- **Fully Responsive**: Beautiful on desktop, tablet, and mobile devices
- **Production Ready**: Launch-ready code that's easy to customize

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## How It Works

1. **Browse Templates** - Explore our collection of professionally designed restaurant templates
2. **Choose Your Style** - Select the template that best fits your brand
3. **Customize** - Modify colors, content, and images to match your business
4. **Launch** - Deploy your beautiful new website

## Available Templates

| Template | Style | Primary Colors |
|----------|-------|----------------|
| Solara (Mediterranean) | Warm, nostalgic, family-friendly | Cream, Terracotta, Gold |
| Joyful Table (Catering) | Fun, energetic, celebration | Peach, Coral, Orange |
| Oakfire (BBQ) | Rustic, bold, smokehouse | Cream, Teal, Burnt Orange |
| Safari Spice (African) | Bold, authentic, vibrant | Green, Red, Golden Yellow |
| Golden Yeast (Vegan) | Fresh, natural, ethical | Green, Yellow, Pink |
| Bloom Kitchen (Plant-Based) | Gentle, organic, wellness | Sage, Tan, Rose |
| TopStack (Smash Burger) | Bold, modern, urban | Yellow, Black, Red |
| Phil's Prime (Gourmet Meats) | Premium, artisanal, quality | Mint, Peach, Lavender |

## Customization Guide

To customize a template for your business:

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

## About LocalWebBuilders

LocalWebBuilders specializes in creating beautiful, professional websites for local restaurants and food brands. Our templates are designed to help small businesses establish a strong online presence without the need for expensive custom development.

## License

MIT

