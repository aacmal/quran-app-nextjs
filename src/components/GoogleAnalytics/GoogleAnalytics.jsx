import Script from 'next/script';
import React from 'react'

const IS_PRODUCTION = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';


const GoogleAnalytics = () => {
  if(!IS_PRODUCTION){
    return <></>
  }

  return (
    <>
        <Script
            src='https://www.googletagmanager.com/gtag/js?id=G-XXBD1VHL22'
            strategy='lazyOnLoad'
        />
        <Script>
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-XXBD1VHL22');
            `}
        </Script>
    </>
  )
}

export default GoogleAnalytics