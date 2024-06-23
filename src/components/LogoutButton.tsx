"use client";
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const LogoutButton = () => {

  const router = useRouter();
  async function logout() {
    await signOut({
      redirect: false
    })

    router.replace("/login");
  }
  return (
    <button
        className={`py-3 px-6
        text-white bg-blue-600 hover:bg-blue-700
          text-sm font-bold rounded-full transition duration-200 whitespace-nowrap`}
        onClick={logout}
      >
        {"Logout"}
      </button>
  )
}

export default LogoutButton
