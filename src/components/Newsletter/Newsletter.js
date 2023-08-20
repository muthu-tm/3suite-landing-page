import React, { useState } from "react";
import "./newsletter.css";
import G1 from "../../img/gradient1.png";
import G2 from "../../img/gradient2.png";
import { Form } from "antd";

function Newsletter() {
  const [firstName, SetFirstName] = useState("");
  const [lastName, SetLastName] = useState("");
  const [email, SetEmail] = useState("");
  const [phone, SetPhone] = useState("");
  const [desc, SetDesc] = useState("");
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
                onChange={(e) => SetFirstName(e.target.value)}
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
                onChange={(e) => SetEmail(e.target.value)}
              />
            </Form.Item>
            <Form.Item className="form-style">
              <input
                className="input-email"
                placeholder="Phone Number"
                type="number"
                onChange={(e) => SetPhone(e.target.value)}
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
                onChange={(e) => SetDesc(e.target.value)}
              ></textarea>
            </Form.Item>
            <div className="button n-button" style={{ textAlign: "center" }}>
              Send Message
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
