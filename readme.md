
## React
 welcome to react learning series where i am gonna learn react complete again with building projects

## What is react
React is javascript libraray which is easier to build ui and to make complex frontend

## what is library and framework
Basically in framework ,there is set of rules to follow like to make file of certain name and should be made in that specific folder and how data flow and etc. but in library ,we can make file of our own and make components that is reusable.

## why to learn react 
1.High demand
2.more popular
3.easier to use for making frontend application

## what is react-dom and react-native
React-dom is implemetion of react  used for making web applications and react-native for making mobile applications 


## why is react single page applictaions(SPAs)
Because it updates parts of page or dom changes without reloading

## what is difference between npx create-react-app and npm create vite@latest
1. In npx create-react-app ,we dont have to add script tag to join js file because in this method there is 
react script dependency which make script automatically inside of index.html file.But in npm create vite@latest,
we have to add script tag  manually which makes vite a little faster too.

2. In vite ,we should file name or ext should be .jsx ,if not it throw an error while using that components.But
in noramlly react it doesnt affect either file name is .js or .jsx it wont create any error

3. Note: While making react components or file with any of these method ,always use first name of file or function to Uppercase like Navbar.js .It shows best practices


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'

## creating custom react elements
const customReact=React.createElement(
    'a', //this is a tag 
    {
        href:"https://google.com", // this is attributes we want to set 
        target:"_blank"            
    },
    'Click me'   //this is a innerHTML we want to put in a tag 
)


ReactDOM.createRoot(document.getElementById('root')).render(
    <!-- <App/> // generally here we render our app components in react by default -->
    customReact //it will render my custom react too
)

## Evaluated expressions
In React.js, "Evaluated expressions" typically refers to the process of evaluating JavaScript expressions within JSX (JavaScript XML) syntax. JSX allows you to embed JavaScript expressions directly within your markup, which then gets evaluated and rendered by React.And always return the final output you want to show in that 
jsx file

```
For Example:

import React from 'react'

function App(){
    const name='Username'
    return (
        <h2>MY name is {name}</h2> //here {name} is a evaluated expression
    )
}

## Hooks in React
UseState:-
      Usestate hook is a react hoook which creates an state variable. It helps us to track state in components and update  the user interface when state changes.

UseEffect:-
     UseEffect hook allows us to perform side effect in components.Example like fetching,setTimeout and setInterval and soon.UseEffect generally works when ever their is changes in state variables.
  
UseRef:-
     UseRef is a hook that allow us to create mutable varibables, which wil not render the component. It is also used for accessing dom element.

```
