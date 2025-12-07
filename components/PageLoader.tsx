"use client";

import { useEffect, useState } from "react";
import Router from "next/router";

export function PageLoader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) => (url !== Router.asPath) && setLoading(true);
    const handleComplete = () => setLoading(false);

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative flex flex-col items-center">
        {/* Brand Logo Animation */}
        <div className="w-16 h-16 mb-4 relative">
          <div className="absolute inset-0 border-4 border-slate-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-[#D32F2F] rounded-full border-t-transparent animate-spin"></div>
        </div>
        <span className="text-[#2A2A5A] font-bold text-sm animate-pulse">
          Načítám...
        </span>
      </div>
    </div>
  );
}
