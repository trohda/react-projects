import { useState } from "react";

const useFetch = (url) => {

  const [toDos, setToDos] = useState([]);
  
  const fetchData = () =>{
    fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setToDos(data);
    });
  }

    return { toDos, setToDos, fetchData };
}
 
export default useFetch;