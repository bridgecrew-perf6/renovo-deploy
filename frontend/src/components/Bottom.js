import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";
import React from 'react'
import ConnectH from './Bottom-Homepage'
import Connect1 from './Connect0'
import Connect2 from './Connect1'
import Connect3 from './Connect3'
import Connect4 from './Connect4'

export default function Bottom(props) {
    if (props.c==0)
        return <ConnectH/>
    else if(props.c==1)
        return <Connect1/>
    else if(props.c==2)
        return <Connect2/>
    else if(props.c==3)
        return <Connect3/>
    else if(props.c==4)
        return <Connect4/>
    
}
