"use client"

import React, { useState } from 'react';

const OrderTracking: React.FC = () => {

  const [step, setStep] = useState(1)
  const [error, setError] = useState(false)

  const addStep = () => setStep(step + 1)

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const input = (e.target as HTMLFormElement)
    const trackingNumber = input.trackingNumber.value
  
    if (trackingNumber === '12345678') {
      setError(true)
    } else {
      addStep()
    }
  }

  return (
    <div>
      {step === 1 && (
        <div className="container mx-auto mt-10 p-5 bg-gray-100 rounded-lg shadow-md">
          <form onSubmit={handleOnSubmit}>
            <h2 className="text-2xl font-bold">TRACK YOUR ORDER</h2>
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <label htmlFor='trackingNumber' className="text-lg font-semibold">Tracking Number</label>
                <input
                  type="text"
                  name='trackingNumber'
                  placeholder="Enter tracking number"
                  className="border border-black px-4 py-2 rounded-lg w-1/2 bg-transparent text-black"
                />
              </div>
              {error && <p className="text-red-500 mt-2">Invalid tracking ID.</p>}
              <div className="mt-6">
                <button type='submit' className="btn bg-primary text-white px-6 py-2 rounded-lg">
                  Track Order
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      {step === 2 && (
        <div className="container mx-auto mt-10 p-5 bg-gray-100 rounded-lg shadow-md">
          {/* Header Section */}
          <div className="flex justify-between items-center border-b pb-3 mb-5">
            <h2 className="text-2xl font-bold">APPLICATION TRACKING</h2>
            <div className="space-x-4">
              <button className="btn bg-transparent btn-outline-primary border px-4 py-2 rounded-lg text-blue-600">
                Last Updated - 10:17:30 06/09/2024
              </button>
              <button className="btn bg-transparent btn-outline-secondary border px-4 py-2 rounded-lg text-gray-600">
                2018/01/01 → 2021/02/17
              </button>
            </div>
          </div>

          {/* Order Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-center border-collapse">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 border">Ticket ID</th>
                  <th className="px-4 py-2 border">Stage</th>
                  <th className="px-4 py-2 border">Incharge</th>
                  <th className="px-4 py-2 border">Description</th>
                  <th className="px-4 py-2 border">Tracking Number</th>
                  <th className="px-4 py-2 border">Last Checkpoint</th>
                  <th className="px-4 py-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">#3020</td>
                  <td className="px-4 py-2 border">File under review</td>
                  <td className="px-4 py-2 border">Anjali Mehta</td>
                  <td className="px-4 py-2 border">IN</td>
                  <td className="px-4 py-2 border">89245333944</td>
                  <td className="px-4 py-2 border">--</td>
                  <td className="px-4 py-2 border">APPROVED</td>
                </tr>
                {/* Repeat similar rows for other entries */}
              </tbody>
            </table>
          </div>

          {/* Tracking Details Section */}
          <div className="mt-6">
            <div className="border rounded-lg shadow-md">
              <div className="bg-gray-100 p-4 font-bold">
                Tracking Number: 89245303954 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Order: #3020
              </div>
              <div className="p-6">
                <h5 className="font-semibold text-lg mb-4">UPDATES</h5>
                <ul className="list-none">
                  <li className="flex justify-between mb-2">
                    <span className="font-bold">2021-02-17</span>
                    <span>02:39:28 - Document verification completed</span>
                  </li>
                  <li className="flex justify-between mb-2">
                    <span className="font-bold">2021-02-17</span>
                    <span>02:35:32 - Document uploaded by the user</span>
                  </li>
                  {/* Add more list items similarly */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;
