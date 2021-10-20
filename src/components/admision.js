import React, { Component } from 'react';
import {withGetScreen} from 'react-getscreen'


class admision extends Component {

  constructor(){
    super();
  }

  componentDidMount(){
      window.location.href ="http://187.174.80.183:3010/";
  }

  render() {

    return (

      <div>

      </div>
    );
  }
}






const options = {mobileLimit: 420, tabletLimit: 770}
export default withGetScreen(admision, options);
