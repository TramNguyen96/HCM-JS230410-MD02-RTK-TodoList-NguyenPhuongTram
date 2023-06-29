import React from 'react'
import ItemTodo from './ItemTodo'
import { useSelector } from 'react-redux'


export default function ListTodo() {
    const todos = useSelector((state )=> state.todos)
  return (
    <div>
        {todos?.length > 0 ? (todos.map((item)=>(
              <ItemTodo
              key={item.id}
              id={item.id}
              title={item.title}
              date={item.date}
              complete={item.complete}
          />
        ))) : (<div class="card">
                  <div class="card-body" style={{backgroundColor:'#f3f3f3', fontSize:'20px', fontWeight:'bold', textAlign:'center'}}>
                    NO TODOS
                  </div>
                </div>)}

    </div>
  )
}

