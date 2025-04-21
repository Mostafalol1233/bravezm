import bravezmLogo from "../assets/bravezm_logo.png";

export default function Logo() {
  return (
    <div className="mx-auto mb-6 mt-6 w-48 h-48 relative">
      <div className="w-full h-full rounded-full bg-gradient-to-r from-bravered to-bravered/80 p-1">
        <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
          <img 
            src={bravezmLogo}
            alt="BRAVEZM Logo" 
            className="w-full h-full object-contain p-1"
          />
        </div>
      </div>
    </div>
  );
}
