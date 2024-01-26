import "./ServiceCard.css";
export const ServiceCard = ({ serviceName, serviceIcon, serviceDesc }) => {
  return (
    <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay={200}>
      <div className="service-container">
        <div className="service-icon">{serviceIcon}</div>
        <div className="service-item">
          <p className="service-title">{serviceName}</p>
          <p className="service-description">{serviceDesc}</p>
        </div>
      </div>
    </div>
  );
};
