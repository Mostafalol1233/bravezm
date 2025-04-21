import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center py-8 bg-cover bg-center bg-fixed"
      style={{
        backgroundColor: '#000',
        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.9))',
      }}
    >
      <ProfileCard />
    </div>
  );
}
