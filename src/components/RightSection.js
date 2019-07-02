import React, { useContext } from 'react';
import GlobalContext from "../context/globalContext";
import Styles from './rightSection.module.css';

export default () => {
    const globalContext = useContext(GlobalContext);

    //Create 10 buttons, this will trigger (publish) event
    const createButtons = () => {
        let inputArray = [];
        for (let i = 0; i <= 10; i++) {
            inputArray
                .push(<div key={i}>
                    <button onClick={() => globalContext.events.publish("setFocus", i)}>Focus on {i}</button>
                </div>)
        }
        return inputArray;
    }
    return (
        <div className={Styles.rightContainer}>
            {createButtons()}
        </div>
    )
}

