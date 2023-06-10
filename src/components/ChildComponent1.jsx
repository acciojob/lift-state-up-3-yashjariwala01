import React from 'react'

const ChildComponent1 = ({setOption}) => {
  return (
    <div className='childcomponent1'>
        <h1>ChildComponent 1</h1>
      <button onClick={()=>setOption("Option 1")}>Option 1</button>
    </div>
  )
}

export default ChildComponent1
