"use client";
import { useState } from 'react';
import { usePathname } from 'next/navigation'
import { EllipsisVerticalIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import { CustomButton, LoginForm, NavLink, RegisterForm } from './';
import { Menus } from '@/constants'

const Navbar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoginForm, setLoginForm] = useState(true);

  const toggleModal = () => setModalOpen(!isModalOpen);
  const switchToRegister = () => setLoginForm(false);
  const switchToLogin = () => setLoginForm(true);

  return (
    <nav className="bg-gray-900 sm:px-10 px-2">
      <div className="max-w-full">
        <div className="flex items-center justify-between h-16">
          <a href="" className="text-white text-xl">Emporium Of Verra</a>
          <div className="hidden lg:block">
            <ul className={`flex lg:flex-row flex-col xl:items-center`}>
              {Menus.map((menu) => (
                <div className='flex items-center tracking-widest' key={menu.id}>
                  <li><NavLink title={menu.title} active={menu.src === pathname} src={menu.src} mobile={false}/></li>
                  {menu.stroke && <li className='h-4 w-4 text-white mx-2'> <EllipsisVerticalIcon /> </li>}
                </div>
              ))}
            </ul>
          </div>
          <div className="flex items-center">
            <div className='hidden sm:block'>
              <CustomButton title={"Sign In"} href={'/login'}/>
            </div>
            <button
              className='lg:hidden inline-flex items-center justify-center p-2 ml-3 rounded-md text-white border border-white'
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <XMarkIcon  className="h-6 w-6"/>
              ) :
                <Bars3Icon  className="h-6 w-6"/>
              }
            </button>
          </div>
        </div>
      </div>
        {open && (
          <div className="lg:hidden">
            <div className="pt-2 pb-3">
              {Menus.map((menu) => (
                <NavLink key={menu.id} title={menu.title} active={menu.src === pathname} src={menu.src} mobile={true}/>
              ))}
              <div className='block sm:hidden pt-3'>
                <CustomButton title={"Sign In"} href={'/login'}/>
              </div>
            </div>
          </div>
        )}
      </nav>
  )
}

export default Navbar
