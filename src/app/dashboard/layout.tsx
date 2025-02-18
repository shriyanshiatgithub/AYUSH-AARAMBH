"use client"

import { Inter } from "next/font/google";
import { signOut } from '@/lib/LoginHelper';
import NotificationBell from "@/components/NotificationBellIcon/NotificationBell"
import "../globals.css";
import Link from "next/link"
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Dynamically load the Voiceflow chat widget
    const script = document.createElement('script');
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.type = "text/javascript";
    script.onload = function () {
      if (window.voiceflow && window.voiceflow.chat) {
        window.voiceflow.chat.load({
          verify: { projectID: '66d2013071827d420132bce3' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        });
      }
    };
    document.body.appendChild(script);

    // Cleanup: remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='min-h-screen flex flex-col'>
          {/* Navbar */}
          <nav className='navbar bg-[#49654e] px-[15px]'>
            <div className='navbar-start text-3xl'>
              AYUSH Aarambh
            </div>
            <div className="navbar-end">
              <NotificationBell />
            </div>
          </nav>

          <div className='flex flex-1'>
            {/* Sidebar */}
            <aside className='w-[250px] bg-[#8ba889] p-[15px] text-white min-h-full flex flex-col justify-between'>
              <ul>
                <Link href={'/dashboard'}>
                  <li className='p-[10px] hover:bg-[#49654e] cursor-pointer rounded-md mt-3'>Home</li>
                </Link>
                <Link href={'/dashboard/registration'}>
                  <li className='p-[10px] hover:bg-[#49654e] cursor-pointer rounded-md mt-3'>Registration Form</li>
                </Link>
                <Link href={'/dashboard/reciept'}>
                  <li className='p-[10px] hover:bg-[#49654e] cursor-pointer rounded-md mt-3'>E-Receipt Download</li>
                </Link>
                <Link href={'/dashboard/tracking'}>
                  <li className='p-[10px] hover:bg-[#49654e] cursor-pointer rounded-md mt-3'>Track your application</li>
                </Link>
                <Link href={'/stories'}>
                  <li className='p-[10px] hover:bg-[#49654e] cursor-pointer rounded-md mt-3'>Success Stories</li>
                </Link>
                <Link href={'/incubator'}>
                  <li className='p-[10px] hover:bg-[#49654e] cursor-pointer rounded-md mt-3'> Locate your incubator   PRARAMBH</li>
                </Link>
              </ul>

              <ul className="">
                <Link href='/dashboard/profile'>
                  <li className='p-[10px] hover:bg-[#49654e] cursor-pointer rounded-md mt-3'>
                    Profile
                  </li>
                </Link>
                <li
                  onClick={() => (document.getElementById('my_modal_2') as HTMLDialogElement)?.showModal()}
                  className='p-[10px] hover:bg-[#49654e] cursor-pointer rounded-md mt-3'
                >
                  <a>Sign Out</a>
                </li>
              </ul>
            </aside>

            {/* Main Content */}
            <main className='flex-1 p-[20px] bg-[#ecede8] text-[#000]'>
              {children}
            </main>
          </div>

          <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle text-black">
            <div className="modal-box flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="font-bold text-lg mb-4">Confirm Logout</h3>
              <p className="text-center mb-6">Are you sure you want to log out? You’ll need to log in again to access your account.</p>

              <div className="flex space-x-4">
                <button
                  className="btn btn-error w-[100px] py-2 px-4 rounded-lg text-white bg-red-600 hover:bg-red-700"
                  onClick={() => (document.getElementById('my_modal_2') as HTMLDialogElement).close()}
                >
                  Cancel
                </button>

                <form
                  action={async () => {
                    (document.getElementById('my_modal_2') as HTMLDialogElement).close();
                    await signOut();
                  }}
                >
                  <button
                    type="submit"
                    className="btn btn-success w-[100px] py-2 px-4 rounded-lg text-white bg-green-600 hover:bg-green-700"
                  >
                    Logout
                  </button>
                </form>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>Close</button>
            </form>
          </dialog>
        </div>
      </body>
    </html>
  );
}
