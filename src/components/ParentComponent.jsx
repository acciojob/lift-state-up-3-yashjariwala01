import React, {useState} from 'react'
import ChildComponent1 from './ChildComponent1'
import ChildComponent2 from './ChildComponent2'

const ParentComponent = () => {
    const[option , setOption ] = useState("Option 1")
  return (
    <div className='parent'>
        <h1>ParentComponent</h1>
      <ChildComponent1 setOption={setOption}/>
      <ChildComponent2 setOption={setOption}/> 
      <p>Selected Option: {option}</p>     
    </div>
  )
}

export default ParentComponent
