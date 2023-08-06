import React from "react";

function ContactUs() {


  return (
    <>
      <center style={{ color: "white" }}>
        <h1>Contact Us</h1>
        <h2>Feel Free to contact us</h2>
        <hr />
      </center>
      <div className="contant-section">
        <div className="contact-item">
          <form action="https://formspree.io/f/xrgwewpq" method="post">

            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows={5}
                cols={50}
                placeholder="Message..."
                required
              ></textarea>
            </div>

            <div className="send">
              <input type="submit" value="Send" className="btns" id="submit-btn" />
            </div>

            
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
