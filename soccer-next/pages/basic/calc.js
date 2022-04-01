import React, {useState} from "react"

export default function Calc(){
    
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const {num1, num2, opcode} = inputs;

    const handleChange = e =>{
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]:value
        })

    }
    const handleClick = e => {
        e.preventDefault()
        const calcRequest = {num1, opcode, num2}
        alert(`계산: ${JSON.stringify(calcRequest)}`)
    }
    return (
        <>
        <form>
        <h1>Calc 폼</h1>
        <div>
            <label><b>number1</b></label>
            <input name="num1" type="" onChange={handleChange}/><br/>
            <label><b>opcode</b></label>
            <select name="opcode" onChange={handleChange}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select>
            <br/>
            <label><b>number2</b></label>
            <input name="num2" type="" onChange={handleChange}/><br/>
            <button onClick={handleClick}>전송</button>
        </div>
       
        </form>
        </>

    )
}
