import { useState } from "react"
import { useRouter } from "next/router"
import Script from "next/script"


export function FacebookPixel(){
    const [loaded, setLoaded] = useState(false)
    const router = useRouter()
    console.log(router)

    useEffect(() => {
      if (!loaded) return
  
      pixel.pageview()
    }, [router, loaded])
  
    return (
      <div>
        <Script
          id="fb-pixel"
          src="/scripts/pixel.js"
          strategy="afterInteractive"
          onLoad={() => setLoaded(true)}
          data-pixel-id={pixel.FB_PIXEL_ID}
        />
      </div>
    )
}