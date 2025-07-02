import React from 'react';

const Education = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Education</h1>

      <div style={cardStyle}>
        <h2 style={subheadingStyle}>Bachelor of Engineering (B.E)</h2>
        <p style={textStyle}>
          Electronics and Communication Engineering (ECE) 
          <br />
          Completed with 7.6 CGPA
        </p>
      </div>

      <div style={cardStyle}>
        <h2 style={subheadingStyle}>Additional Courses & Certifications</h2>
        <p style={textStyle}>
          Completed several course works and practical projects in **Frontend Web Development**, covering:
        </p>
        <ul style={listStyle}>
          <li>JavaScript (ES6+)</li>
          <li>ReactJS</li>
          <li>HTML5 & CSS3</li>
          <li>Responsive Web Design</li>
          <li>API Integration & Project Building</li>
        </ul>
      </div>
    </div>
  );
};

// ✅ Styles
const containerStyle = {
  padding: '50px',
  maxWidth: '1200px',
  margin: '0 auto'
};

const headingStyle = {
  fontSize: '36px',
  marginBottom: '30px',
  textAlign: 'center'
};

const cardStyle = {
  padding: '30px',
  marginBottom: '30px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  boxShadow: '2px 2px 24px 5px rgba(203, 206, 255, 0.959)'
};

const subheadingStyle = {
  fontSize: '24px',
  marginBottom: '15px'
};

const textStyle = {
  fontSize: '16px',
  lineHeight: '1.8',
  textAlign: 'justify'
};

const listStyle = {
  paddingLeft: '20px',
  lineHeight: '2'
};

export default Education;
