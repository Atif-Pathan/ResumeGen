import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
} from '@react-pdf/renderer';

const PAGE_VERTICAL_MARGIN = 25;
const PAGE_HORIZONTAL_MARGIN = 30;
const BULLET = '•';

const styles = StyleSheet.create({
  page: {
    paddingTop: PAGE_VERTICAL_MARGIN,
    paddingBottom: PAGE_VERTICAL_MARGIN,
    paddingHorizontal: PAGE_HORIZONTAL_MARGIN,
    fontFamily: 'Times-Roman',
    fontSize: 10,
    lineHeight: 1.3,
    color: '#000000',
    gap: 10,
  },
  // --- HEADER ---
  headerContainer: {
    textAlign: 'center',
    marginBottom: 2,
  },
  name: {
    fontFamily: 'Times-Bold',
    fontSize: 32,
    marginBottom: 26,
  },
  contactInfoContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap', // Try to keep on one line
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 10,
    fontFamily: 'Times-Roman', // Base font for this line
    color: '#000000', // Base color
  },
  contactItem: {
    // For non-link text items in the contact line
    marginHorizontal: 1,
    textDecoration: 'none', // Ensure no default decoration
  },
  contactLink: {
    // Specific style for links
    fontFamily: 'Times-Bold',
    marginHorizontal: 1,
    textDecoration: 'underline',
    color: '#1F4E79', // Standard blue for links
  },
  contactSeparator: {
    fontFamily: 'Times-Bold',
    marginHorizontal: 1,
    color: '#333333', // Slightly lighter separator
  },
  section: {
    flexDirection: 'col',
    gap: 7,
  },
  sectionTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 14,
    color: '#000000',
    borderBottomWidth: 1.5,
    borderBottomColor: '#000000',
    textTransform: 'uppercase',
    paddingBottom: 3,
    marginBottom: -2,
  },

  // --- EDUCATION ---
  educationEntry: {},
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  educationInstitution: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 12.5,
  },
  educationDegree: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 12.5,
  },
  educationField: {
    fontFamily: 'Times-Italic',
    fontSize: 11.5,
  },
  educationDate: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 12.5,
  },
  educationDetailsLine: {
    flexDirection: 'row',
    justifyContent: 'left',
    gap: 3,
    marginTop: 2,
  },
  educationAdditional: {
    fontFamily: 'Times-BoldItalic',
    fontSize: 11.5,
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  // --- EXPERIENCE & PROJECT COMMON STYLES ---
  itemEntry: {},
  itemLine1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  itemLine1Left: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemCompany: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 12.5,
  },
  itemProductTeam: {
    marginTop: 1,
    fontFamily: 'Helvetica-Oblique',
    fontSize: 11.5,
  },
  itemDates: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 12.5,
    textAlign: 'right',
    flexShrink: 0,
  },
  itemLine2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  itemLine2Left: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemTitle: {
    fontFamily: 'Times-Italic',
    fontSize: 11.5,
  },
  itemTeamSize: {
    fontFamily: 'Times-Italic',
    fontSize: 11.5,
  },
  itemLocation: {
    fontFamily: 'Times-Italic',
    fontSize: 11.5,
    textAlign: 'right',
    flexShrink: 0,
  },
  bulletPointItem: {
    // Container for each bullet point (bullet + text)
    flexDirection: 'row',
    marginLeft: 2, // Original indent for the line
    marginTop: 2,
    alignItems: 'flex-start', // Align bullet with start of multi-line text
    gap: 10, // Gap between bullet character and text
  },
  bulletChar: {
    // Style for the bullet character itself
    fontFamily: 'Times-Roman', // Consistent font
    fontSize: 14, // Slightly larger bullet character
    marginTop: -2,
  },
  bulletText: {
    // Style for the text content of the bullet point
    fontFamily: 'Times-Roman',
    fontSize: 10.5, // Original font size for bullet text
    flex: 1, // Allow text to wrap and take remaining space
  },
  // --- SKILLS ---
  skillsCategory: {},
  skillsCategoryTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 12,
  },
  skillsItems: {
    fontFamily: 'Times-Roman',
    fontSize: 10.5,
  },
  skillsBulletPoints: {
    flexDirection: 'column',
    gap: 2,
  },
});

function ResumePDF({ personalInfo, education, experience, project, skills }) {
  const documentTitle = `${personalInfo.name || 'Resume'} - Generated Resume`;
  const hasItems = (arr) => Array.isArray(arr) && arr.length > 0;
  const hasPrimaryContact =
    personalInfo.phone ||
    personalInfo.email ||
    personalInfo.linkedin ||
    personalInfo.github;

  return (
    <Document title={documentTitle}>
      <Page size='A4' style={styles.page}>
        <View style={styles.headerContainer}>
          <Text style={styles.name}>{personalInfo.name || ''}</Text>
          <View style={styles.contactInfoContainer}>
            {' '}
            {/* Changed class name */}
            {personalInfo.phone && (
              <Text style={styles.contactItem}>{personalInfo.phone}</Text>
            )}
            {personalInfo.phone && personalInfo.email && (
              <Text style={styles.contactSeparator}> | </Text>
            )}
            {personalInfo.email && (
              <Text style={styles.contactLink}>{personalInfo.email}</Text>
            )}
            {(personalInfo.phone || personalInfo.email) && // Separator before LinkedIn
              personalInfo.linkedin && (
                <Text style={styles.contactSeparator}> | </Text>
              )}
            {personalInfo.linkedin && (
              <Link style={styles.contactLink} src={personalInfo.linkedin}>
                {personalInfo.linkedin.replace(/^https?:\/\//, '')}
              </Link>
            )}
            {personalInfo.linkedin &&
              personalInfo.github && ( // Separator before GitHub
                <Text style={styles.contactSeparator}> | </Text>
              )}
            {personalInfo.github && (
              <Link style={styles.contactLink} src={personalInfo.github}>
                {personalInfo.github.replace(/^https?:\/\//, '')}
              </Link>
            )}
            {/* Conditional separator and additional info */}
            {hasPrimaryContact && personalInfo.additionalInfo && (
              <Text style={styles.contactSeparator}> | </Text>
            )}
            {personalInfo.additionalInfo && (
              <Text style={styles.contactItem}>
                {''}
                {/* Use contactItem for consistent styling */}
                {personalInfo.additionalInfo}
              </Text>
            )}
          </View>
        </View>

        {hasItems(education) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((edu) => (
              <View key={edu.id} style={styles.educationEntry}>
                <View style={styles.educationHeader}>
                  <Text>
                    <Text style={styles.educationInstitution}>
                      {String(edu.institution || '')}
                      {edu.faculty ? ` – ${String(edu.faculty)}` : ''}
                    </Text>
                    {edu.degree && (
                      <Text style={styles.educationDegree}>
                        , {String(edu.degree)}
                      </Text>
                    )}
                  </Text>
                  <Text style={styles.educationDate}>
                    {String(edu.graduation || '')}
                  </Text>
                </View>
                <View style={styles.educationDetailsLine}>
                  <Text style={styles.educationField}>
                    {String(edu.field || '')}
                  </Text>
                  {edu.additionalInfo && (
                    <Text style={styles.educationAdditional}>
                      {''}
                      {/* Style applied here */}
                      {String(edu.additionalInfo)}
                    </Text>
                  )}
                </View>
              </View>
            ))}
          </View>
        )}

        {hasItems(experience) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {experience.map((exp) => (
              <View key={exp.id} style={styles.itemEntry}>
                <View style={styles.itemLine1}>
                  <View style={styles.itemLine1Left}>
                    <Text style={styles.itemCompany}>
                      {String(exp.company || '')}
                    </Text>
                    {exp.productOrTeam && (
                      <Text style={styles.itemProductTeam}>
                        , {String(exp.productOrTeam)}
                      </Text>
                    )}
                  </View>
                  <Text style={styles.itemDates}>
                    {String(exp.startDate || '')} – {String(exp.endDate || '')}
                  </Text>
                </View>
                <View style={styles.itemLine2}>
                  <View style={styles.itemLine2Left}>
                    <Text style={styles.itemTitle}>
                      {String(exp.title || '')}
                    </Text>
                    {exp.teamSize && (
                      <Text style={styles.itemTeamSize}>
                        {` – team of ${exp.teamSize}`}
                      </Text>
                    )}
                  </View>
                  <Text style={styles.itemLocation}>
                    {String(exp.location || '')}
                  </Text>
                </View>
                {Array.isArray(exp.bulletPoints) &&
                  exp.bulletPoints
                    .filter((point) => String(point || '').trim() !== '')
                    .map((point, index) => (
                      <View key={index} style={styles.bulletPointItem}>
                        <Text style={styles.bulletChar}>{BULLET}</Text>
                        <Text style={styles.bulletText}>{String(point)}</Text>
                      </View>
                    ))}
              </View>
            ))}
          </View>
        )}

        {hasItems(skills) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsBulletPoints}>
              {skills.map(
                (skillCat) =>
                  skillCat.category &&
                  hasItems(skillCat.list) && (
                    <View key={skillCat.id} style={styles.skillsCategory}>
                      <Text style={styles.skillsItems}>
                        <Text style={styles.skillsCategoryTitle}>
                          {String(skillCat.category).trim()}:{' '}
                        </Text>
                        {skillCat.list
                          .filter((item) => String(item).trim() !== '')
                          .join(', ')}
                      </Text>
                    </View>
                  )
              )}
            </View>
          </View>
        )}

        {hasItems(project) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {project.map((proj) => (
              <View key={proj.id} style={styles.itemEntry}>
                <View style={styles.itemLine1}>
                  <View style={styles.itemLine1Left}>
                    <Text style={styles.itemCompany}>
                      {String(proj.company || '')}
                    </Text>
                    {proj.productOrTeam && (
                      <Text style={styles.itemProductTeam}>
                        , {String(proj.productOrTeam)}
                      </Text>
                    )}
                  </View>
                  <Text style={styles.itemDates}>
                    {String(proj.startDate || '')} –{' '}
                    {String(proj.endDate || '')}
                  </Text>
                </View>
                {(proj.title || proj.location || proj.teamSize) && (
                  <View style={styles.itemLine2}>
                    <View style={styles.itemLine2Left}>
                      {proj.title && (
                        <Text style={styles.itemTitle}>
                          {String(proj.title)}
                        </Text>
                      )}
                      {proj.teamSize && (
                        <Text style={styles.itemTeamSize}>
                          {`${proj.title ? ' – ' : ''}team of ${proj.teamSize}`}
                        </Text>
                      )}
                    </View>
                    {proj.location && (
                      <Text style={styles.itemLocation}>
                        {String(proj.location)}
                      </Text>
                    )}
                  </View>
                )}
                {Array.isArray(proj.bulletPoints) &&
                  proj.bulletPoints
                    .filter((point) => String(point || '').trim() !== '')
                    .map((point, index) => (
                      <View key={index} style={styles.bulletPointItem}>
                        <Text style={styles.bulletChar}>{BULLET}</Text>
                        <Text style={styles.bulletText}>{String(point)}</Text>
                      </View>
                    ))}
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}

export default ResumePDF;
