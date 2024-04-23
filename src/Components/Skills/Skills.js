import React, { useContext, useEffect } from 'react';
import { DetailsContext } from '../Context/DetailsContext';
import { Grid, TextField, Typography, Button } from '@material-ui/core';

function Skills() {
  const { skills, setSkills } = useContext(DetailsContext);

  useEffect(() => {
    if (skills.length === 0) {
      setSkills([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addSkill = () => {
    if (skills.length < 5) {
      setSkills([...skills, { skill: '', level: 0 }]);
    }
  };

  const handleSkillChange = (index, field, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index][field] = value;
    setSkills(updatedSkills);
  };

  const deleteSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  return (
    <div className="skills">
      <Typography variant="h6" gutterBottom>
        Skills
      </Typography>
      {skills.map((skill, index) => (
        <Grid container spacing={2} key={index}>
          <Grid item xs={12} sm={6}>
            <TextField
              label={`Skill ${index + 1}`}
              variant="outlined"
              fullWidth
              value={skill.skill}
              onChange={(e) => handleSkillChange(index, 'skill', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label={`Skill ${index + 1} Level`}
              variant="outlined"
              fullWidth
              type="number"
              value={skill.level}
              onChange={(e) =>
                handleSkillChange(index, 'level', parseInt(e.target.value, 10) || 0)
              }
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => deleteSkill(index)}
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
          onClick={addSkill}
          disabled={skills.length >= 5}
        >
          Add Skill
        </Button>
      </Grid>
    </div>
  );
}

export default Skills;
