import { useEffect } from "react";
import {
  MapPinIcon,
  AtSymbolIcon,
  PhoneIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import AOS from "aos";
import "aos/dist/aos.css";
const features = [
  {
    name: "Phone",
    description: "+919994956242",
    icon: PhoneIcon,
  },
  {
    name: "Email:",
    description: "sheikabdulrahman2000@gmil.com",
    icon: AtSymbolIcon,
  },
  {
    name: "Location:",
    description: "Ammapttinam, Tamil Nadu, India",
    icon: MapPinIcon,
  },
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="about"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg leading-7">Get to know more</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
                About Me
              </p>
              <p className="mt-6 text-lg leading-8" data-aos="fade-right">
              Hi, I'm Sheik Abdul Rahman, a computer science graduate and skilled full stack developer with hands-on experience in designing and building robust web applications. My latest project, Proshop, is a full stack e-commerce platform built with React, Express, MongoDB, Node.js, Redux, Redux Toolkit (RTK), TailwindCSS, Stripe, JWT, Cookie Parser, bcryptjs, multer, and Material UI (MUI). This project showcases my expertise in integrating frontend and backend systems to deliver a seamless user experience, from secure authentication flows to real-time data management and responsive design.

In addition to development, I’m passionate about problem-solving and have tackled over 166 LeetCode problems, including challenging topics like maps, graphs, and trees. These experiences have sharpened my understanding of data structures and algorithms (DSA), helping me develop efficient and scalable solutions in my projects. By solving these complex problems, I’ve strengthened my skills in implementing algorithms for optimal data retrieval, graph traversal, and hierarchical data management—skills that I bring to every project I work on.

With a solid foundation in full stack development and a continuous drive for improvement, I'm actively seeking opportunities to contribute my skills to impactful projects and grow further as a developer.
              </p>
            </div>
          </div>
        </div>
        <div
          className="-ml-12 -mt-12 p-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
          data-aos="fade-left"
        >
          <img
            className="w-[38rem] ring-2 ring-base-300 max-w-none rounded-xl shadow-xl sm:w-[57rem]"
            src="https://fastly.picsum.photos/id/473/5000/3333.jpg?hmac=OrrE0aUqLbLCJ9PAlSn0dIRHjOnuuuev9IjuO3PGZf8"
            alt="Person"
          />
        </div>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
          <div className="text-base leading-7">
            <div className="grid gap-x-6 sm:grid-cols-2">
              <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <BriefcaseIcon className="h-5 w-5 mx-auto" aria-hidden="true" />
                <h2 className=" text-2xl text-center font-bold tracking-tight">
                  Experience
                </h2>
                <p className="mt-3 list-item list-inside">
                  Built fully functional E-commerce Platform
                  called <a href="https://proshop-smhr.onrender.com/" className="underline font-semibold" target="_blank" rel="noreferrer">
                   Proshop
                  </a>.
                </p>
                <p className="mt-3 list-item list-inside">
                  Last 11 months working on personal projects and  Learning new technologies and solving <a href="https://leetcode.com/u/sheik08/" className="underline font-semibold" target="_blank" rel="noreferrer">LeetCode</a> problems.
                </p>
                <p className="mt-3 list-item list-inside">
                  Worked as an Assistant Manger in my hometown for 2 years
                </p>
              </div>
              <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <AcademicCapIcon
                  className="h-5 w-5 mx-auto"
                  aria-hidden="true"
                />
                <h2 className=" text-2xl text-center font-bold tracking-tigh">
                  Education
                </h2>
                <p className="mt-3 list-item list-inside">
                  Jamal Mohamed College, Trichy (Bharathidasan university), Tamil Nadu, India.
                </p>
                <p className="mt-3 list-item list-inside">
                  CGPA: 8.5/10
                </p>
                <p className="mt-3 list-item list-inside">
                  Higher Education: THANTHAI HANS ROEVER HIGHER SECONDARY SCHOOL
                  Perambalur, Tamil Nadu, India.
                </p>
              </div>
            </div>
            <dl
              className="mt-10 space-y-8 text-base leading-7 lg:max-w-none"
              data-aos="fade-right"
            >
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
