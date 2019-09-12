import React, { useState, useEffect, useMemo } from 'react'

const Test = () => {
    const [state, setState] = useState({a: 0})
    const [test, setTest] = useState({b: 0})
    useEffect(() => {
        state.a++;
        return () => {
            state.a = 0
        };
    }, [state]);
    
    let ttt = useMemo(() => {
        return state.a + test.b
    } , [state.a, test.b])

    return (
        <div>
            {state.a} | {ttt}
            <button onClick={() => setState({...state})}>add</button>
        </div>
    )
}

export default Test