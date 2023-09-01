import React, { useState } from "react";
import "./newsletter.css";
import G1 from "../../img/gradient1.png";
import G2 from "../../img/gradient2.png";
import { Form } from "antd";
import loadingGif from "../../img/loading-green-loading.gif"
import { sanitize } from "../../utils/sanitize";

function Newsletter({status, message, onValidated }) {
 
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);

  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  const handleInputKeyEvent = (event) => {
    setError(null);
    if (event.keyCode === 13) {
      event.preventDefault();
      handleFormSubmit();
    }
  };

  const getMessage = (message) => {
    console.log("message",message)
    if (!message) {
      
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize(formattedMessage) : null;
  };
  return (
    <>
      <div style={{ paddingTop: 20 }} id="contact" />
      <div className="news-sec">
        <div className="sec-left">
          <div className="news-content">
            <div className="letsConnect">Get in the Loop</div>
            <div className="connect-desc">
              Got a burning question? Need clarification on a product? Want to
              collaborate? We're all ears! Our team is passionate about what we
              do and eager to provide you with the support you need. Just drop
              us a message, and we'll get back to you as soon as possible.
            </div>
          </div>
          <div className="grad-img">
            <img src={G1} alt="" className="gradientImage g2" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <img src={G2} alt="" className="gradientImage " />
              <div className="brandName">
                3S<span className="brandNameSpan">uite</span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "25px 0px 15px",
          }}
          className="form-sec"
        >
          <Form>
            <Form.Item
              className="form-style"
              rules={[
                {
                  required: true,
                  message: "Please input your first name!",
                },
              ]}
            >
              <input
                className="input-email"
                placeholder="Name"
                type="text"
                required
              />{" "}
            </Form.Item>
            <Form.Item
              className="form-style"
              rules={[
                {
                  required: true,
                  message: "Please input your email address!",
                },
              ]}
            >
              <input
                className="input-email"
                placeholder="Email"
                type="email"
                required
                onChange={(event) => setEmail(event?.target?.value ?? "")}
                onKeyUp={(event) => handleInputKeyEvent(event)}
              />
            </Form.Item>
            <Form.Item className="form-sty le">
              <input
                className="input-email"
                placeholder="Phone Number"
                type="number"
              />
            </Form.Item>
            <p className="textarea-text">You can tell us here!</p>
            <Form.Item
              name="intro"
              rules={[
                {
                  required: true,
                  message: "Don't forget to share your thoughts",
                },
              ]}
            >
              <textarea
                rows="10 "
                cols="50"
                className="textarea-email"
              ></textarea>
            </Form.Item>
            <div className="button n-button" style={{ textAlign: "center" }} onClick={handleFormSubmit}>
              Send Message
            </div>
            <div style={{textAlign:"center",marginTop:20}}>
        { 'sending' === status ? <img src={loadingGif} alt="" className="n-gif" /> : null }
        { status ===  'error' || error ? (
          <div
            className="text-red-700 pt-2"
            style={{color:"#FF0000",fontSize:14,fontWeight:500,width:"100%"}}
            dangerouslySetInnerHTML={{ __html: error || ( message ) }}
          />
        ) : null }
        {'success' === status && 'error' !== status && !error && (
          <div className="text-green-200 font-bold pt-2"  style={{color:"#3ca775",fontSize:14,fontWeight:500,width:"100%"}} dangerouslySetInnerHTML={{ __html: (message) }} />
        )}
        </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
