import React from 'react';

const Skills = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Skills</h1>

      <div style={columnsWrapperStyle}>
        {/* Technical Skills */}
        <div style={columnStyle}>
          <h2 style={subheadingStyle}>Technical Skills</h2>
          <ul style={listStyle}>
            <li>JavaScript (ES6+)</li>
            <li>ReactJS (SPA, Hooks, Context API)</li>
            <li>Node.js (basic REST API)</li>
            <li>MySQL (queries, relational data)</li>
            <li>MongoDB (NoSQL, CRUD)</li>
            <li>HTML5 & CSS3 (Flexbox, Grid, Animations)</li>
            <li>Git & GitHub (version control)</li>
            <li>REST API Integration</li>
            <li>Responsive Web Design</li>
            <li>Problem-Solving & Debugging</li>
          </ul>
        </div>

        {/* Soft Skills & Tools */}
        <div style={columnStyle}>
          <h2 style={subheadingStyle}>Soft Skills</h2>
          <ul style={listStyle}>
            <li>Quick Learner & Adaptive</li>
            <li>Strong Analytical Thinking</li>
            <li>Good Communication & Team Collaboration</li>
            <li>Attention to Detail</li>
            <li>Continuous Learning & Industry Awareness</li>
          </ul>

          <h2 style={subheadingStyle}>Tools & Technologies</h2>
          <ul style={listStyle}>
            <li>Visual Studio Code</li>
            <li>Postman</li>
            <li>Chrome Developer Tools</li>
            <li>Canva & Figma </li>
            <li>Digital Marketing Expert</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Styles
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

const columnsWrapperStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '40px',
  justifyContent: 'center'
};

const columnStyle = {
  flex: '1',
  minWidth: '300px'
};

const subheadingStyle = {
  fontSize: '24px',
  marginBottom: '20px'
};

const listStyle = {
  listStyleType: 'disc',
  paddingLeft: '20px',
  lineHeight: '2'
};

export default Skills;
