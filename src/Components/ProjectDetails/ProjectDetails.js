import React, { useContext, useEffect } from 'react';
import { DetailsContext } from '../Context/DetailsContext';
import { Grid, TextField, Typography, Button } from '@material-ui/core';

const ProjectDetails = () => {
  const { projects, setProjects } = useContext(DetailsContext);

  useEffect(() => {
    if (projects.length === 0) {
      setProjects([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddProject = () => {
    setProjects([
      ...projects,
      {
        projectName: '',
        githubLink: '',
        hostedLink: '',
        startDate: '',
        endDate: '',
        projectDetails: '',
      },
    ]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  return (
    <Grid item xs={12} style={{ marginTop: '20px' }}>
      <Typography variant="h6" gutterBottom>
        Project Details
      </Typography>

      {projects.map((project, index) => (
        <Grid container spacing={2} key={index}>
          <Grid item xs={12}>
            <TextField
              label={`Project Name ${index + 1}`}
              variant="outlined"
              fullWidth
              value={project.projectName || ''}
              onChange={(e) => handleInputChange(index, 'projectName', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label={`GitHub Link ${index + 1}`}
              variant="outlined"
              fullWidth
              value={project.githubLink || ''}
              onChange={(e) => handleInputChange(index, 'githubLink', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label={`Hosted Link ${index + 1}`}
              variant="outlined"
              fullWidth
              value={project.hostedLink || ''}
              onChange={(e) => handleInputChange(index, 'hostedLink', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label={`Start Date ${index + 1}`}
              variant="outlined"
              fullWidth
              type="month"
              value={project.startDate || ''}
              onChange={(e) => handleInputChange(index, 'startDate', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label={`End Date ${index + 1}`}
              variant="outlined"
              fullWidth
              type="month"
              value={project.endDate || ''}
              onChange={(e) => handleInputChange(index, 'endDate', e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={`Project Details ${index + 1}`}
              variant="outlined"
              fullWidth
              multiline
              value={project.projectDetails || ''}
              onChange={(e) => handleInputChange(index, 'projectDetails', e.target.value)}
              inputProps={{ maxLength: 1500 }}
            />
          </Grid>
          {/* Delete button */}
          <Grid item xs={12} style={{ textAlign: 'right' }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDeleteProject(index)}
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
          onClick={handleAddProject}
          disabled={projects.length >= 5}
        >
          Add Project
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProjectDetails;
