import React from "react"
import SectionHeader from "../section-header/section-header"
import { isRS } from "../../utils/url"

import "./contact.css"

const Contact = () => {
  const rs = isRS()

  const top = rs ? "kontakt" : "contact"
  const bottom = rs ? "" : "reach us"

  const name = rs ? "Ime" : "Name"
  const message = rs ? "Poruka" : "Message"
  const send = rs ? "Pošalji" : "Send"

  return (
    <div>
      <SectionHeader top={top} bottom={bottom} />

      <form
        action="https://getform.io/f/b6b211be-e630-40c7-b4d1-01a9bf16b35b"
        method="POST"
        className="contact-form"
      >
        <label htmlFor="name">Name</label>
        <input
          className="input-field top-field"
          type="text"
          name="name"
          id="name"
          placeholder={name}
        />
        <label htmlFor="name">Email</label>
        <input
          className="input-field top-field"
          type="email"
          name="email"
          placeholder="E-Mail"
          id="email"
        />
        <label htmlFor="name">Message</label>
        <textarea
          className="input-field message"
          type="text"
          name="message"
          placeholder={message}
          id="message"
        />
        <button className="contact-button" type="submit">
          {send}
        </button>
      </form>
    </div>
  )
}

export default Contact
