import { Footer, Navbar } from '@/components';
import SkillTreeCalculator from '@/components/SkillTreeCalculator';

export default async function Page() {
  
  return (
    <div className="min-h-screen min-w-full flex flex-col bg-gray-900">
      <Navbar />
      <SkillTreeCalculator />
      <Footer />
    </div>
  );
}