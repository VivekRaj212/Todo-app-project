import React from 'react';
import Checkbox from '../Checkbox/Checkbox';


const TodoList =({itemList,setItemList,deleteHandler})=> {



  return (
    <>
    <table style={{margin: ''}}>

                <thead>

                 <tr>
                 <th id='task-1'>STATUS</th>
                   <th>TASKS</th>
                 </tr>

                 </thead>
                 <tbody>


                <Checkbox itemList={itemList} setItemList={setItemList} deleteHandler={deleteHandler}/>
               
 
                 </tbody>

    </table>
      
    </>
  )
}

export default TodoList;
