import React, { useState } from 'react';

const Error = () => {
    const [count,setCount] = useState(0);
    const Handle = () => {
        setCount(count+1);
        console.log(count);
    }
  return (
    <div>
        <h4>You have clicked {count} times</h4>
        <button type='button' onClick={Handle} className='btn'>Increase</button>
    </div>
  )
}

export default Error;