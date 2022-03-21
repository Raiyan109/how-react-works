import React, { useState } from 'react';
import Display from '../Display/Display';

const Watch = (props) => {
    const [steps, setSteps] = useState(0)

    const increaseSteps = () => {
        const newStepsCount = steps + 1
        setSteps(newStepsCount)
        console.log(steps)
    }

    return (
        <div>
            <h1>This is a smart watch </h1>
            <h1>my current steps : {steps} </h1>
            <button onClick={increaseSteps}>De Dour....... </button>
            <Display name="garmin" steps={steps}></Display>
        </div>
    );
};

export default Watch;