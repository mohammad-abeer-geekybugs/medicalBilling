import accountServicesCard from "../images/accountServicesCard.jpg";
import consultingServicesCard from "../images/consultingServicesCard.jpg";
import hrAndAdminServicesCard from "../images/hrAndAdminServicesCard.jpg";
import itServicesCard from "../images/itServicesCard.jpg";
import rcmServicesCard from "../images/rcmServicesCard.jpg";
import user1 from "../images/aboutUser1.jpg";
import user2 from "../images/aboutUser2.jpg";
import user3 from "../images/aboutUser3.jpg";
import ourMission from "../images/our-mission.jpg";
import ourValues from "../images/our-values.jpg";
import ourVision from "../images/our-vision.jpg";
export const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const dummyData = [
  {
    id: 1,
    img: rcmServicesCard.src,
    Heading: "RCM Services",
    Text: "The Analytix team collaborates with you to develop solutions that optimize your revenue cycle management.",
    isHovering: false,
  },
  {
    id: 2,
    img: consultingServicesCard.src,
    Heading: "Consulting Services",
    Text: "The Analytix team has in-depth industry experience and will serve as a trusted partner in helping you grow your business.",
    isHovering: false,
  },
  {
    id: 3,
    img: accountServicesCard.src,
    Heading: "Accounting Services",
    Text: "Focus on scaling your business while Analytix manages you accounting and finance related needs.",
    isHovering: false,
  },
  {
    id: 4,
    img: itServicesCard.src,
    Heading: "IT Services",
    Text: "Analytix helps your business keep pace with everchanging and evolving technology.",
    isHovering: false,
  },
  {
    id: 5,
    img: hrAndAdminServicesCard.src,
    Heading: "HR and Admin Services",
    Text: "Analytix can manage your office's administrative and HR needs.",
    isHovering: false,
  },
];
export const revenueCycleMainData = {
  orderToIntake: [
    "Scheduling",
    "Pre-Registration",
    "Clearance",
    "Financial Counselling",
    "Online/In-Person Arrival",
    "Pre-Service Payments",
  ],
  careToClaim: [
    "Level of Care",
    "Case Management",
    "Utilization Review",
    "Charge Optimization",
    "Coding",
    "Acuity Capture",
  ],
  claimToPayment: [
    "Billing",
    "Patient Payments",
    "Denials Management",
    "Customer Service",
    "Reconciliation",
  ],
};
export const revenueCycleTitles = [
  "ORDER TO INTAKE",
  "CARE TO CLAIM",
  "CLAIM TO PAYMENT",
];

export const servicesWeProvide = [
  {
    title: "Patient Information Download",
    text: "Accurately collect, review and process vital patient information",
  },
  {
    title: "Obtaining Authorization",
    text: "Automated appointment scheduling solutions like Appoint360 to improve care access",
  },
  {
    title: "Sales Order Confirmation",
    text: "Single or multiple sales order confirmation to transmit or print the invoice appropriately",
  },
  {
    title: "Denial Management",
    text: "Work around denied claims through accurate resubmissions",
  },
  {
    title: "Patient Creation",
    text: "Clinical documentation covering medical history and insurance coverages",
  },
  {
    title: "Insurance eligibility verification",
    text: "Determine procedure-specific coverage and benefits",
  },
  {
    title: "Creating Sales Orders",
    text: "Create clean and error-free sales orders to improve outcomes",
  },
  {
    title: "Reviewing & Logging CMNs",
    text: "Timely completion and logging of CMNs before sales order confirmation",
  },
  {
    title: "Claims submission",
    text: "Submit claims of billable fees to insurance companies",
  },
  {
    title: "Payment Posting",
    text: "Payer will send either an EOB or an ERA towards the payment of a claim",
  },
  {
    title: "AR Follow-up",
    text: "Collect payments on pending claims from third party insurance",
  },
  {
    title: "Transparent Reporting",
    text: "Detailed weekly/ monthly reports evaluate performance of claims",
  },
];

export const whyMedicalBilling = [
  "Collaborative Methodology",
  "Confidentiality",
  "Expert Workforce",
  "Streamlined Operations",
  "Compliance",
  "Insights",
  "Availability and Expediency",
  "Specialty-Focus",
  "Enhanced Customer Support",
  "Dedicated Resources",
  "Multiple Solutions",
  "Value-Added Services",
  "Technology-Enabled Solutions",
  "Flexibility",
  "Cost Efficiency",
];

export const ourLeaders = [
  {
    image: user1.src,
    name: "User 1",
    description: "user 1, has info1, came from Lahore",
    link: "SEE MORE",
  },
  {
    image: user2.src,
    name: "User 2",
    description: "user 2, has info2, came from Lahore",
    link: "SEE MORE",
  },
  {
    image: user3.src,
    name: "User 3",
    description: "user 3, has info3, came from Lahore",
    link: "SEE MORE",
  },
];

export const dataAbout = [
  {
    img: ourMission.src,
    title: "Our Mission",
    desc: "Providing specialty-focused, innovative outsourcing services and solutions for transitioning healthcare to value-based care while efficiently managing insurance and patient financials.",
  },
  {
    img: ourVision.src,
    title: "Our Vision",
    desc: "Being a trusted partner of choice by providing one-stop, technology-enabled, value driven healthcare solutions and services that enhance DME/HME, physician and medical practice growth and profitability.",
  },
  {
    img: ourValues.src,
    title: "Our Values",
    desc: "A client-centered approach that is both innovative and creative and focuses on accountability, ownership, teamwork, flexibility, trust, respect, and integrity, while helping to grow your business.",
  },
];
