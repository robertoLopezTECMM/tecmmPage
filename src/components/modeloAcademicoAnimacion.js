// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';


const SectionWipes2Styled = styled.div`
  overflow: hidden;
  #pinContainer {
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }
  #pinContainer .panel {
    height: 100vh;
    width: 100%;
    position: absolute;
    text-align: center;
  }
  .panel span {
    position: relative;
    display: block;
    top: 50%;
    font-size: 80px;
  }

  .panel.blue {
    background-color: #3883d8;
  }

  .panel.turqoise {
    background-color: #38ced7;
  }

  .panel.green {
    background-color: #22d659;
  }

  .panel.bordeaux {
    background-color: #953543;
  }
`;

class ModeloAcademicoAnimacion extends Component{

  constructor(props){
    super(props);
    this.state={
      modeloAcademicoSlides:[
        {image:'http://tecmm.edu.mx/imagesReact/images/hoja-2.png'},
        {image:'http://tecmm.edu.mx/imagesReact/images/hoja-3.png'},
        {image:'http://tecmm.edu.mx/imagesReact/images/hoja-4.png'},
        {image:'http://tecmm.edu.mx/imagesReact/images/hoja-5.png'},
        {image:'http://tecmm.edu.mx/imagesReact/images/hoja-6.png'},
        {image:'http://tecmm.edu.mx/imagesReact/images/hoja-7.png'},
        {image:'http://tecmm.edu.mx/imagesReact/images/hoja-8.png'},
        {image:'http://tecmm.edu.mx/imagesReact/images/hoja-9.png'},
        {image:'http://tecmm.edu.mx/imagesReact/images/hoja-10.png'},
        {image:'http://tecmm.edu.mx/imagesReact/images/hoja-11.png'},
        {image:'http://tecmm.edu.mx/imagesReact/images/hoja-12.png'},
        {image:'http://tecmm.edu.mx/imagesReact/images/hoja-13.png'},
        {image:'http://tecmm.edu.mx/imagesReact/images/hoja-14.png'},
        {image:'http://tecmm.edu.mx/imagesReact/images/hoja-15.png'},
        {image:'http://tecmm.edu.mx/imagesReact/images/hoja-16.png'},
        {image:'http://tecmm.edu.mx/imagesReact/images/hoja-17.png'},
        {image:'http://tecmm.edu.mx/imagesReact/images/hoja-18.png'},
        {image:'http://tecmm.edu.mx/imagesReact/images/hoja-19.png'},
        {image:'http://tecmm.edu.mx/imagesReact/images/hoja-20.png'},
      ]
    }
  }

  render(){
    return(
      <SectionWipes2Styled>
        <Controller>
          <Scene triggerHook="onLeave" duration="300%" pin >
            <Timeline wrapper={<div id="pinContainer" />}>

              <section className="panel blue">
                <img style={{width:"100%", height:"100%"}} src={"http://tecmm.edu.mx/imagesReact/images/hoja-1.png"}/>
              </section>

              {this.state.modeloAcademicoSlides.map((it)=>(
                <Tween from={{ y: '100%' }} to={{ y: '0%' }}>
                  <section className="panel turqoise">
                    <img style={{width:"100%", height:"100%"}} src={it.image}/>
                  </section>
                </Tween>
              ))}


            </Timeline>
          </Scene>
        </Controller>
      </SectionWipes2Styled>
    );
  }
}



export default ModeloAcademicoAnimacion;
