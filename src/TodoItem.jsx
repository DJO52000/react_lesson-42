export function TodoItem({ id, name, completed, toggleTodo, deleteTodo }) {
    return (
        <li className="list-item"> 
        {/* we remove key from li because we move here where is child component, need to be on parent */}
            <label className="list-item-label">
                <input
                    checked={completed}
                    type="checkbox"
                    data-list-item-checkbox
                    onChange={(e) =>
                        toggleTodo(id, e.target.checked)
                    }
                />
                <span data-list-item-text>{name}</span>
            </label>
            <button
                onClick={() => deleteTodo(id)}
                data-button-delete
            >
                Delete
            </button>
        </li>
    )
}