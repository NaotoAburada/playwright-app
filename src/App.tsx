import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { TodoList } from "./components/todo/TodoList";
import { Home } from "./components/home";
import { ComicList } from "./components/comic/ComicList";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo-list">TODO(固定値を返す)</Link>
            </li>
            <li>
              <Link to="/comic-list">Comic(DB)</Link>
            </li>
          </ul>
        </nav>

        {/* 各ページへのルート設定 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/comic-list" element={<ComicList />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
