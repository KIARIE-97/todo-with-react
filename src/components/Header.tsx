// 
import  { useState } from 'react';

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
    <header>
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