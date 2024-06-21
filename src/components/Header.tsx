import './header.scss'
// import icon from '../assets/images/icon-moon.svg'

function Header(addTodo) {
  return (
    <div>
        <div className="header">
            <div className="decs">
            <h1>TODO</h1>
         {/* <img src={icon} alt="" /> */}
            </div>
        <div className="job">
            <form className='form'>
                <input type="radio" id="radio" />
                <input type="text" id="todo_input" placeholder='create a todo ...' />
            </form>
        </div>
        </div>
    </div>
  )
}

export default Header
{/* <form className="form" onSubmit={handleSubmit}>
<input type="text" placeholder='Add a joke' /> */}