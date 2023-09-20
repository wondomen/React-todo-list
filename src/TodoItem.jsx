export function TodoItem({copmleted, id,title, toggleTodo, deleteTodo}) {
    return (
        <li>
            <label>
            <input 
            type='checkbox' 
            checked={copmleted} 
            onChange={e => toggleTodo(id, e.target.checked)}
            />
            {title}
          </label>
            <button 
              onClick={()=> deleteTodo(id)}
              className='btn btn-danger'
              >
                Delete
            </button>

          </li>
    )
}