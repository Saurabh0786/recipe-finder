import './App.css';
import {useEffect,useState} from 'react';
function App() {
  let API_kEY="6a4db62c0c717008f27c0decfaa13d29";
  let APP_ID="207fad0a";
  let [count,setCount] =useState(0);
  useEffect(() => {
    let url=`search?g=chicken&app_id=${APP_ID}&app_key=${API_kEY}`;
      fetch(url)
      .then(response=>{
        return response.json();
      })
      .then(res=>{
        console.log("Final response",res);
      })
      .catch(err=>{
        console.log("error",err);
      })
  }, [count]);

  return (
    <div className="App">
      <button onClick={()=>setCount(count+1)}> Hello</button>
      <h1>This is saurabh</h1>
    </div>
  );
}

export default App;
