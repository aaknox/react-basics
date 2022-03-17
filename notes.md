# React: Introduction & Basics
- What is React?
React is a free and open-source frontend JavaScript library for building single-page applications (SPAs).

- What is a SPA? Why use a SPA over a normal webpage?
SPA = a web application that does not use the default method of loading new pages completely. Instead, it takes new data and rewrites the current webpage.
- Advantage(s): the browser doesn't have to go through complete reloading to render a new page
- Disadvantage(s): Slow startup time for the app

- Understanding the Tools used with React:
    - ```package.json``` file = holds metadata relevant to the project; used for managing the project's dependencies
    - ```node_modules``` folder = holds our dependencies (normally added to the .gitignore due to its huge size)
    - webpack = JS Bundler = transform front-end assets such as HTML, CSS, JS, and images with project dependencies and generates static assets upon ```npm build```

## Table of Contents:
1. [Introduction](#react)
2. [Getting Started](#getting-started)
3. [Rendering JSX](#rendering-jsx)
4. [Virtual DOM](#virtual-dom)
5. [Props & states](#props--states)
6. [Lifecycle Hooks: useState, useEffect](#lifecycle-hooks-usestate-useeffect)
7. [Event Handling](#event-handling)
8. [Conditional Rendering](#conditional-rendering)
9. [Rendering array contents using JSX](#rendering-array-contents-using-jsx)
10. [Routing](#routing)
11. [Conclusion](#conclusion)
12. [References](#references)

## Getting started
**To make a new ReactJS app:**
1. ```npx create-react-app <your-app-name>``` (make sure you have Node v14+)
2. ```cd <your-app-name>```
3. ```npm start``` to run your app

**To make a new ReactTS app:**
1. ```npx create-react-app yourProjectName --template typescript```
2. ```cd <your-app-name>```
3. ```npm start``` to run your app

**Troubleshooting:**
- What if React isn't taking in my new changes?
1. In the root folder of your app, make a ".env" file
2. Type in:
```
FAST_REFRESH=false
```
3. Restart your app with npm start, and the changes should take in

## Rendering JSX
JSX, aka JavaScript XML, allows us to put HTML into our JS/TS code.

JSX is useful because:
- no need to more HTML files into our project 
- less refactoring of our code = can be plug-and-play anywhere in our JS/TS files
- more modular due to its reusability of the code into components

Learn more about JSX [here](https://reactjs.org/docs/introducing-jsx.html).

## Virtual DOM
The virtual DOM (VDOM) is a programming concept that uses the process of reconciliation (i.e. an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM).

This benefits React as it renders its JSX elements more quickly. When you render a JSX element, every single virtual DOM object gets updated.

## Props & States
**Before we get into props/states, let's take more about components:**
- There are two ways that we can define components:
    1. function
    2. class

- With either type of components, we can pass arbitrary inputs called **props** (properties) into our components and allow for dynamic flow of data among components. Typical flow is from parent to child component(s).

The key difference between props and state is that **state** is internal and controlled by the component itself while **props** are external and controlled by whatever renders the component.

## Lifecycle Hooks: useState, useEffect
## Event Handling
## Conditional Rendering
## Rendering array contents using JSX
## Routing

## Conclusion
And that's it! Happy coding!!

## References
- [React Documentation](https://reactjs.org/docs/getting-started.html)