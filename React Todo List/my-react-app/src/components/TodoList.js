import { useEffect} from "react";

const TodoList = ({toDos,fetchData}) => {
  
  useEffect(fetchData, []);
  
  const toDosRender = ()=>toDos.map((el) => (
    <div key={el.id}>
      <p>{el.name}</p>
    </div>
  ))

  
  return (
    <div>
      {toDosRender()}
    </div>
  );
};

export default TodoList;
