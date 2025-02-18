import React from "react";

function StartupRegistrationForm1({ formData, handleChange }: { handleChange: any, formData: any }) {

  return (
    <div className="form-container bg-white">
      <h2 className="text-3xl">Startup Registration - Step 1</h2>
      <label className="form-group form-control w-full">
        <div className="label">
          <span className="label-text text-black text-xl">Company Name</span>
        </div>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
          className="input input-bordered bg-white"
        />
      </label>

      <label className="form-group form-control w-full">
        <div className="label">
          <span className="label-text text-black text-xl">Legal Name</span>
        </div>
        <input
          type="text"
          id="legalName"
          name="legalName"
          value={formData.legalName}
          onChange={handleChange}
          required
          className="input input-bordered bg-white"
        />
      </label>

      <label className="form-group form-control w-full">
        <div className="label">
          <span className="label-text text-black text-xl">Website URL</span>
        </div>
        <input
          type="url"
          id="websiteURL"
          name="websiteURL"
          value={formData.websiteURL}
          onChange={handleChange}
          required
          className="input input-bordered bg-white"
        />
      </label>


      <label className="form-group form-control w-full">
        <div className="label">
          <span className="label-text text-black text-xl">Incorporate Date</span>
        </div>
        <input
          type="date"
          id="incorporateDate"
          name="incorporateDate"
          value={formData.incorporateDate}
          onChange={handleChange}
          required
          className="input input-bordered bg-white"
        />
      </label>

      <label className="form-group form-control w-full">
        <div className="label">
          <span className="label-text text-black text-xl">Number of Employees</span>
        </div>
        <input
          type="number"
          id="numberOfEmployees"
          name="numberOfEmployees"
          value={formData.numberOfEmployees}
          onChange={handleChange}
          required
          className="input input-bordered bg-white"
        />
      </label>


      <label className="form-group form-control w-full">
        <div className="label">
          <span className="label-text text-black text-xl">State</span>
        </div>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
          className="input input-bordered bg-white"
        />
      </label>

      <label className="form-group form-control w-full">
        <div className="label">
          <span className="label-text text-black text-xl">City</span>
        </div>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
          className="input input-bordered bg-white"
        />
      </label>

      <label className="form-group form-control w-full">
        <div className="label">
          <span className="label-text text-black text-xl">Pincode</span>
        </div>
        <input
          type="text"
          id="pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          required
          className="input input-bordered bg-white"
        />
      </label>

      <label className="form-group form-control w-full">
        <div className="label">
          <span className="label-text text-black text-xl">Mobile Number</span>
        </div>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
          className="input input-bordered bg-white"
        />
      </label>

      {/* <div className="form-group">
          <button type="submit" className="submit-btn">
            Next
          </button>
        </div> */}
    </div>
  );
}

export default StartupRegistrationForm1;
