import { Syne, Poppins } from 'next/font/google'

export const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
})

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600'],
})
