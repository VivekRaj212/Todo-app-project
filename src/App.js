import React, { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import InputText from './components/InputText/InputText';
import TodoList from './components/TodoList/TodoList';

const App =() => {

  const [inputText, setInputText] =useState("");

  const [itemList, setItemList]= useState([]);

  const deleteHandler=(param)=> {

    itemList.splice(param,1);
    setItemList([...itemList]);


};


    return (
    <div className="main-div">
      <div className='center-div'>
      
      
      <h2>VIVEK'S TODO APP</h2><br/>

      <InputText inputText={inputText} setInputText={setInputText}/>
      <Button inputText={inputText}  itemList={itemList} setItemList={setItemList} setInputText={setInputText}/>
     
      <TodoList itemList={itemList} setItemList={setItemList} deleteHandler={deleteHandler}/>

      
      
      </div>
    </div>
  );
}

export default App;
