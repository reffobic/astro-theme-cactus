export interface Project {
  title: string;
  date: string;
  description: string;
  githubUrl: string;
  media?: {
    type: 'image' | 'video';
    url: string;
    alt?: string;
  };
  tags?: string[];
}

export const projects: Project[] = [
  {
    title: "Tomasulo's Algorithm Simulator",
    date: "May 2025",
    description: "Developed a Python simulator for the non-speculative Tomasulo algorithm, featuring register renaming, reservation stations, and a common data bus. Built a Tkinter GUI to visualize execution cycles, RF, RAT, RS, memory, and performance metrics.",
    githubUrl: "https://github.com/reffobic/tomasulo-simulator",
    media: {
      type: 'image',
      url: "/images/projects/tomasulo.png",
      alt: "Tomasulo Algorithm Simulator GUI"
    },
    tags: ["Python", "Tkinter", "Computer Architecture"]
  },
  {
    title: "PONG Game on FPGA Board",
    date: "Dec 2024",
    description: "Implemented a PONG game on the BASYS3 FPGA board using Verilog HDL. Collaborated on synthesis, implementation, and simulation via Vivado; rendering output through VGA port.",
    githubUrl: "https://github.com/reffobic/fpga-pong",
    media: {
      type: 'video',
      url: "/videos/pong-demo.mp4",
      alt: "PONG Game on FPGA Demo"
    },
    tags: ["Verilog", "FPGA", "Vivado"]
  },
  {
    title: "AUC Events App",
    date: "Nov 2024",
    description: "Developed an events app for the AUC community with React frontend and Python backend. Integrated recommendation algorithms and implemented agile development methodologies.",
    githubUrl: "https://github.com/reffobic/auc-events",
    tags: ["React", "Python", "Full-stack"]
  },
  {
    title: "Library AI Content Generator",
    date: "June 2025",
    description: "Building an AI-powered system using Ollama and Helsinki-NLP to generate bilingual scripts from library collections. Full-stack solution with FastAPI backend and React frontend.",
    githubUrl: "https://github.com/reffobic/library-ai-generator",
    tags: ["AI", "FastAPI", "React", "Ollama"]
  },
  {
    title: "3D Library Visualization",
    date: "Jan 2025",
    description: "Developed a website integrating 3DHOP with Python server to present 3D models for the AUC Library. Created user-friendly guidelines for system setup and operation.",
    githubUrl: "https://github.com/reffobic/3d-library-viz",
    tags: ["Python", "3DHOP", "Web Development"]
  }
];
