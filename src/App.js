import React, { Component } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Components/Layouts/Main'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portofoio from './Components/Portofolio/Portofoio';
import Contact from './Components/Contact/Contact';
import Notfound from './Components/NoutFound/Notfound';
 
export default class App extends Component {
  routes=createBrowserRouter([{
    path:'/',element:<Main/>,children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'profile',element:<Portofoio/>},
      {path:'contact',element:<Contact/>},
      {path:'*',element:<Notfound/>}
    ]
  }])
  render() {
    return (
      <>
    
      <RouterProvider router={this.routes}/>
      </>
    )
  }
}
