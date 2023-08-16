import './styles/globals.scss'
import Script from "next/script";
import {Archivo} from 'next/font/google'

const archivo = Archivo({subsets: ['latin']})

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      <title>AI Startup Generator</title>
      <meta name='description' content='AI Startup Generator'/>

      {/*Google tag (gtag.js)*/}
      <Script
        async
        strategy={'beforeInteractive'}
        src="https://www.googletagmanager.com/gtag/js?id=G-83KT9CBG1C"
      />
      <Script
        id='google-analytics'
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
      
              gtag('config', 'G-83KT9CBG1C');
          `,
        }}
        strategy={'beforeInteractive'}
      />
      {/*Google tag (gtag.js)*/}
    </head>
    <body className={archivo.className}>{children}</body>
    </html>
  )
}
