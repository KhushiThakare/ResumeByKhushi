import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    fontSize: 12,
    textAlign: 'justify',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

const MyDocument = ({ uploadedImage, firstName, lastName, jobTitle, phone, email, address, country, city, facebookLink, linkedinLink, githubLink, websiteLink, skills, profile, experiences, education, languages, projects }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>{firstName} {lastName}</Text>
        <Text style={styles.content}>Job Title: {jobTitle}</Text>
        <Text style={styles.content}>Phone: {phone}</Text>
        <Text style={styles.content}>Email: {email}</Text>
        <Text style={styles.content}>Address: {address}, {city}, {country}</Text>
        <Text style={styles.content}>Facebook: {facebookLink}</Text>
        <Text style={styles.content}>LinkedIn: {linkedinLink}</Text>
        <Text style={styles.content}>GitHub: {githubLink}</Text>
        <Text style={styles.content}>Website: {websiteLink}</Text>
      </View>
      <View style={styles.section}>
        <Image src={uploadedImage} style={styles.image} />
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.content}>{profile}</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
