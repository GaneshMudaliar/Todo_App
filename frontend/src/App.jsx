import { useState, useEffect } from "react";
import axios from "axios";


function App() {

  const [title , setTitle] = useState("");
  const [desc , setDesc] = useState("");

  const [todos , setTodos] = useState([]);


  // Fetch todos
  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/get');
      setTodos(response.data.todos);
      

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // console.log(todos);


  //  add todos
  const addTodo = async() => {
    try {
      const response = await axios.post("http://localhost:3000/api/todos" , {title , desc});

      console.log(response.data.newTodo);

      setTodos([...todos] , response.data.newTodo)
      setTitle("");
      setDesc("")

    } catch(err) {
      console.log(err);

    }
  }



  //  delete todos

  const deleteTodo = async(id) => {
    try {
      await axios.delete(`http://localhost:3000/api/todo/${id}`);

      const filteredTodo = todos.filter((todo) => todo._id !== id);
      setTodos(filteredTodo);

          
    } catch (err) {
       console.log(err);
    }

  }



  

  return (
  <>

  <h1 className="w-full text-center font-bold text-2xl mt-10">TODO APP</h1>

  <div
   className="flex justify-center  p-10 ">
    <div className="flex flex-col">
      <label 
       className="font-bold uppercase w-[200px] text-center ">Title</label>
      <input 
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Title"
      className="w-[200px] border-solid border-2 border-indigo-600 rounded-md outline-none p-2 m-2" />
    </div>
    <div className="flex flex-col">
      <label
      className="font-bold uppercase w-[200px] text-center " >Description</label>
      <input  type="text"
      value={desc}
      onChange={(e) => setDesc(e.target.value)}
      placeholder="description"
      className="w-[200px] border-solid border-2 border-indigo-600 rounded-md outline-none p-2 m-2" />
    </div>
    <button
    onClick={addTodo}
    className=" bg-blue-900 text-white w-[140px] h-auto  p-2 m-4 font-bold rounded-lg">ADD</button>
  </div>


  


  <ul className="flex flex-col items-center">

  
        {todos.map((todo) => (
           <li key={todo._id}
           className="flex space-x-24">
          <h3 className="font-bold uppercase" >{todo.title}</h3>
          <p className="h-auto" >{todo.desc}</p>
          <button className="bg-red-700 text-white rounded-md p-2 mb-3" 
          onClick={() => deleteTodo(todo._id)}
          >Delete</button>
          
          
          
          </li> 
          
        ))}
      

  
  </ul>

  


  </>
  )
}

export default App;
