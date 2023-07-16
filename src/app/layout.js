
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
      <script>
{`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '582323160772048');
fbq('track', 'PageView');`}
</script>
<noscript><Image height={1} width={1} className=".img"
src="https://www.facebook.com/tr?id=582323160772048&ev=PageView&noscript=1"
/></noscript>
      </head>



<Script async src="https://www.googletagmanager.com/gtag/js?id=G-Q92YDDZNWQ"></Script>
<Script>
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Q92YDDZNWQ');`}
</Script>
      <body className={inter.className}>
          <Header/>
          {children}
          <FiveReasons/>
          <Slide/>
          <Courses/>
          
          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossOrigin="anonymous"></Script>
          
        </body>
    </html>
  )
}
