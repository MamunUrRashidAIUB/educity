import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-info">
        <h2>Send us a message</h2>
        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are important
          to us as we strive to provide exceptional service to our university community.
        </p>

        <div className="contact-details">
          <p>Email: <a href="mailto:Contact@GreatStack.dev">Contact@GreatStack.dev</a></p>
          <p>Phone: <a href="tel:+11234567890">+1 123-456-7890</a></p>
          <p>Address: 77 Massachusetts Ave, Cambridge, MA 02139, United States</p>
        </div>
      </div>

      <div className="contact-form">
        <form action="#" method="post">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your mobile number" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email id" required />

          <label htmlFor="message">Write your message here</label>
          <textarea id="message" name="message" rows="4" placeholder="Enter your message" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
