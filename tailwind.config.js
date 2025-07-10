// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // These paths tell Tailwind where to scan your code for class names
  // Ensure these paths correctly reflect your project structure
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // For Next.js App Router
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // For Next.js Pages Router (if you use it)
    './components/**/*.{js,ts,jsx,tsx,mdx}', // For components in a 'components' folder in the root
    './src/**/*.{js,ts,jsx,tsx,mdx}', // For files inside a 'src' directory
    // Add any other specific folders where you define/use Tailwind classes
  ],
  theme: {
    extend: {
      // Add your custom gridTemplateColumns here
      gridTemplateColumns: {
        'auto-fit-card-size': 'repeat(auto-fit, minmax(12rem, 1fr))',
      },
      // Add your custom colors here
      colors: {
        'background-default': '#FFFFFF',
        'brand-primary': '#4F46E5', // A custom indigo shade
        'brand-secondary': '#8B5CF6', // A custom purple shade
        'brand-accent': '#EC4899',   // A custom pink shade
        'custom-gray': {             // Example with shades
          DEFAULT: '#6B7280',
          light: '#D1D5DB',
          dark: '#374151',
        },
        'status-success': '#10B981', // Example semantic colors
        'status-error': '#EF4444',
      },
    },
  },
  plugins: [],
};