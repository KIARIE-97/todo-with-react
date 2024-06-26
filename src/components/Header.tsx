// 
import  { useState } from 'react';
import bgImage from '../assets/images/bg-desktop-dark.jpg';
import './header.scss'

interface TIHeader {
  addTodo: (text: string) => void;
}

function Header({ addTodo }: TIHeader) {
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');// this will clear the input field after adding the todo
    }
  };

  return (
    <>
    <header
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      objectFit: "cover",
      backgroundPosition: "left",
    }}
    >
       <h1>TODO</h1>
       
       <div className="job">
       <input type='radio'/>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="create a new todo ...."
      />
      <button onClick={handleAddTodo}>Add</button>
      </div>
      
    </header>
    </>
  );
}

export default Header;