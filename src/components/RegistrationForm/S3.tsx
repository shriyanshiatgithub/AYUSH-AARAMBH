import React, { useState } from "react";
import "./StartupRegistrationForm.css";

function StartupRegistrationForm3({ formData, handleChange }: { handleChange: any, formData: any }) {

  return (
    
    <div className="form-container">
      
      <label className="form-group form-control w-full">
        <div className="label">
          <span className="label-text text-black text-xl">GSTIN.</span>
        </div>
        <input
          type="text"
          id="gst"
          name="gst"
          value={formData.numberOfFounders}
          onChange={handleChange}
          required
          className="input input-bordered bg-white"
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text text-black text-xl">Aaadhar Card</span>
        </div>
        <input type="file" className="file-input file-input-bordered w-full bg-white" accept="image/png,image/jpg,image/jpeg,.pdf" />
        <div className="label">
          <span className="label-text-alt"></span>
          <span className="label-text-alt text-black">Supported Files: PDF / Images</span>
        </div>
      </label>

      <label className="form-control w-full">
        <div className="label">
          <span className="label-text text-black text-xl">PAN Card</span>
        </div>
        <input type="file" className="file-input file-input-bordered w-full bg-white" accept="image/png,image/jpg,image/jpeg,.pdf" />
        <div className="label">
          <span className="label-text-alt"></span>
          <span className="label-text-alt text-black">Supported Files: PDF / Images</span>
        </div>
      </label>

      <label className="form-control w-full">
        <div className="label">
          <span className="label-text text-black text-xl">Bank Proof</span>
        </div>
        <input type="file" className="file-input file-input-bordered w-full bg-white" accept="image/png,image/jpg,image/jpeg,.pdf" />
        <div className="label">
          <span className="label-text-alt"></span>
          <span className="label-text-alt text-black">Supported Files: PDF / Images</span>
        </div>
      </label>
    </div >
  );
}

export default StartupRegistrationForm3;
