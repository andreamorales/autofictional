/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		fontFamily: {
  			sans: ['Playfair Display', 'serif'],
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
  			// Grayscale system
  			gray: {
  				0: 'hsl(var(--gray-0))',
  				20: 'hsl(var(--gray-20))',
  				40: 'hsl(var(--gray-40))',
  				60: 'hsl(var(--gray-60))',
  				80: 'hsl(var(--gray-80))',
  				100: 'hsl(var(--gray-100))',
  			},
  			// Core color variants - 0 to 100 in steps of 10
  			red: {
  				0: 'hsl(var(--red-0))',
  				10: 'hsl(var(--red-10))',
  				20: 'hsl(var(--red-20))',
  				30: 'hsl(var(--red-30))',
  				40: 'hsl(var(--red-40))',
  				50: 'hsl(var(--red-50))',
  				60: 'hsl(var(--red-60))',
  				70: 'hsl(var(--red-70))',
  				80: 'hsl(var(--red-80))',
  				90: 'hsl(var(--red-90))',
  				100: 'hsl(var(--red-100))',
  			},
  			green: {
  				0: 'hsl(var(--green-0))',
  				10: 'hsl(var(--green-10))',
  				20: 'hsl(var(--green-20))',
  				30: 'hsl(var(--green-30))',
  				40: 'hsl(var(--green-40))',
  				50: 'hsl(var(--green-50))',
  				60: 'hsl(var(--green-60))',
  				70: 'hsl(var(--green-70))',
  				80: 'hsl(var(--green-80))',
  				90: 'hsl(var(--green-90))',
  				100: 'hsl(var(--green-100))',
  			},
  			orange: {
  				0: 'hsl(var(--orange-0))',
  				10: 'hsl(var(--orange-10))',
  				20: 'hsl(var(--orange-20))',
  				30: 'hsl(var(--orange-30))',
  				40: 'hsl(var(--orange-40))',
  				50: 'hsl(var(--orange-50))',
  				60: 'hsl(var(--orange-60))',
  				70: 'hsl(var(--orange-70))',
  				80: 'hsl(var(--orange-80))',
  				90: 'hsl(var(--orange-90))',
  				100: 'hsl(var(--orange-100))',
  			},
  			yellow: {
  				0: 'hsl(var(--yellow-0))',
  				10: 'hsl(var(--yellow-10))',
  				20: 'hsl(var(--yellow-20))',
  				30: 'hsl(var(--yellow-30))',
  				40: 'hsl(var(--yellow-40))',
  				50: 'hsl(var(--yellow-50))',
  				60: 'hsl(var(--yellow-60))',
  				70: 'hsl(var(--yellow-70))',
  				80: 'hsl(var(--yellow-80))',
  				90: 'hsl(var(--yellow-90))',
  				100: 'hsl(var(--yellow-100))',
  			},
  			blue: {
  				0: 'hsl(var(--blue-0))',
  				10: 'hsl(var(--blue-10))',
  				20: 'hsl(var(--blue-20))',
  				30: 'hsl(var(--blue-30))',
  				40: 'hsl(var(--blue-40))',
  				50: 'hsl(var(--blue-50))',
  				60: 'hsl(var(--blue-60))',
  				70: 'hsl(var(--blue-70))',
  				80: 'hsl(var(--blue-80))',
  				90: 'hsl(var(--blue-90))',
  				100: 'hsl(var(--blue-100))',
  			},
  			// Semantic colors integrated with Tailwind
  			semantic: {
  				background: 'hsl(var(--semantic-background))',
  				foreground: 'hsl(var(--semantic-foreground))',
  				error: 'hsl(var(--semantic-error))',
  				'error-foreground': 'hsl(var(--semantic-error-foreground))',
  				'error-dark': 'hsl(var(--semantic-error-dark))',
  				success: 'hsl(var(--semantic-success))',
  				'success-foreground': 'hsl(var(--semantic-success-foreground))',
  				'success-dark': 'hsl(var(--semantic-success-dark))',
  				precaution: 'hsl(var(--semantic-precaution))',
  				'precaution-foreground': 'hsl(var(--semantic-precaution-foreground))',
  				'precaution-dark': 'hsl(var(--semantic-precaution-dark))',
  				alert: 'hsl(var(--semantic-alert))',
  				'alert-foreground': 'hsl(var(--semantic-alert-foreground))',
  				'alert-dark': 'hsl(var(--semantic-alert-dark))',
  				info: 'hsl(var(--semantic-info))',
  				'info-foreground': 'hsl(var(--semantic-info-foreground))',
  				'info-dark': 'hsl(var(--semantic-info-dark))',
  			}
  		},
  		boxShadow: {
  			sm: '0 1px 2px 0 rgba(0, 0, 0, 0.15)',
  			DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  			md: '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.15)',
  			lg: '0 10px 15px -3px rgba(0, 0, 0, 0.25), 0 4px 6px -4px rgba(0, 0, 0, 0.15)',
  			xl: '0 20px 25px -5px rgba(0, 0, 0, 0.25), 0 8px 10px -6px rgba(0, 0, 0, 0.15)',
  			'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
  		},
  		spacing: {
  			// Semantic spacing on 4px grid - automatically works with p-*, m-*, gap-*, etc.
  			'xs': 'var(--p-xs)',   // 4px
  			's': 'var(--p-s)',     // 8px
  			'm': 'var(--p-m)',     // 12px
  			'l': 'var(--p-l)',     // 16px
  			'xl': 'var(--p-xl)',   // 20px
  			'2xl': 'var(--p-2xl)', // 24px
  			'3xl': 'var(--p-3xl)', // 32px
  			'4xl': 'var(--p-4xl)', // 40px
  			'5xl': 'var(--p-5xl)', // 48px
  			'6xl': 'var(--p-6xl)', // 64px
  		},
  		fontWeight: {
  			// Semantic font weights using variable font
  			'body': '400',      // Normal weight for body text (non-clickable)
  			'medium': '500',    // Medium weight
  			'semibold': '600',  // Semibold
  			'bold': '700',      // Bold for clickable content
  			'extrabold': '800', // Extra bold for emphasis
  		},
  		borderRadius: {
  			lg: '0',
  			md: '0',
  			sm: '0',
  			DEFAULT: '0',
  			none: '0',
  			full: '0'
  		},
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
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      addUtilities({
        '.font-body': {
          'font-weight': '400',
        },
        '.font-clickable': {
          'font-weight': '700',
        },
        '.text-clickable': {
          'font-weight': '700',
        },
      })
    },
  ],
}

