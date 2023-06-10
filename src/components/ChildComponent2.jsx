import React from 'react'

const ChildComponent2 = ({setOption}) => {
  return (
    <div className='childcomponent2'>
      <h1>ChildComponent 2</h1>
      <button onClick={()=>setOption("Option 2")}>Option 2</button>
    </div>
  )
}

export default ChildComponent2
