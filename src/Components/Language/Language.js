import React, { useContext, useEffect } from 'react';
import { DetailsContext } from '../Context/DetailsContext';
import {
  Grid,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  TextField,
  InputLabel,
} from '@material-ui/core';

const Language = () => {
  const { languages, setLanguages } = useContext(DetailsContext);

  useEffect(() => {
    if (languages.length === 0) {
      setLanguages([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (index, field, value) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index][field] = value;
    setLanguages(updatedLanguages);
  };

  const addLanguage = () => {
    if (languages.length < 5) {
      const newLanguages = [...languages, { name: '', level: '' }];
      setLanguages(newLanguages);
    }
  };

  const handleDeleteLanguage = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages.splice(index, 1);
    setLanguages(updatedLanguages);
  };

  return (
    <Grid item xs={12} style={{ marginTop: '20px' }}>
      <Typography variant="h6" gutterBottom>
        Languages
      </Typography>
      {languages.map((lang, index) => (
        <Grid container spacing={2} key={index}>
          <Grid item xs={12} sm={6}>
            <TextField
              label={`Language ${index + 1}`}
              variant="outlined"
              fullWidth
              value={lang.name || ''}
              onChange={(e) => handleInputChange(index, 'name', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id={`level-select-label-${index}`}>Level</InputLabel>
              <Select
                labelId={`level-select-label-${index}`}
                id={`level-select-${index}`}
                value={lang.level || ''}
                onChange={(e) => handleInputChange(index, 'level', e.target.value)}
                label="Level"
              >
                <MenuItem value="Beginner">Beginner</MenuItem>
                <MenuItem value="Intermediate">Intermediate</MenuItem>
                <MenuItem value="Expert">Expert</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'right' }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDeleteLanguage(index)}
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
          onClick={addLanguage}
          disabled={languages.length >= 5}
        >
          Add Language
        </Button>
      </Grid>
    </Grid>
  );
};

export default Language;
