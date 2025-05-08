// src/components/FormPanel/SkillsForm.jsx
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function SkillsForm({
  skills, // Initial array from ResumeBuilder props
  setSkills, // Function to update the state in ResumeBuilder
}) {
  const [localSkills, setLocalSkills] = useState(skills);

  useEffect(() => {
    setLocalSkills(skills);
  }, [skills]);

  // --- Category Handlers ---
  const handleAddCategory = () => {
    const newCategory = {
      id: uuidv4(),
      category: '',
      list: [''],
    };
    setLocalSkills((prevSkills) => [...prevSkills, newCategory]);
  };

  const handleRemoveCategory = (categoryId) => {
    setLocalSkills((prevSkills) =>
      prevSkills.filter((cat) => cat.id !== categoryId)
    );
  };

  const handleUpdateCategoryName = (categoryId, newName) => {
    setLocalSkills((prevSkills) =>
      prevSkills.map((cat) =>
        cat.id === categoryId ? { ...cat, category: newName } : cat
      )
    );
  };

  // --- Skill Item Handlers (within a category) ---
  const handleAddSkillToCategory = (categoryId) => {
    setLocalSkills((prevSkills) =>
      prevSkills.map((cat) =>
        cat.id === categoryId ? { ...cat, list: [...cat.list, ''] } : cat
      )
    );
  };

  const handleRemoveSkillFromCategory = (categoryId, skillIndex) => {
    setLocalSkills((prevSkills) =>
      prevSkills.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              list: cat.list.filter((_, index) => index !== skillIndex),
            }
          : cat
      )
    );
  };

  const handleUpdateSkillInCategory = (categoryId, skillIndex, newValue) => {
    setLocalSkills((prevSkills) =>
      prevSkills.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              list: cat.list.map((skill, index) =>
                index === skillIndex ? newValue : skill
              ),
            }
          : cat
      )
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const cleanedSkills = localSkills
      .map((cat) => ({
        ...cat,
        list: cat.list.filter((skill) => skill.trim() !== ''),
      }))
      .filter((cat) => cat.category.trim() !== '' || cat.list.length > 0)
      .filter((cat) => cat.category.trim() !== '');

    setSkills(cleanedSkills);
    console.log('Skills section submitted:', cleanedSkills);
  };

  return (
    <form className='form-section' onSubmit={handleSubmit}>
      {localSkills.map((skillCategory) => (
        <div
          key={skillCategory.id}
          className='skill-category-entry form-entry-box'
        >
          <div className='skill-category-header'>
            <div className='form-group category-name-group'>
              <label htmlFor={`category-name-${skillCategory.id}`}>
                Category Name
              </label>
              <input
                type='text'
                id={`category-name-${skillCategory.id}`}
                name='category'
                value={skillCategory.category}
                onChange={(e) =>
                  handleUpdateCategoryName(skillCategory.id, e.target.value)
                }
                placeholder='e.g., Web Development'
                required
              />
            </div>
            <button
              type='button'
              className='add-bullet add-skill-button-header' // Reuses .add-bullet styles
              onClick={() => handleAddSkillToCategory(skillCategory.id)}
              title='Add a new skill to this category'
            >
              <i className='fas fa-plus'></i> Add Skill
            </button>
          </div>

          <div className='form-group skills-list-editor'>
            <label className='skills-list-label'>
              Skills in this category:
            </label>
            <div className='skills-list-items-container'>
              {skillCategory.list.map((skill, skillIndex) => (
                <div
                  key={`${skillCategory.id}-skill-${skillIndex}`}
                  className='skill-pill' // This is the pill
                >
                  <textarea
                    name={`skill-item-${skillCategory.id}-${skillIndex}`}
                    value={skill}
                    onChange={(e) =>
                      handleUpdateSkillInCategory(
                        skillCategory.id,
                        skillIndex,
                        e.target.value
                      )
                    }
                    placeholder='Skill'
                    rows={1}
                    className='skill-pill-textarea' // Textarea inside the pill
                  />
                  <button
                    type='button'
                    className='skill-pill-remove-button' // Specific class for remove button in pill
                    onClick={() =>
                      handleRemoveSkillFromCategory(
                        skillCategory.id,
                        skillIndex
                      )
                    }
                    title='Remove this skill'
                  >
                    <i className='fas fa-times'></i>
                  </button>
                </div>
              ))}
              {skillCategory.list.length === 0 && (
                <p className='empty-skills-placeholder'>
                  No skills added yet. Click `Add Skill` above.
                </p>
              )}
            </div>
          </div>

          <div className='form-entry-actions'>
            <button
              type='button'
              className='remove-button'
              onClick={() => handleRemoveCategory(skillCategory.id)}
              title='Remove this skill category'
            >
              <i className='fas fa-trash'></i> Remove Category
            </button>
          </div>
        </div>
      ))}

      <div className='form-actions section-actions'>
        <button
          type='button'
          className='add-button'
          onClick={handleAddCategory}
        >
          <i className='fas fa-plus'></i> Add New Category
        </button>
        <button type='submit' className='submit-button'>
          <i className='fas fa-save'></i> Save
        </button>
      </div>
    </form>
  );
}

export default SkillsForm;
