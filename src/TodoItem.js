import React, {useState} from 'react';
import './App.css';


function TodoItem(props) {

    const {el} = props;

    const [todo, setTodo] = useState('');
    const [description, setDescription] = useState('');

    return (
        <li>
            {el.name}
            {el.description}

            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>

            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>

            <button onClick={() => props.todoUpdate( el._id, todo, description )}>update</button>

            <button onClick={() => props.todoDelete( el._id )}>DELETE</button>


        </li>
    );
}

export default TodoItem;
