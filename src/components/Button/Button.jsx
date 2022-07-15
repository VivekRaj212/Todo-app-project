import React from 'react';


const Button=({setItemList,inputText,setInputText})=> {


    const textUpdate=()=> {
     
        setItemList((taskList)=>{

            return [...taskList, inputText];
        });

        setInputText("");

    };

    return (
      <>
       
      <button className='btn-grad' type='submit' onClick={textUpdate}>Add</button>

      </>

    


    )

};

export default Button;