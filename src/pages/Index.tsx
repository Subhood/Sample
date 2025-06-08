
import { useAuth } from '@/hooks/useAuth';
import { Auth } from '@/components/Auth';
import { ChatInterface } from '@/components/ChatInterface';

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return user ? <ChatInterface /> : <Auth />;
};

export default Index;
