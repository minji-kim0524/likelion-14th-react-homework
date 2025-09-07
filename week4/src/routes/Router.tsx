import { useRoutes } from 'react-router-dom'
import DashBoard from '@/pages/dashboard'
import Notice from '@/pages/notice'
import Profile from '@/pages/profile'
import SingIn from '@/pages/sign-in'
import SignUP from '@/pages/sign-up'

export default function Router() {
  return useRoutes([
    { path: '/', element: <DashBoard /> },
    { path: '/signup', element: <SignUP /> },
    { path: '/signin', element: <SingIn /> },
    { path: '/notice', element: <Notice /> },
    { path: '/profile', element: <Profile /> },
  ])
}
