import React, { useState } from 'react';

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be empty");
            return;
        }
        props.addTodo(title, desc);
        setTitle("");
        setDesc("");
    };

    return (
        <div className='container'>
            <h3>Add Todos</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)}
                        id="title" 
                        placeholder="Enter the Title of Todo" 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <textarea 
                        className="form-control" 
                        value={desc} 
                        onChange={(e) => setDesc(e.target.value)}
                        id="desc" 
                        rows="1"
                    ></textarea>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-success mb-3">Add Todo</button>
                </div>
            </form>
            <hr/>
        </div>
    );
};

export default AddTodo;
