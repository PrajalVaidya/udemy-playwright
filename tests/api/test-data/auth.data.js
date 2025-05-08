const loginData = {
  validUser: {
    email: "admin@admin.com",
    password: "Password@123",
  },
  invalidUser: {
    email: "wrong@email.com",
    password: "WrongPassword",
  },
};

const jobData = {
  validJob: {
    title: "QA engineer",
    jobDepartment: ["Engineering", "Development"],
    jobOpening: 3,
    location: "remote",
    companyIndustry: "Transportation-Logistics",
    jobFunction: "Art-Creative",
    employeeType: "Contract",
    workLocations: "88c83f22-1f99-485a-8658-b2edbf72f8b3",
    remoteEligibleLocations: [
      {
        country: "United States",
        region: "California",
        city: "San Francisco",
        zipCode: "94105",
      },
      {
        country: "Canada",
        region: "Ontario",
        city: "Toronto",
        zipCode: "M5V 2A8",
      },
    ],
    deadline: "2025-06-30T23:59:59Z",
    description:
      "We are seeking an experienced backend engineer to join our transportation logistics platform team. You will be responsible for designing and implementing scalable APIs, optimizing database performance, and maintaining our core services.",
    requirement:
      "5+ years of experience with backend development using Python, Java, or Go. Experience with microservices architecture, containerization, and cloud platforms (AWS/GCP). Strong understanding of database systems and performance optimization.",
    benefit:
      "Competitive hourly rate, flexible working hours, professional development budget, equipment allowance, and opportunity to work on cutting-edge logistics technology.",
    designation: "Internship",
    education: "Doctorate",
    keywords: [
      "backend",
      "software engineering",
      "python",
      "java",
      "microservices",
      "logistics",
    ],
    salary: {
      type: "monthly",
      isHidden: false,
      from: 50000,
      to: 100000,
      currency: "USD",
    },
  },
};

module.exports = {
  loginData,
  jobData,
};
