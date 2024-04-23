import React, { createContext, useContext, useState } from 'react';

export const DetailsContext = createContext();

export const DetailsProvider = ({ children }) => {
  const initialDetails = {
    jobTitle: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    country: '',
    city: '',
    facebookLink: '',
    linkedinLink: '',
    githubLink: '',
    websiteLink: '',
    skills: [{ skill: '', level: 0 }],
    profile:'',
    experiences:'',
    education:'',
    languages:'',
    projects:'',
  };

  const [personalDetails, setPersonalDetails] = useState(initialDetails);

  const setDetails = (updatedDetails) => {
    setPersonalDetails((prevDetails) => {
      return { ...prevDetails, ...updatedDetails };
    });
  };

  return (
    <DetailsContext.Provider value={{ personalDetails, setDetails }}>
      {children}
    </DetailsContext.Provider>
  );
};

export const useDetails = () => {
  const context = useContext(DetailsContext);
  if (!context) {
    throw new Error('useDetails must be used within a DetailsProvider');
  }
  return context;
};
