import React from 'react';
// need to import from assets/projects/projectData...props?

const Project = ({ title, img, about }) => (
  <div className="whole-card">

    <div className="image-container">
      <img className="card-image" src={img} />
    </div>

    <div className="title-container">
      <h1>{title}</h1>
      <h3>{about}</h3>
    </div>
  </div>

);

export default Project;
