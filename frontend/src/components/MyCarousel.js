import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export default class MyCarousel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img src="img/1984.jpg" width="1000px" height="677px" />
          <Carousel.Caption>
            <h3>1984</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="img/1994.jpg" width="1000px" height="677px" />
          <Carousel.Caption>
            <h3>1994</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="img/2004.jpg" width="1000px" height="677px" />
          <Carousel.Caption>
            <h3>2004</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="img/2014.jpg" width="1000px" height="677px" />
          <Carousel.Caption>
            <h3>2014</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
