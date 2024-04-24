import React from 'react';

const Samvesh = () => {
  return (
    <div className="container mx-auto px-8 py-12 mt-7">
      <h1 className="text-4xl font-bold mb-8 bebas">Project Samvesh</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="container mx-auto py-12 lg:w-1/2">
          <h1 className="text-4xl font-bold mb-8">About Project Samvesh</h1>
          <div className="text-lg mb-8">
            <p>
              "Project Samvesh" aims to address the issue of menstrual hygiene and provide sustainable solutions for women in rural areas. Many women in rural India lack access to affordable and hygienic menstrual products, leading to health risks and social stigmatization.
            </p>
            <p>
              Through this project, we aim to produce and distribute eco-friendly menstrual hygiene products made from locally available materials. By involving local women in the production process, we not only provide them with income opportunities but also empower them with knowledge about menstrual health and hygiene.
            </p>
            <p>
              Additionally, the project includes awareness campaigns and educational workshops to break the taboo surrounding menstruation and promote healthy practices. By fostering a supportive environment, we strive to improve the overall well-being and dignity of women in rural communities.
            </p>
          </div>
          <h2 className="text-2xl font-bold mb-4">Key Initiatives:</h2>
          <ul className="list-disc ml-8">
            <li>Production of eco-friendly menstrual products</li>
            <li>Empowerment of local women</li>
            <li>Education and awareness campaigns</li>
            <li>Promotion of menstrual health and hygiene</li>
          </ul>
        </div>
        <div className="lg:w-1/2">
          <img src={"https://enactus-mnnit.netlify.app/img/enactus/samvesh/samvesh%20(2).jpg"} alt="Samvesh Image 1" className="mb-4 rounded-lg shadow-lg" />
          <img src={"https://enactus-mnnit.netlify.app/img/enactus/samvesh/samvesh%20(2).jpg"} alt="Samvesh Image 2" className="mb-4 rounded-lg shadow-lg" />
          <img src={"https://enactus-mnnit.netlify.app/img/enactus/samvesh/samvesh%20(2).jpg"} alt="Samvesh Image 3" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Samvesh;