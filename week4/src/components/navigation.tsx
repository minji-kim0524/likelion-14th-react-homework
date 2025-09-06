import { Link } from 'react-router-dom'
import { tv } from 'tailwind-variants'

const navigationBascieStyle = tv({
  base: [
    'px-3',
    'py-2',
    'text-gray-500',
    'active:border-b-2',
    'active:text-black',
  ],
})

export type Pages = 'signin' | 'signup' | 'profile' | 'notice'

interface NavigationItem {
  path: Pages
  text: string
  authRequired?: boolean
}

const PAGES: NavigationItem[] = [
  { path: 'signup', text: '회원가입' },
  { path: 'signin', text: '로그인' },
  { path: 'profile', text: '프로필', authRequired: true },
  { path: 'notice', text: '게시판', authRequired: true },
]

export default function Navigation() {
  return (
    <ul className="flex gap-5 justify-center mt-6 mb-4">
      {PAGES.map((page) => (
        <li key={page.path} className={navigationBascieStyle()}>
          <Link to={`/${page.path}`}>{page.text}</Link>
        </li>
      ))}
    </ul>
  )
}
