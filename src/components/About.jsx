import React from 'react';
import Img from "../Assets/img/futuristic-moon-background.jpg";

const About = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto font-sans">
      {/* About Section */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Who We are</h1>
        <div>
            <img src ={Img} alt="" />

        <p className="text-white text-lg md:text-xl mb-8">
            <strong>TooClarity</strong> is a platform built to help educational institutions and businesses
            simplify their marketing and advertising efforts. We empower users to reach their target
        audience effectively through tailored campaigns and insights, enabling them to maximize their
        potential and impact.
      </p>
        </div>

      {/* Vision Section */}
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Our Vision</h2>
      <p className="text-white text-lg md:text-xl mb-8">
        At Eduvertiser, we aim to revolutionize how educational institutions and businesses connect
        with their audiences, by offering clear, data-driven strategies to amplify their reach and
        impact.
      </p>

      {/* Mission Section */}
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Our Mission</h2>
      <p className="text-white text-lg md:text-xl mb-8">
        Our mission is to provide institutions and businesses with cutting-edge marketing tools
        that simplify advertising. We are committed to making marketing more accessible, efficient, and
        impactful by delivering an intuitive platform for designing, managing, and analyzing campaigns.
      </p>

      {/* User Personas */}
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Who Can Benefit from Eduvertiser?</h2>
      <ul className="list-disc list-inside text-white list-none text-lg md:text-xl mb-8 space-y-4">
        <li>
          <strong>Educational Institutions:</strong> Schools, colleges, and universities can leverage Eduvertiser to
          manage promotional campaigns, attract students, and showcase their strengths. Our platform ensures
          that educational institutions can reach their target audience effectively and expand their influence.
        </li>
        <li>
          <strong>Small Businesses:</strong> Whether you’re a local business or a growing startup, Eduvertiser helps you
          create and manage marketing campaigns to increase visibility and customer engagement. From targeted ads
          to insightful analytics, we give businesses the tools they need to succeed.
        </li>
        <li>
          <strong>Tutors and Coaches:</strong> Freelance tutors and personal coaches can also benefit from Eduvertiser by
          promoting their services and connecting with potential students. Our platform helps you streamline your
          outreach and ensures you reach those who need your expertise.
        </li>
        <li>
          <strong>Non-Profit Organizations:</strong> Non-profits focused on education can use Eduvertiser to raise awareness
          for their causes, organize campaigns, and amplify their message. Our platform provides you with the tools
          to run effective campaigns and reach the right audience.
        </li>
      </ul>
    </div>
  );
};

export default About;
