import React from "react"
import SectionHeader from "../section-header/section-header"
import { useIntl } from "react-intl"

import "./contact.css"

const Contact = () => {
  const intl = useIntl()

  const top = intl.formatMessage({ id: "contact" })
  const bottom = intl.formatMessage({ id: "reach_us" })

  const name = intl.formatMessage({ id: "name" })
  const message = intl.formatMessage({ id: "message" })
  const send = intl.formatMessage({ id: "send" })

  return (
    <div>
      <SectionHeader top={top} bottom={bottom} />

      <form
        method="POST"
        className="contact-form"
        name="contact"
        data-netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <p hidden>
          <label>
            Name{" "}
            <input
              aria-label="form-name"
              type="hidden"
              id="form-name"
              name="form-name"
              value="contact"
            />
          </label>
        </p>

        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input aria-label="bot-field" name="bot-field" />
          </label>
        </p>

        <label htmlFor="name">Name</label>
        <input
          aria-label="name"
          className="input-field top-field"
          type="text"
          name="name"
          id="name"
          placeholder={name}
        />
        <label htmlFor="email">Email</label>
        <input
          aria-label="email"
          className="input-field top-field"
          type="email"
          name="email"
          placeholder="E-Mail"
          id="email"
        />
        <label htmlFor="subject">Subject</label>
        <input
          aria-label="subject"
          className="input-field subject"
          type="text"
          name="subject"
          placeholder="Subject"
          id="subject"
        />
        <label htmlFor="message">Message</label>
        <textarea
          aria-label="message"
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
