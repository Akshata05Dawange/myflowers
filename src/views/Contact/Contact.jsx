import { useState } from "react";
import "./Contact.css";
import PageTitle from "../../components/PageTitle/PageTitle";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showPopup, setShowPopup] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields 😊");
      return;
    }

    // Save to LocalStorage
    const storedMessages = JSON.parse(localStorage.getItem("contactMessages")) || [];
    storedMessages.push(formData);
    localStorage.setItem("contactMessages", JSON.stringify(storedMessages));

    // Show popup
    setShowPopup(true);

    // Clear Form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
      <PageTitle title="Contact Us 📞" />

      <p>Email: flowershop@gmail.com</p>
      <p>Phone: +91 9876543210</p>
      <p>Location: Aurangabad, India</p>

      <div className="contact-form">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button onClick={handleSubmit}>Send Message 💌</button>
      </div>

      {/* POPUP WINDOW */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>✨ Message Sent Successfully! ✨</h2>
            <p>Thank you for contacting us. We will get back to you soon 💐</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;