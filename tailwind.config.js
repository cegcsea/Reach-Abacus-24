/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... other configurations
  purge: {
    content: [
      // ... other paths
      './src/**/*.{js,jsx,ts,tsx}',
    ],
    safelist: [
      'hidden', 'block', 'sm:hidden', 'sm:block', 'px-2', 'pb-3', 'pt-2',
      'space-y-1', 'sm:ml-6', 'sm:static', 'sm:inset-auto', 'sm:pr-0',
      'bg-gray-900', 'bg-white', 'text-white', 'text-gray-300', 'hover:bg-gray-700', 'hover:text-white',
      'rounded-md', 'px-3', 'py-2', 'text-sm', 'font-medium',
      // Add any other class names used in dynamic components here
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Mono', 'monospace'],
      },
    },
  },
};
