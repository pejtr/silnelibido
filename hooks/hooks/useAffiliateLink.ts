import { useState, useEffect } from 'react';

export function useAffiliateLink(defaultUrl: string) {
  const [affiliateUrl, setAffiliateUrl] = useState(defaultUrl);

  useEffect(() => {
    // Check for affiliate ID in URL params or localStorage
    const params = new URLSearchParams(window.location.search);
    const affId = params.get('a_aid') || localStorage.getItem('a_aid');

    if (affId) {
      // Store in localStorage for future visits
      localStorage.setItem('a_aid', affId);
      
      // Append affiliate ID to the URL
      const separator = defaultUrl.includes('?') ? '&' : '?';
      setAffiliateUrl(`${defaultUrl}${separator}a_aid=${affId}`);
    }
  }, [defaultUrl]);

  const trackClick = () => {
    // Optional: Add tracking logic here (e.g., Google Analytics event)
    console.log('Affiliate link clicked:', affiliateUrl);
  };

  return { url: affiliateUrl, trackClick };
}
