import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';

const Experience = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const experiences = [
    {
      type: "experience",
      title: "Software Engineering Intern",
      company: "GECAD - Associated Laboratory of Intelligent Systems (ISEP)",
      location: "Porto, Portugal",
      period: "Feb 2026 - Present",
      description: [
        "Developing a Progressive Web Application (PWA) for early skin lesion detection and gamified user engagement.",
        "Implementing client-side AI analysis using TensorFlow.js to ensure strict medical data privacy and offline capabilities.",
        "Contributing to GECAD's mission of developing intelligence for a sustainable and inclusive world, specifically in the Health and Well-being thematic line."
      ]
    },
    {
      type: "education",
      title: "Bachelor's in Informatics Engineering",
      company: "ISEP - Instituto Superior de Engenharia do Porto",
      location: "Porto, Portugal",
      period: "2023 - 2026",
      description: [
        "First degree in Portugal awarded the EUR-ACE quality label, structured on ACM, IEEE, and CDIO international best practices.",
        "Broad curriculum covering Software Development, Artificial Intelligence, Databases, and Systems Administration.",
        "Developed multiple academic projects including 3D environment simulations and Domain-Driven Design applications."
      ]
    }, 
    {
      type: "education",
      title: "B2 English Certification",
      company: "Wall Street English",
      location: "Porto, Portugal",
      period: "Completed",
      description: [
        "Achieved B2 level proficiency in English, enabling fluent professional communication.",
        "Highly comfortable reading, writing, and speaking in technical and multicultural environments."
      ]
    }
  ];

  return (
    <section id="experience" className="py-8 relative" style={{
      background: themeColors.background.sections?.experience || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      {/* Subtle gradient overlay for top edge blending */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, ${themeColors.background.gradientEnd} 0%, transparent 100%)`
            : `linear-gradient(180deg, ${themeColors.colors.pink[25]} 0%, transparent 100%)`,
          zIndex: 1
        }}
      />
      {/* Subtle gradient overlay for bottom edge blending to white divider */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.white} 100%)`,
          zIndex: 1
        }}
      />
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Experience & Education</h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-2 border-pink-100 dark:border-gray-700 hover:border-pink-200 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg bg-white/95 dark:bg-gray-800/95">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {exp.type === 'education' ? (
                        <GraduationCap className="h-5 w-5" style={{ color: themeColors.colors.pink[400] }} />
                      ) : (
                        <Briefcase className="h-5 w-5" style={{ color: themeColors.colors.pink[400] }} />
                      )}
                      <CardTitle className="text-2xl" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[400] }}>
                        {exp.title}
                      </CardTitle>
                    </div>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-400 mt-1">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-2 text-gray-600 dark:text-gray-400 mb-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center justify-end gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-1" style={{ color: themeColors.primary, fontSize: '1.2rem', lineHeight: '1rem' }}>•</span>
                      <span className="text-sm md:text-base" style={{ color: isDarkMode ? themeColors.colors.dark[200] : themeColors.colors.dark[600] }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;