import React, { Component, PropTypes } from 'react';
import Banner from './layout/Banner';


class Services extends Component {

  render () {
    return (
      <div>

        <Banner />

        <div className="services">

          <h3>Prototypes/MVPs</h3>

          <p>I can build you a prototype or a minimal viable product (MVP) for your idea. An MVP can validate your idea and help you raise funding.
          </p>

          <p>The code I deliver will be the best possible foundation from which your application and idea can grow.</p>

	      	<h3>Training</h3>

	      	<p>I can help you or your employees develop their web development coding skills. </p>



	      </div>

	      <div className="services">

          <h3>Enterprise Web Apps</h3>

          <p>Whether you are a start-up or a bluechip company, I can help you build a production-ready web application.
          </p>

          <p>The web application will be built with the best technologies and will be scalable, secure, and maintainable.</p>

          <h3>Hybridised Development</h3>

          <p>Do you need a mobile app and web app with the same code base? I can code your web application so that it utilises Phonegap/Cordova/React Native to build both a web application and a cross-device mobile application.</p>

	      </div>

      </div>
    );
  }
}

export default Services;
