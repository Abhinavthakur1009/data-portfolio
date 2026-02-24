// Resume data structure - centralized source of truth
export const resumeData = {
  personal: {
    name: "Abhinav Thakur",
    title: "Entry-Level Data Analyst",
    email: "thakurabhinav060@gmail.com",
    location: "Chandigarh, India",
    phone: "+91 7876765748",
    website: "https://data-portfolio-five-lake.vercel.app/", // Placeholder or actual if known
    linkedin: "https://www.linkedin.com/in/abhinav-thakur-141037383/",
    github: "https://github.com/Abhinavthakur1009"
  },

  summary: "Entry-Level Data Analyst with a strong technical background in Python, SQL, and Excel. Experienced in the full data lifecycle, from managing databases with MySQL to building interactive dashboards in Power BI and Tableau. Dedicated to transforming complex data into actionable insights that drive business growth.",

  experience: [
    {
      company: "Excellence Technology, Chandigarh",
      role: "Data Analyst Certification",
      period: "Sept 2025 – Feb 2026",
      location: "Chandigarh, India",
      description: [
        "Intensive training in data analysis tools: Python, SQL, Power BI, and Tableau",
        "Learned full data lifecycle management and interactive dashboard building",
        "Focused on transforming complex data into actionable business insights"
      ]
    }
  ],

  education: [
    {
      institution: "MCM DAV COLLEGE KANGRA (HP)",
      degree: "Bachelor of Computer Application (BCA)",
      period: "2022 - 2025",
      description: "Graduated with CGPA: 7.52. Gained foundational knowledge in computer science and data management."
    },
    {
      institution: "GOVT. SCHOOL HARIPUR (HP)",
      degree: "12th Grade",
      period: "2021 - 2022",
      description: "Completed secondary education with 70%."
    }
  ],

  skills: {
    languages: ["Python", "SQL"],
    analysis: ["Data Analytics", "Pandas", "NumPy", "Matplotlib", "Excel"],
    visualization: ["Power BI", "Tableau"],
    databases: ["MySQL"],
    other: ["GUI Development (Tkinter)", "Input Validation", "Data Visualization"]
  },

  projects: [
    {
      name: "Sales Performance & Customer Distribution Dashboard",
      description: "Interactive Power BI dashboard for analyzing profit, sales, and regional performance using KPIs and maps.",
      tech: ["Power-BI"],
      link: "#"
    },
    {
      name: "Student Management System",
      description: "Desktop application using Python/Tkinter for CRUD operations on student records with MySQL backend.",
      tech: ["Python", "Tkinter", "MySQL"],
      link: "https://github.com/Abhinavthakur1009/student-management-.git"
    },
    {
      name: "Car Vault – Collection Management",
      description: "Python desktop application for car collection management with brand-wise analytics using Matplotlib.",
      tech: ["Python", "Tkinter", "MySQL", "Matplotlib"],
      link: "https://github.com/Abhinavthakur1009/car-vault.git"
    }
  ]
};
