import { socialLinks } from "@/lib/constants";

export default function SocialLinks() {
  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="p-6 pt-2">
      <h2 className="text-xl font-montserrat font-bold mb-4 text-center">Connect With Us</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
        {socialLinks.map((link) => (
          <a 
            key={link.name}
            href={link.url}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(link.url);
            }}
            className={`flex items-center px-4 py-3 rounded-lg transition-all 
                      bg-gradient-to-r ${link.gradient}
                      shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
            aria-label={`Visit BRAVEZM on ${link.name}`}
          >
            <i className={`${link.icon} w-8 h-8 flex items-center justify-center text-xl`}></i>
            <span className="ml-3 font-medium">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
