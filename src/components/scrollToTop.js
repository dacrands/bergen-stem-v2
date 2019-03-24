import React, { Component } from 'react'

class ScrollToTop extends Component {
  componentDidMount() {
    window.addEventListener('scroll', () => {
      window.scrollY > 300
        ? (this.refs.scrollBtn.style.display = 'block')
        : (this.refs.scrollBtn.style.display = 'none')
    })
  }
  scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  render() {
    return (
      <button
        ref="scrollBtn"
        onClick={this.scrollTop.bind(this)}
        className="button button--scroll"
      >
        Scroll To Top
      </button>
    )
  }
}

export default ScrollToTop
