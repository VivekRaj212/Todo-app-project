import React, {useState} from "react";

function NewListComp({deleteHandler,itemcontent, index}) {
// conditional rendering 
    const [flag , setFlag] = useState(false)

    const checkHandler = () => {

        console.log('hii check...')

        if(flag=== true){
            setFlag(!flag)
        }else{
            setFlag(true)
        }

        console.log(flag)





    }


  return (
    <tr>
      <td id="task-2">
        <span className="check-btn">
          <input type="checkbox"  onClick={checkHandler} />
        </span>
        <span className="trash-btn">
          <button onClick={() => deleteHandler(index)}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </span>
      </td>
      <td id="task-3" style={{textDecoration:flag?'line-through':''}}>{itemcontent}</td>
    </tr>
  );
}

export default NewListComp;
