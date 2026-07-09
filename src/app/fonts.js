import { Inter, Oswald } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({ weight: ['400','500','600','700','800'], subsets: ['latin'] })

export const oswald = Oswald({
  weight: ['600','700'],
  subsets: ['latin']
})

export const nerSans = localFont({
  src: '../../public/fonts/nersans-one-regular.otf',
  display: 'swap',
})

export const ppEditorialItalic = localFont({
  src: '../../public/fonts/pp-editorial-new-italic.otf',
  display: 'swap',
})

export const ppEditorialUltraItalic = localFont({
  src: '../../public/fonts/pp-editorial-new-ultrabold-italic.otf',
  display: 'swap',
})
