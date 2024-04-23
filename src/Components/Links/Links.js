import React, { useContext } from 'react'
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import { DetailsContext } from '../Context/DetailsContext';
const Links = () => {
    const {
        facebookLink,
        linkedinLink,
        githubLink,
        websiteLink,
        setFacebookLink,
        setLinkedInLink,
        setGithubLink,
        setWebsiteLink,
      } = useContext(DetailsContext);
  return (
    <div className="links" style={{marginTop: '20px' }}>
      <Typography variant="h6" gutterBottom>
          Links
        </Typography>
   

        <Grid container spacing={2}>           
      <Grid item xs={12} sm={6}>
        <TextField
          label="Facebook Link"
          variant="outlined"
          fullWidth
          value={facebookLink}
          onChange={(e) => setFacebookLink(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton disabled>
                  <FacebookIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
  <TextField
    label="LinkedIn Link"
    variant="outlined"
    fullWidth
    value={linkedinLink}
    onChange={(e) => setLinkedInLink(e.target.value)}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <IconButton disabled>
            <LinkedInIcon />
          </IconButton>
        </InputAdornment>
      ),
    }}
  />
</Grid>
      <Grid item xs={12} sm={6}>
  <TextField
    label="GitHub Link"
    variant="outlined"
    fullWidth
    value={githubLink}
    onChange={(e) => setGithubLink(e.target.value)}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <IconButton disabled>
            <GitHubIcon />
          </IconButton>
        </InputAdornment>
      ),
    }}
  />
</Grid>
<Grid item xs={12} sm={6}>
          <TextField
            label="Website Link"
            variant="outlined"
            fullWidth
            value={websiteLink}
            onChange={(e) => setWebsiteLink(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton disabled>
                    <LanguageIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

    </Grid>
      </div>
  )
}

export default Links