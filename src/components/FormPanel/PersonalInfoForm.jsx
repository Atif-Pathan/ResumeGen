function PersonalInfoForm({ personalInfo, setPersonalInfo }) {
  function personalInformation(formData) {
    const updatedInfo = Object.fromEntries(formData.entries());
    setPersonalInfo(updatedInfo);
  }

  return (
    // Use a consistent class name for styling sections
    <form className='form-section' action={personalInformation}>
      <div className='form-grid-layout'>
        {/* Name Field */}
        <div className='form-group'>
          <label htmlFor='name'>Full Name</label>
          <input
            type='text'
            id='name'
            name='name' // Crucial: name attribute must match the key in the personalInfo state object
            defaultValue={personalInfo.name} // Bind input value to the state
            placeholder='e.g., Atif Pathan'
            required
          />
        </div>
        {/* Phone Field */}
        <div className='form-group'>
          <label htmlFor='phone'>Phone</label>
          <input
            type='tel'
            id='phone'
            name='phone'
            defaultValue={personalInfo.phone}
            placeholder='(XXX) XXX-XXXX'
            required
          />
        </div>
        {/* Email Field */}
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email' // Use 'email' type for validation
            id='email'
            name='email'
            defaultValue={personalInfo.email}
            placeholder='your.email@example.com'
            required
          />
        </div>
        {/* LinkedIn Field */}
        <div className='form-group'>
          <label htmlFor='linkedin'>LinkedIn URL</label>
          <input
            type='url' // Use 'url' type for URLs
            id='linkedin'
            name='linkedin'
            defaultValue={personalInfo.linkedin}
            placeholder='https://linkedin.com/in/yourprofile'
            required
          />
        </div>
        {/* GitHub Field */}
        <div className='form-group'>
          <label htmlFor='github'>GitHub URL</label>
          <input
            type='url'
            id='github'
            name='github'
            defaultValue={personalInfo.github}
            placeholder='https://github.com/yourusername'
            required
          />
        </div>
        {/* Additional Info Field */}
        <div className='form-group'>
          <label htmlFor='additionalInfo'>Additional Info (Optional)</label>
          <input
            type='text'
            id='additionalInfo'
            name='additionalInfo'
            defaultValue={personalInfo.additionalInfo}
            placeholder='e.g., Willing to relocate, Portfolio URL'
          />
        </div>
      </div>
      {/* Updated Submit Button */}
      <div className='form-actions'>
        <button type='submit' className='submit-button'>
          <i className='fas fa-save'></i> {/* Save Icon */}
          Save
        </button>
      </div>
    </form>
  );
}

export default PersonalInfoForm;
