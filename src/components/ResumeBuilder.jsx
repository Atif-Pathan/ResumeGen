import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PDFPreview from './PDFPreview.jsx';
import FormPanel from './FormPanel/FormPanel.jsx';
import '../styles/ResumeBuilder.css';

function ResumeBuilder() {
  const [updateCounter, setUpdateCounter] = useState(0);
  // Example for Personal Info (wrap the original setter)
  const handlePersonalInfoSubmit = (newInfo) => {
    setPersonalInfo(newInfo);
    setUpdateCounter((c) => c + 1); // Increment counter
  };
  const handleEducationSubmit = (newEducation) => {
    setEducation(newEducation);
    setUpdateCounter((c) => c + 1); // Increment counter
  };
  const handleExperienceSubmit = (newExperience) => {
    setExperience(newExperience);
    setUpdateCounter((c) => c + 1); // Increment counter
  };
  const handleProjectsSubmit = (newProjects) => {
    setProject(newProjects);
    setUpdateCounter((c) => c + 1); // Increment counter
  };
  const handleSkillsSubmit = (newSkills) => {
    setSkills(newSkills);
    setUpdateCounter((c) => c + 1); // Increment counter
  };

  // State variable to hold the data for personal info
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Atif Pathan',
    phone: '(587) 123-4567',
    email: 'lazyyturtles@gmail.com',
    linkedin: 'https://linkedin.com/in/atifpathan',
    github: 'https://github.com/Atif-Pathan',
    additionalInfo: 'willing to relocate',
  });

  // State variable to hold the data for education + helpers to update it
  const [education, setEducation] = useState([
    {
      id: uuidv4(),
      degree: 'BSc',
      field: 'Major in Electrical Engineering, Minor in Computer Engineering',
      institution: 'University of Calgary',
      faculty: 'Schulich School of Engineering',
      graduation: 'May 2023',
      additionalInfo: 'with Distinction, Co-op',
    },
    {
      id: uuidv4(),
      degree: 'MEng',
      field:
        'Electrical & Computer Engineering with Specialization in Software Engineering',
      institution: 'University of Calgary',
      faculty: 'Schulich School of Engineering',
      graduation: 'May 2024',
      additionalInfo: '',
    },
  ]);
  // const addEducationItem = () => {
  //   const newItem = {
  //     id: uuidv4(),
  //     degree: '',
  //     field: '',
  //     institution: '',
  //     faculty: '',
  //     graduation: '',
  //     additionalInfo: '',
  //   };
  //   setEducation((prevEducation) => [...prevEducation, newItem]);
  // };
  // const removeEducationItem = (id) => {
  //   setEducation((prevEducation) => {
  //     return prevEducation.filter((item) => item.id !== id);
  //   });
  // };
  // const updateEducationItem = (id, field, value) => {
  //   setEducation((prevEducation) => {
  //     return prevEducation.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, [field]: value };
  //       }
  //       return item;
  //     });
  //   });
  // };

  // State variable to hold the data for experience + helpers to update it
  const [experience, setExperience] = useState([
    {
      id: uuidv4(),
      company: 'Nooh Solutions',
      productOrTeam: 'Dealership Inventory Management App',
      title: 'Full-Stack Software Developer',
      teamSize: 3,
      location: 'Remote',
      startDate: 'Nov 2024',
      endDate: 'Present',
      bulletPoints: [
        'Created the complete front-end for a dealership inventory management app using React, Vite and Tailwind CSS.',
        'Implemented a component-driven architecture for a dashboard to view/manage inventory, login functionality, services and inspection pages, focusing on a responsive and user-centric design for the user interface.',
      ],
    },
    {
      id: uuidv4(),
      company: 'White Whale',
      productOrTeam: 'Portfolio Management App',
      title: 'Full-Stack Software Developer',
      teamSize: 4,
      location: 'Calgary, AB',
      startDate: 'Jan 2024',
      endDate: 'May 2024',
      bulletPoints: [
        'Collaborated with a team of 4 to build a Portfolio Management Tool leveraging Modern Portfolio Theory (MPT) and AI stock sentiment analysis, enhancing investment decisions through real-time stock allocation insights, using React and Flask.',
        'Developed RESTful APIs using Flask that integrated multiple financial data APIs for continuous and accurate stock data retrieval and connected it with a Redux store to persist processed data and calculations for seamless front-end integration.',
        'Focused on component-driven development to design an intuitive frontend, incorporating Material-UI for a cohesive design, input validation, error handling, and D3.js to simplify complex financial metrics through data visualizations.',
        'Participated in a three-sprint Agile cycle, utilizing Git to manage feature development, conduct code reviews, and implement iterative feedback, ensuring 100% completion of required deliverables and 87% of nice-to-have deliverables. ',
      ],
    },
    {
      id: uuidv4(),
      company: 'Enbridge',
      productOrTeam: 'Power Performance & Operations (Renewables)',
      title: 'Performance, Data Analysis and Automation Intern ',
      teamSize: null,
      location: 'Calgary, AB',
      startDate: 'May 2021',
      endDate: 'Sep 2022',
      bulletPoints: [
        'Improved data analysis for all solar/wind fleets by analyzing high resolution data from SQL queries in MATLAB.',
        'Automated reporting processes, enhancing efficiency by > 150% using Python, significantly reducing manual workload.',
        'Implemented new static yaw misalignment detection algorithm, saving > $80,000 in their Annual Energy Production.',
      ],
    },
  ]);
  // const addExperienceItem = () => {
  //   const newItem = {
  //     id: uuidv4(),
  //     company: '',
  //     productOrTeam: '',
  //     title: '',
  //     teamSize: null,
  //     location: '',
  //     startDate: '',
  //     endDate: '',
  //     bulletPoints: [],
  //   };
  //   setExperience((prevExperience) => [...prevExperience, newItem]);
  // };
  // const removeExperienceItem = (id) => {
  //   setExperience((prevExperience) => {
  //     return prevExperience.filter((item) => item.id !== id);
  //   });
  // };
  // const updateExperienceItem = (id, field, value) => {
  //   setExperience((prevExperience) =>
  //     prevExperience.map((exp) => {
  //       if (exp.id === id) {
  //         return { ...exp, [field]: value };
  //       }
  //       return exp;
  //     })
  //   );
  // };
  // const addExperienceBulletPoint = (experienceId) => {
  //   setExperience((prevExperience) =>
  //     prevExperience.map((exp) => {
  //       if (exp.id === experienceId) {
  //         // Create a new bulletPoints array with an added empty string
  //         const updatedBulletPoints = [...exp.bulletPoints, ''];
  //         // Return a new experience object with the updated bulletPoints
  //         return { ...exp, bulletPoints: updatedBulletPoints };
  //       }
  //       return exp; // Return other items unchanged
  //     })
  //   );
  // };
  // const removeExperienceBulletPoint = (experienceId, bulletIndex) => {
  //   setExperience((prevExperience) =>
  //     prevExperience.map((exp) => {
  //       if (exp.id === experienceId) {
  //         // Create a new bulletPoints array excluding the one at bulletIndex
  //         const updatedBulletPoints = exp.bulletPoints.filter(
  //           (_, index) => index !== bulletIndex // Filter based on index
  //         );
  //         // Return a new experience object with the updated bulletPoints
  //         return { ...exp, bulletPoints: updatedBulletPoints };
  //       }
  //       return exp; // Return other items unchanged
  //     })
  //   );
  // };
  // const updateExperienceBulletPoint = (experienceId, bulletIndex, value) => {
  //   setExperience((prevExperience) =>
  //     prevExperience.map((exp) => {
  //       if (exp.id === experienceId) {
  //         // Create a new bulletPoints array by mapping over the old one
  //         const updatedBulletPoints = exp.bulletPoints.map((bullet, index) => {
  //           // If the index matches the bulletIndex, update the value
  //           // Otherwise, keep the existing bullet point
  //           return index === bulletIndex ? value : bullet;
  //         });
  //         // Return a new experience object with the updated bulletPoints
  //         return { ...exp, bulletPoints: updatedBulletPoints };
  //       }
  //       return exp; // Return other items unchanged
  //     })
  //   );
  // };

  // State variable to hold the data for projects + helpers to update it
  const [project, setProject] = useState([
    {
      id: uuidv4(),
      company: 'The Odin Project',
      productOrTeam: '',
      title: '',
      teamSize: '',
      location: '',
      startDate: 'Jun 2024',
      endDate: 'Present',
      bulletPoints: [
        'Built many projects using JavaScript, HTML, CSS, Webpack, React, Node.js, and APIs, enhancing full-stack development skills.',
        'Battleship – Weather App – Library – Something2Do – Sign-up Page – Tic-Tac-Toe – Homepage',
      ],
    },
    {
      id: uuidv4(),
      company: 'Flight Reservation WebApp',
      productOrTeam: '',
      title: 'Software Developer',
      teamSize: 4,
      location: 'Calgary, AB',
      startDate: 'Sep 2023',
      endDate: 'Dec 2023',
      bulletPoints: [
        'Collaborated on designing and developing a flight reservation web app using Git, Python, Django, React and SQL.',
        'Independently built a secure authentication system with endpoints for user registration, login, logout, and token management/blacklisting using Django and Simple JWT, enhancing security and user experience.',
        'Created front-end pages with conditional functionality for different user roles via React, improving user interaction.',
      ],
    },
  ]);
  // const addProjectItem = () => {
  //   const newItem = {
  //     id: uuidv4(),
  //     company: '',
  //     productOrTeam: '',
  //     title: '',
  //     teamSize: null,
  //     location: '',
  //     startDate: '',
  //     endDate: '',
  //     bulletPoints: [],
  //   };
  //   setProjects((prevProjects) => [...prevProjects, newItem]);
  // };
  // const removeProjectItem = (id) => {
  //   setProjects((prevProjects) => {
  //     return prevProjects.filter((proj) => proj.id !== id);
  //   });
  // };
  // const updateProjectItem = (id, field, value) => {
  //   setProjects((prevProjects) => {
  //     return prevProjects.map((proj) => {
  //       return proj.id === id ? { ...proj, [field]: value } : proj;
  //     });
  //   });
  // };
  // const addProjectBulletPoint = (projectId) => {
  //   setProjects((prevProjects) => {
  //     return prevProjects.map((proj) => {
  //       if (proj.id === projectId) {
  //         const updatedBulletPoints = [...proj.bulletPoints, ''];
  //         return { ...proj, bulletPoints: updatedBulletPoints };
  //       } else {
  //         // return the project unchanged if it doesn't match
  //         return proj;
  //       }
  //     });
  //   });
  // };
  // const removeProjectBulletPoint = (projectId, bulletIndex) => {
  //   setProjects((prevProjects) => {
  //     return prevProjects.map((proj) => {
  //       if (proj.id === projectId) {
  //         const updatedBulletPoints = proj.bulletPoints.filter(
  //           (_, index) => index !== bulletIndex
  //         );
  //         return { ...proj, bulletPoints: updatedBulletPoints };
  //       } else {
  //         // return the project unchanged if it doesn't match
  //         return proj;
  //       }
  //     });
  //   });
  // };
  // const updateProjectBulletPoint = (projectId, bulletIndex, value) => {
  //   setProjects((prevProjects) => {
  //     return prevProjects.map((proj) => {
  //       if (proj.id === projectId) {
  //         const updatedBulletPoints = proj.bulletPoints.map((bullet, index) => {
  //           return index === bulletIndex ? value : bullet;
  //         });
  //         return { ...proj, bulletPoints: updatedBulletPoints };
  //       } else {
  //         // return the project unchanged if it doesn't match
  //         return proj;
  //       }
  //     });
  //   });
  // };

  const [skills, setSkills] = useState([
    {
      id: uuidv4(),
      category: 'Languages & Dev Tools',
      list: [
        'JavaScript (Webpack, Vite, Jest (TDD))',
        'Python',
        'Java (Maven)',
        'Git/GitHub',
        'npm',
        'Postman',
      ],
    },
    {
      id: uuidv4(),
      category: 'Web & Databases',
      list: [
        'React',
        'HTML(DOM)/CSS',
        'Tailwind',
        'Node.js',
        'Spring Boot',
        'Flask',
        'Redux',
        'Docker',
        'SQL (PostgreSQL)',
      ],
    },
    {
      id: uuidv4(),
      category: 'Machine Learning & Data',
      list: [
        'TensorFlow',
        'PyTorch',
        'CNNs',
        'Keras',
        'NumPy',
        'Pandas',
        'Matplotlib',
        'Seaborn',
        'PowerBI',
      ],
    },
    {
      id: uuidv4(),
      category: 'Soft Skills',
      list: [
        'Technologically agile',
        'resilient problem-solver',
        'proactive',
        'independently driven',
        'collaborative teammate',
      ],
    },
    {
      id: uuidv4(),
      category: 'Awards',
      list: [
        '1st place in the 2024 Healthcare Innovation & Design Hackathon',
        'Graduated with Distinction (BSc & MEng)',
      ],
    },
  ]);
  // const addSkillsItem = () => {
  //   const newItem = {
  //     id: uuidv4(),
  //     category: '',
  //     list: [],
  //   };
  //   setSkills((prevSkills) => [...prevSkills, newItem]);
  // };
  // const removeSkillsItem = (id) => {
  //   setSkills((prevSkills) => {
  //     return prevSkills.filter((item) => item.id !== id);
  //   });
  // };
  // const updateSkillsItem = (id, field, value) => {
  //   setSkills((prevSkills) => {
  //     return prevSkills.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, [field]: value };
  //       }
  //       return item;
  //     });
  //   });
  // };
  // const updateSkillList = (id, newListArray) => {
  //   setSkills((prevSkills) =>
  //     prevSkills.map((item) =>
  //       item.id === id ? { ...item, list: newListArray } : item
  //     )
  //   );
  // };

  return (
    <div className='resume-builder'>
      <FormPanel
        personalInfo={personalInfo}
        setPersonalInfo={handlePersonalInfoSubmit}
        education={education}
        setEducation={handleEducationSubmit}
        // addEducationItem={addEducationItem}
        // removeEducationItem={removeEducationItem}
        // updateEducationItem={updateEducationItem}
        experience={experience}
        setExperience={handleExperienceSubmit}
        // addExperienceItem={addExperienceItem}
        // removeExperienceItem={removeExperienceItem}
        // updateExperienceItem={updateExperienceItem}
        // addExperienceBulletPoint={addExperienceBulletPoint}
        // removeExperienceBulletPoint={removeExperienceBulletPoint}
        // updateExperienceBulletPoint={updateExperienceBulletPoint}
        project={project}
        setProject={handleProjectsSubmit}
        // addProjectItem={addProjectItem}
        // removeProjectItem={removeProjectItem}
        // updateProjectItem={updateProjectItem}
        // addProjectBulletPoint={addProjectBulletPoint}
        // removeProjectBulletPoint={removeProjectBulletPoint}
        // updateProjectBulletPoint={updateProjectBulletPoint}
        skills={skills}
        setSkills={handleSkillsSubmit}
        // addSkillsItem={addSkillsItem}
        // removeSkillsItem={removeSkillsItem}
        // updateSkillsItem={updateSkillsItem}
        // updateSkillList={updateSkillList}
      />
      <div className='pdf-preview-panel'>
        {/* Render the PDF Preview component, passing the data states */}
        <PDFPreview
          updateCounter={updateCounter}
          personalInfo={personalInfo}
          education={education}
          experience={experience}
          project={project}
          skills={skills}
        />
      </div>
    </div>
  );
}

export default ResumeBuilder;
