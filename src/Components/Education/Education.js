import React, { useContext, useEffect } from 'react';
import { DetailsContext } from '../Context/DetailsContext';
import { Grid, TextField, Typography, Button } from '@material-ui/core';

const Education = () => {
  const { education, setEducation } = useContext(DetailsContext);

  useEffect(() => {
    if (education.length === 0) {
      setEducation([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const addEducation = () => {
    if (education.length < 5) {
      setEducation([
        ...education,
        { collegeName: '', course: '', startDate: '', endDate: '' },
      ]);
    }
  };

  const handleDeleteEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  return (
    <Grid item xs={12} style={{ marginTop: '20px' }}>
      <Typography variant="h6" gutterBottom>
        Education
      </Typography>
      {education.map((edu, index) => (
        <Grid container spacing={2} key={index}>
          <Grid item xs={12} sm={6}>
            <TextField
              label={`College Name ${index + 1}`}
              variant="outlined"
              fullWidth
              value={edu.collegeName || ''}
              onChange={(e) => handleInputChange(index, 'collegeName', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label={`Course ${index + 1}`}
              variant="outlined"
              fullWidth
              value={edu.course || ''}
              onChange={(e) => handleInputChange(index, 'course', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label={`Start Date ${index + 1}`}
              variant="outlined"
              fullWidth
              type="month"
              value={edu.startDate || ''}
              onChange={(e) => handleInputChange(index, 'startDate', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label={`End Date ${index + 1}`}
              variant="outlined"
              fullWidth
              type="month"
              value={edu.endDate || ''}
              onChange={(e) => handleInputChange(index, 'endDate', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'right' }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDeleteEducation(index)}
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
          onClick={addEducation}
          disabled={education.length >= 5}
        >
          Add Education
        </Button>
      </Grid>
    </Grid>
  );
};

export default Education;
