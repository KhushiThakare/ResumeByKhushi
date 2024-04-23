import React, { useContext } from 'react';
import { DetailsContext } from '../Context/DetailsContext';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const Profile = () => {
  const { profile, setProfile } = useContext(DetailsContext);

  const handleProfileChange = (event) => {
    const inputValue = event.target.value;
    // Limiting input to 1500 words
    const words = inputValue.split(/\s+/);
    if (words.length <= 1500) {
      setProfile(inputValue);
    }
  };

  return (
    <Grid item xs={12} style={{marginTop: '20px' }}>
      <Typography variant="h6" gutterBottom>
        Profile
      </Typography>
      <Grid item xs={12}>
        <TextField
          label="Profile (1500 words max)"
          variant="outlined"
          fullWidth
          multiline
          value={profile}
          onChange={handleProfileChange}
          inputProps={{ maxLength: 1500 }} // Set max length in characters (approx. 150 words)
        />
      </Grid>
    </Grid>
  );
};

export default Profile;
