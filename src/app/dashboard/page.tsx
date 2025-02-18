"use client";
import { FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import React from 'react';
import Image from 'next/image';
import userp from '@/app/dashboard/imagess/profile1.jpg';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-5 max-w-3xl">

      {/* Profile Section */}
      <div className="text-center mb-10">
        {/* User Photo */}
        <div className="w-36 h-36 rounded-full overflow-hidden mx-auto border-4 border-gray-300">
          <Image
            src={userp}
            alt="User Photo"
            width={150}
            height={150}
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* User Name */}
        <h2 className="mt-5 text-xl font-semibold">John Doe</h2>

        {/* User ID */}
        <p className="text-sm text-gray-500">ID: 12345</p>
      </div>

      {/* Boxes with Text and Icons */}
      <div className="flex justify-between gap-5">
        <div className="flex-1 p-5 bg-gray-100 text-center rounded-lg">
          <FaCalendarAlt size={35} className="mb-2 mx-auto" />
          <p>My Venture</p>
        </div>
        <div className="flex-1 p-5 bg-gray-100 text-center rounded-lg">
          <FaCheckCircle size={35} className="mb-2 mx-auto" color="green" />
          <p>Verification Status</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
