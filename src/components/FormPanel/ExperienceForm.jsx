// src/components/FormPanel/ExperienceForm.jsx
import React, { useState, useEffect } from 'react'; // Import React
import { v4 as uuidv4 } from 'uuid';

function ExperienceForm({
  experience, // Initial array from ResumeBuilder props
  setExperience, // Function to update the state in ResumeBuilder
}) {
  const [localExperience, setLocalExperience] = useState(experience);
  console.log(localExperience);

  useEffect(() => {
    setLocalExperience(experience);
  }, [experience]);

  const addExperienceItem = () => {
    const newItem = {
      id: uuidv4(),
      company: '',
      productOrTeam: '',
      title: '',
      teamSize: null,
      location: '',
      startDate: '',
      endDate: '',
      bulletPoints: [],
    };
    setLocalExperience((prevExperience) => [...prevExperience, newItem]);
  };

  const removeExperienceItem = (id) => {
    setLocalExperience((prevExperience) => {
      return prevExperience.filter((item) => item.id !== id);
    });
  };

  const updateExperienceItem = (id, field, value) => {
    setLocalExperience((prevExperience) =>
      prevExperience.map((exp) => {
        if (exp.id === id) {
          return { ...exp, [field]: value };
        }
        return exp;
      })
    );
  };

  const addExperienceBulletPoint = (experienceId) => {
    setLocalExperience((prevExperience) =>
      prevExperience.map((exp) => {
        if (exp.id === experienceId) {
          // Create a new bulletPoints array with an added empty string
          const updatedBulletPoints = [...exp.bulletPoints, ''];
          // Return a new experience object with the updated bulletPoints
          return { ...exp, bulletPoints: updatedBulletPoints };
        }
        return exp; // Return other items unchanged
      })
    );
  };

  const removeExperienceBulletPoint = (experienceId, bulletIndex) => {
    setLocalExperience((prevExperience) =>
      prevExperience.map((exp) => {
        if (exp.id === experienceId) {
          // Create a new bulletPoints array excluding the one at bulletIndex
          const updatedBulletPoints = exp.bulletPoints.filter(
            (_, index) => index !== bulletIndex // Filter based on index
          );
          // Return a new experience object with the updated bulletPoints
          return { ...exp, bulletPoints: updatedBulletPoints };
        }
        return exp; // Return other items unchanged
      })
    );
  };

  const updateExperienceBulletPoint = (experienceId, bulletIndex, value) => {
    setLocalExperience((prevExperience) =>
      prevExperience.map((exp) => {
        if (exp.id === experienceId) {
          // Create a new bulletPoints array by mapping over the old one
          const updatedBulletPoints = exp.bulletPoints.map((bullet, index) => {
            // If the index matches the bulletIndex, update the value
            // Otherwise, keep the existing bullet point
            return index === bulletIndex ? value : bullet;
          });
          // Return a new experience object with the updated bulletPoints
          return { ...exp, bulletPoints: updatedBulletPoints };
        }
        return exp; // Return other items unchanged
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setExperience(localExperience);
    console.log('Experience section submitted:', localExperience); // Added console log
  };

  return (
    <form className='form-section' onSubmit={handleSubmit}>
      {/* Map over the LOCAL state to render form entries */}
      {localExperience.map((expItem) => (
        <div key={expItem.id} className='experience-entry form-entry-box'>
          <div className='form-grid-layout'>
            {/* Company */}
            <div className='form-group-two'>
              <div className='form-group company-field'>
                <label htmlFor={`company-${expItem.id}`}>Company</label>
                <input
                  type='text'
                  id={`company-${expItem.id}`}
                  name='company'
                  value={expItem.company}
                  onChange={(e) =>
                    updateExperienceItem(
                      expItem.id,
                      e.target.name,
                      e.target.value
                    )
                  }
                  placeholder='e.g. Amazon'
                  required
                />
              </div>
              <div className='form-group size-team'>
                <label htmlFor={`teamSize-${expItem.id}`}>Team Size</label>
                <input
                  type='text'
                  id={`teamSize-${expItem.id}`}
                  name='teamSize'
                  value={expItem.teamSize || ''}
                  onChange={(e) =>
                    updateExperienceItem(
                      expItem.id,
                      e.target.name,
                      e.target.value
                    )
                  }
                  placeholder='e.g. 3'
                />
              </div>
            </div>

            {/* productOrTeam */}
            <div className='form-group'>
              <label htmlFor={`productOrTeam-${expItem.id}`}>
                Product/Team
              </label>
              <input
                type='text'
                id={`productOrTeam-${expItem.id}`}
                name='productOrTeam'
                value={expItem.productOrTeam}
                onChange={(e) =>
                  updateExperienceItem(
                    expItem.id,
                    e.target.name,
                    e.target.value
                  )
                }
                placeholder='e.g., ResumeBuilder App'
                required
              />
            </div>

            {/* title */}
            <div className='form-group'>
              <label htmlFor={`title-${expItem.id}`}>Title</label>
              <input
                type='text'
                id={`title-${expItem.id}`}
                name='title'
                value={expItem.title}
                onChange={(e) =>
                  updateExperienceItem(
                    expItem.id,
                    e.target.name,
                    e.target.value
                  )
                }
                placeholder='e.g. Full-Stack Developer'
                required
              />
            </div>

            {/* location */}
            <div className='form-group'>
              <label htmlFor={`location-${expItem.id}`}>Location</label>
              <input
                type='text'
                id={`location-${expItem.id}`}
                name='location'
                value={expItem.location}
                onChange={(e) =>
                  updateExperienceItem(
                    expItem.id,
                    e.target.name,
                    e.target.value
                  )
                }
                placeholder='e.g. San Francisco, CA'
                required
              />
            </div>

            {/* Start Date */}
            <div className='form-group'>
              <label htmlFor={`startDate-${expItem.id}`}>Start Date</label>
              <input
                type='text'
                id={`startDate-${expItem.id}`}
                name='startDate'
                value={expItem.startDate}
                onChange={(e) =>
                  updateExperienceItem(
                    expItem.id,
                    e.target.name,
                    e.target.value
                  )
                }
                placeholder='e.g., Apr 2025'
                required
              />
            </div>

            {/* End Date */}
            <div className='form-group'>
              <label htmlFor={`endDate-${expItem.id}`}>End Date</label>
              <input
                type='text'
                id={`endDate-${expItem.id}`}
                name='endDate'
                value={expItem.endDate}
                onChange={(e) =>
                  updateExperienceItem(
                    expItem.id,
                    e.target.name,
                    e.target.value
                  )
                }
                placeholder='e.g., Aug 2025 / Present'
                required
              />
            </div>
          </div>

          {/* --- Bullet Points Editor --- */}
          <div className='form-group bullet-points-editor'>
            <label>Key Responsibilities / Achievements</label>
            {expItem.bulletPoints.map((bullet, bulletIndex) => (
              <div key={bulletIndex} className='bullet-point-input-group'>
                <textarea
                  name={`bullet-${expItem.id}-${bulletIndex}`}
                  value={bullet}
                  onChange={(e) =>
                    updateExperienceBulletPoint(
                      expItem.id,
                      bulletIndex,
                      e.target.value
                    )
                  }
                  placeholder={`Bullet point ${bulletIndex + 1}`}
                  rows={3}
                />
                <button
                  type='button'
                  className='remove-bullet-button remove-button' // Reusing remove-button style for now
                  onClick={() =>
                    removeExperienceBulletPoint(expItem.id, bulletIndex)
                  }
                  title='Remove this bullet point'
                  style={{ flexShrink: 0 }} // Prevent button from shrinking
                >
                  <i className='fas fa-trash-alt'></i>
                </button>
              </div>
            ))}
          </div>
          {/* --- End Bullet Points Editor --- */}

          <div className='edit-entry'>
            {/* Add bullet point button for this specific entry */}
            <div className='form-entry-actions'>
              <button
                type='button'
                className='add-bullet' // Use specific class
                onClick={() => addExperienceBulletPoint(expItem.id)}
                title='Add a new bullet point'
              >
                <i className='fas fa-plus'></i> Add new bullet
              </button>
            </div>
            {/* Remove button for this specific entry */}
            <div className='form-entry-actions'>
              <button
                type='button'
                className='remove-button' // Use specific class
                onClick={() => removeExperienceItem(expItem.id)}
                title='Remove this experience entry'
              >
                <i className='fas fa-trash'></i> Remove
              </button>
            </div>
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
          onClick={addExperienceItem}
        >
          <i className='fas fa-plus'></i> Add Experience
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

export default ExperienceForm;
