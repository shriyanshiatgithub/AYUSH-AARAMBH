import React, { FC } from 'react';

interface ProfileFormProps { }

const Profile: FC<ProfileFormProps> = () => {
  return (
    <div style={styles.container} className='mt-10'>
      <h2 className='text-5xl text-center justify-center items-center mb-5'>Profile</h2>

      <form style={styles.form}>
        {/* First Name and Last Name */}
        {/* <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label htmlFor="firstName">First Name</label>
            <input readOnly type="text" id="firstName" name="firstName" value="John" readOnly />
          </div> */}
        <label className="input readOnly input-bordered flex items-center gap-2 text-black bg-[#e4e6d9]">
          First Name
          <input readOnly type="text" className="grow" value="First Name" />
        </label>

        {/* <div style={styles.inputGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input readOnly type="text" id="lastName" name="lastName" value="Doe" readOnly />
          </div>
        </div> */}
        <label className="input readOnly input-bordered flex items-center gap-2 text-black bg-[#e4e6d9]">
          Last Name
          <input readOnly type="text" className="grow" value="Last name" />
        </label>


        {/* Email */}
        {/* <div style={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input readOnly type="email" id="email" name="email" value="johndoe@gmail.com" color='rgba(236,237,232,255)' disabled readOnly />
        </div> */}
        <label className="input readOnly input-bordered flex items-center gap-2 text-black bg-[#e4e6d9]">
          Email
          <input readOnly type="text" className="grow" value="ayush@gov.in" />
        </label>

        {/* Select Country and City */}
        <label className="input readOnly input-bordered flex items-center gap-2 text-black bg-[#e4e6d9]">
          Select Country
          <input readOnly type="text" className="grow" value="ayush@gov.in" />
        </label>

        <label className="input readOnly input-bordered flex items-center gap-2 text-black bg-[#e4e6d9]">
          City
          <input readOnly type="text" className="grow" value="ayush@gov.in" />
        </label>



        {/* Phone Number */}
        {/* <div style={styles.inputGroup}>
          <label htmlFor="phone">Phone Number</label>
          <div style={styles.phoneInput}>
            <span style={styles.flag}>🇮🇳 +91</span>
            <input readOnly type="text" id="phone" name="phone" value="0000000000" readOnly />
          </div>
        </div> */}
        <label className="input readOnly input-bordered flex items-center gap-2 text-black bg-[#e4e6d9]">
          Phone Number
          <input readOnly type="text" className="grow" value="xxxxxxxxxx" />
        </label>




        {/* Bio */}
        {/* <div style={styles.inputGroup}>
          <label htmlFor="bio">Bio</label>
          <textarea readOnly id="bio" name="bio" value="Add a bio here (optional)" rows={4}></textarea>
        </div> */}

        <label className="form-control text-black">
          <div className="label ">
            <span className="label-text text-black ">Your bio</span>
          </div>
          <textarea className="textarea textarea-bordered h-24 text-black bg-[#e4e6d9]" placeholder="Bio" value={"123"} ></textarea>
        </label>

        <label className="input readOnly input-bordered flex items-center gap-2 text-black bg-[#e4e6d9]">
          Linkdin profile
          <input readOnly type="text" className="grow" value="ayush@gov.in" />
        </label>
        <label className="input readOnly input-bordered flex items-center gap-2 text-black bg-[#e4e6d9]">
          Facebook Profile
          <input readOnly type="text" className="grow" value="ayush@gov.in" />
        </label>
        <label className="input readOnly input-bordered flex items-center gap-2 text-black bg-[#e4e6d9]">
          Twitter Profile
          <input readOnly type="text" className="grow" value="ayush@gov.in" />
        </label>
        <label className="input readOnly input-bordered flex items-center gap-2 text-black bg-[#e4e6d9]">
          Website
          <input readOnly type="text" className="grow" value="ayush@gov.in" />
        </label>

        {/* Edit Profile Button */}
        <button type="button" style={styles.editButton}>
          Edit Profile
        </button>
      </form>
    </div>
  );
};

// Simple styles for layout and structure
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: 'rgba(192,207,178,255)',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  editButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: 'rgba(73,101,78,255)',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    textAlign: 'center',
  },
};

export default Profile;
