/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nexus: {
          bg: '#0A0A1A',
          surface: '#111127',
          'surface-light': '#1A1A3E',
          cyan: '#00F0FF',
          blue: '#3B82F6',
          purple: '#8B5CF6',
          'cyan-muted': 'rgba(0, 240, 255, 0.15)',
          'blue-muted': 'rgba(59, 130, 246, 0.15)',
          glass: 'rgba(17, 17, 39, 0.7)',
          'glass-light': 'rgba(17, 17, 39, 0.4)',
          border: 'rgba(0, 240, 255, 0.1)',
          'border-hover': 'rgba(0, 240, 255, 0.3)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 240, 255, 0.12), rgba(59, 130, 246, 0.05), transparent)',
        'card-glow': 'radial-gradient(ellipse at 50% 0%, rgba(0, 240, 255, 0.08), transparent 70%)',
        'cyan-gradient': 'linear-gradient(135deg, #00F0FF, #3B82F6)',
        'purple-gradient': 'linear-gradient(135deg, #8B5CF6, #3B82F6)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, rgba(0, 240, 255, 0.08) 0%, transparent 50%), radial-gradient(at 80% 80%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0, 240, 255, 0.15)',
        'glow': '0 0 30px rgba(0, 240, 255, 0.2)',
        'glow-lg': '0 0 60px rgba(0, 240, 255, 0.25)',
        'glow-cyan': '0 0 40px rgba(0, 240, 255, 0.3)',
        'glow-blue': '0 0 40px rgba(59, 130, 246, 0.3)',
        'glow-purple': '0 0 40px rgba(139, 92, 246, 0.3)',
        'card': '0 4px 30px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 240, 255, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'particle-drift': 'particle-drift 20s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'particle-drift': {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(10px) translateY(-30px)' },
          '50%': { transform: 'translateX(-5px) translateY(-15px)' },
          '75%': { transform: 'translateX(15px) translateY(-40px)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
