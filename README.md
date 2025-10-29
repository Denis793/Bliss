# Bliss — React Digital Agency Landing Page

Modern, responsive landing page template for digital agencies, creative studios, and service-based businesses — built with React and SCSS Modules, featuring modern animations, mobile-first design, and modular component architecture.

---

## 📸 Preview

<p align="center">
  <a href="https://bliss-black.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/View%20Live%20Demo-Coming%20Soon-blue?style=for-the-badge" alt="View Project">
  </a>
</p>

---

## 🖼️ Screenshot

<div align="center">
  <img src="https://github.com/Denis793/Bliss/blob/main/src/assets/img/screens/Screenshot-1-Bliss.png" alt="Blaze Screenshot" width="100%" />
  <img src="https://github.com/Denis793/Bliss/blob/main/src/assets/img/screens/Screenshot-2-Bliss.png" alt="Blaze Screenshot" width="100%" />
  <img src="https://github.com/Denis793/Bliss/blob/main/src/assets/img/screens/Screenshot-3-Bliss.png" alt="Blaze Screenshot" width="100%" />
</div>

---

## ✨ Features

### 🎯 **Core Sections**

- **Sticky Header** with responsive navigation and mobile hamburger menu
- **Hero Section** with animated call-to-action and engaging visuals
- **Client Logos** showcase for brand credibility
- **About Section** with interactive FAQ accordion and smooth animations
- **Services Grid** displaying core offerings with colorful icon boxes
- **Counter Section** with animated number counting and intersection observer
- **Call-to-Action** section with conversion-focused design
- **Footer** with navigation links and company information

### 🎨 **Design & UX**

- Mobile-first responsive design with clean breakpoints
- Smooth scroll animations and micro-interactions
- FAQ accordion with text expansion and icon rotation animations
- Scroll-to-top button with smooth scrolling behavior
- Modern preloader with spinner animation
- Consistent color system with accent color variants

### ⚡ **Performance & Accessibility**

- Component-based modular architecture
- SCSS Modules for scoped styling without conflicts
- Optimized assets and lazy loading ready
- Semantic HTML5 structure for better SEO
- Accessible navigation and interactive elements

---

## 🛠 Technologies Used

- **React 18** — Modern component-based UI framework
- **SCSS Modules** — Scoped styling with CSS variables and mixins
- **Vite** — Lightning-fast development server and build tool
- **clsx** — Utility for conditional CSS classes
- **React CountUp** — Smooth number counting animations
- **Vector Icons** — Custom Unicode symbols for lightweight icons

---

## 📁 Project Structure

```
src/
├── shared/
│   ├── layout/
│   │   ├── Header/          # Navigation with mobile menu
│   │   └── Footer/          # Site footer
│   ├── ui/
│   │   ├── Button/          # Reusable button component
│   │   ├── Preloader/       # Loading spinner
│   │   └── ScrollToTop/     # Scroll to top functionality
│   └── styles/
│       ├── _variables.scss  # CSS custom properties
│       ├── _global.scss     # Global styles
│       └── _animations.scss # Keyframe animations
├── widgets/
│   ├── Hero/                # Landing hero section
│   ├── About/               # About with FAQ accordion
│   ├── Services/            # Services grid
│   ├── Counter/             # Animated counters
│   ├── CTA/                 # Call-to-action
│   └── ClientLogo/          # Client logos showcase
└── assets/
    └── img/                 # Optimized images and SVGs
```

---

## ⚙️ Setup & Installation

**1. Clone the repository:**

```bash
git clone <repository-url>
cd bliss
```

**2. Install dependencies:**

```bash
npm install
# or
yarn install
```

**3. Start development server:**

```bash
npm run dev
# or
yarn dev
```

**4. Build for production:**

```bash
npm run build
npm run preview
```

---

## 🎨 Styling System

### **CSS Architecture**

- **SCSS Modules** for component-scoped styles
- **CSS Custom Properties** for theme variables
- **Mobile-first** responsive design approach
- **BEM-inspired** naming conventions

### **Key Features**

- Centralized color palette with accent variants
- Consistent spacing scale using CSS variables
- Responsive breakpoints: `840px` (tablet) and `1320px` (desktop)
- Smooth transitions and hover effects

### **Animation System**

- `fadeInUp` and `fadeInLeft` keyframe animations
- FAQ accordion with smooth expand/collapse
- Icon rotation and scaling on interactions
- Intersection Observer for scroll-triggered animations

---

## 🚀 Key Components

### **Button Component**

- Unified button system with variants
- Support for both `<button>` and `<a>` elements
- Proper accessibility attributes
- Consistent styling across the application

### **FAQ Accordion**

- Smooth content expansion with max-height transitions
- Icon rotation animation (+ to ×)
- Text slide-in effects with opacity and transform
- Accessible keyboard navigation

### **Mobile Menu**

- Overlay with scroll blocking
- Smooth slide-in animation
- Outside click and Escape key handling
- Focus management for accessibility

---

## 📱 Responsive Design

- **Mobile (< 840px)**: Single column layout, stacked navigation
- **Tablet (840px - 1320px)**: Two-column layouts, optimized spacing
- **Desktop (> 1320px)**: Full multi-column layouts, maximum content width

---

## 🎯 Performance Optimizations

- **Component Lazy Loading** ready structure
- **Optimized Images** using modern formats
- **CSS Variables** for runtime theme switching
- **Minimal JavaScript** for core interactions
- **Modern SCSS** with `@use` instead of `@import`

---

## 👨‍💻 Author

**Denys Shevchenko** — Full-stack developer specializing in modern React applications, component architecture, and responsive design systems.

---

## 🔧 Customization

The project is built with modularity in mind:

- **Colors**: Modify CSS variables in `_variables.scss`
- **Spacing**: Adjust spacing scale in variables
- **Components**: Each widget is self-contained and customizable
- **Animations**: Centralized in `_animations.scss`

---

## 📄 License

This project is open-source and available under the MIT License.

---

<div align="center">
  <p>Made with ❤️ using React and SCSS</p>
  <p>Perfect for agencies, studios, and service businesses</p>
</div>
