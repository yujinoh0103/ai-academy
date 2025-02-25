import { PostPage } from "./components/pages/PostPage";
import { TodoPage } from "./components/pages/TodoPage";

function App() {
  return window.location.pathname === "/post" ? <PostPage /> : <TodoPage />;
}

export default App;
