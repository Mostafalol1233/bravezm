import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function ContactInfo() {
  const { toast } = useToast();
  const [showCopySuccess, setShowCopySuccess] = useState(false);
  const whatsappNumber = "+20 1156522916";

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(whatsappNumber)
      .then(() => {
        setShowCopySuccess(true);
        toast({
          title: "Success",
          description: "WhatsApp number copied to clipboard!",
          variant: "success",
        });
        
        setTimeout(() => {
          setShowCopySuccess(false);
        }, 3000);
      })
      .catch((err) => {
        toast({
          title: "Error",
          description: "Failed to copy number to clipboard",
          variant: "destructive",
        });
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="p-6 pt-0">
      <div className="max-w-lg mx-auto">
        <h2 className="text-xl font-montserrat font-bold mb-4 text-center">Contact Information</h2>
        
        {/* WhatsApp Number */}
        <div className="bg-black/30 rounded-lg p-4 flex items-center justify-between mb-6">
          <div className="flex items-center">
            <i className="fab fa-whatsapp text-green-500 text-2xl mr-3"></i>
            <span id="whatsappNumber" className="font-medium text-white">{whatsappNumber}</span>
          </div>
          <Button 
            onClick={handleCopyNumber}
            className="px-3 py-1 rounded-md bg-green-600 hover:bg-green-700 transition text-sm"
          >
            Copy
          </Button>
        </div>
        
        {/* Contact Success Message */}
        {showCopySuccess && (
          <div className="bg-green-500/20 border border-green-500 text-green-400 p-3 rounded-lg text-center text-sm mt-4">
            WhatsApp number copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
}
