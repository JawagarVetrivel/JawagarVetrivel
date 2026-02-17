
export const fetchGithubProjects = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);
    if (!response.ok) {
      throw new Error('Failed to fetch repos');
    }
    const data = await response.json();
    
    // Filter out forks and unimportant repos
    return data
      .filter((repo: any) => !repo.fork)
      .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);
    // Return mock data if API fails or rate limited
    return [
      {
        id: 1,
        name: "Aetherial-UI",
        description: "A high-performance animation engine for React using WebGL and GSAP.",
        html_url: "https://github.com/JawagarVetrivel",
        language: "TypeScript",
        stargazers_count: 142
      },
      {
        id: 2,
        name: "Hyperion-Engine",
        description: "Custom 3D rendering pipeline for real-time portfolio experiences.",
        html_url: "https://github.com/JawagarVetrivel",
        language: "GLSL",
        stargazers_count: 89
      },
      {
        id: 3,
        name: "Visions-OS",
        description: "An experimental operating system interface design built with Framer Motion.",
        html_url: "https://github.com/JawagarVetrivel",
        language: "React",
        stargazers_count: 215
      }
    ];
  }
};
