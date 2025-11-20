# Enhanced StaggeredMenu Portfolio

A beautiful, animated portfolio with a sophisticated staggered menu component featuring social icons and smooth GSAP animations.

## Features

### StaggeredMenu Component
- ✨ **Smooth GSAP Animations**: Fluid staggered entrance animations for menu layers
- 🎨 **Customizable Colors**: Multiple background color layers with customizable palette
- 📱 **Fully Responsive**: Adapts perfectly to all screen sizes
- 🔄 **Interactive Menu Toggle**: Smooth icon rotation and text cycling animations
- 📍 **Flexible Positioning**: Left or right side positioning
- 🎯 **Accessibility**: Full ARIA support and keyboard navigation

### Enhanced Social Icons
- 📱 **Built-in Icon Library**: GitHub, LinkedIn, Twitter, Instagram, Dribbble, Behance, CodePen
- ✨ **Hover Effects**: Beautiful hover animations with color transitions
- 🎨 **Themed Styling**: Icons that match your brand colors
- 🔗 **External Links**: Proper target="_blank" and security attributes

### Portfolio Features
- 🌈 **Gradient Backgrounds**: Modern gradient design with blue to purple theme
- 📊 **Professional Layout**: Clean, modern portfolio structure
- ⚡ **Fast Performance**: Optimized with Next.js 16 and Turbopack
- 🎨 **Custom Logo**: SVG logo with clean, modern design

## Component Props

### StaggeredMenu Props
```typescript
interface StaggeredMenuProps {
  position?: 'left' | 'right';           // Menu position
  colors?: string[];                     // Background color layers
  items?: StaggeredMenuItem[];           // Navigation items
  socialItems?: StaggeredMenuSocialItem[]; // Social media links
  displaySocials?: boolean;              // Show/hide social section
  displayItemNumbering?: boolean;        // Show item numbers
  className?: string;                    // Additional CSS classes
  logoUrl?: string;                      // Logo image URL
  menuButtonColor?: string;              // Button color when closed
  openMenuButtonColor?: string;          // Button color when open
  accentColor?: string;                  // Accent color for highlights
  isFixed: boolean;                      // Fixed positioning
  changeMenuColorOnOpen?: boolean;       // Color change on menu open
}
```

### Menu Item Structure
```typescript
interface StaggeredMenuItem {
  label: string;    // Display text
  ariaLabel: string; // Accessibility label
  link: string;     // Navigation URL
}

interface StaggeredMenuSocialItem {
  label: string;    // Social platform name (GitHub, LinkedIn, etc.)
  link: string;     // Social profile URL
}
```

## Social Icons Supported

The component automatically renders appropriate icons for:
- GitHub
- LinkedIn
- Twitter
- Instagram
- Dribbble
- Behance
- CodePen

Icons are automatically selected based on the `label` prop in social items.

## Animations

### Menu Opening Sequence
1. **Layer Animation**: Staggered entrance of background layers (0.07s intervals)
2. **Panel Slide**: Main panel slides in with power4.out easing
3. **Item Animation**: Menu items animate in with rotation and position changes
4. **Social Animation**: Social section fades in with staggered link animations

### Interactive Elements
- **Menu Toggle**: Icon rotation with cross formation
- **Text Cycling**: Smooth text transition between "Menu" and "Close"
- **Hover Effects**: Item scaling and skew transformations
- **Color Transitions**: Smooth color changes on menu state

## Responsive Design

### Breakpoints
- **Desktop (>1024px)**: Full-width menu panel
- **Tablet (640px-1024px)**: Full-screen overlay with adjusted font sizes
- **Mobile (<640px)**: Optimized padding and smaller text
- **Small Mobile (<480px)**: Compact design with reduced spacing

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Colors
Customize the menu colors by modifying the `colors` prop:
```jsx
colors={['#1e293b', '#0f172a', '#334155']} // Dark theme
colors={['#fef3c7', '#fbbf24', '#f59e0b']} // Golden theme
```

### Social Links
Add your social media profiles:
```jsx
socialItems={[
  { label: "GitHub", link: "https://github.com/yourusername" },
  { label: "LinkedIn", link: "https://linkedin.com/in/yourusername" },
  // Add more social profiles
]}
```

### Menu Items
Configure navigation:
```jsx
items={[
  { label: "Home", link: "/", ariaLabel: "Go to Home page" },
  { label: "Projects", link: "/projects", ariaLabel: "View my projects" },
  // Add more menu items
]}
```

## Performance

- **GSAP Animations**: Hardware-accelerated transforms for 60fps animations
- **Lazy Loading**: Components load only when needed
- **CSS Optimization**: Minimal CSS with scoped styles
- **Bundle Size**: Optimized for fast loading

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Full accessibility support
- Keyboard navigation compatible

---

Built with ❤️ using Next.js, TypeScript, GSAP, and Tailwind CSS