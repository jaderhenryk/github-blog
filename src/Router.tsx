import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { PostDetail } from "./pages/PostDetail";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/post-detail/:id" element={<PostDetail/>}/>
      </Route>
    </Routes>
  )
}