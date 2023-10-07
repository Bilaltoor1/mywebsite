/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode:'class',
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
          colors:{
              'text-color': 'rgb(var(--color-text)/ <alpha-value>)',
              'background-color': 'rgb(var(--color-background)/ <alpha-value>)',
              'bg-main': 'rgb(var(--color-main-bg)/ <alpha-value>)',
              'heading': 'rgb(var(--color-heading)/ <alpha-value>)',
              'paragraph': 'rgb(var(--color-paragraph)/ <alpha-value>)',
              'green-color': 'rgb(var(--color-green)/ <alpha-value>)',
          },
          screens:{
              'xs': '350px',
              'mb': '400px',
              'sm': '640px',
              'md': '768px',
              'lg': '1024px',
              'xl': '1280px',
              '2xl': '1440px',
          },
          fontSize:{
              h1:'27px',
              h2:'24px',
              h3:'21px',
              h4:'19px',
              h5:'17px',
              h6:'15px',
              p:'15px'
          },
          fontFamily:{
              Noto : ['Noto Sans' , 'sans-serif'],
          }
      },
    },
    plugins: [],
  }