import ProjectItem from "./ProjectItem";
import { Link } from "react-router-dom";
import budie from "../assets/budie-app.png";
import movo from "../assets/movo.png";

import veskee from "../assets/veskee.png";

import ultra from "../assets/ultra.png";

import kiasup from "../assets/kiasup.jpg";
import jikoo from "../assets/jikoo.png";
import ridebuddy from "../assets/ridebuddy.png";

import facier from "../assets/facier.png";

import linkImg from "../assets/link.svg";
import github from "../assets/github.svg";

export default function Projects() {
  return (
    <div className="font1">
      <div className="projects">
        <div className="projects-spread">
          <div className="card">
            <div className="card-text">
              <h3>01. FACIER</h3>
              <img src={facier} alt="" className="project-img" />
              <p>
                Facier is a facial-recognition based attendance system for
                classrooms. It allows lecturers to capture and track their
                student attendance records using facial recognition.
              </p>

              <div className="project-links ">
                <Link to="https://github.com/kerenIy/fras_system">
                  <button>
                    <img src={github} alt="" className="menu-btn" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <ProjectItem
          img={kiasup}
          tech="NextJs, TypeScript, TailwindCSS"
          title="02. Soundmind Digital Health"
          description="SoundMind is a platform that connects individuals seeking mental health support with vetted professional therapists. It enables seamless virtual sessions through chat and video consultations while also providing access to valuable mental health resources for personal growth and well-being."
          link="https://soundmind-web.vercel.app/patient/login"
        />

        <ProjectItem
          img={kiasup}
          tech="React, TailwindCSS"
          title="03. Foam"
          description="Foam Laundry Application simplifies the laundry process with an intuitive interface that allows users to select items for cleaning, make secure payments, and receive instant receipts. Users can also track their laundry progress in real time until it is delivered back to them."
          link="https://www.foamlaundryapp.com/"
        />

         <ProjectItem
          img={kiasup}
          tech="React, TailwindCSS"
          title="04. Kiasup"
          description="Kiasup is a dynamic platform dedicated to connecting artisans, service providers, freelancers, and small-scale workers with clients seeking their expertise."
          link="https://www.kiasup.com/"
        />

        <ProjectItem
          img={veskee}
          tech="HTML, CSS, JS"
          title="05. VESKEE"
          description="Veskee is a financial application that is revolutionising the economic framework of large establishments through superior software solutions"
          link="https://veskee.com/"
        />

        <ProjectItem
          img={jikoo}
          tech="REACT"
          title="06. JIKOO"
          description="Jikoo is a food delivery application that allows users to order food, and gives food vendors an opportunity to sell their food on a larger marketplace."
          link="https://jikoo.ng/"
        />
       
      </div>
    </div>
  );
}
