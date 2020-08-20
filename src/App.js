import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import TodoItem from "./TodoItem";
import Controller from "./Controller";

function App() {

    const [list, setList] = useState([]);

    const todoUpdate = async (todoId, newName, description) => {

        await axios.patch(`http://localhost:5000/todo/${todoId}`, {name: newName, description})
            .then((result) => {
            })
            .catch(err => {
                console.log('-----ERRRO----', err)
                return err
            })

        await axios.get('http://localhost:5000/todo')
            .then((result) => {
                setList(result.data)
            })
            .catch(err => err)

    }

    const todoDelete = async (todoId) => {

        await axios.delete(`http://localhost:5000/todo/${todoId}`)
            .then((result) => {
            })
            .catch(err => {
                console.log('-----ERRRO----', err)
                return err
            })

        await axios.get('http://localhost:5000/todo')
            .then((result) => {
                setList(result.data)
            })
            .catch(err => err)

    }

    const addNewTodo = async (name, description, done) => {

        await axios.post(`http://localhost:5000/todo`, {name, description, done})
            .then((result) => {
            })
            .catch(err => {
                console.log('-----ERRRO----', err)
                return err
            })

        await axios.get('http://localhost:5000/todo')
            .then((result) => {
                setList(result.data)
            })
            .catch(err => err)

    }

    useEffect(() => {

        axios.get('http://localhost:5000/todo')
            .then((result) => {
                setList(result.data)
            })
            .catch(err => err)

    }, [])

    return (
        <div>
            <Controller addNewTodo={addNewTodo}/>
            {list.map(el => <TodoItem el={el} todoUpdate={todoUpdate} todoDelete={todoDelete}/>)}
        </div>
    );
}

export default App;
