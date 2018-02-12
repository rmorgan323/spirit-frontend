import React, { Component } from 'react';
import './Sam.css';

class Sam extends Component {
  constructor() {
    super();

    this.state = {
      imgSrc: `/assets/sam.png`
    }
  }

  handleMouseOver(num) {
    let array = [].slice.call(document.querySelectorAll(num))
    if (array.length) {
      array.forEach(val => val.classList.add('sam-hover'))
    }

    this.setState({
      imgSrc: `/assets/sam.png`
    })
  } 

  handleMouseOut(num) {
    let array = [].slice.call(document.querySelectorAll(num))
    if (array.length) {
      array.forEach(val => val.classList.remove('sam-hover'))
    }

    this.setState({
      imgSrc: `/assets/sam.png`
    })
  }

  render() {
    return (
      <div className="Sam">
        <img 
          className="sam-graphic" 
          src={this.state.imgSrc} 
          useMap="#sam_map"
          width="400"
          alt="sam-graphic"
        />
        <map name="sam_map">
          <area 
            className="sam-hover-1"
            shape="circle"
            coords="16,100,14"
            onMouseOver={() => this.handleMouseOver('.sam-1')}
            onMouseOut={() => this.handleMouseOut('.sam-1')}
            alt="sam-graphic"
          />
          <area 
            className="sam-hover-2"
            shape="circle"
            coords="285,102,14"
            onMouseOver={() => this.handleMouseOver('.sam-2')}
            onMouseOut={() => this.handleMouseOut('.sam-2')}
            alt="sam-graphic"
          />
          <area 
            className="sam-hover-3"
            shape="circle"
            coords="95,18,14"
            onMouseOver={() => this.handleMouseOver('.sam-3')}
            onMouseOut={() => this.handleMouseOut('.sam-3')}
            alt="sam-graphic"
          />
          <area 
            className="sam-hover-4"
            shape="circle"
            coords="148,102,14"
            onMouseOver={() => this.handleMouseOver('.sam-4')}
            onMouseOut={() => this.handleMouseOut('.sam-4')}
            alt="sam-graphic"
          />
          <area 
            className="sam-hover-5"
            shape="circle"
            coords="191,15,14"
            onMouseOver={() => this.handleMouseOver('.sam-5')}
            onMouseOut={() => this.handleMouseOut('.sam-5')}
            alt="sam-graphic"
          />
          <area 
            className="sam-hover-6"
            shape="circle"
            coords="384,18,14"
            onMouseOver={() => this.handleMouseOver('.sam-6')}
            onMouseOut={() => this.handleMouseOut('.sam-6')}
            alt="sam-graphic"
          />
        </map>
      </div>
    )
  }
}

export default Sam;















