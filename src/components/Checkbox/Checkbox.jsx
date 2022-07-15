import React from 'react';
import NewListComp from '../../NewListComp/NewListComp';

const Checkbox= ({itemList,setItemList,deleteHandler})=> {

 
  return (
    <>
      {itemList.map((itemcontent,index)=> {
        
        return (

          <NewListComp deleteHandler = {deleteHandler} itemcontent = {itemcontent} index={index}></NewListComp>
        
                                  

        )
                               
      })}

     </>
    
  )
  
}

export default Checkbox;


