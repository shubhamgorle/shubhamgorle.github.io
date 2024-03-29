import React, { useContext, useRef, useState,useEffect } from "react";
import "./Contact.css";
import "../commen.css"
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const [name,setname] = useState("")
  const [email,setemail] = useState("")
  const [message,setmessage] = useState("")
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  useEffect(()=>{
    setname("");
    setemail("");
    setmessage("");
  },[done])
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_le691e3",
        "template_75gmwcp",
        form.current,
        "FuuL29FUxV6goy4ON"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          // form.reset();
         
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name" value={name} onChange={(e)=>{setname(e.target.value)}} />
          <input type="email" name="user_email" className="user" placeholder="Email"  value={email} onChange={(e)=>{setemail(e.target.value)}} />
          <textarea name="message" className="user" placeholder="Message" value={message} onChange={(e)=>{setmessage(e.target.value)}} />
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
