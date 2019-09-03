import React from 'react';
import MyHeader from './MyHeader';

class MyInput extends React.Component{
    render(){
        return (
            <div className="my-input-class">
                <h4>Input!</h4>
                <input />
                <MyHeader />
            </div>
        );
    }
}

export default MyInput;