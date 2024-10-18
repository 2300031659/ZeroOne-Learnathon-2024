import React,{useState} from 'react';
function Counter(){
    const [count, setCount] = useState(4);

     const add=()=>{
        setCount (count + 1)
    };

    const sub=()=>{
        setCount (count - 1)
    };
    return 
          <div className="counter">
            <div className="counter-in">
                <h1 id="count">The counter is count</h1>
            </div>
            <div className="btns">
                <button>+</button>
            </div>
          </div>
        
    }