import React,{useState} from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function About(){
    const [myStyle, setMyStyle] = useState ({ 
        color: 'black',
        backgroundColor: 'white'
    })
    const [btntext, setbtntext] = useState('Enable dark mode')
    const togglestyle = () =>{
        if(myStyle.color === 'black'){
            setMyStyle({
            color: 'white',
            backgroundColor: 'black'
            })
            setbtntext("Enable light mode");
        }
        else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtntext("Enable dark mode");
        }
    }
    
    return (
        <div className='container box' style={myStyle}>
            <h1 className='my-3'>About Us</h1>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0"  style={myStyle}>
        <Accordion.Header >Accordion Item #1</Accordion.Header>
        <Accordion.Body style={myStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" style={myStyle}>
        <Accordion.Header >Accordion Item #2</Accordion.Header>
        <Accordion.Body style={myStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" style={myStyle}>
        <Accordion.Header >Accordion Item #1</Accordion.Header>
        <Accordion.Body style={myStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <div className='container my-3'>
        <button type='button' onClick={togglestyle} className='btn btn-primary'>{btntext}</button>
    </div>
        </div>
    );
}