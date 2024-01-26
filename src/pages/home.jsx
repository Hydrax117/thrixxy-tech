import { Navbar } from "../components/navigation/navBar";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLaptopCode, FaMobileAlt, FaNetworkWired } from "react-icons/fa";
import { useEffect, useState } from "react";
import { ServiceCard } from "../components/serviceCard/serviceCard";
import { TeamCard } from "../components/teamCard/teamCard";
import { TeamImages } from "../assets/teamImages/teamImages";
import { ContactUs } from "../components/contactUs/contactUs";
export const Home = () => {
  useEffect(() => {
    AOS.init();
    document.title = "home";
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Navbar />

      {/* start of services */}
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <center>
              <h2 className="mt-5 hebo">Our Services</h2>
            </center>
          </div>
          <div className="row gy-5 mt-5">
            <ServiceCard
              serviceIcon={<FaMobileAlt size={60} />}
              serviceName={"Mobile App Development"}
              serviceDesc={
                "Our team of seasoned developers brings a wealth of experience in crafting mobile solutions across various platforms, including iOS and Android."
              }
            />
            <ServiceCard
              serviceIcon={<FaLaptopCode size={60} />}
              serviceName={"Web Development"}
              serviceDesc={
                "In an era where user experience is paramount, we prioritize responsive design to ensure your website looks and performs flawlessly across various devices."
              }
            />
            <ServiceCard
              serviceIcon={<FaNetworkWired size={60} />}
              serviceName={"Printing And Designs"}
            />
            <ServiceCard
              serviceIcon={<FaNetworkWired size={60} />}
              serviceName={"Software Consulting"}
            />
          </div>
        </div>
      </section>
      {/* end of services */}

      {/* start of our team section */}
      <section id="team" className="team mt-5 p-5">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <center>
              <h2 className="hebo">Our Team</h2>
            </center>
          </div>
          <div className="row gy-5 mt-5">
            <div className="row gy-3 team">
              {/* start of team member */}
              <TeamCard
                image={TeamImages.king}
                name={"Tebrick Ibrahim Barem"}
                position={"CEO & Founder"}
                key={2322}
              />

              {/* end of team member */}
              {/* start of team member */}

              <TeamCard
                image={TeamImages.pkaka}
                name={"Paul Joseph Kaka"}
                position={"CTO"}
                key={2323}
              />
              {/* end of team member */}
              {/* start of team member */}

              <TeamCard
                image={TeamImages.eleazer}
                name={"Eleazar Musa Shekoaga"}
                position={"Lead Programmer"}
                key={2324}
              />
              {/* end of team member */}
              {/* start of team member */}

              <TeamCard
                image={TeamImages.jez}
                name={"Zokale Jacob"}
                position={"Secatery"}
                key={2325}
              />
              {/* end of team member */}
            </div>
          </div>
        </div>
      </section>

      {/* end of our team */}
      <ContactUs />
    </>
  );
};
