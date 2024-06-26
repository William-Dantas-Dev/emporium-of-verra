import { Footer, Navbar, UnderConstruction } from '@/components';

export default function Home() {
  return (
     <>
      <div className='min-h-screen flex flex-col bg-gray-900'>
        <Navbar />
        <UnderConstruction page={"Home Page"} />
        <Footer />
      </div>
    </>
  );
}
