import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from './Posts';
import Calendar from './Calendar'
import { Container, Row, Image, Jumbotron, Button } from 'react-bootstrap';
import logo from './images/logo.png'
import TopBar from './TopBar';
import Logo from './Logo';
import Post from "./Post";
import { useLocation } from 'react-router-dom'





import {
  Switch,
  Route,
  Link, useParams,
} from "react-router-dom";


let edizioni = [
  {
    year: "2011",
    category: 274
  },
  {
    year: "2012",
    category: 278
  },
  {
    year: "2013",
    category: 426
  },
  {
    year: "2014",
    category: 440
  },
  {
    year: "2015",
    category: 442
  },
  {
    year: "2017",
    category: 453
  },
  {
    year: "2018",
    category: 454
  }
  ,
  {
    year: "2019",
    category: 456
  },{
    year: "2021",
    category : 457,
  },{
    year: "2022",
    category : 458,
  },{
    year: "2023",
    category : 459,
  },{
    year: "2024",
    category : 460,
  }


  

  
]






function App() {



  const location = useLocation();

  return (



    <div className="App">

      <TopBar editions={edizioni}></TopBar>
      
      <Logo dimension={location.pathname == "/" ? "" : "small"}></Logo>


      <Switch>
        <Route path="/news">
        
          <Posts category="461"></Posts>
        </Route>


        <Route path={`/post/:topicId`}>
        
        <Post postId={useParams().topicId}></Post>
        </Route>



        {edizioni.map((e, index) => {
          return (
            <Route key={"/" + e.year} path={"/" + e.year}>
              <Posts key={"/" + e.year} category={e.category}></Posts>
            </Route>
          )
        })}


        <Route path="/">

          <Posts category="461"></Posts>
          
       
          
          
        </Route>
       
      </Switch>
    

    </div>


  );
}

export default App;
