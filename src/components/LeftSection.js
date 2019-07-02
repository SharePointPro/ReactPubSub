import React, { useContext, useEffect } from 'react';
import GlobalContext from '../context/globalContext';
import Styles from './leftSection.module.css';

export default () => {
    const globalContext = useContext(GlobalContext);

    useEffect(() => {
        //Subscribe to global event
        globalContext
        .events
        .subscribe("setFocus", (e) => inputRefsList[e].focus());
    }, []);

    //Store input refs so we can use it to call focus on
    let inputRefsList = [];

    //Create 10 inputs "dynamically"
    const createInputs = () => {
        let inputArray = [];
        for (let i = 0; i <= 10; i++) {
            inputArray
                .push(<div key={i}>
                    <input type='input' id={i + '_input'} ref={(checkbox => inputRefsList.push(checkbox) )}></input>
                </div>)
        }
        return inputArray;
    }

    return (
        <div className={Styles.leftContainer}>
            {createInputs()}
        </div>
    )
}

