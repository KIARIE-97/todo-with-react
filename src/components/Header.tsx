// 
import  { useState } from 'react';
import bgImage from '../assets/images/bg-desktop-dark.jpg';

interface HeaderProps {
  addTodo: (text: string) => void;
}

function Header({ addTodo }: HeaderProps) {
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
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
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
    </header>
  );
}

export default Header;