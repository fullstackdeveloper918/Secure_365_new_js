"use client"
import "./globals.css";
import Script from 'next/script';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Nanotech Website - A Creative Portfolio Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Download the best Creative Portfolio HTML Template in 2024" />
        <meta name="author" content="ClaPat Studio" />
        <link rel="stylesheet" href="/css/content.css" /> 
        <link rel="stylesheet" href="/css/showcase.css" /> 
        <link rel="stylesheet" href="/css/portfolio.css" /> 
        <link rel="stylesheet" href="/css/shortcodes.css" /> 
        <link rel="stylesheet" href="/css/assets.css" /> 
        <meta property="og:image" content="http://clapat.ro/themes/nanotech/prez/01_preview.png" />
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/ico" href="favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,450,500,600,700" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        {/* <script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            // integrity="sha384-KJ3o2DKtIkvYIK4d3U1FLdlk5yo50E1TtWuxFjxySMMyyHg4kTRdoBw7hmBExIqt"
            crossOrigin="anonymous"
          ></script> */}


<Script src="/js/jquery.min.js"></Script>       
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></Script>
	<Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></Script>
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/Flip.min.js"></Script>    
    <Script src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'></Script>
	<Script src='https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js'></Script>
	<Script src='https://cdnjs.cloudflare.com/ajax/libs/smooth-scrollbar/8.4.0/smooth-scrollbar.js'></Script>
        <Script src="/js/clapat.js"></Script>
	<Script src="/js/plugins.js"></Script>
    <Script src="/js/pain.js"></Script>

    <Script src="/js/common.js"></Script>
    <Script src="/js/contact.js"></Script>
    <Script src="/js/scripts.js"></Script>
      </head>
      <body >
        {children}  {/* This renders the child content in your page */}
      </body>
    </html>
  );
}
