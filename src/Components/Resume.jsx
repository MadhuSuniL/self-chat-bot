import React from 'react';

const Resume = () => {
  return (
    <div className="p-6 bg-white0 rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Madhu Bagamma Gari</h1>
      <div className="mb-4">
        <p>
        I am a Python Full Stack Developer with over 1 year of experience. 
          I have a strong background in developing web applications using 
          Python and its frameworks, along with frontend technologies like ReactJS.
          I am passionate about coding, AI applications, and continuously learning new skills.
        </p>
      </div>
      <p><strong>Education:</strong> BSC Computer Science, December 2021</p>
      <p><strong>Location:</strong> Velgode, Nandyal, Andhra Pradesh, India</p>
      
      <h2 className="text-xl font-bold mt-4 mb-2">Contact Information</h2>
      <p><strong>Email:</strong> <a href="mailto:bagammagarimadhu@gmail.com">bagammagarimadhu@gmail.com</a></p>
      <p><strong>Phone:</strong> +919948377187</p>
      <p><strong>GitHub:</strong> <a href="https://github.com/MadhuSuniL" target="_blank" rel="noopener noreferrer">https://github.com/MadhuSuniL</a></p>
      <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/madhu-bagamma-gari-833a84239" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/madhu-bagamma-gari-833a84239</a></p>
      
      <h2 className="text-xl font-bold mt-4 mb-2">Skills</h2>
      <ul className="list-disc list-inside">
        <li>Python, Pandas, Data Structures, Numpy, Beautiful Soup</li>
        <li>Django, Django ORM, Django Rest Framework, Django Channels (Websockets)</li>
        <li>MySQL, PostgreSQL, MongoDB</li>
        <li>ReactJS with Bootstrap and Tailwind CSS</li>
        <li>Deployment (AWS, Heroku, PythonAnyWhere, Render, Netlify)</li>
        <li>Intermediate Machine and Deep Learning</li>
      </ul>
      
      <h2 className="text-xl font-bold mt-4 mb-2">Work Experience</h2>
      <p><strong>Python Full Stack Developer at TechFnatic Information Technology & Services</strong></p>
      <p>Bangalore, India</p>
      <p>Working since May 2023</p>
      
      <p><strong>Internship at Simmi Foundation Organization</strong></p>
      <p>Django Backend Developer (October 2022 - January 2023) - Remote</p>
      
      <h2 className="text-xl font-bold mt-4 mb-2">Projects</h2>
      <ul className="list-disc list-inside">
        <li><strong>Project Management Software (for Ux9 Erp) at TechFnatic</strong></li>
        <li><strong>POS 2.0 (Integration with CRM, External Vendors, and Purchase) at TechFnatic</strong></li>
        <li><strong>Customer Management System at TechFnatic</strong></li>
        <li><strong>Ux9 Company Official Site with Admin Panel at TechFnatic</strong></li>
        <li><strong>Simmi Foundation Official Website</strong></li>
        <li><strong>TravelMates (Django + React JS)</strong> - Personal Project</li>
        <li><strong>The Pluto: An Artificial Mock Interviewer Site</strong> - Personal Project</li>
      </ul>
      
      <h2 className="text-xl font-bold mt-4 mb-2">Additional Information</h2>
      <p><strong>CTC:</strong> 3 LPA</p>
      <p><strong>Expected CTC:</strong> 5 LPA</p>
      <p><strong>Hobbies:</strong> Browsing, Gaming, Coding</p>
    </div>
  );
};

export default Resume;
