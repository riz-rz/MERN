import React from 'react'

// react.memo is used so that child isnt rendered if the props arent tampered with

const Child  = React.memo(({greetings}) => {
  
    console.log("child rendering....");
    

    return (
    <div>Child component</div>
  )
})

export default Child 