import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [currentSection, setCurrentSection] = useState('name');

  const resumeData = {
    imageUrl: require ('./assets/De Leon.jpeg'),
    name: 'Hanz Joseph De Leon',
    course: 'Bachelor of Science in Information Technology',
    education: {
      elementary: 'AC. Elementaery School',
      elementaryYear: '2008',
      highSchool: 'FG. Calderon Highschool',
      highSchoolYear: '2015',
      college: 'GLobal Reciprocal College',
      collegeYear: '2021',
    },

    about: `My name is Hanz Joseph Deleon, and I am 21 years old. I am an IT student at Global Reciprocal College. I enjoy watching tutorials on YouTube about programming languages and watching Anime. I hope to learn a lot about programming.`,
    
    
    projects:
      {
        projectName: 'Jarvy',
        imageSrc: 'https://www.miyens.com/wp-content/uploads/2024/02/jarvy-300x300.png',
        link: 'https://jarvy.ai',
        description: 'Meet Jarvy, your AI sidekick to help you generate AI content like scripts, images, voiceover, code, transcript and more.',
      },

      projects1:
      {
        projectName1: 'Juander',
        imageSrc1: 'https://www.miyens.com/wp-content/uploads/2022/05/juander-by-miyens-300x300.png',
        link1: 'https://juander.net',
        description1: 'Juander is an eLearning authoring tool, LMS, and mobile app in one that lets you convert traditional training materials to digital format and deliver effective online lessons.',
      },

    contact: {
      mobile: '0951-0633-954', // Replace with your actual mobile phone number
      email: 'hanzjosephdeleon@gmail.com', // Replace with your actual email address
    },
  };

const handlePress = () => {
  setCurrentSection((prevSection) => {
    switch (prevSection) {
      case 'name':
        return 'education';
      case 'education':
        return 'about';
      case 'about':
        return 'projects'; // Move to the 'projects' section
      case 'projects':
        return 'projects1'; // Move to 'projects1'
             case 'projects1':
          return 'contact'; // Move to the 'contact' section
        case 'contact':
          return 'name'; // Loop back to the start
        default:
          return 'name';
    }
  });
};

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={handlePress} style={styles.contentContainer}>
          {currentSection === 'name' && (
            <>
              <Image source={resumeData.imageUrl} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.header}>{resumeData.name}</Text>
                <Text style={styles.info}>{resumeData.course}</Text>
              </View>
            </>
          )}

          {currentSection === 'education' && (
            <View style={styles.textContainer}>
              <Text style={styles.header1}>Education:</Text>
              <Text style={styles.projectTitle}>
                {'\n'}College:
                {'\n'}
                  </Text>
                <Text style={styles.info1}>{resumeData.education.college}</Text>
                {' | '}
                {resumeData.education.collegeYear}
            
              <Text style={styles.projectTitle}>
                {'\n'}High School:
                {'\n'}
                  </Text>
                <Text style={styles.info1}>{resumeData.education.highSchool}</Text>
                {' | '}
                {resumeData.education.highSchoolYear}
     
              <Text style={styles.projectTitle}>
                {'\n'}Elementary: 
                {'\n'}
                  </Text>
                <Text style={styles.info1}>{resumeData.education.elementary}</Text>
                {' | '}
                {resumeData.education.elementaryYear}
           
            </View>
          )}

          {currentSection === 'about' && (
            <View style={styles.textContainer}>
              <Text style={styles.header1}>About me:{'\n'}</Text>
              <Text style={styles.about}>{resumeData.about}</Text>
            </View>
          )}

{currentSection === 'projects' && (
  <View style={styles.projectsContainer}>
    <Text style={styles.header1}>Projects:</Text>
    <Text style={styles.projectTitle}>{resumeData.projects.projectName}</Text>
    <Image source={{ uri: resumeData.projects.imageSrc }} style={styles.projectImage} />
    <Text style={styles.projectLink}>{resumeData.projects.link}</Text>
    <Text style={styles.projectDescription}> {resumeData.projects.description}</Text>
  </View>
)}

{currentSection === 'projects1' && (
  <View style={styles.projectsContainer}>
     <Text style={styles.header1}>Projects:</Text>
    <Text style={styles.projectTitle}>{resumeData.projects1.projectName1}</Text>
    <Image source={{ uri: resumeData.projects1.imageSrc1 }} style={styles.projectImage} />
    <Text style={styles.projectLink}>{resumeData.projects1.link1}</Text>
    <Text style={styles.projectDescription}>{resumeData.projects1.description1}</Text>
  </View>
)}

          {currentSection === 'contact' && (
            <View style={styles.contactContainer}>
              <Text style={styles.header1}>Contact Me:{'\n'}</Text>
              <Text style={styles.info1}>
                {'\n'}Mobile: {resumeData.contact.mobile}
                {'\n'}Email: {resumeData.contact.email}
              </Text>
            </View>
          )}

        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contentContainer: {
    alignItems: 'center',
    maxWidth: 600,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  textContainer: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  header1: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
  },
  info: {
    fontSize: 20,
    alignSelf: 'flex-start',
    textAlign: 'center',
  },
  info1: {
    fontSize: 20,
    alignSelf: 'flex-start',
    textAlign: 'left',

  },
  about: {
    fontSize: 20,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
   projectsContainer: {
    alignSelf: 'stretch',
    marginTop: 20,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
  },
  projectImage: {
    width: 300,
    height: 300,
    marginBottom: 10,
    alignSelf: 'center',
  },
  projectLink: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  projectDescription: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'justify',
  },


});

export default App;