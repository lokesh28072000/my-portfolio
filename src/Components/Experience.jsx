import React from 'react';

const Experience = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Experience</h1>

      <div style={cardStyle}>
        <h2 style={roleStyle}>Web Developer</h2>
        <p style={companyStyle}>Catchy Technologies</p>
        <p style={dateStyle}>November 2023 — June 2025</p>
        <p style={descriptionStyle}>
          Worked as a Web Developer building scalable web applications using ReactJS, JavaScript, MySQL, and MongoDB. 
          Involved in project development, API integration, UI design, and client-side functionality enhancements.
        </p>
      </div>

      <div style={cardStyle}>
        <h2 style={roleStyle}>Freelance Web Developer</h2>
        <p style={companyStyle}>Self-employed</p>
        <p style={dateStyle}>January 2023 — October 2023</p>
        <p style={descriptionStyle}>
          Worked independently on multiple freelance projects for clients, handling end-to-end website development, 
          from UI design to deployment. Specialized in building responsive, user-friendly web applications.
        </p>
      </div>

      <div style={cardStyle}>
        <h2 style={roleStyle}>HR Recruiter</h2>
        <p style={companyStyle}>Avacend Solutions</p>
        <p style={dateStyle}>August 2022 — January 2023</p>
        <p style={descriptionStyle}>
          Responsible for end-to-end recruitment processes including sourcing, screening, interviewing, and onboarding candidates 
          for various technical and non-technical roles.
        </p>
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

const roleStyle = {
  fontSize: '24px',
  marginBottom: '10px'
};

const companyStyle = {
  fontSize: '18px',
  fontWeight: '600',
  marginBottom: '5px'
};

const dateStyle = {
  fontSize: '16px',
  color: "orange",
  marginBottom: '15px'
};

const descriptionStyle = {
  fontSize: '16px',
  lineHeight: '1.8',
  textAlign: 'justify'
};

export default Experience;
