// src/components/FormPanel/EducationForm.jsx
import React, { useState, useEffect } from 'react'; // Import React
import { v4 as uuidv4 } from 'uuid';

// Define degree options outside the component for clarity
const degreeOptions = [
  'Associate',
  'BA',
  'BSc',
  'BEng',
  'BFA',
  'MA',
  'MSc',
  'MEng',
  'MBA',
  'PhD',
  'Certificate',
  'Diploma',
  'Other',
];

function EducationForm({
  education, // Initial array from ResumeBuilder props
  setEducation, // Function to update the state in ResumeBuilder
}) {
  const [localEducation, setLocalEducation] = useState(education);

  useEffect(() => {
    setLocalEducation(education);
  }, [education]);

  const handleLocalChange = (id, field, value) => {
    setLocalEducation((currentLocalEducation) =>
      currentLocalEducation.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleAddLocalItem = () => {
    const newItem = {
      id: uuidv4(),
      degree: '', // Default to empty for the dropdown placeholder
      field: '',
      institution: '',
      faculty: '',
      graduation: '',
      additionalInfo: '',
    };
    setLocalEducation((currentLocalEducation) => [
      ...currentLocalEducation,
      newItem,
    ]);
  };

  const handleRemoveLocalItem = (id) => {
    setLocalEducation((currentLocalEducation) =>
      currentLocalEducation.filter((item) => item.id !== id)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEducation(localEducation);
    console.log('Education section submitted:', localEducation); // Added console log
  };

  return (
    <form className='form-section' onSubmit={handleSubmit}>
      {/* Map over the LOCAL state to render form entries */}
      {localEducation.map((eduItem) => (
        <div key={eduItem.id} className='education-entry form-entry-box'>
          <div className='form-grid-layout'>
            {/* --- Degree Dropdown --- */}
            <div className='form-group'>
              <label htmlFor={`degree-${eduItem.id}`}>Degree</label>
              <select // Changed from input to select
                id={`degree-${eduItem.id}`}
                name='degree' // Name remains 'degree'
                value={eduItem.degree} // Bind to local state
                onChange={(e) =>
                  handleLocalChange(eduItem.id, e.target.name, e.target.value)
                } // Use same local handler
                required
              >
                {/* Default disabled option */}
                <option value='' disabled>
                  -- Select Degree --
                </option>
                {/* Map over options */}
                {degreeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            {/* --- End Degree Dropdown --- */}

            {/* Field */}
            <div className='form-group'>
              <label htmlFor={`field-${eduItem.id}`}>Field of Study</label>
              <input
                type='text'
                id={`field-${eduItem.id}`}
                name='field'
                value={eduItem.field}
                onChange={(e) =>
                  handleLocalChange(eduItem.id, e.target.name, e.target.value)
                }
                placeholder='e.g., Computer Science'
                required
              />
            </div>
            {/* Institution */}
            <div className='form-group'>
              <label htmlFor={`institution-${eduItem.id}`}>Institution</label>
              <input
                type='text'
                id={`institution-${eduItem.id}`}
                name='institution'
                value={eduItem.institution}
                onChange={(e) =>
                  handleLocalChange(eduItem.id, e.target.name, e.target.value)
                }
                placeholder='e.g., University of Example'
                required
              />
            </div>
            {/* Faculty */}
            <div className='form-group'>
              <label htmlFor={`faculty-${eduItem.id}`}>
                Faculty / School (Optional)
              </label>
              <input
                type='text'
                id={`faculty-${eduItem.id}`}
                name='faculty'
                value={eduItem.faculty}
                onChange={(e) =>
                  handleLocalChange(eduItem.id, e.target.name, e.target.value)
                }
                placeholder='e.g., Faculty of Science'
              />
            </div>
            {/* Graduation */}
            <div className='form-group'>
              <label htmlFor={`graduation-${eduItem.id}`}>
                Graduation Date
              </label>
              <input
                type='text'
                id={`graduation-${eduItem.id}`}
                name='graduation'
                value={eduItem.graduation}
                onChange={(e) =>
                  handleLocalChange(eduItem.id, e.target.name, e.target.value)
                }
                placeholder='e.g., May 2024 or Expected May 2025'
                required
              />
            </div>
            {/* Additional Info */}
            <div className='form-group'>
              <label htmlFor={`additionalInfo-${eduItem.id}`}>
                Additional Info (Optional)
              </label>
              <input
                type='text'
                id={`additionalInfo-${eduItem.id}`}
                name='additionalInfo'
                value={eduItem.additionalInfo}
                onChange={(e) =>
                  handleLocalChange(eduItem.id, e.target.name, e.target.value)
                }
                placeholder='e.g., with Distinction, Co-op Program'
              />
            </div>
          </div>

          {/* Remove button for this specific entry */}
          <div className='form-entry-actions'>
            <button
              type='button'
              className='remove-button' // Use specific class
              onClick={() => handleRemoveLocalItem(eduItem.id)}
              title='Remove this education entry'
            >
              <i className='fas fa-trash'></i> Remove
            </button>
          </div>
        </div>
      ))}

      {/* --- Section Actions (Add and Save) --- */}
      {/* Group Add and Save buttons together at the end */}
      <div className='form-actions section-actions'>
        {/* Add button */}
        <button
          type='button'
          className='add-button' // Use specific class
          onClick={handleAddLocalItem}
        >
          <i className='fas fa-plus'></i> Add Education
        </button>

        {/* Section Save Button */}
        <button type='submit' className='submit-button'>
          <i className='fas fa-save'></i> Save
        </button>
      </div>
      {/* --- End Section Actions --- */}
    </form>
  );
}

export default EducationForm;
