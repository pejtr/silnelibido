import { useRouter } from 'next/router';
import { useEffect, useState, useCallback } from 'react';
import * as fbq from '@/lib/fpixel';

export function useAffiliateLink(baseUrl: string) {
  // Safely access router, it might be null during build/SSR in some contexts
  let router;
  try {
    router = useRouter();
  } catch (e) {
    router = null;
  }

  const [affiliateUrl, setAffiliateUrl] = useState(baseUrl);

  useEffect(() => {
    if (!router || !router.isReady) return;

    const queryParams = router.query;
    const url = new URL(baseUrl);
    
    // Add all query parameters from the current page to the target URL
    Object.keys(queryParams).forEach(key => {
      const value = queryParams[key];
      if (value) {
        if (Array.isArray(value)) {
          value.forEach(v => url.searchParams.append(key, v));
        } else {
          url.searchParams.append(key, value);
        }
      }
    });

    setAffiliateUrl(url.toString());
  }, [baseUrl, router]);

  const trackClick = useCallback(() => {
    fbq.event('InitiateCheckout', {
      content_name: 'Affiliate Link Click',
      content_category: 'Affiliate',
      destination_url: affiliateUrl
    });
  }, [affiliateUrl]);

  return { url: affiliateUrl, trackClick };
}
