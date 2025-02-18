import React, { useState } from "react";
import "./StartupRegistrationForm.css";

function StartupRegistrationForm2({ formData, handleChange }: { handleChange: any, formData: any }) {

  return (
    <div className="form-container">
      <h2 className="text-3xl">Startup Registration - Step 2</h2>
      <label className="form-group form-control w-full">
        <div className="label">
          <span className="label-text text-black text-xl">Business Model Type</span>
        </div>
        <input
          type="text"
          id="businessModelType"
          name="businessModelType"
          value={formData.businessModelType}
          onChange={handleChange}
          required
          className="input input-bordered bg-white"
        />
      </label>
      <label className="form-group form-control w-full">
        <div className="label">
          <span className="label-text text-black text-xl">Target Group</span>
        </div>
        <input
          type="text"
          id="targetGroup"
          name="targetGroup"
          value={formData.targetGroup}
          onChange={handleChange}
          required
          className="input input-bordered bg-white"
        />
      </label>
      <label className="form-group form-control w-full">
        <div className="label">
          <span className="label-text text-black text-xl">Industry</span>
        </div>
        <input
          type="text"
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          required
          className="input input-bordered bg-white"
        />
      </label>
      <label className="form-group form-control w-full">
        <div className="label">
          <span className="label-text text-black text-xl">Revenue Stream</span>
        </div>
        <input
          type="text"
          id="revenueStream"
          name="revenueStream"
          value={formData.revenueStream}
          onChange={handleChange}
          required
          className="input input-bordered bg-white"
        />
      </label>
      <label className="form-group form-control w-full">
        <div className="label">
          <span className="label-text text-black text-xl">Number of Founders (Max 3)</span>
        </div>
        <input
          type="number"
          id="numberOfFounders"
          name="numberOfFounders"
          value={formData.numberOfFounders}
          onChange={handleChange}
          required
          max="3"
          className="input input-bordered bg-white"
        />
      </label>
      <label className="form-group form-control w-full">
        <div className="label">
          <span className="label-text text-black text-xl">Funding Raised</span>
        </div>
        <input
          type="number"
          id="fundingRaised"
          name="fundingRaised"
          value={formData.fundingRaised}
          onChange={handleChange}
          required
          className="input input-bordered bg-white"
        />
      </label>
      {/* <div className="form-group">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div> */}
    </div>
  );
}

export default StartupRegistrationForm2;
