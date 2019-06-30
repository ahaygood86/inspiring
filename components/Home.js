import React, { Component } from 'react';
import styled from 'styled-components';

const ColorChoice = styled.img`
    border: 1px solid black;
`;

const ColorsBox = styled.div`
    flex-direction: row;
`;

const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    text-align: center;
`;

const LogoBox = styled.img`
    border: 1px solid black;
`;

const Dropzone = styled.div`
    width: 50%;
    height: 80px;
    border: 1px solid black;
`;

class Home extends Component {
    
    state = {

        choices: [
          { 
            name:"blue",
            category:"unset",
            color:"blue",
            src: "../static/ia-logo-dot-blue.png"
          },
          { 
            name:"red",
            category:"unset",
            color:"red",
            src: "../static/ia-logo-dot-red.png"
          },
          { 
            name:"green",
            category:"unset",
            color:"green",
            src: "../static/ia-logo-dot-green.png"
          },
          { 
            name:"black1",
            category:"unset",
            color:"black",
            src: "../static/ia-logo-dot-black.png"
          },
          { 
            name:"black2",
            category:"unset",
            color:"black",
            src: "../static/ia-logo-dot-black.png"
          },
        ],

        inputs : [
            { 
              name: "blue",
              expected: "blue",
              current: ""
            },
            { 
              name: "red",
              expected: "red",
              current: ""
            },
            { 
              name: "green",
              expected: "green",
              current: ""
            },
            { 
              name: "black1",
              expected: "black",
              current: ""
            },
            { 
              name: "black2",
              expected: "black",
              current: ""
            }
        ]
        
    }

    onDragOver = (e) => {
        e.preventDefault();
    }

    onDragStart = (e, id, color) => {
        e.dataTransfer.setData("id", id);
        e.dataTransfer.setData("color", color);
    }

    onDrop = (e, zone, cat) => {
        let id = e.dataTransfer.getData("id")
        let color = e.dataTransfer.getData("color")
        
        let choices = this.state.choices.filter(choice => {
            if (color == zone.expected 
                && id === choice.name 
                && zone.current == "") {
                choice.category = cat
            } 
            return choice
        })

        let inputs = this.state.inputs.filter(input => {
            if (color == zone.expected 
                && zone.name == input.name 
                && zone.current == "") {
                input.current = color
            } 
            return input
        })

        this.setState({
            choices,
            inputs
        })
    }
    
    
    render() {
        return (
            <HomeContent>
                I am the home component
                <ColorsBox>
                    {this.state.choices.filter(choice => choice.category == "unset")
                        .map(choice => (
                            <div key={choice.name}
                                draggable
                                onDragStart = {(e) => this.onDragStart(e, choice.name, choice.color)}
                            >
                                <img src={choice.src}  />  
                            </div>
                        )
                    )}
                </ColorsBox>
                <div>
                    {this.state.inputs.map(input => (
                        <Dropzone
                            key={input.name}
                            onDragOver={(e)=>this.onDragOver(e)}
                            onDrop={(e)=>this.onDrop(e, input, "complete")}
                            style={{background: input.current}}
                        />                    
                    ))}
                </div>
            </HomeContent>
        );
    }
}

export default Home;