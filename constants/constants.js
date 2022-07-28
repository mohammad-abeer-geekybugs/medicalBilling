import accountServicesCard from "../images/accountServicesCard.jpg";
import consultingServicesCard from "../images/consultingServicesCard.jpg";
import hrAndAdminServicesCard from "../images/hrAndAdminServicesCard.jpg";
import itServicesCard from "../images/itServicesCard.jpg";
import rcmServicesCard from "../images/rcmServicesCard.jpg";

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
