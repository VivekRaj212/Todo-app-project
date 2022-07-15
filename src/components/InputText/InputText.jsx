import React from 'react';

const InputText= ({inputText,setInputText,taskList})=> {

    const inputTextHandler=(event)=> {

        event.preventDefault();

        setInputText(event.target.value);
        
        

    };


      

    

  return (
    <>
      <input type='text' placeholder='Add task' value={inputText}  onChange={inputTextHandler}/>
    </>
  )
}

export default InputText;
