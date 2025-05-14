// src/components/PDFPreview.jsx
import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF.jsx';

const styles = {
  viewer: {
    flex: 1,
    width: '100%',
    height: '100%',
    border: '3px solid #cad2da', // Optional border
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
};

// Receive the updateCounter prop
function PDFPreview({
  updateCounter,
  personalInfo,
  education,
  experience,
  project,
  skills,
}) {
  return (
    <PDFViewer key={updateCounter} style={styles.viewer} showToolbar={true}>
      <ResumePDF
        personalInfo={personalInfo}
        education={education}
        experience={experience}
        project={project}
        skills={skills}
      />
    </PDFViewer>
  );
}

export default PDFPreview;
