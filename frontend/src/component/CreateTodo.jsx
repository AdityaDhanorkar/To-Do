import { useState } from "react";

export function CreateTodo(props){
   
   const [tittle,setTittle]=useState("")
   const [description,setDescription] = useState("")
   
    return <div>
    <input style={{
        margin:10,
        padding:10
    }} type="text" placeholder="Tittle" onChange={
        function(e){
            const value = e.target.value;
            setTittle(e.target.value);
        }
    }></input><br/>
    <input style={{
        margin:10,
        padding:10
    }} type="text" placeholder="Description"  onChange={function(e){
        const value = e.target.value
        setDescription(e.target.value)
    }}></input><br/>

    <button style={{
        margin:10,
        padding:10
    }} onClick={()=>{
        fetch("http://localhost:3000/todo",{
            method:"POST",
            body:JSON.stringify({
                tittle:tittle,
                description:description
            }),
            headers:{
                "content-type":"application/json"
            }
        })
        .then(async function(res){
            const json = await res.json();
            alert("To DO Added");
        })
    }}>Add a Todo</button>
    </div>
}