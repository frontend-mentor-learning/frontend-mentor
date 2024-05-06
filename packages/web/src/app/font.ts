import {
  Inter,
  Work_Sans,
  Lexend_Deca,
  Big_Shoulders_Display,
  Roboto, // newsletter-signup
  Nunito_Sans, // countries
} from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const work_sans = Work_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const lexend_deca = Lexend_Deca({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})
export const big_shoulder_display = Big_Shoulders_Display({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
})
export const roboto = Roboto({
  weight: ['700', '400'],
  subsets: ['latin'],
  display: 'swap',
})

export const nunito_sans = Nunito_Sans({
  weight: ['300','600','800'],
  subsets: ['latin'],
  display: 'swap',
})