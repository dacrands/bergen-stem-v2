import React from 'react'
import { navigateTo } from 'gatsby-link'

const MAJORS = ["Physics", "Engineering", "Chemistry", "Biology", "CompSci", "Mathematics"]

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <section className="container contact">
        <header className="header contact__header">
          <h2>Contact Us</h2>
          <h3>Have an idea for a research project?</h3>
          <h3>Interested in joining the STEM club?</h3>
          <h3>Let us know!</h3>
        </header>
        <div className="contact__form">
          <form
            className="form content"
            name="contact"
            method="post"
            action="/success/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >            

            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{' '}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </p>
            <div className="form__box">
            <p className="form__item">
              <label>
                Name
                <input
                  required
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                />
              </label>
            </p>
            <p className="form__item">
              <label>
                Email
                <input
                  required
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                />
              </label>
            </p>
            <p className="form__item">
              <label>
                Major
                <select
                  required                  
                  name="major"
                  onChange={this.handleChange}
                >
                  {
                    MAJORS.map(m => (
                      <option value={m}>{m}</option>
                  ))
                }
                </select>
              </label>
            </p>
            <div className="form__box">
            </div>
            <p className="form__item">
              <label>
                Research Interests:
                <textarea
                  required
                  rows="10"
                  name="message"
                  onChange={this.handleChange}
                />
              </label>
            </p>
            <p>
              <button className="button" type="submit">
                Send
              </button>
            </p>
            </div>            
          
          </form>
        </div>
      </section>
    )
  }
}
