import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section
      id="about"
      className="bg-white p-4 text-black"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-12 px-4 sm:px-6 lg:px-8">
       
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/about.png"
            alt="A man holding tablet"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-extrabold mb-4">About Us</h2>
          <p className="mb-4">
            Welcome to Yashah Media, a provider of digital solutions committed to assisting organisations in achieving their objectives via unique and imaginative approaches. Our company name, Yashah, translates to “fame and success” in Sanskrit, and we think that these two concepts sum up what any company should be striving for. We are dedicated to assisting our clients in achieving this aim with our knowledge of digital marketing and website construction.
          </p>
          <p className="mb-4">
            Our creative expertise drives innovative, result-oriented strategies that elevate brands and accelerate business growth. From social media marketing to SEO, website development, and brand promotions, we craft compelling digital experiences. At Yashah Media, we transform ideas into impactful solutions, ensuring your brand stands out in the ever-evolving digital landscape.
          </p>
          <p className="mb-4">
            We thrive on creativity and innovation. Our team is constantly exploring new ideas and approaches to ensure your digital presence is fresh, engaging, and ahead of the competition.
          </p>
          <p className="mb-6">
            Our mission is to empower brands with innovative digital solutions, enhancing visibility, engagement, and growth. We strive to deliver result-driven strategies that create lasting impact and help businesses thrive in a competitive landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
