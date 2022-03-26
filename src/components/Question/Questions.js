import React from 'react';

const Questions = () => {
    return (
        <div className='my-5'>
            <div className='container border border-2 border-dark p-3 mb-2'>
                <h1 className='text-danger'>Questions: How React Works ?</h1>
                <p><span className='fw-bolder text-primary fs-5'>Answer: </span> The most popular JavaScript library run and executes codes using declarative code.
                Meaning that If you see the App component of a react project every top level component is declared in one place
                We create components to encapsulate different codes and make the code easier to view at first sight
                React uses states to store data so that we can rerender the dom efficiently.
                React creates a virtual dom to quickly identify the changes in DOM.
                When a state changes react compares the old virtual dom with new one then applies the changes and keeps the rest code untouched
                React also uses keys so that the changes can quickly be identified.
                In a React Project components are well organized</p>
            </div>
            <div className='container border border-2 border-dark p-3 mb-2'>
                <h1 className='text-danger'>Questions: Difference between props vs state</h1>
                <p><span className='fw-bolder text-primary fs-5'>Answer: </span> Props are used to pass data from one component to another component and State data is passed inside the component only.
                Props can be used to populate state and can be used with any kind of components. But at earlier days state was only used in a class component
                You cannot the data of Props, but you can change sate data as many times as you want.
                You can only read Props, but States can be both read and written
                Props is passed as an attribute or key from an component to other, and State can be declared using useState hook in functional component</p>
            </div>
            <div className='container border border-2 border-dark p-3'>
                <h1 className='text-danger'>Questions: How useState Works ?</h1>
                <p><span className='fw-bolder text-primary fs-5'>Answer: </span> Before React v16 we could not use states in a functional components, but now useState hooks allows us to use state in a functional component
                useState hooks function is called with a initial state, ant it returns an array of 2 variables. One is to access the state and another is to set the state
                In a class component state is declared using this.state, but in a functional component useState hook can handle the functionality of the state of a component.
                There are many hooks used in React to make the logic of application simple. useState hook make to store the state data in a simpler way
                By using useState hook react virtual DOM can quick identify the changes in the dom and apply only the changes efficiently</p>
            </div>
        </div>
    );
};

export default Questions;