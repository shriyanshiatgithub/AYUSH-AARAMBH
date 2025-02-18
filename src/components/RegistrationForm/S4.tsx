import React from 'react';

interface Step4Props {
  formData: {
    [key: string]: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Step4: React.FC<Step4Props> = ({ formData, handleChange }) => {
  return (
    <div className="p-8 shadow-2xl rounded-3xl mb-8 bg-gradient-to-br from-[#e7f6d5] to-[#c9e4c5] min-h-96 flex flex-col justify-center items-center transition-all duration-300 ease-in-out transform">
      
      <p className="text-2xl text-gray-800 font-semibold mb-6">
        Complete Your Registration
      </p>

      <p className="text-lg text-gray-600 mb-8 text-center">
        Pay ₹100 to finalize the registration process and get started.
      </p>

      <div className="relative h-64 w-64 rounded-full border-4 border-purple-700 flex justify-center items-center shadow-lg bg-white">
        <div className="absolute inset-0 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
        <p className="text-3xl font-bold text-purple-800">₹100</p>
      </div>

      <button className="mt-10 px-8 py-4 bg-purple-700 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-purple-800 transition-all duration-300">
        Proceed to Payment
      </button>
      
    </div>
  );
};

export default Step4;
