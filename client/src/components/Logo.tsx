export default function Logo() {
  return (
    <div className="mx-auto mb-6 mt-6 w-48 h-48 relative">
      <div className="w-full h-full rounded-full bg-gradient-to-r from-bravered to-bravered/80 p-1">
        <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
          <svg
            className="w-full h-full p-4"
            viewBox="0 0 244 244"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M122 244C189.438 244 244 189.438 244 122C244 54.5624 189.438 0 122 0C54.5624 0 0 54.5624 0 122C0 189.438 54.5624 244 122 244ZM122 228C180.601 228 228 180.601 228 122C228 63.3989 180.601 16 122 16C63.3989 16 16 63.3989 16 122C16 180.601 63.3989 228 122 228Z"
              fill="#FF0000"
            />
            <path 
              d="M174 122L90 80V164L174 122Z" 
              fill="#000000" 
              stroke="#FF0000" 
              strokeWidth="6"
            />
            <line 
              x1="56" 
              y1="46" 
              x2="188" 
              y2="182" 
              stroke="#FF0000" 
              strokeWidth="16" 
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
