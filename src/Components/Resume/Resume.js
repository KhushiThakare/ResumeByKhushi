import React, { useContext, useState } from "react";
import { Grid } from '@material-ui/core';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { DetailsContext } from "../Context/DetailsContext";

const styles = StyleSheet.create({
  // Your styles here...
  page: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 10,
  },
  sectionLeft: {
    width: "30%",
    marginRight: 10,
    display: "flex",
    alignItems: "center",
    color: "#fff",
    padding: 20,
    backgroundColor: "#131d36c9",
  },
  sectionRight: {
    width: "70%",
    padding:15,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bolder',
    marginBottom: 5, 
  },
  jobtitle:{
    fontSize: 12,
    fontWeight: "bolder",
    color:"#fff",
    marginRight:5,
    marginBottom:5,
  },
  text: {
    fontSize: 11,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    padding: "5px 0", 
    alignItems: "flex-start", 
  },
  subHeading: {
    fontSize: 15,
    fontWeight: "bold",
    color:"#000",
    marginRight:5,
    marginTop:10,
    marginBottom:5,
  },
  subText: {
    fontSize: 12,
    fontWeight: "bold",
    color:'#babdc8',
  },
  profileImage: {
    marginBottom:10,
    height: 80,
    width: 80,
    borderRadius: "50%",
  },
  link: {
    textDecoration: 'underline',
    color: 'blue',
    cursor: 'pointer',
  },
  progressBarContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  progressBar: {
    width: '100px',
    borderRadius:'5px',
    overflow:'hidden',
    height: 5,
    backgroundColor: '#fff2',
    marginBottom: 5,
  },
  progress: {
    
    height: '5px',
    backgroundColor: '#fff',
  },
  experiencesContainer: {
    marginTop: 5,
  },
  experience: {
    marginBottom: 10,
    padding: 10,
    borderWidth: '1',
    borderRadius: 5,
    borderColor: 'lightgrey',
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  designation: {
    fontSize: 13,
    color:'grey',
    marginBottom: 5,
  },
  dateContainer: {
    flexDirection: 'row',
  },
  date: {
    fontSize: 10,
    color:'#2F4F4F',
  },
  workDetails: {
    fontSize: 11,
    color:'#282A35',
    
  },

  educationsContainer: {
    marginTop: 5,
  },
  education: {
    marginBottom: 5,
    padding: 10,
  },
  collegeName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  course: {
    fontSize: 13,
    color:'grey',
    marginBottom: 5,
  },
  language:{
    padding:3,
  },
  projectsContainer: {
    padding: 10,
  },
  project: {
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  githubLink: {
    color: 'blue',
    fontSize:7,

  },
  hostedLink: {
    color: 'green',
    fontSize:8,
    marginBottom: 5,
  },
  label:{
    display:"flex",
    fontSize:8,
    fontWeight:'bold',
    alignItems:"center",
  },
  projectDetails: {
    fontStyle: 'italic',
  },
  '@media max-width: 768px': {
    sectionLeft: {
      width: '100%',
      marginRight: 0, 
    },
    sectionRight: {
      width: '100%', 
    },
    page: {
      flexDirection: 'column', 
    },
    profileImage: {
      height: 60,
      width: 60,
      borderRadius: '50%', 
    },}
  

});

const MyDocument = ({
  uploadedImage,
  firstName,
  lastName,
  jobTitle,
  phone,
  email,
  address,
  country,
  city,
  facebookLink,
  linkedinLink,
  githubLink,
  websiteLink,
  skills,
  profile,
  experiences,
  education,
  languages,
  projects,
}) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.sectionLeft}>
        {uploadedImage ? (
          <Image src={uploadedImage} style={styles.profileImage} />
        ) : (
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
            style={styles.profileImage}
          />
        )}
        <View style={styles.section}>
          <Text style={styles.Heading}>
            {firstName || "Name"} {lastName}
          </Text>
          <Text style={styles.jobtitle}>{jobTitle || "JobTitle"}</Text>
          <Text style={styles.subHeading}>Details</Text>
          <Text style={styles.subText}>Address</Text>
          <Text style={styles.text}>
            {`${address} ${city} ${country}` || "Address"}
          </Text>

          <Text style={styles.subText}>Phone</Text>
          <Text style={styles.text}>{phone}</Text>
          <Text style={styles.subText}>Email</Text>
          <Text style={styles.text}>{email}</Text>
          <Text style={styles.subHeading}>Links</Text>
         
          <Text style={styles.text}>
      {facebookLink && (
        <Image
          src="https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-512.png"
          alt="Facebook Logo"
          style={{ width: 20 }} // Adjust the width or styles as needed
        />
      )}
      {facebookLink }
    </Text>
    
          <Text style={styles.text}>
          {linkedinLink &&( 
          <Image src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-512.png"
    alt="Facebook Logo"
    style={{ width: 20}}
  />)}
    {linkedinLink}</Text>
  <Text style={styles.text}>
    {githubLink &&(<Image
    src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
    alt="Facebook Logo"
    style={{ width: 20}}
  />)} {githubLink}</Text>
  <Text style={styles.text}>
    {websiteLink && (<Image
    
    src="https://cdn4.iconfinder.com/data/icons/software-line/32/software-line-02-512.png"
    alt="Facebook Logo"
    style={{ width: 20}} // Adjust the width or styles as needed
  />)} {websiteLink}</Text>
<Text style={styles.subHeading}>Skills</Text>
  <View style={styles.progressBarContainer}>
  {skills.map((skill, index) => (
    <View key={index}>
      <Text style={styles.text}>{skill.skill}</Text>
      <View style={styles.progressBar}>
        <View
          style={{
            ...styles.progress,
            width: `${skill.level}px`,
          }}
        />
      </View>
    </View>
  ))}
</View>

        </View> 
      </View>
      <View style={styles.sectionRight}>
        <View style={styles.section}>
          <Text style={styles.heading}>Profile</Text>
          <Text style={styles.text}>
            {profile}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Experience</Text>
          <View>
          <View style={styles.experiencesContainer}>
        {experiences.map((experience, index) => (
          <View key={index} style={styles.experience}>
            <Text style={styles.companyName}>{experience.companyName}</Text>
            <Text style={styles.designation}>{experience.designation}</Text>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>{`${experience.startDate} - `}</Text>
              <Text style={styles.date}>{`${experience.endDate}`}</Text>
            </View>
            <Text style={styles.workDetails}>{`Work Details: ${experience.workDetails}`}</Text>
          </View>
        ))}
      </View>
    </View>
        </View>
        <View style={styles.section}>
      <Text style={styles.heading}>Projects</Text>
      <View>
        <View style={styles.projectsContainer}>
          {projects.map((project, index) => (
            <View key={index} style={styles.project}>
              <Text style={styles.projectName}>{project.projectName}</Text>
              <Text style={styles.label}>Github Link:
          <Text style={styles.githubLink}>{project.githubLink}</Text></Text>
          <Text style={styles.label}>Hosted Link:
          <Text style={styles.hostedLink}>{project.hostedLink}</Text></Text>
              <View style={styles.dateContainer}>
                <Text style={styles.date}>{`${project.startDate} - `}</Text>
                <Text style={styles.date}>{`${project.endDate}`}</Text>
              </View>
              <Text style={styles.workDetails}>{`Project Details: ${project.projectDetails}`}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Education</Text>
          <View>
          <View style={styles.educationsContainer}>
        {education.map((education, index) => (
          <View key={index} style={styles.education}>
            <Text style={styles.collegeName}>{education.collegeName}</Text>
            <Text style={styles.course}>{education.course}</Text>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>{`${education.startDate} - `}</Text>
              <Text style={styles.date}>{`${education.endDate}`}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Languages</Text>
          <View>
        {languages.map((language, index) => (
          <View key={index} style={styles.language}>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>{`${language.name} - `}</Text>
              <Text style={styles.date}>{`${language.level}`}</Text>
            </View>
          </View>
        ))}
    
    </View>
        </View>
      </View>
    </Page>
  </Document>
);

const Resume = () => {
  const {
    uploadedImage,
    firstName,
    lastName,
    jobTitle,
    phone,
    email,
    address,
    country,
    city,
    facebookLink,
    linkedinLink,
    githubLink,
    websiteLink,
    skills,
    profile,
    experiences,
    education,
    languages,
    projects,
  } = useContext(DetailsContext);

  const [isDownloadClicked, setIsDownloadClicked] = useState(false);

  const handleDownloadClick = () => {
    setIsDownloadClicked(true);
  };

  return (
    <Grid item xs={12} style={{ marginTop: '10px', display:'flex', flexDirection:'column' ,alignItems:'center' }}>
      <PDFDownloadLink
        document={<MyDocument
          uploadedImage={uploadedImage}
          firstName={firstName}
          lastName={lastName}
          jobTitle={jobTitle}
          phone={phone}
          email={email}
          address={address}
          country={country}
          city={city}
          facebookLink={facebookLink}
          linkedinLink={linkedinLink}
          githubLink={githubLink}
          websiteLink={websiteLink}
          skills={skills}
          profile={profile}
          experiences={experiences}
          education={education}
          languages={languages}
          projects={projects}
        />}
        fileName="resume.pdf"
        className="downloadButton"
        onClick={handleDownloadClick}
      >
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download PDF'
        }
      </PDFDownloadLink>
      {isDownloadClicked && (
        <PDFViewer style={{ width: '100%', maxWidth: '800px', height: '700px', marginTop: '10px' }}>
          <MyDocument
            uploadedImage={uploadedImage}
            firstName={firstName}
            lastName={lastName}
            jobTitle={jobTitle}
            phone={phone}
            email={email}
            address={address}
            country={country}
            city={city}
            facebookLink={facebookLink}
            linkedinLink={linkedinLink}
            githubLink={githubLink}
            websiteLink={websiteLink}
            skills={skills}
            profile={profile}
            experiences={experiences}
            education={education}
            languages={languages}
            projects={projects}
          />
        </PDFViewer>
      )}
    </Grid>
  );
};

export default Resume;
