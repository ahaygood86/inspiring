import React, { Component } from 'react'
import styled from 'styled-components'

const ColorChoice = styled.div`
    display: flex;
    align-content: center;
    cursor: pointer;
    transition: 100ms;
    &:hover {
        transform: scale(1.1);
    }
`

const ColorsBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 600px;
    justify-content: space-around;
`

const Dropzone = styled.div`
    position: absolute;
    width: 110px;
    height: 110px;
`

const DropImage = styled.div`
    min-height: 110px;
    margin-top: 10px;
    transition: .1s;
    &.active {
        transform: scale(1);
    }
    &.inactive {
        transform: scale(1.1);
        visibility: hidden;
    }
`

const HomeContent = styled.div`
    font-size: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    text-align: center;
`

const LogoBox = styled.div`
    position: relative;
    width: 600px;
    margin-top: 10px;
`

const LogoImage = styled.img`
`

const ThanksNotice = styled.div`
    transition: 1s;
    &.active {
        visibility: visible;
        font-size: 43px;
        min-height: 86px;
    }
    &.inactive {
        font-size: 0px;
        visibility: collapse;
    }
`

const Reset = styled.button`
    cursor: pointer;
`

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
              current: "",
              position: ["263px", "37px"],
              src: "../static/ia-logo-dot-blue.png"
            },
            { 
              name: "red",
              expected: "red",
              current: "",
              position: ["444px", "61px"],
              src: "../static/ia-logo-dot-red.png"
            },
            { 
              name: "green",
              expected: "green",
              current: "",
              position: ["131px", "325px"],
              src: "../static/ia-logo-dot-green.png"
            },
            { 
              name: "black1",
              expected: "black",
              current: "",
              position: ["35px", "180px"],
              src: "../static/ia-logo-dot-black.png"
            },
            { 
              name: "black2",
              expected: "black",
              current: "",
              position: ["408px", "277px"],
              src: "../static/ia-logo-dot-black.png"
            }
        ]
        
    }

    onDragOver = (e) => {
        e.preventDefault()
    }

    onDragStart = (e, id, color) => {
        e.dataTransfer.setData("id", id)
        e.dataTransfer.setData("color", color)
    }

    onDrop = (e, zone, cat) => {        
        const id = e.dataTransfer.getData("id")
        const color = e.dataTransfer.getData("color")
      
        const choices = this.state.choices.map(choice => {
            if (color == zone.expected 
                && id === choice.name 
                && zone.current == "") {
                choice.category = cat
            } 
            return choice
        })

        const inputs = this.state.inputs.map(input => {
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
    
    resetHandler = () => {
        const choices = this.state.choices.map(choice => {
            choice.category = "unset"
            return choice
        })
        const inputs = this.state.inputs.map(input => {
            input.current = ""
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
                Please help us complete our logo by dragging the colors to the appropriate location!
                <ColorsBox>
                    {this.state.choices.filter(choice => choice.category == "unset")
                        .map(choice => (
                            <ColorChoice key={choice.name}
                                draggable
                                onDragStart = {e => this.onDragStart(e, choice.name, choice.color)}
                            >
                                <img src={choice.src}  />  
                            </ColorChoice>
                        )
                    )}
                </ColorsBox>
                <ThanksNotice className={this.state.inputs.filter(input => input.current != '').length == 5 ? "active" : "inactive"}>
                    Great job!
                </ThanksNotice>
                <LogoBox>                  
                    {this.state.inputs.map(input => (
                        <Dropzone
                            key={input.name}
                            onDragOver={(e)=>this.onDragOver(e)}
                            onDrop={(e)=>this.onDrop(e, input, "complete")}
                            style={{left: input.position[0], top: input.position[1]}}
                        >                   
                            <DropImage className={input.current != "" ? "active" : "inactive"}>
                                <img src={input.src} /> 
                            </DropImage>
                        </Dropzone>                    
                    ))}
                    <LogoImage src="../static/ia-logo-back.png" />
                </LogoBox>
                <Reset 
                    onClick={()=>this.resetHandler()}
                >
                    Reset Me
                </Reset>
            </HomeContent>
        )
    }
}

export default Home