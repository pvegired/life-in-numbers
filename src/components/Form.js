import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState('');


  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (!name.trim()) {
  //     return;
  //   }
  //   props.addTask(name);
  //   setName("");
  // }

  const handleSubmit = (event) => {
    if(event.key === 'Enter') {
      event.preventDefault();
    if (!name.trim()) {
      return;
    }
    props.addTask(name);
    setName("");
    }
  }



  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form>
      {/* <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2> */}
      <div className="formflex form1">

      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        placeholder="Add a task"
        value={name}
        onChange={handleChange}
        // onKeyPress={(event) => {
        //         if (event.key === 'Enter') {
        //         this.handleSubmit
        //         }
        //       }}
        onKeyPress={handleSubmit}
                
                  
      />
      {/* <button type="submit" className="btn btn-primary btn-sm">
        Add
      </button> */}
      </div>
    </form>
  );
}

export default Form;
