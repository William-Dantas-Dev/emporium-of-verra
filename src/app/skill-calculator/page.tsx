"use client";
import { Footer, Navbar } from '@/components';
import SkillTree from '@/components/SkillTree';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 overflow-hidden">
      <Navbar />
      <SkillTree />
      <Footer />
    </div>
  );
}
