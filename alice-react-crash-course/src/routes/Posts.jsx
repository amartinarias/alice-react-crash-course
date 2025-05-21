
import '../App.css'
import PostList from '../components/PostList.jsx'
import { Outlet } from 'react-router-dom'
function Posts() {

  return (
    <>
      <Outlet />
      <main>
        <PostList
        />
      </main>
    </>)
}

export default Posts

export async function loader() {
  const res = await fetch('api/posts')
  const resData = await res.json()
  return resData.posts;
}
