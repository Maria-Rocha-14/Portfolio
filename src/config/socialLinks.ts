// Social Links Configuration - uses environment variables only
export const socialLinks = {
  // Main social profiles
  github: "https://github.com/Maria-Rocha-14/", // <-- Substitui pelo teu link do GitHub
  linkedin: "https://www.linkedin.com/in/maria-m-rocha/", // <-- Substitui pelo teu link do LinkedIn
  email: "maria.mota.rocha8@gmail.com",
  
  // GitHub repository URLs
  repositories: {
    projectOne: import.meta.env.VITE_GITHUB_PROJECT1_URL,
    projectTwo: import.meta.env.VITE_GITHUB_PROJECT2_URL,
    projectThree: import.meta.env.VITE_GITHUB_PROJECT3_URL,
    projectFour: import.meta.env.VITE_GITHUB_PROJECT4_URL,
  },
  
  // Formatted display names (extracted from environment variables)
  display: {
    github: import.meta.env.VITE_GITHUB_URL?.replace('https://', 'https://github.com/Maria-Rocha-14/'),
    linkedin: import.meta.env.VITE_LINKEDIN_URL?.replace('https://', 'www.linkedin.com/in/maria-m-rocha/'),
    email: import.meta.env.VITE_EMAIL?.replace('mailto:', 'maria.mota.rocha8@gmail.com')
  }
};

export default socialLinks;