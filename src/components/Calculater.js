import React, { useState } from 'react'
import { Container, Button, Current, Previus, Screen } from './Styled'

export default function Calculater() {
    // const [showCalc, setShowCalc] = useState(true);
    const [current, setCurrent] = useState("");
    const [operation, setOperation] = useState("");
    const [previus, setPrevius] = useState("");

    const valueHandler = (e) => {
        const getValue = e.target.getAttribute('data')
        if(getValue === "." && current.includes(".")) return
        setCurrent(current + getValue)
        console.log(current)
    }
    const delHandler = () => {
        setCurrent(String(current).slice(0, -1))
    }
    const clearAllHandler = () => {
        setCurrent("");
        setOperation("");
        setPrevius("");
    }
    const operationHandler = (e) => {
        if(current === "") return;
        if(previus !== ""){
            let val = compute();
            setPrevius(val);
        } else {
            setPrevius(current);
        }
        
        setCurrent("");
        setOperation(e.target.getAttribute("data"));
    };

    const equalHandler = () => {
        let val = compute();
        if(val === undefined || val === null) return;

        setCurrent(val);
        setPrevius("");
        setOperation("");
    }
    const compute = () => {
        let result;
        let previusNumber = parseFloat(previus);
        let currentNumber = parseFloat(current)

        if(isNaN(previusNumber) || isNaN(currentNumber)) return;

        switch (operation) {
            case "÷":
                result = previusNumber / currentNumber;
                break;
            case "×":
                result = previusNumber * currentNumber;
                break;
            case "+":
                result = previusNumber + currentNumber;
                break;
            case "-":
                result = previusNumber - currentNumber;
                break;
                default:
                    return;
        }

        return result;
    }

  return (
    <>
        {/* <button className='btn' onClick={()=> setShowCalc(!showCalc)}>{showCalc ? 'Hide Calculater' : 'Show Calculater'}</button> */}
        
        <Container>
            <Screen>
                <Previus>{ previus } { operation }</Previus>
                <Current>{current}</Current>
            </Screen>
            <Button gridSpan={2} onClick={clearAllHandler}>AC</Button>
            <Button control onClick={delHandler}>Del</Button>
            <Button data={"÷"} operation onClick={operationHandler}>÷</Button>
            <Button data={7} onClick={valueHandler}>7</Button>
            <Button data={8} onClick={valueHandler}>8</Button>
            <Button data={9} onClick={valueHandler}>9</Button>
            <Button data={"×"} operation onClick={operationHandler}>×</Button>
            <Button data={4} onClick={valueHandler}>4</Button>
            <Button data={5} onClick={valueHandler}>5</Button>
            <Button data={6} onClick={valueHandler}>6</Button>
            <Button data={"+"} operation onClick={operationHandler}>+</Button>
            <Button data={1} onClick={valueHandler}>1</Button>
            <Button data={3} onClick={valueHandler}>3</Button>
            <Button data={2} onClick={valueHandler}>2</Button>
            <Button data={"-"} operation onClick={operationHandler}>-</Button>
            <Button data={"."} period onClick={valueHandler}>.</Button>
            <Button data={0} onClick={valueHandler}>0</Button>
            <Button equals={2} onClick={equalHandler}>=</Button>
        </Container>
    </>
  )
}
