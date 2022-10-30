import React,{useState,useEffect} from 'react'

const Todo = () => {

    const [list, setList] = useState([]);
    const [inputVal, setInputVal] = useState("");
    const [editVal, setEditVal] = useState("");
    const [index, setIndex] = useState(0)

    const handleIt = (e)=>{
        let val = e.target.value;
        setInputVal(val);
    }

    const addTodo = ()=>{
        let newList = [...list,inputVal];
        setList(newList);
        setInputVal("");
        
    }

    const deleteIt = (ind)=>{
        let a1,a2;
        if(ind>0){
            a1 = list.splice(0,ind);
        }
        a2 = list.slice(1);
        let newArray
        if(a1 && a2){
            newArray = [...a1,...a2];
        }
        if(!a1){
            newArray = a2;
        }
        setList(newArray);
    }

    const editIt = (ind)=>{
       setEditVal(list[ind]);
       setIndex(ind);
    }
    const editThat = ()=>{
        let array = list;
       array[index] = editVal;

       setList(array);
    }

  return (
    <div id='todo'>
        <h2>Add your todo here</h2>
        <div className="add">
            <input type="text" placeholder='enter text here' value={inputVal} onChange={handleIt} />
            <div className="btn" onClick={addTodo}>Add</div>
        </div>
        <h4>Here are all of your todos</h4>
        <div className="editBox">
            <input type="text"  placeholder='edittext' value={editVal} onChange={(e)=>{setEditVal(e.target.value)}} />
            <div className="btn" onClick={editThat}>Edit</div>
        </div><br />
        {list.map((item,ind)=>(
            <div className='todoItem'>
                <div>{item}</div>
                <div className='btn' onClick={()=>{deleteIt(ind)}}>Delete</div>
                <div className='btn' onClick={()=>{editIt(ind)}}>Edit</div>
                <br /><hr />
            </div>
        ))}
    </div>
  )
}

export default Todo