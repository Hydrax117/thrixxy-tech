import EmailContactForm from "./sendEmail";
import { BiLogoGmail, BiCurrentLocation, BiPhone } from "react-icons/bi";
export const ContactUs = () => {
  return (
    <>
      {/* start of contact us */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <center>
              <h2 className="hebo">Contact Us</h2>
            </center>
          </div>
        </div>

        {/* <!-- End Google Maps --> */}

        <div className="container">
          <div className="row gy-5 gx-lg-5">
            <div className="col-lg-4">
              <div className="info">
                <h3>Get in touch</h3>
                <p>get in touch with our team of highly trained professionls</p>

                <div className="info-item d-flex">
                  <i className="">
                    <BiCurrentLocation />
                  </i>
                  <div>
                    <h4>Location:</h4>
                    <p>No 27/29 majami close ungwan baro kaduna</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div className="info-item d-flex">
                  <i className="">
                    <BiLogoGmail />
                  </i>
                  <div>
                    <h4>Email:</h4>
                    <p> Thrixxytech@gmail.com</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div className="info-item d-flex">
                  <i className="">
                    <BiPhone />
                  </i>
                  <div>
                    <h4>Call:</h4>
                    <p>(+234) 8165616368,+2348023582727</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}
              </div>
            </div>

            <div className="col-lg-8">
              <EmailContactForm />
            </div>
            {/* <!-- End Contact Form --> */}
          </div>
        </div>
      </section>
      {/* end of contact us */}
    </>
  );
};
