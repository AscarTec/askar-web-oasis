
# 🚀 Askar Software Solutions - Enterprise-Grade Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0+-purple)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4+-38B2AC)](https://tailwindcss.com/)

A professional, bilingual (English/Arabic) software solutions company website built with modern web technologies and enterprise-grade standards.

## ✨ Features

### 🎨 **Modern Design System**
- **Enterprise-grade visual identity** with professional color palette
- **Advanced typography** using Inter and Space Grotesk fonts
- **Consistent theming** with CSS custom properties and Tailwind CSS
- **Premium animations** and micro-interactions
- **Glass morphism** and gradient effects

### 🌐 **Internationalization**
- **Bilingual support** (English/Arabic) with RTL layout
- **Dynamic language switching** with persistent preferences
- **Culturally appropriate** layouts and typography

### 🎭 **Theme System**
- **Dark/Light mode** with smooth transitions
- **System preference detection** and manual override
- **Consistent theming** across all components

### 📱 **Responsive Design**
- **Mobile-first approach** with breakpoint optimization
- **Touch-friendly interfaces** for mobile devices
- **Adaptive layouts** for all screen sizes

### 🚀 **Performance & SEO**
- **Optimized loading** with code splitting and lazy loading
- **SEO-friendly** meta tags and structured data
- **Web Vitals optimization** for Google Core Web Vitals
- **Progressive enhancement** for better accessibility

### ♿ **Accessibility**
- **WCAG 2.1 AA compliance** with proper ARIA labels
- **Keyboard navigation** support
- **Screen reader optimization**
- **Focus management** and color contrast

### 🛡️ **Security & Best Practices**
- **Content Security Policy** headers
- **XSS protection** and security headers
- **Input validation** and sanitization
- **Error boundaries** for graceful error handling

## 🏗️ Tech Stack

### **Frontend Framework**
- [React 18.3.1](https://reactjs.org/) - Modern React with hooks and concurrent features
- [TypeScript 5.0+](https://www.typescriptlang.org/) - Type-safe development
- [Vite 5.0+](https://vitejs.dev/) - Lightning-fast build tool

### **Styling & UI**
- [Tailwind CSS 3.4+](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - High-quality component library
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icons

### **State Management**
- [React Context API](https://reactjs.org/docs/context.html) - Built-in state management
- [TanStack Query](https://tanstack.com/query) - Server state management

### **Routing & Navigation**
- [React Router DOM](https://reactrouter.com/) - Declarative routing

### **Development Tools**
- [ESLint](https://eslint.org/) - Code linting and quality
- [Prettier](https://prettier.io/) - Code formatting
- [TypeScript](https://www.typescriptlang.org/) - Static type checking

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.0 or higher
- **npm** 8.0 or higher (or **yarn**/**pnpm**)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/askar-solutions/website.git
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components (shadcn/ui)
│   ├── Navigation.tsx   # Main navigation component
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services showcase
│   ├── About.tsx        # About section
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer component
├── contexts/            # React contexts
│   ├── LanguageContext.tsx  # i18n context
│   └── ThemeContext.tsx     # Theme management
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/               # Page components
└── styles/              # Global styles
```

## 🎨 Design System

### **Color Palette**
```css
/* Primary Colors */
--primary: 221 83% 53%        /* Professional Blue */
--primary-hover: 221 83% 45%  /* Darker Blue */

/* Secondary Colors */
--secondary: 240 4.8% 95.9%   /* Light Gray */
--accent: 240 4.8% 95.9%      /* Accent Gray */

/* Semantic Colors */
--success: 142 76% 36%        /* Green */
--warning: 38 92% 50%         /* Amber */
--destructive: 0 84.2% 60.2%  /* Red */
--info: 199 89% 48%           /* Cyan */
```

### **Typography**
- **Headings**: Space Grotesk (Modern, Geometric)
- **Body Text**: Inter (Highly Readable)
- **Monospace**: JetBrains Mono (Code)

### **Spacing Scale**
- Based on 4px grid system
- Consistent spacing using Tailwind's spacing scale
- Custom spacing: 18 (4.5rem), 88 (22rem), 128 (32rem)

## 🌐 Internationalization

### **Supported Languages**
- **English (en)** - Default language
- **Arabic (ar)** - RTL layout support

### **Adding New Translations**
1. Update `src/contexts/LanguageContext.tsx`
2. Add new language keys to the translations object
3. Implement RTL styles if needed

```typescript
const translations = {
  en: { key: "English text" },
  ar: { key: "النص العربي" }
};
```

## 📊 Performance

### **Lighthouse Scores** (Target)
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### **Optimization Techniques**
- Code splitting with dynamic imports
- Image optimization and lazy loading
- Font loading optimization
- Bundle size monitoring
- Web Vitals optimization

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## 🚀 Deployment

### **Production Build**
```bash
npm run build
```

### **Deployment Options**
- **Vercel** (Recommended)
- **Netlify**
- **AWS S3 + CloudFront**
- **Google Cloud Storage**

### **Environment Variables**
```env
VITE_APP_TITLE=Askar Software Solutions
VITE_CONTACT_EMAIL=info@askar.com
VITE_ANALYTICS_ID=your-analytics-id
```

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### **Development Workflow**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Askar Software Solutions**
- **Email**: [info@askar.com](mailto:info@askar.com)
- **Phone**: +1 (555) 123-4567
- **Website**: [https://askarsolutions.com](https://askarsolutions.com)
- **LinkedIn**: [/company/askar-solutions](https://linkedin.com/company/askar-solutions)
- **Twitter**: [@askar_solutions](https://twitter.com/askar_solutions)

## 🙏 Acknowledgments

- [React Team](https://reactjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Vercel](https://vercel.com/) for the deployment platform
- [Open Source Community](https://opensource.org/) for the incredible tools and libraries

---

<div align="center">
  <strong>Built with ❤️ by Askar Software Solutions</strong>
</div>
