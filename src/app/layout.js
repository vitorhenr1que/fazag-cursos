
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
  title: 'INICIO | Faculdade Zacarias de Góes',
  description: 'Faculdade em Valença - BA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
      <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous"/>
      <Script id='gtm-google-tag'>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM}');`}</Script>
      </head>

      <body className={inter.className}>
          <Header/>
          {children}
          <FiveReasons/>
          <Slide/>
          <Courses/>
          
          <Script id='bootstrap-id' src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossOrigin="anonymous"></Script>
          <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM}" height="0" width="0" style="display:none;visibility:hidden`}></iframe></noscript>
        </body>
    </html>
  )
}
