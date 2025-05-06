import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

// --- Styles remain the same ---
const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.4,
  },
  headerContainer: {
    textAlign: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24, // Adjusted size
    fontWeight: 'bold',
    marginBottom: 15, // Adjusted margin
  },
  contactInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    fontSize: 9,
    marginBottom: 3,
  },
  contactItem: {
    marginHorizontal: 2, // Adjusted spacing
    textDecoration: 'none',
    color: 'black',
  },
  additionalInfo: {
    fontSize: 9,
    marginTop: 0, // Adjusted margin
  },
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
  itemCompany: {},
  itemLocation: {
    fontSize: 9,
    fontStyle: 'italic',
  },
  itemDates: {
    fontSize: 9,
    fontStyle: 'italic',
  },
  bulletPoint: {
    marginLeft: 10,
    marginBottom: 2,
  },
  skillsCategory: {
    marginBottom: 5,
  },
  skillsCategoryTitle: {
    fontWeight: 'bold',
  },
  // Removed placeholderText as we won't render the section at all
});

// The main PDF Document Component
function ResumePDF({ personalInfo, education, experience, project, skills }) {
  const documentTitle = `${personalInfo.name} - Generated Resume`;

  // Helper function to check if an array is valid and non-empty
  const hasItems = (arr) => Array.isArray(arr) && arr.length > 0;

  return (
    <Document title={documentTitle}>
      <Page size='A4' style={styles.page}>
        {/* --- Header Section (Always Rendered) --- */}
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
          {/* Conditionally render additional info only if it exists */}
          {personalInfo.additionalInfo && (
            <Text style={styles.additionalInfo}>
              {personalInfo.additionalInfo}
            </Text>
          )}
        </View>

        {/* --- Education Section (Conditionally Rendered) --- */}
        {hasItems(education) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((edu) => (
              <View key={edu.id} style={styles.educationEntry}>
                <View style={styles.degreeLine}>
                  <Text>
                    {/* Using defaults for safety, though likely strings */}
                    {String(edu.degree || '')} - {String(edu.field || '')}
                  </Text>
                  <Text>{String(edu.graduation || '')}</Text>
                </View>
                <Text style={styles.institutionLine}>
                  {String(edu.institution || '')}
                  {edu.faculty ? `, ${String(edu.faculty)}` : ''}{' '}
                  {edu.additionalInfo ? `- ${edu.additionalInfo}` : ''}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* --- Experience Section (Conditionally Rendered) --- */}
        {hasItems(experience) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {experience.map((exp) => (
              <View key={exp.id} style={styles.itemEntry}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>
                    {String(exp.title || '')} -{' '}
                    <Text style={styles.itemCompany}>
                      {String(exp.company || '')}
                    </Text>
                  </Text>
                  <Text style={styles.itemDates}>
                    {String(exp.startDate || '')} – {String(exp.endDate || '')}
                  </Text>
                </View>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemLocation}>
                    {exp.productOrTeam ? `${String(exp.productOrTeam)}` : ''}
                  </Text>
                  <Text style={styles.itemLocation}>
                    {String(exp.location || '')}
                  </Text>
                </View>
                {/* Ensure bulletPoints is an array before mapping */}
                {Array.isArray(exp.bulletPoints) &&
                  exp.bulletPoints.map((point, index) => (
                    <Text key={index} style={styles.bulletPoint}>
                      • {String(point || '')}
                    </Text>
                  ))}
              </View>
            ))}
          </View>
        )}

        {/* --- Projects Section (Conditionally Rendered) --- */}
        {hasItems(project) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {project.map((proj) => (
              <View key={proj.id} style={styles.itemEntry}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>
                    {String(proj.company || '')}
                    {proj.title ? ` - ${String(proj.title)}` : ''}
                  </Text>
                  <Text style={styles.itemDates}>
                    {String(proj.startDate || '')} –{' '}
                    {String(proj.endDate || '')}
                  </Text>
                </View>
                {/* Conditionally render location only if it exists */}
                {proj.location && (
                  <View style={styles.itemHeader}>
                    <Text style={styles.itemLocation}>
                      {String(proj.location)}
                    </Text>
                  </View>
                )}
                {/* Ensure bulletPoints is an array before mapping */}
                {Array.isArray(proj.bulletPoints) &&
                  proj.bulletPoints.map((point, index) => (
                    <Text key={index} style={styles.bulletPoint}>
                      • {String(point || '')}
                    </Text>
                  ))}
              </View>
            ))}
          </View>
        )}

        {/* --- Skills Section (Conditionally Rendered) --- */}
        {hasItems(skills) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            {skills.map(
              (skillCat) =>
                // Ensure category exists and list is a non-empty array
                skillCat.category &&
                hasItems(skillCat.list) && (
                  <View key={skillCat.id} style={styles.skillsCategory}>
                    <Text>
                      <Text style={styles.skillsCategoryTitle}>
                        {String(skillCat.category)}:{' '}
                      </Text>
                      {/* Filter out empty strings before joining */}
                      {skillCat.list
                        .filter((item) => String(item).trim() !== '')
                        .join(', ')}
                    </Text>
                  </View>
                )
            )}
          </View>
        )}
      </Page>
    </Document>
  );
}

export default ResumePDF;
