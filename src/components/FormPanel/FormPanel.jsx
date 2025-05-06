// src/components/FormPanel/FormPanel.jsx
import React, { useState } from 'react';
import PersonalInfoForm from './PersonalInfoForm.jsx';
// Import other form components when ready
import EducationForm from './EducationForm.jsx';
// import ExperienceForm from './ExperienceForm.jsx';
// import ProjectsForm from './ProjectsForm.jsx';
// import SkillsForm from './SkillsForm.jsx';
import '../../styles/FormPanel.css'; // Ensure this path is correct

// Define the sections data
const formSections = [
  {
    key: 'personalInfo',
    title: 'Personal Information',
    component: PersonalInfoForm,
  },
  {
    key: 'education',
    title: 'Education',
    component: EducationForm,
  },
  {
    key: 'experience',
    title: 'Experience',
    // component: ExperienceForm, // Uncomment when ready
  },
  {
    key: 'projects',
    title: 'Projects',
    // component: ProjectsForm, // Uncomment when ready
  },
  {
    key: 'skills',
    title: 'Skills',
    // component: SkillsForm, // Uncomment when ready
  },
];

function FormPanel(props) {
  // Props destructuring for cleaner access
  const {
    personalInfo,
    setPersonalInfo,
    education,
    setEducation,
    experience,
    setExperience,
    addExperienceItem,
    removeExperienceItem,
    updateExperienceItem,
    addExperienceBulletPoint,
    removeExperienceBulletPoint,
    updateExperienceBulletPoint,
    projects,
    setProjects,
    addProjectItem,
    removeProjectItem,
    updateProjectItem,
    addProjectBulletPoint,
    removeProjectBulletPoint,
    updateProjectBulletPoint,
    skills,
    setSkills,
    addSkillsItem,
    removeSkillsItem,
    updateSkillsItem,
    updateSkillList,
  } = props;

  // State to track the currently open section, default to the first one
  const [openSection, setOpenSection] = useState(formSections[0]?.key || null);

  // Function to toggle sections
  const handleToggleSection = (sectionKey) => {
    setOpenSection((prevOpenSection) =>
      prevOpenSection === sectionKey ? null : sectionKey
    ); // Allow closing by clicking again
  };

  // Map props to keys for easier passing
  const sectionProps = {
    personalInfo: { personalInfo, setPersonalInfo },
    education: {
      education,
      setEducation,
    },
    experience: {
      experience,
      setExperience,
      addExperienceItem,
      removeExperienceItem,
      updateExperienceItem,
      addExperienceBulletPoint,
      removeExperienceBulletPoint,
      updateExperienceBulletPoint,
    },
    projects: {
      projects,
      setProjects,
      addProjectItem,
      removeProjectItem,
      updateProjectItem,
      addProjectBulletPoint,
      removeProjectBulletPoint,
      updateProjectBulletPoint,
    },
    skills: {
      skills,
      setSkills,
      addSkillsItem,
      removeSkillsItem,
      updateSkillsItem,
      updateSkillList,
    },
  };

  return (
    <div className='form-panel-accordion'>
      {formSections.map((section) => {
        // Check if the component for the section exists
        const FormComponent = section.component;
        const isOpen = openSection === section.key;

        return (
          <div
            key={section.key}
            className={`accordion-item ${isOpen ? 'open' : ''}`}
          >
            <button // Using button for accessibility
              className='accordion-header'
              onClick={() => handleToggleSection(section.key)}
              aria-expanded={isOpen} // Accessibility attribute
              aria-controls={`content-${section.key}`} // Accessibility attribute
            >
              <span>{section.title}</span>
              <i className={`fas fa-chevron-down accordion-chevron`}></i>
            </button>
            <div
              id={`content-${section.key}`} // Accessibility attribute
              className='accordion-content'
              // Style controls visibility/animation via CSS max-height
            >
              <div className='accordion-content-inner'>
                {FormComponent && (
                  <FormComponent {...sectionProps[section.key]} />
                )}
                {/* Placeholder can remain conditional on isOpen */}
                {!FormComponent && isOpen && (
                  <p>Form for {section.title} coming soon...</p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FormPanel;
