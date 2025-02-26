import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import { TodoPage } from "./components/pages/TodoPage";
import { LoginPage } from "./components/pages/LoginPage";
import { AuthTemplate } from "./components/templates/AuthTemplate";
import { PostListPage } from "./components/pages/PostListPage";
import { PostItemPage } from "./components/pages/PostItemPage";
import { SignupPage } from "./components/pages/SignupPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route element={<AuthTemplate />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Route>

      <Route path="app">
        <Route path="posts" element={<PostListPage />} />
        <Route path="post/:postId" element={<PostItemPage />} />
        <Route path="todo" element={<TodoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
