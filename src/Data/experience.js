export const experience = [
  {
    role: "Software Engineer - Frontend (React.js)",
    company: {
      name: "OpenPark Technologies Kft",
      url: "https://www.openpark.hu",
      logo: "/assets/logos/openpark_logo.png"
    },
    location: "Maadi, Cairo",
    period: "October 2025 – Present",

    description: [
      "Built a reusable PaginationDataGrid component integrated with backend-driven pagination and debounced search (400ms), improving performance and reducing unnecessary network requests when handling large datasets.",
      "Extended client-side DataGrid filtering to support nested object and array fields by normalizing row data into a searchable format.",
      "Cached server-provided, role-based data on the client to avoid refetching unchanged data across sessions.",
      "Implemented application rebranding by introducing a new color palette and restructured layout from navbar to sidebar to improve visual hierarchy and scalability",
      "Enhanced asynchronous UI behavior by introducing loading states, disabling interactions during API requests, and preventing duplicate submissions.",
      "Improved user experience by preserving internal menu state across page reloads and enhancing interaction consistency across pages.",
      "Refactored duplicated UI logic into reusable abstractions, reducing maintenance overhead and improving codebase consistency."
    ],

    links: {
      github: null,
      demo: null
    },

    images: []
  },

  {
    role: "Backend Intern",
    company: {
      name: "EFG Holding",
      url: "https://www.efgholding.com",
      logo: "/assets/logos/efg_logo.png"
    },
    location: "Smart Village, Giza",
    period: "June 2025 – July 2025",

    description: [
      "Built a full-stack .NET application using C#, WebAPI, and Clean Architecture.",
      "Implemented containerization (Docker), message brokering (RabbitMQ), real-time updates (SignalR), caching (Redis), and file-based logging with Serilog.",
      "Developed authentication with access and refresh tokens, used ORM (EF Core) for database operations and data persistence, and created a WinForms client interface."
    ],

    links: {
      github: "https://github.com/OmarAyman1234/EFG_InternProj",
      demo: "https://drive.google.com/file/d/1kKRAl_4-bUyP2Pr5lYNpm0-MaQVLMqV5/view?usp=sharing"
    },

    images: [
      "/assets/images/efg-intern-proj.png",
      "/assets/images/efg-intern-docker.png"
    ]
  }
];
