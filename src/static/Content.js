
import { CashControlIcon, MoneyInfoIcon, MoneyMapingIcon } from "../assets/index";
import {
  AiScheduler,
  AiPowerAutomationIcon,
  AiBookingIcon,
} from "../assets/index";
export const defaultData = [
  {
    id: 1,
    heroHeadingWebHomePageTitel: "iReach -",
    heroHeadingWeb: "Enrich Your Workforce with AI-Driven HRMS",
    heroHeadingMobilePageTitel: "HR Management",
    heroHeadingMobile: "Track employee information & performance",
    heroParaWeb:
      "Manage your workforce, streamline your HR operations, generate reports & gain valuable insights to help you make data-driven decisions.",
    heroParaMobile:
      "Manage your workforce, streamline your HR operations, generate reports & gain valuable insights to help you make data-driven decisions.",

    heroLearnMoreButton: "/learn-more-hr-features/1",
    heroLearnMoreButtonVisibility: "block",

    // Automate process----------------------------------------
    automateProcessHeading: "Simplified Employee Onboarding with Plexaar",
    automateProcessPara:
      "The best HR Management module that simplifies employee onboarding & provides a single platform for all employee-related data. You can manage employee records, track performance, & monitor attendance in one place.",
    automateProcessButton: "/learn-more-hr-features/2",
    automateProcessButtonVisibility: "block",


    InventoryReportingHeadingBlueLatter: "Inventory blue",
    InventoryReportingHeadingBlackLatter: "Reports black",
    InventoryReportingPara:
      "Helping generate inventory reports, including stock levels, inventory valuation, & inventory turnover.",

    automateProcessItems: [
      {
        icon: `${CashControlIcon}`,
        heading: "Performance evaluation & appraisal",
        para: "Improve employee performance through comprehensive evaluation and appraisal processes.",
      },
      {
        icon: `${MoneyInfoIcon}`,
        heading: "Training & development management",
        para: "Restructure employee training and development initiatives for improved skill-building & growth.",
      },
      {
        icon: `${MoneyMapingIcon}`,
        heading: "Recruitment & onboarding",
        para: "Simplify recruitment and onboarding processes for seamless talent acquisition and integration.",
      },
    ],

    // contact us component------------------------------------------
    contactUsHeading: "Streamlined Payroll Processing",
    contactUsPara:
      "Plexaar's HR Management module also streamlines payroll processing by automating payroll calculations & generating payslips. Users can also configure tax deductions, benefits, & allowances for their employees.",
    learnMoreContactUs: "/learn-more-hr-features/3",
    learnMoreContactUsVisibility: "block",

    // HR responsibilities component----------------------------------------------
    hrResponsibilitiesHeading : "Customizable HR Reports",
    hrResponsibilitiesDiscription : "Generate customizable reports on employee performance, attendance, & payroll.",
    hrResponsibilitiesCards: [
      {
        id: 1,
        heading: "Employee engagement & retention",
        para: "Boost productivity & job satisfaction with features like surveys, recognition, rewards, and talent management.",
      },
      {
        id: 2,
        heading: "Organizational development",
        para: "Optimize growth & performance with strategic planning, goal-setting, performance tracking, and learning & development tools.",
      },
      {
        id:3,
        heading: "HR automation & workflows",
        para: "Modernize HR processes with automation for onboarding, benefits administration, time & attendance, and leave management.",
      },
      {
        id:4,
        heading: "Health & safety management",
        para: "You can set up & manage safety protocols, track incidents, conduct risk assessments, & maintain compliance with industry regulations.",
      },
    ],
    learnMoreHrResponsibilities : "/learn-more-hr-features/4",
    learnMoreHrResponsibilitiesVisibility : "block",

    // inventory mannagemen items
    InventoryReportingItems: [
      {
        icon: `${AiScheduler}`,
        heading: "Smart Decisions",
        para: "Helping generate inventory reports, including stock levels, inventory valuation, & inventory turnover.",
      },
      {
        icon: `${AiPowerAutomationIcon}`,
        heading: "Informed Management",
        para: "The reports & ABC analysis help users make informed decisions about their inventory management.",
      },
      {
        icon: `${AiBookingIcon}`,
        heading: "Kit Control",
        para: "Kitting & assembly management, inventory optimization, integration with shipping & fulfillment.",
      },
    ],
    learnMoreInventoryReporting: "/learn-more-stock",
    learnMoreInventoryReportingVisibility: "block",
  },
];

export const HomePageContent = {
  // read more pages------------------------------------------------------------------------------------------
  readMorePages: [
    {
      id: 1,
      heroHeadingWebHomePageTitel: "",
      heroHeadingWeb: "AI-Based ESS System",
      heroHeadingMobilePageTitel: "",
      heroHeadingMobile: "AI-Based ESS System",
      heroParaWeb:
        "The AI-Based ESS (Employee Self-Service) System is a cutting-edge feature. It leverages artificial intelligence to provide employees with self-service capabilities, empowering them to manage their own HR-related tasks and access relevant information.",
      heroParaMobile:
        "Leveraging AI to provide employees with self-service capabilities, empowering them to manage their own HR-related tasks.",
  
      heroLearnMoreButton: "/learn-more-hr-features/5",
      heroLearnMoreButtonVisibility: "block",
  
      // Automate process----------------------------------------
      automateProcessHeading: "Personalized HR Dashboards",
      automateProcessPara:
        "Deliver personalized dashboards to employees, displaying relevant information such as leave balances, attendance records, performance metrics, and personalized announcements.",
      automateProcessButton: "/learn-more-hr-features/2",
      automateProcessButtonVisibility: "none",
      automateProcessItems: [
        {
          icon: `${CashControlIcon}`,
          heading: "Leave Management",
          para: "Allow employees to apply for leave, view leave balances, and track the status of their requests, while utilizing AI algorithms to automate leave approval processes based on predefined rules.",
        },
        {
          icon: `${MoneyInfoIcon}`,
          heading: "Employee Database",
          para: "Enable employees to update personal information, emergency contacts, and banking details, ensuring accurate and up-to-date employee data while reducing administrative overhead.",
        },
        {
          icon: `${MoneyMapingIcon}`,
          heading: "Performance Tracking",
          para: "Provide employees with the ability to set goals, track their performance, and receive AI-driven feedback, fostering a culture of continuous improvement and employee development.",
        },
      ],
  
      // contact us component------------------------------------------
      contactUsHeading: "Streamlined Payroll Processing",
      contactUsPara:
        "Plexaar's HR Management module also streamlines payroll processing by automating payroll calculations & generating payslips. Users can also configure tax deductions, benefits, & allowances for their employees.",
      learnMoreContactUs: "/learn-more-hr-features/3",
      learnMoreContactUsVisibility: "none",
  
      // HR responsibilities component----------------------------------------------
      hrResponsibilitiesHeading : "Training and Development",
      hrResponsibilitiesDiscription : "Offer self-service access to training materials, online courses, and skill development resources, empowering employees to enhance their knowledge and skills at their own pace.",
      hrResponsibilitiesCards: [
        {
          id: 1,
          heading: "Document Management",
          para: "Allow employees to securely access and manage important HR documents, such as contracts, policies, and company-wide communications, reducing paper usage and facilitating efficient information retrieval.",
        },
        {
          id: 2,
          heading: "Chatbot Assistance",
          para: "Integrate AI-powered chatbot functionality to provide employees with instant responses to frequently asked questions, enhancing self-service capabilities and minimizing the need for manual HR support.",
        },
        {
          id:3,
          heading: "Organogram View",
          para: "It provides a visual representation of an organization's hierarchical structure. It offers a comprehensive overview of reporting relationships, departments, and positions, enabling businesses to understand the organization's structure, and streamline communication.",
        },
        {
          id:4,
          heading: "Role-Based Access Control",
          para: "Assign specific access levels and permissions to different positions within the organogram, ensuring data security and maintaining confidentiality.",
        },
      ],
      learnMoreHrResponsibilities : "/learn-more-hr-features/4",
      learnMoreHrResponsibilitiesVisibility : "none",
    },
    {
      id: 2,
      heroHeadingWebHomePageTitel: "",
      heroHeadingWeb: "Employee Profile Integration",
      heroHeadingMobilePageTitel: "",
      heroHeadingMobile: "Employee Profile Integration",
      heroParaWeb:
        "Access employee profiles directly from the organogram, providing quick access to individual details, such as contact information, job roles, and performance history.",
      heroParaMobile:
        "Access employee profiles directly from the organogram, providing quick access to individual details.",
  
      heroLearnMoreButton: "/learn-more-hr-features/1",
      heroLearnMoreButtonVisibility: "none",
  
      // Automate process----------------------------------------
      automateProcessHeading: "Quick Search and Filtering",
      automateProcessPara:
        "Easily search for specific positions or employees within the organogram, saving time and enabling efficient navigation through the organizational structure.",
      automateProcessButton: "/learn-more-hr-features/2",
      automateProcessButtonVisibility: "none",
      automateProcessItems: [
        {
          icon: `${CashControlIcon}`,
          heading: "Drag-and-Drop Editing",
          para: "Intuitively modify the organogram by adding, deleting, or moving positions, reflecting changes in the organization's structure and ensuring up-to-date representation.",
        },
        {
          icon: `${MoneyInfoIcon}`,
          heading: "Position Details",
          para: "View detailed information about each position, including job descriptions, key responsibilities, and performance metrics, supporting better decision-making and talent management.",
        },
        {
          icon: `${MoneyMapingIcon}`,
          heading: "Organizational Planning and Succession",
          para: "Identify talent gaps and potential succession paths within the organogram, facilitating strategic workforce planning and succession management for future organizational needs.",
        },
      ],
  
      // contact us component------------------------------------------
      contactUsHeading: "GPS Attendance",
      contactUsPara:
        "The GPS Attendance uses GPS technology to track and monitor employee attendance in real-time. It helps you to accurately record employee attendance, track remote workers, ensure compliance, and improve workforce management.",
      learnMoreContactUs: "/learn-more-hr-features/3",
      learnMoreContactUsVisibility: "none",
  
      // HR responsibilities component----------------------------------------------
      hrResponsibilitiesHeading : "Geofencing",
      hrResponsibilitiesDiscription : "Define virtual boundaries for specific locations and receive alerts when employees enter or exit these designated areas, ensuring accurate attendance tracking.",
      hrResponsibilitiesCards: [
        {
          id: 1,
          heading: "Mobile App Integration",
          para: "Allow employees to use their mobile devices to mark attendance, providing flexibility and convenience for on-the-go or remote workers.",
        },
        {
          id: 2,
          heading: "Real-time Attendance Tracking",
          para: "Monitor attendance data in real-time, enabling supervisors to promptly address attendance issues and ensure timely workforce management.",
        },
        {
          id:3,
          heading: "Location Verification",
          para: "Verify employee attendance by cross-referencing GPS data with designated work locations, reducing the risk of fraudulent attendance reporting.",
        },
        {
          id:4,
          heading: "Absence and Late Reporting",
          para: "Automate absence and late reporting based on GPS data, streamlining the process and reducing manual intervention for HR personnel.",
        },
      ],
      learnMoreHrResponsibilities : "/learn-more-hr-features/4",
      learnMoreHrResponsibilitiesVisibility : "none",
    },
    {
      id: 3,
      heroHeadingWebHomePageTitel: "",
      heroHeadingWeb: "Attendance Analytics",
      heroHeadingMobilePageTitel: "",
      heroHeadingMobile: "Attendance Analytics",
      heroParaWeb:
        "Generate insightful reports and analytics on attendance patterns, trends, and exceptions, facilitating data-driven decision-making for workforce optimization.",
      heroParaMobile:
        "Generate insightful analytics on attendance patterns & trends, facilitating data-driven decision-making.",
  
      heroLearnMoreButton: "/learn-more-hr-features/1",
      heroLearnMoreButtonVisibility: "none",
  
      // Automate process----------------------------------------
      automateProcessHeading: "Compliance and Audit Trail",
      automateProcessPara:
        "Maintain a detailed audit trail of attendance records, ensuring compliance with labor laws, regulations, and company policies, and providing a reliable record for audits or legal purposes.",
      automateProcessButton: "/learn-more-hr-features/2",
      automateProcessButtonVisibility: "none",
      automateProcessItems: [
        {
          icon: `${CashControlIcon}`,
          heading: "360-Degree Employee Evaluation",
          para: "Get comprehensive and multi-dimensional assessments of employees' performance. It gathers feedback from various sources to provide a holistic view, fostering development, and enhancing employee performance.",
        },
        {
          icon: `${MoneyInfoIcon}`,
          heading: "Multi-Rater Feedback",
          para: "Collect feedback from supervisors, peers, subordinates, and even external stakeholders, ensuring a well-rounded evaluation process.",
        },
        {
          icon: `${MoneyMapingIcon}`,
          heading: "Goal Alignment",
          para: "Align evaluation criteria with individual and organizational goals, promoting clarity, and accountability in performance expectations.",
        },
      ],
  
      // contact us component------------------------------------------
      contactUsHeading: "Anonymous Feedback Option",
      contactUsPara:
        "Allow raters to provide feedback anonymously, encouraging honest and unbiased assessments.",
      learnMoreContactUs: "/learn-more-hr-features/3",
      learnMoreContactUsVisibility: "none",
  
      // HR responsibilities component----------------------------------------------
      hrResponsibilitiesHeading : "Competency Mapping",
      hrResponsibilitiesDiscription : "Assess employee performance against predefined competencies and skills, identifying strengths and areas for improvement.",
      hrResponsibilitiesCards: [
        {
          id: 1,
          heading: "Continuous Feedback Loop",
          para: "Facilitate ongoing feedback and coaching conversations between employees and raters, promoting continuous development.",
        },
        {
          id: 2,
          heading: "Development Planning",
          para: "Create personalized development plans based on evaluation outcomes, supporting employee growth, and enhancing career development opportunities.",
        },
        {
          id:3,
          heading: "Applicant Tracking System (ATS)",
          para: "The Applicant Tracking System (ATS) abridges the recruitment process by automating and organizing the hiring workflow. It efficiently manages job postings, applications, candidate evaluations, and communication, ensuring a structured and efficient recruitment experience.",
        },
        {
          id:4,
          heading: "Job Posting Management",
          para: "Easily create, publish, and manage job postings across multiple platforms, reaching a wider pool of potential candidates.",
        },
      ],
      learnMoreHrResponsibilities : "/learn-more-hr-features/4",
      learnMoreHrResponsibilitiesVisibility : "none",
    },
    {
      id: 4,
      heroHeadingWebHomePageTitel: "",
      heroHeadingWeb: "Resume Parsing",
      heroHeadingMobilePageTitel: "",
      heroHeadingMobile: "Resume Parsing",
      heroParaWeb:
        "Automatically extract and organize candidate information from resumes, saving time and improving accuracy in candidate evaluation.",
      heroParaMobile:
        "Extract & organize candidate information from resumes, improving accuracy in evaluation.",
  
      heroLearnMoreButton: "/learn-more-hr-features/1",
      heroLearnMoreButtonVisibility: "none",
  
      // Automate process----------------------------------------
      automateProcessHeading: "Customizable Application Forms",
      automateProcessPara:
        "Create tailored application forms with specific questions and requirements, capturing relevant candidate data for efficient evaluation.",
      automateProcessButton: "/learn-more-hr-features/2",
      automateProcessButtonVisibility: "none",
      automateProcessItems: [
        {
          icon: `${CashControlIcon}`,
          heading: "Candidate Screening and Filtering",
          para: "Use predefined criteria to screen and filter applicants, identifying the most qualified candidates for further evaluation.",
        },
        {
          icon: `${MoneyInfoIcon}`,
          heading: "Interview Scheduling",
          para: "Streamline the interview process by scheduling interviews, sending automated notifications, and managing interview logistics.",
        },
        {
          icon: `${MoneyMapingIcon}`,
          heading: "Collaboration and Feedback",
          para: "Enable collaboration among hiring team members, allowing them to provide feedback and evaluate candidates collectively.",
        },
      ],
  
      // contact us component------------------------------------------
      contactUsHeading: "Reporting and Analytics",
      contactUsPara:
        "Generate reports and analytics on recruitment metrics, such as time-to-hire and source effectiveness, facilitating data-driven decision-making and process optimization.",
      learnMoreContactUs: "/learn-more-hr-features/3",
      learnMoreContactUsVisibility: "none",
  
      // HR responsibilities component----------------------------------------------
      hrResponsibilitiesHeading : "Career Page Integration",
      hrResponsibilitiesDiscription : "The Career Page Integration enables the seamless integration of a company's career page with the software, enhancing the recruitment process and providing a user-friendly experience for both candidates and hiring teams.",
      hrResponsibilitiesCards: [
        {
          id: 1,
          heading: "Customizable Job Listings",
          para: "Create and customize job listings on the career page, showcasing the company's brand and attracting top talent.",
        },
        {
          id: 2,
          heading: "Application Management",
          para: "Receive and manage job applications directly through the integrated career page, ensuring a centralized and organized application process.",
        },
        {
          id:3,
          heading: "Candidate Tracking",
          para: "Track and monitor candidate progress and status, from application submission to hiring decision, ensuring visibility and efficient candidate management.",
        },
        {
          id:4,
          heading: "Job Alert Notifications",
          para: "Allow candidates to subscribe to job alerts, receiving notifications about new job openings and updates, increasing candidate engagement.",
        },
      ],
      learnMoreHrResponsibilities : "/learn-more-hr-features/4",
      learnMoreHrResponsibilitiesVisibility : "none",
    },
    // sub pages of the 1st sub page (General Ledger Management)------------------------------------------------------------------------------
    {
      id: 5,
      heroHeadingWebHomePageTitel: "",
      heroHeadingWeb: "Employer Branding",
      heroHeadingMobilePageTitel: "",
      heroHeadingMobile: "Employer Branding",
      heroParaWeb:
        "Showcase the company's brand, culture, and values on the career page, attracting candidates who align with the organization's vision.",
      heroParaMobile:
        "Showcase the company's culture & values, attracting candidates who align with the organization's vision.",
  
      heroLearnMoreButton: "/learn-more-hr-features/1",
      heroLearnMoreButtonVisibility: "none",
  
      // Automate process----------------------------------------
      automateProcessHeading: "Social Media Integration",
      automateProcessPara:
        "Integrate social media platforms with the career page, promoting job openings and reaching a wider audience of potential candidates.",
      automateProcessButton: "/learn-more-hr-features/2",
      automateProcessButtonVisibility: "none",
      automateProcessItems: [
        {
          icon: `${CashControlIcon}`,
          heading: "Mobile-Friendly Experience",
          para: "Ensure the career page is optimized for mobile devices, providing a seamless and accessible application experience for candidates on-the-go.",
        },
        {
          icon: `${MoneyInfoIcon}`,
          heading: "Onboarding System",
          para: "The Onboarding System in iReach HRMS simplifies and automates the employee onboarding process, ensuring a smooth transition for new hires and efficient management for HR teams. It facilitates the completion of necessary paperwork, orientation, and integration into the organization.",
        },
        {
          icon: `${MoneyMapingIcon}`,
          heading: "Document Management",
          para: "Centralize and manage onboarding documents, such as contracts, policies, and forms, ensuring compliance and easy access.",
        },
      ],
  
      // contact us component------------------------------------------
      contactUsHeading: "Task and Checklist Management",
      contactUsPara:
        "Create and assign tasks and checklists to guide new hires through the onboarding process, ensuring completion and tracking progress.",
      learnMoreContactUs: "/learn-more-hr-features/3",
      learnMoreContactUsVisibility: "none",
  
      // HR responsibilities component----------------------------------------------
      hrResponsibilitiesHeading : "Employee Data Collection",
      hrResponsibilitiesDiscription : "Gather and organize employee information, including personal details, emergency contacts, and tax forms, in a secure and structured manner.",
      hrResponsibilitiesCards: [
        {
          id: 1,
          heading: "Training and Orientation",
          para: "Provide new hires with access to training materials, orientation programs, and company policies to familiarize them with the organization.",
        },
        {
          id: 2,
          heading: "Digital Signatures",
          para: "Enable electronic signing of documents, eliminating the need for physical paperwork and expediting the onboarding process.",
        },
        {
          id:3,
          heading: "Welcome Messages and Announcements",
          para: "Send automated welcome messages and announcements to new hires, fostering a sense of belonging and engagement.",
        },
        {
          id:4,
          heading: "Integration with HR Systems",
          para: "Seamlessly integrate the onboarding system with other HR systems, such as payroll and performance management, ensuring a cohesive HR workflow.",
        },
      ],
      learnMoreHrResponsibilities : "/learn-more-hr-features/4",
      learnMoreHrResponsibilitiesVisibility : "none",
    },
  ],
};
