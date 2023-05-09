import { Todo } from '@/typings'
import React from 'react'
import Link from 'next/link'

const fetchTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const todos: Todo[] = await res.json()
    console.log(todos)
    return todos
}

async function TodosList() {
    const todos = await fetchTodos()
  return (
    <div>
        {todos.map((todo) => (
            <p key={todo.id}>
                <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
            </p>
        ))}
    </div>
  )
}

export default TodosList