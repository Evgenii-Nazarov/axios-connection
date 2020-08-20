import React, {useState} from 'react';
import './App.css';


function Controller(props) {

   const [newTodo, setNewTodo] = useState('')
   const [newDescription, setNewDescription] = useState('')

    return (
       <div className='border-bottom'>
           <label>name: </label>
           <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>

           <label>description: </label>
           <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)}/>

           <button onClick={() => props.addNewTodo(newTodo, newDescription)}>Add new todo</button>
           <br/>
           <br/>

       </div>
    );
}

export default Controller;
