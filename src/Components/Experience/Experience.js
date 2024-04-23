import React, { useContext, useEffect } from 'react';
import { DetailsContext } from '../Context/DetailsContext';
import { Grid, TextField, Typography, Button } from '@material-ui/core';

const Experience = () => {
  const { experiences, setExperiences } = useContext(DetailsContext);

  useEffect(() => {
    if (experiences.length === 0) {
      setExperiences([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        companyName: '',
        designation: '',
        startDate: '',
        endDate: '',
        workDetails: '',
      },
    ]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = value;
    setExperiences(updatedExperiences);
  };

  const handleDeleteExperience = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  return (
    <Grid item xs={12} style={{ marginTop: '20px' }}>
      <Typography variant="h6" gutterBottom>
        Experience
      </Typography>

      {experiences.map((experience, index) => (
        <Grid container spacing={2} key={index}>
          <Grid item xs={12} sm={6}>
            <TextField
              label={`Company Name ${index + 1}`}
              variant="outlined"
              fullWidth
              value={experience.companyName || ''}
              onChange={(e) => handleInputChange(index, 'companyName', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label={`Designation ${index + 1}`}
              variant="outlined"
              fullWidth
              value={experience.designation || ''}
              onChange={(e) => handleInputChange(index, 'designation', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label={`Start Date ${index + 1}`}
              variant="outlined"
              fullWidth
              type="month"
              value={experience.startDate || ''}
              onChange={(e) => handleInputChange(index, 'startDate', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label={`End Date ${index + 1}`}
              variant="outlined"
              fullWidth
              type="month"
              value={experience.endDate || ''}
              onChange={(e) => handleInputChange(index, 'endDate', e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={`Work Details ${index + 1}`}
              variant="outlined"
              fullWidth
              multiline
              value={experience.workDetails || ''}
              onChange={(e) => handleInputChange(index, 'workDetails', e.target.value)}
              inputProps={{ maxLength: 1500 }}
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'right' }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDeleteExperience(index)}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      ))}
      <Grid item xs={12} style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddExperience}
          disabled={experiences.length >= 5}
        >
          Add Experience
        </Button>
      </Grid>
    </Grid>
  );
};

export default Experience;
