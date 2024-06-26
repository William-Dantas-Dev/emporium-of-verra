import { Footer, Navbar, UnderConstruction } from '@/components';
import LogoutButton from '@/components/LogoutButton';
import { nextAuthOptions } from '@/utils/AuthOptions';
import { getServerSession } from 'next-auth';
import { signOut } from 'next-auth/react';

export default async function Page() {
  const session = await getServerSession(nextAuthOptions);
  async function logout() {
    await signOut({
      redirect: false
    })
  }
  return (
    <div className="min-h-screen min-w-full flex flex-col bg-gray-900">
      <Navbar />
      <UnderConstruction page={`${session?.user.nick}`}/>
      <LogoutButton />
      <Footer />
    </div>
  );
}