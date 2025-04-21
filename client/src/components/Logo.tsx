import { useState, useEffect } from "react";

export default function Logo() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const logoUrl = "/image_1745270075762.png";

  useEffect(() => {
    const img = new Image();
    img.src = logoUrl;
    img.onload = () => {
      setLoaded(true);
    };
    img.onerror = (err) => {
      console.error("Error loading logo", err);
      // Fall back to loaded state anyway to show something
      setLoaded(true);
    };
  }, []);

  return (
    <div className="relative mx-auto mb-6 w-32 h-32 overflow-hidden">
      {loaded ? (
        <img 
          src={logoUrl} 
          alt="BRAVEZM Logo" 
          className="w-full h-full object-contain animate-pulse-slow"
          onError={(e) => {
            // Fallback styling if image fails to load
            e.currentTarget.style.display = 'none';
          }}
        />
      ) : (
        <div className="w-full h-full bg-red-900/30 rounded-full animate-pulse"></div>
      )}
    </div>
  );
}