import SocialLinks from "./SocialLinks";
import ContactInfo from "./ContactInfo";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

export default function ProfileCard() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="bg-black/50 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-800">
        {/* Header Section */}
        <div className="text-center p-6 relative">
          <div className="absolute top-4 right-4">
            <ThemeToggle />
          </div>
          
          {/* Logo/Avatar Section */}
          <Logo />

          {/* Profile Name */}
          <h1 className="text-4xl font-bold font-montserrat tracking-wider mb-2 text-white">BRAVEZM</h1>
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
        <div className="text-center p-6 text-gray-500 text-sm border-t border-gray-800">
          <p>© {new Date().getFullYear()} BRAVEZM. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
