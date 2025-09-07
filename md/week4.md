# 📦 프론트엔드 부트캠프 14기 김민지 리액트 과제 저장소-4주차 과제

## | 📝 회고

수업시간에 배운 내용은 온전히 습득하여 과제에 적용하는 것이 무척 어려운 4주차 과제였다. <br />
지난주 과제를 하지못해 2주치 과제를 복습겸 다 진행하려고 했던 생각은 그저 욕심이 되었다. <br />
4주차 과제도 온전하게 마무리 짓지못하고 시간에 쫓겨 미완성 상태로 제출은 하지만, <br />
수업내용을 따라가며 `리팩토링`을 차근차근 진행해야겠다. <br />

이번엔 과제를 하면서 처음으로 수업시간에 배우지않은 `라이브러리`를 사용해봤다. <br />
매번 배운내용을 적용하기 급급했는데 새로운 내용을 알아가면서 적용하는 것에 재미를 느꼈다. <br />

파이널 프로젝트까지, 그리고 수료까지 얼마남지않아 조급한 마음이 들지만 꾸준하게 공부하고 그 속에서 재미도 찾아가야지!

## | 🔎 과제수행내용

## 📁 적용 라이브러리
- 배포 `Netlify`
- 클라이언트 사이드 라우팅 라이브러리 `React Router`
- 컴포넌트 타입별 스타일 그룹화관리 라이브러리 `Tailwind Variants`
```js
import { tv } from 'tailwind-variants'

const navigationBascieStyle = tv({
  base: [
    'px-3',
    'py-2',
    'text-gray-500',
    'active:border-b-2',
    'active:text-black',
  ]
})
```
## 📁폴더구조 및 구성내용

- ### 폴더구조
<details> 
<summary>폴더 구조 보기</summary>  
  
```
💻 week4
├── 📁 .vscode
├── 📁 dist #.gitignore 처리
├── 📁 node_modules #.gitignore 처리
├── 🌐 public
├── 📁 src
│   ├── 📁 assets
│   ├── 📁 components
│   │   ├── 🧩 Input.tsx
│   │   ├── 🧩 button.tsx
│   │   ├── 🧩 error-boundary.tsx
│   │   └── 🧩 navigation.tsx
│   ├── 📁 libs
│   │   └── 📁 supabase
│   │   │   │   ├── database.types.ts
│   │   │   │   └── index.ts
│   ├── 📁 pages
│   │   ├── 📄 dashboard.tsx
│   │   ├── 📄 notice.tsx
│   │   ├── 📄 profile.tsx
│   │   ├── 📄 sign-in.tsx
│   │   └── 📄 sign-up.tsx
│   ├── 📁 routes
│   │   └── Router.tsx
│   ├── 📁 styles
│   │   │   ├── 📁 common
│   │   │   │   ├── _a11y.css
│   │   │   │   ├── _animation.css
│   │   │   │   ├── _base.css
│   │   │   │   └── _normalize.css
│   │   └── main.css
│   ├── app.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .prettierrc
├── README.md
├── bun.lock
├── eslint.config.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.js               
```
</details>

- ### main.tsx
```js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import '@/styles/main.css'
import App from './app'
import ErrorBoundary from './components/error-boundary'

const root = document.getElementById('root')
if (!root) throw new Error('문서에 #root 요소가 존재하지 않습니다.')

createRoot(root).render(
  <StrictMode>
    <ErrorBoundary>
      <Toaster position="top-center" />
      <App />
    </ErrorBoundary>
  </StrictMode>
)
```

- ### App.tsx
```js
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
```

- ### components
컴포넌트는 `input`, `button`, `error-boundary`, `navigation` 으로 나누어 재사용을 해봤다. <br />
요소별 모든 속성(props)을 기재해놓을 수 없어서 `React.InputHTMLAttributes<HTMLInputElement>` 와같은 해당 요소에 사용할 수 있는 모든 속성들을 정의하는 방식을 이용하였다. <br />

- ### dashboard.tsx
아직 미완성이지만 파일명처럼 페이별 이동을 `대시보드` 에서 진행할 수 있도록 구현하고자 한다. <br />

- ### sign-up.tsx
회원가입 페이지로 가장 먼저 진행되어야 하는 단계이다.

- ### sign-in.tsx
회원가입 후 발송된 이메일 인증을 완료하면 로그인하여 `프로필` 메뉴와 `게시판` 메뉴를 이용할 수 있다.

- ### profile.tsx
**인증된 사용자**에 한하여 개인 프로필 정보를 조회 및 수정할 수 있는 페이지이며, `로그아웃` 메뉴도 구현 중에 있다.

- ### notice.tsx
**인증된 사용자**에 한하여 게시물을 남길 수 있는 페이지이며, 등록버튼을 눌러 `supabase` 에 저장될 수 있도록 구현할 계획이다.
