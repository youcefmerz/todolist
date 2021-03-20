import React from 'react'

function Todo({todo}) {
    
  return (
    <div style={{display:"flex",justifyContent:"space-around", borderStyle:"groove",width:"500px"}}>
      <input style={{display:"inline",padding:"10px",position:"relative",top:"30px"}} type="checkbox" name="check" id="exampleCheck"/>   
      <p style={{display:"inline", padding:"10px"}}> {todo.text} </p>
      <div style={{display:"flex",flexDirection:"column", padding:"10px",position:"relative",top:"5px"}}>
      <button>edit</button>
      <button>delete</button>
      </div>
      
    </div>
  );
}

export default Todo;