import './App.css';
import Menu from './components/Menu';
import SearchInput from './components/SearchInput';
import TodoList from './components/TodoList';

function App() {
  class task {
    constructor(text, done) {
      this.text = text;
      this.done = done;
    }
  }

  const names = ["Nitish Kumar", "Sanjeev Kumar", "Kumar Sunny", "Sunnil",
    "Gourav Pareek", "Tushar Bharti", "Bharath", "Pramodh", "Nandani Laxmi",
    "Kritwik", "Ravi Kumar", "Naushad", "Amarjeet Kumar"]
  const items = [new task("To Complete Assignment 2", false),
  new task("To ready for outing", false),
  new task("To read notes and revise last topic.", true)]
  return (
    <div className="App">
      <SearchInput items={names.sort()} />
      <Menu />
      <TodoList items={items}/>
    </div>
  );
}

export default App;
