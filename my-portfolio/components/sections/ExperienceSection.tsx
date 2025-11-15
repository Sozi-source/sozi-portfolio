'use client';

import React, { useState } from 'react';

const experienceData = [
  {
    title: 'Head of Department, Human Nutrition & Dietetics',
    company: 'Imperial College of Medical & Health Sciences, Thika',
    period: '2023 – Present',
    points: [
      'Lead departmental programs, staff, and curriculum review aligned with KNDI standards.',
      'Oversee budgets, partnerships, and public health initiatives.',
      'Mentor faculty and students in research and professional growth.',
    ],
  },
  {
    title: 'Nutrition & Dietetics Trainer',
    company: 'Imperial College of Medical & Health Sciences, Thika',
    period: '2023 – Present',
    points: [
      'Develop learning materials and deliver lectures for diploma and certificate students.',
      'Assess student performance and guide career and research planning.',
    ],
  },
  {
    title: 'Nutrition & Dietetics Trainer',
    company: 'Kenya Institute of Professional Studies, Nairobi',
    period: '2018 – 2022',
    points: [
      'Delivered theoretical and practical training, supervised clinical attachments.',
      'Contributed to curriculum development and program improvement.',
    ],
  },
  {
    title: 'Clinical Nutritionist',
    company: 'Gatundu Level 5 Hospital, Kiambu County',
    period: '2016 – 2017',
    points: [
      'Designed therapeutic diets and provided nutrition counseling for patients.',
      'Conducted community nutrition education and follow-up care.',
    ],
  },
  {
    title: 'Software Engineer / Freelance Developer',
    company: 'Freelance & Personal Projects',
    period: '2025 – Present',
    points: [
      'Built responsive websites and web apps using React, Next.js, and Node.js.',
      'Delivered full-stack solutions with API integration and UI/UX design.',
      'Ensured timely delivery and client satisfaction.',
    ],
  },
];
interface ExperienceCardProps {
    item: {
        title: string;
        company: string;
        period: string;
        points: string[];
    };
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ item }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShow = () => setShowAll(!showAll);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer">
      <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
      <p className="text-gray-700 mb-1">{item.company}</p>
      <p className="text-gray-500 mb-4">{item.period}</p>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        {item.points.slice(0, showAll ? item.points.length : 0).map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
      {item.points.length > 1 && (
        <button
          onClick={toggleShow}
          className="mt-4 self-start text-blue-700 font-semibold hover:text-blue-900 hover:underline focus:outline-none transition-colors"
        >
          {showAll ? 'See Less' : 'See More'}
        </button>
      )}
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-5 md:px-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">Experience</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {experienceData.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
