/* eslint-disable prettier/prettier */
import OurTeam from "../components/outTeam";
import Header from "../components/header";
import { useLocation } from "react-router-dom"

const AboutUs = () => {
  const location = useLocation();

  return (
    <div>
      <Header loggedUser={location.state}/>
      <OurTeam/>
    </div>
  );
};

export default AboutUs;