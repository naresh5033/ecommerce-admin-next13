import { useEffect, useState } from "react";

// so we can safely render the window obj, its a bit tricky because lotta stuff in next js is ssr, and on the server the window obj doesn't exist. which is only available in the browser
export const useOrigin = () => {
  const [mounted, setMounted] = useState(false);
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return ''
  }

  return origin; //this hook we can use it in the settings form 
}; //this window location (url) will be is gon be in the env var in our form(setting)
