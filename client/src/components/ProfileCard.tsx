import SocialLinks from "./SocialLinks";
import ContactInfo from "./ContactInfo";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

export default function ProfileCard() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="bg-black/80 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-red-800">
        {/* Header Section */}
        <div className="text-center p-6 relative">
          <div className="absolute top-4 right-4">
            <ThemeToggle />
          </div>
          
          {/* Logo/Avatar Section */}
          <Logo />

          {/* Profile Name */}
          <h1 className="text-4xl font-bold font-montserrat tracking-wider mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">BRAVEZM</h1>
          <p className="text-gray-300 mb-4">Gaming & Content Creation</p>
          
          {/* Description */}
          <div className="max-w-lg mx-auto px-4">
            <p className="text-gray-400">
              Join the BRAVEZM community for gaming content, live streams, and more. 
              Follow us on our social platforms to stay updated with the latest videos and events.
            </p>
          </div>
        </div>

        {/* Social Links Section */}
        <SocialLinks />

        {/* Contact Information */}
        <ContactInfo />
        
        {/* Footer */}
        <div className="text-center p-6 text-gray-500 text-sm border-t border-red-900/30">
          <p>© {new Date().getFullYear()} BRAVEZM. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
