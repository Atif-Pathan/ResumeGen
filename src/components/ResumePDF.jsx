import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
  Font, // Import Font if you plan to use custom fonts later
} from '@react-pdf/renderer';

// Optional: Register custom fonts if needed later
// Font.register({ family: 'Open Sans', fonts: [...] });

// Create basic styles for structure and readability
const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontFamily: 'Helvetica', // Default font
    fontSize: 10, // Default font size
    lineHeight: 1.4,
  },
  // --- Header Styles ---
  headerContainer: {
    textAlign: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contactInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    fontSize: 9,
    marginBottom: 3,
  },
  contactItem: {
    marginHorizontal: 5,
    textDecoration: 'none', // For links
    color: 'black', // Default link color
  },
  additionalInfo: {
    fontSize: 9,
    marginTop: 2,
  },
  // --- Section Styles ---
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 2,
    textTransform: 'uppercase',
  },
  // --- Education Styles ---
  educationEntry: {
    marginBottom: 8,
  },
  degreeLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  institutionLine: {
    fontStyle: 'italic',
  },
  // --- Experience/Project Styles ---
  itemEntry: {
    marginBottom: 10,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  itemTitle: {
    fontWeight: 'bold',
  },
  itemCompany: {
    // Style if needed
  },
  itemLocation: {
    fontSize: 9,
    fontStyle: 'italic',
  },
  itemDates: {
    fontSize: 9,
    fontStyle: 'italic',
  },
  bulletPoint: {
    marginLeft: 10, // Indent bullet points
    marginBottom: 2,
  },
  // --- Skills Styles ---
  skillsCategory: {
    marginBottom: 5,
  },
  skillsCategoryTitle: {
    fontWeight: 'bold',
  },
});

// The main PDF Document Component
function ResumePDF({ personalInfo, education, experience, projects, skills }) {
  const documentTitle = `${personalInfo.name} - Generated Resume`;

  return (
    <Document title={documentTitle}>
      <Page size='A4' style={styles.page}>
        {/* --- Header Section --- */}
        <View style={styles.headerContainer}>
          <Text style={styles.name}>{personalInfo.name}</Text>
          <View style={styles.contactInfo}>
            {personalInfo.phone && (
              <Text style={styles.contactItem}>{personalInfo.phone}</Text>
            )}
            {personalInfo.phone && personalInfo.email && (
              <Text style={styles.contactItem}>|</Text>
            )}
            {personalInfo.email && (
              <Text style={styles.contactItem}>{personalInfo.email}</Text>
            )}
            {personalInfo.linkedin && <Text style={styles.contactItem}>|</Text>}
            {personalInfo.linkedin && (
              <Link style={styles.contactItem} src={personalInfo.linkedin}>
                {personalInfo.linkedin.replace('https://', '')}
              </Link>
            )}
            {personalInfo.github && <Text style={styles.contactItem}>|</Text>}
            {personalInfo.github && (
              <Link style={styles.contactItem} src={personalInfo.github}>
                {personalInfo.github.replace('https://', '')}
              </Link>
            )}
          </View>
          <Text style={styles.additionalInfo}>
            {personalInfo.additionalInfo}
          </Text>
        </View>

        {/* --- Education Section --- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((edu) => (
            <View key={edu.id} style={styles.educationEntry}>
              <View style={styles.degreeLine}>
                <Text>
                  {edu.degree} - {edu.field}
                </Text>
                <Text>{edu.graduation}</Text>
              </View>
              <Text style={styles.institutionLine}>
                {edu.institution}, {edu.faculty}{' '}
                {edu.additionalInfo ? `- ${edu.additionalInfo}` : ''}
              </Text>
            </View>
          ))}
        </View>

        {/* --- Experience Section --- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experience.map((exp) => (
            <View key={exp.id} style={styles.itemEntry}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>
                  {exp.title} -{' '}
                  <Text style={styles.itemCompany}>{exp.company}</Text>
                </Text>
                <Text style={styles.itemDates}>
                  {exp.startDate} – {exp.endDate}
                </Text>
              </View>
              <View style={styles.itemHeader}>
                {/* Display product/team and location on a second line if needed */}
                <Text style={styles.itemLocation}>
                  {exp.productOrTeam ? `${exp.productOrTeam}` : ''}
                </Text>
                <Text style={styles.itemLocation}>{exp.location}</Text>
              </View>
              {exp.bulletPoints.map((point, index) => (
                <Text key={index} style={styles.bulletPoint}>
                  • {point}
                </Text>
              ))}
            </View>
          ))}
        </View>

        {/* --- Projects Section --- */}
        {/* Note: Structure is very similar to Experience. Consider refactoring later. */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {projects.map((proj) => (
            <View key={proj.id} style={styles.itemEntry}>
              <View style={styles.itemHeader}>
                {/* Adjust display based on available fields */}
                <Text style={styles.itemTitle}>
                  {proj.company}
                  {proj.title ? ` - ${proj.title}` : ''}
                </Text>
                <Text style={styles.itemDates}>
                  {proj.startDate} – {proj.endDate}
                </Text>
              </View>
              <View style={styles.itemHeader}>
                <Text style={styles.itemLocation}>{proj.location}</Text>
              </View>
              {proj.bulletPoints.map((point, index) => (
                <Text key={index} style={styles.bulletPoint}>
                  • {point}
                </Text>
              ))}
            </View>
          ))}
        </View>

        {/* --- Skills Section --- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          {skills.map((skillCat) => (
            <View key={skillCat.id} style={styles.skillsCategory}>
              <Text>
                <Text style={styles.skillsCategoryTitle}>
                  {skillCat.category}:{' '}
                </Text>
                {skillCat.list.join(', ')}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

export default ResumePDF;
