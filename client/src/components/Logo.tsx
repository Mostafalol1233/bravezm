import { useState, useEffect } from "react";

export default function Logo() {
  const [logoSrc, setLogoSrc] = useState<string>('/img/bravezm_bg.png');
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.src = logoSrc;
    img.onload = () => {
      setLoaded(true);
    };
    img.onerror = () => {
      console.error("Error loading logo");
    };
  }, [logoSrc]);

  return (
    <div className="relative mx-auto mb-6 w-32 h-32 overflow-hidden">
      {loaded ? (
        <img 
          src={logoSrc} 
          alt="BRAVEZM Logo" 
          className="w-full h-full object-contain animate-pulse-slow"
        />
      ) : (
        <div className="w-full h-full bg-gray-800 rounded-full animate-pulse"></div>
      )}
    </div>
  );
}