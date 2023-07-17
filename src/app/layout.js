
import { Courses } from './components/Courses'
import { FiveReasons } from './components/FiveReasons'
import { Header } from './components/Header/Header'
import Script from 'next/script'
import './globals.scss'
import { Inter, Oswald } from 'next/font/google'
import { Slide } from './components/Slide'
import Image from 'next/image'

export const inter = Inter({ weight: ['400','500','600','700','800'], subsets: ['latin'] })

export const oswald = Oswald({
  weight: ['600','700',],
  subsets: ['latin']
})

export const metadata = {
  title: 'FAZAG - Faculdade Zacarias de Góes',
  description: 'Faculdade em Valença - BA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous"/>
      </head>



<Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_API}`}></Script>
<Script id='google-tag-id'>
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_API}', { 'debug_mode': true });
  gtag('event', 'click_whatsapp', { 'debug_mode': true });
  `}
</Script>
      <body className={inter.className}>
          <Header/>
          {children}
          <FiveReasons/>
          <Slide/>
          <Courses/>
          
          <Script id='bootstrap-id' src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossOrigin="anonymous"></Script>
          
        </body>
    </html>
  )
}
