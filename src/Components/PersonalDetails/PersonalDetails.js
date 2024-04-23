import React, { useContext } from "react";
import { DetailsContext } from "../Context/DetailsContext";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import "./PersonalDetails.css";

function PersonalDetails() {
  const {
    jobTitle,
    firstName,
    lastName,
    email,
    phone,
    address,
    country,
    city,
    selectedImage,
    handleImageChange,
    handleUpload,
    setJobTitle,
    setFirstName,
    setLastName,
    setEmail,
    setPhone,
    setCountry,
    setAddress,
    setCity,
  } = useContext(DetailsContext);
  return (
    <Grid item xs={12}>
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Wanted job title"
            variant="outlined"
            fullWidth
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <input
            type="file"
            style={{ display: "none" }}
            id="upload-button"
            onChange={handleImageChange}
          />
          <label htmlFor="upload-button" style={{ display: "block" }}>
            <Button variant="contained" component="span" className="upload-btn">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <CloudUploadIcon />
              )}
            </Button>
            <Button
              variant="contained"
              onClick={handleUpload}
              disabled={!selectedImage}
              style={{ width: "50%" }}
            >
              Upload
            </Button>
          </label>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
              required
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Country"
            variant="outlined"
            fullWidth
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="City"
            variant="outlined"
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PersonalDetails;
