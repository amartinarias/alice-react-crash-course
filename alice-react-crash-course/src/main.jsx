import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './routes/RootLayout.jsx'
import './index.css'
import Posts, { loader as postsLoader } from './routes/Posts.jsx'
import NewPost, { action as newPostAction } from './routes/NewPost.jsx'
import PostDetails, { loader as loaderDetails } from './routes/PostDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/', element: <Posts />,
        loader: postsLoader,
        errorElement: <h1>Page not found</h1>, children: [
          { path: '/new-post', element: <NewPost />, errorElement: <h1>Page not found</h1>, action: newPostAction },
          { path: '/:id', element: <PostDetails />, errorElement: <h1>Page not found</h1>, loader: loaderDetails },
        ]
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
