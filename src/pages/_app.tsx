import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import React from 'react'
// import { HubspotProvider } from '@aaronhayes/react-use-hubspot-form'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <HubspotProvider>
      <Component {...pageProps} />
    // </HubspotProvider>
  )
}
export default MyApp
