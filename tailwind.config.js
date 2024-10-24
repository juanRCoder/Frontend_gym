/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
			fontFamily: {
				'oswald': ['Oswald', 'sans-serif'],
			},
			// keyframes y animation del acordeon
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
			'fadeIn': {
				'0%': { opacity: 0 },
				'100%': { opacity: 1 },
			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
			'fadeIn': 'fadeIn 0.2s ease-in-out',
  		},
  		colors: {
  			header: 'var(--header)',
  			dark: 'var(--dark)',
  			lightGray: 'var(--light-gray)',
  			darkMid: 'var(--dark-mid)',
  			grayMid: 'var(--gray-mid)',
  			gray: 'var(--gray)',
  			white: 'var(--white)',
  			yellow: 'var(--yellow)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
			colorYellow: "#f4af00",
			colorGreen: "#23c43d",
  		},
  		screens: {
  			xs: '400px',
  			sm: '640px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1280px',
  			'2xl': '1536px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
};
