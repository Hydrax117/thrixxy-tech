import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./teamCard.css";
export const TeamCard = ({
  image,
  position,
  name,
  linkedInUrl,
  facebookUrl,
  gitubUrl,
  twitterUrl,
}) => {
  return (
    <div className="col-lg-4 col-xl-3 col-sm-7 col-md-5  ">
      <div className="team-card">
        <img src={image} alt="" className="imgg" />
        <div className="text-center mt-3">
          <p style={{ color: "blue" }}>{position}</p>
          <p>{name}</p>
        </div>
        <div className="team-social d-flex">
          <div className="icn ms-2">
            <Link to={linkedInUrl} className="nav-link">
              <FaLinkedinIn size={25} className="p-1" />
            </Link>
          </div>
          <div className="icn ms-2">
            <Link to={facebookUrl} className="nav-link">
              <FaFacebookF size={25} className="p-1" />
            </Link>
          </div>
          <div className="icn ms-2">
            <Link to={gitubUrl} className="nav-link">
              <FaGithub size={25} className="p-1" />
            </Link>
          </div>
          <div className="icn ms-2">
            <Link to={twitterUrl} className="nav-link">
              <FaTwitter size={25} className="p-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
