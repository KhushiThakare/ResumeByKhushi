// App.js
import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Resume from "./Components/Resume/Resume";
import PersonalDetails from "./Components/PersonalDetails/PersonalDetails";
import Links from "./Components/Links/Links";
import { DetailsContext } from "./Components/Context/DetailsContext";
import Skills from "./Components/Skills/Skills";
import Profile from "./Components/Profile/Profile";
import Experience from "./Components/Experience/Experience";
import Education from "./Components/Education/Education";
import Language from "./Components/Language/Language";
import ProjectDetails from "./Components/ProjectDetails/ProjectDetails";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import Footer from "./Components/Footer/Footer";


function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [jobTitle, setJobTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [facebookLink, setFacebookLink] = useState('');
  const [linkedinLink, setLinkedInLink] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [websiteLink, setWebsiteLink] = useState('');
  const [skills, setSkills] = useState([]);
  const [profile, setProfile] = useState('');
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [projects, setProjects] = useState([]);
  const [formCompletion, setFormCompletion] = useState(0);
  const context = useContext(DetailsContext);
  
  const handleImageChange = (event) => {
    const image = event.target.files[0];
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(image);
    }
  };

  const handleUpload = () => {
    setUploadedImage(selectedImage);
  };
   
  useEffect(() => {
    const countFilledFields = () => {
      const fieldsToCheck = [
        selectedImage,
        uploadedImage,
        jobTitle,
        firstName,
        lastName,
        email,
        phone,
        address,
        country,
        city,
        facebookLink,
        linkedinLink,
        githubLink,
        websiteLink,
        profile,
        profile,
        ...skills.flat(),
        ...experiences.flat(),
        ...education.flat(),
        ...languages.flat(),
        ...projects.flat(),
      ];
    
      const filledFields = fieldsToCheck.reduce((count, field) => {
        if (Array.isArray(field)) {
          if (field.length > 0 && field.every(obj => typeof obj === 'object')) {
            return count; // Do not increment if it's an array of objects
          }
          return count + (field.length > 0 ? 1 : 0); // Increment if it's a non-empty array of non-objects
        }
        if (field !== null && field !== undefined && field.toString().trim() !== '') {
          return count + 1;
        }
        return count;
      }, 0);
    
      return filledFields;
    };
    const totalFields = 16 + skills.flat().length + experiences.flat().length + education.flat().length + languages.flat().length + projects.flat().length;

    const filledFields = countFilledFields();
    console.log(filledFields,totalFields);
    const completion = (filledFields / totalFields) * 100;
    const completionValue = isNaN(completion) ? 0 : Math.floor(completion); // Use Math.floor() to round down
setFormCompletion(completionValue);  // Ensure it starts from 0
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },  [context,
    selectedImage,
    uploadedImage,
    jobTitle,
    firstName,
    lastName,
    email,
    phone,
    address,
    country,
    city,
    facebookLink,
    linkedinLink,
    githubLink,
    websiteLink,
    profile,
    skills,
    experiences,
    education,
    languages,
    projects,
  ]);
  
  
  
  
  
  return (
    <DetailsContext.Provider
      value={{
        selectedImage,
        uploadedImage,
        jobTitle,
        firstName,
        lastName,
        email,
        phone,
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
        handleImageChange,
        handleUpload,
        setJobTitle,
        setFirstName,
        setLastName,
        setEmail,
        setPhone,
        setAddress,
        setCountry,
        setCity,
        setFacebookLink,
        setLinkedInLink,
        setGithubLink,
        setWebsiteLink,
        setSkills,
        setProfile,
        setExperiences,
        setEducation,
        setLanguages,
        setProjects,
      }}
    >
      <div className="app">
        <Header />
        <div className="root">
          <Grid container  spacing={3}  direction="row" md-direction="row-reverse">
            <Grid item xs={12} sm={6}>
            <ProgressBar completion={formCompletion} />
              <Paper className="paper content1">
              
                <PersonalDetails />
                <Links />
                <Skills />
                <Profile />
                <Experience />
                <ProjectDetails />
                <Education />
                <Language />
                <Footer />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className="paper content2">
                <Resume />
                
              </Paper>
              
            </Grid>
           
          </Grid>
          
        </div>
        
      </div>
      
    </DetailsContext.Provider>
  );
}

export default App;
