import React, {useState} from "react"


export default function Bmi (){

    
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const {name, weight, height} = inputs;

     const handleChange = e => {
         e.preventDefault()
         const {value, name} = e.target;
         setInputs({
             ...inputs, [name]:value
         })
        

    }
    const handleClick = e => {
        e.preventDefault()
        const bmiRequest = {name, weight, height}
        alert(`사용자이름: ${JSON.stringify(bmiRequest)}`)
        
    }
    return <>
    <form>
    <h1>BMI 폼</h1>
    <div>
        <label><b>name</b></label>
        <input name="name" type="text" onChange={handleChange}/><br/>
        <label><b>height</b></label>
        <input name="height" type="text" onChange={handleChange}/><br/>
        <label><b>weight</b></label>
        <input name="weight" type="text" onChange={handleChange}/><br/>
        <button onClick={handleClick}>BMI 체크</button>
    </div>
    </form>
    </>
}