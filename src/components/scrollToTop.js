import React, { Component } from 'react'

class ScrollToTop extends Component {
  componentDidMount() {
    const footer = document.querySelector('.footer');
    window.addEventListener('scroll', () => {      
        if(this.refs.scrollBtn) {
          window.scrollY > 300
            ? (this.refs.scrollBtn.style.display = 'block')
            : (this.refs.scrollBtn.style.display = 'none')

            // Find intersection
            const footerRect = footer.getBoundingClientRect();
            const btnRect = this.refs.scrollBtn.getBoundingClientRect();

            if ( btnRect.bottom >= footerRect.top ) {              
              this.refs.scrollBtn.style.bottom = `${footer.clientHeight}px`;
            } else {
              this.refs.scrollBtn.style.bottom = `2rem`;
            }
            console.log(footer.clientHeight)


        }        
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
