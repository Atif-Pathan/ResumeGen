import { PDFViewer } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF.jsx'; // Import the document component

const styles = {
  viewer: {
    width: '100%', // Take up all available width
    height: '100%', // Full height of the viewport
    border: '3px solid #000', // Optional border
  },
};

function PDFPreview({ personalInfo, education, experience, projects, skills }) {
  return (
    <PDFViewer style={styles.viewer} showToolbar={true}>
      <ResumePDF
        personalInfo={personalInfo}
        education={education}
        experience={experience}
        projects={projects}
        skills={skills}
      />
    </PDFViewer>
  );
}

export default PDFPreview;
