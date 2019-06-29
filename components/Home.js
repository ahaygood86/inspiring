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
        tasks: [
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
        ]
    }

    onDragOver = (e) => {
        e.preventDefault();
    }

    onDragStart = (e, id) => {
        console.log('onDragStart id:', id);
        e.dataTransfer.setData("id", id);
    }

    onDrop = (e, cat) => {
        let id = e.dataTransfer.getData("id")

        let tasks = this.state.tasks.filter((task) => {
            if (task.name == id) {
                task.category = cat
            }
            return task
        })

        this.setState({
            ...this.state,
            tasks
        })
    }

    render() {

    console.log(this.state.tasks)

        return (
            <HomeContent>
                I am the home component
                <ColorsBox>
                    {this.state.tasks.filter(task => task.category == "unset")
                        .map(task => (
                            <div key={task.name} 
                                draggable
                            >
                                <img src={task.src}  />  
                            </div>
                        )
                    )}
                </ColorsBox>
                <div>
                    <Dropzone
                        
                    
                    />
                </div>


            </HomeContent>
        );
    }
}

export default Home;