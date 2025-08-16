# 프론트엔드 부트캠프 리액트 과제 저장소📦

**14기 김민지**

## 1주차 과제

### | 회고📝

리액트 1주차 과제는 수업시간에도 진행을 했지만, **템플릿 프로젝트 구성** 을 선택했다.<br />
선택한 이유는 창피하지만, 이제 수업을 진행한 기간보다 수료까지가 얼마 남지않은 이 시점에서도 개발 환경을 구성하고 있는 <br />
파일들의 존재 이유와 각 파일들이 어떤 기능을 담당하고 있는지를 정확하게 모르고 있기 때문이다. <br />

UI 프로젝트, 바닐라 프로젝트를 거쳤지만 `package.json` 이 왜 있는지, `.gitattributes` 은 어떤 역할로 있는건지를 제대로 알지 못한 채
수업시간에도 그 환경에서 진행을 했으니까! 라는 생각으로 구성을 하고 진행을 했다. <br />
이번에 리액트 프로젝트 템플릿 구성 수업을 들었고 해당 내용을 복습차원에서 다시 구성해보면서 각 파일들의 `의미`와 `역할`, `필요성`에 대해서 제대로 알고 다음 단계로 넘어가고싶었다. <br />

수업을 진행했기때문에 과제를 하는데 시간이 그리 오래 걸리지않을거라 생각했지만, 착각이였다. <br />
내가 이렇게까지 모르고 진행을 했었나싶을정도로 찾아보고, 새로운 궁금증을 해결하는데 생각보다 오랜 시간이 걸렸다. <br />
그렇다고 모든걸 완벽하게 이해했느냐고하면 자신있게 대답할 수 있다고도 못하겠다.<br />

하지만, 알지도 못한채 환경구성을 했던 몇주, 몇달전의 내 자신 보단<br />
파일에 대해 조금 더 이해하고, 환경에 대해서 한 층 더 이해하고 진행하려는 자세가 갖춰졌다고는 말할 수 있다.<br />

<i>**과제 수행내용은 템플릿을 구성하면서 학습하게된 내용을 정리해보고자 한다.**</i>

### | 과제 수행내용
## 런타임이란?

> **코드가 실행되는 동안 해당 코드가 원활히 실행될 수 있도록 필요한 환경을 제공하는 소프트웨어**
> 
- 런타임 종류: 웹 브라우저, Node.js, Bun 등
- 런타임 환경은 런타임보다 더 큰 범위이며, 실행 엔진뿐만 아니라, 해당 코드가 실행되는데 필요한 주변 요소들(라이브러리, API, 플랫폼 기능 등)을 포함함
- 중요성: 코드가 올바르게 동작하고, 다양한 환경에서도 일관된 경험을 제공하기 위해서 중요함

## Node.js vs. Bun

> 런타임 환경의 대명사(`Node.js`)와 신흥강자(`Bun`)
> 
- 두 가지를 같이 사용해도 되고, 둘 중 하나의 환경으로 설정해서 사용해도 됨

## <img width="30" height="30" alt="Image" src="https://github.com/user-attachments/assets/a76df967-e33a-4f3c-af5f-55831f27f33d" /> Node.js

> **서버측에서 자바스크립트 코드를 실행하기 위한 런타임 환경**
> 
- google `v8 엔진` 사용
- TypeScript 미지원 → 실행을 위해서는 추가적인 트랜스파일 단계 필요
- node_modules 폴더가 있다? → 일반적으로 node.js 환경이다!

<br />

**💡node_modules 폴더는 어떤 역할을 해?**

> 프로젝트에 `사용`되는 모든 `외부` 라이브러리(`의존성`)를 담고 있는 폴더
> 
- 프로젝트별 설정 → 각 프로젝트는 `고유`한 node_modules 폴더를 가짐 → 다른 프로젝트에 영향을 주지 않아 `독립적` 개발이 가능
(로컬 설치가 일반적이나, 전역 설치가 불가능 한 것은 아님 → 특정 경우에만 사용됨)
- **`package.json` 과의 관계**
: `package.json` 파일에는 프로젝트에 `필요`한 의존성 목록이 명시되어 있음
→ 명령어(`npm i` , `pnpm i`)를 통해 의존성 목록의 패키지들이 `node_modules` 폴더에 설치됨
- `npm`, `pnpm`, `yarn` → 패지키 관리자이며, `node_modules` 가 패키지 관리자의 작동을 하는데 핵심적인 역할을 함
- 다양한 패키지들을 담고 있다보니 폴더 용량이 커질 수 있음
→ 일반적으로 git(버전 관리 시스템) 에 미포함시킴 → `.gitignore` 파일에 추가


```jsx
// 관련 명령어
// 설치 확인 (npm은 기본 패키지 관리자, pnpm 은 npm 의 비효율성 개선이 적용된 패키지 관리자)
npm/pnpm -v
node -v

// 업데이트 진행
npm/pnpm install
npm/pnpm i

// 특정 패키지 설치
npm/pnpm install 패키지명

// 참고사항: pnpm 해당 -> 패키지 설치시 install 보단 add를 더 권장함
pnpm add 패키지명
```
<br />

**❓패키지 설치시 pnpm intsall 이랑 pnpm add 랑 어떤 차이가 있지?**

- `install` : 모든 종속성을 재설치
- `add` : 특정 패키지만 추가 & 필요한 경우에 해당 종속성 같이 설치

<br />

**❓node.js 는 서버측 런타임 환경인데 프론트엔드에서 왜 사용하는 거야?**

- 자바스크립트를 서버 환경에서 실행할 수 있게 해줌 → 풀 스택 개발까지 용이함
⇒ 프론트엔드 개발자가 자바스크립트를 사용하여 서버 측 로직구현이 가능해짐


## <img width="30" height="30" alt="Image" src="https://github.com/user-attachments/assets/43a87df3-c5cc-4fe1-9ac1-71d4432289fc" /> Bun

> **JavaScript, TypeScript, JSX 를 지원하는 새로운 런타임 환경이자 개발도구 | Node.js 호환가능 + 보다 빠르고 효율적인 성능발휘 | Node.js 의 대안으로 다양한 기능을 통합 제공함**
> 
- apple JSC(JavaScriptCore) 엔진 사용 
→ 빠른 속도 / 트랜스파일 단계없이 TypeScript 및 JSX 파일 실행 가능
- 높은 모듈 시스템 호환성
→ CommonJS 와 ES 모듈 함께 사용가능 → 파일 내 `import` & `require()` 함께 사용 가능
- 웹 API(`fetch`, `websocket` 등) 내장 → 패키지 추가 설치없이 사용가능
- Zig 언어로 작성됨 → 빠른 속도
- 간편한 설치, Node.js 와의 유사한 인터페이스 제공
- 최소 메모리 사용으로 최대 처리량을 위해 최적화 되어있음
- 런타임, 번들러, 패지키 관리자, 테스트 러너등을 포함하는 올인원 솔루션 → 더 넓은 범위의 작업처리
- node_modules 역할을 여기선 어떤 폴더가 하나요?
→ `bun.lock` 파일, `.bun` 폴더가 의존성관리를 함

<br />

**💡.bun 폴더 & bun.lock 파일은 어떤 역할을 해?
⇒ Bun 환경에서는 node_modules 폴더와 같은 역할을 하는 폴더가 별도로 존재하지는 않음❌ 대신, 패키지 및 의존성관리를 위해 자체적인 시스템(가상)을 사용함** <br />

1️⃣ `.bun` 폴더 → Bun 의 캐시 및 임시 파일을 저장하는 용도로 사용됨

- 설치된 패키지들이 저장됨

2️⃣ `bun.lock`  파일 → 프로젝트의 정확한 종속성 버전기록 → 일관된 환경 유지에 기여함

- `package-lock.json` 파일과 유사한 역할이라고 볼 수 있음

<br />

```jsx
// 관련 명령어
// 설치된 패키지 목록보기
bun pm ls
```

**관련 명령어 정리**

- `bun install` → 패키지(종속성) 관리
- `bun build` → 코드 번들링 진행
- `bun run 스크립트이름` → 지정한 `스크립트 이름` 실행
- `bun test` →  테스트모드 실행
- `bun create 템플릿이름` → 생성한 `템플릿이름` 실행 → 자주 사용하는 구성의 개발환경을 템플릿으로 설정해놓으면 매번 새로 생성하지 않아도 됨

## <img width="30" height="30" alt="Image" src="https://github.com/user-attachments/assets/ab1c8f81-57f6-40e2-a39b-1d6d42ad3904" /> vite

- 효율적인 번들링을 제공하는 **빌드 도구** → 개발 환경에서의 성능향상에 국한됨
- 최적화된 번들 생성
- Vue, React, Svelte 등 다양한 프레임워크 제공
- 다양한 플러그인 제공

```jsx
// vite 환경설정 명령어
npm create vite
```

⇒ 두 가지(Bun, Vite)를 함께 사용하여 각자의 장점을 발휘할 수 있도록 구성해 개발 환경을 구축하는 추세임

### ⚒️그 외 함께 사용하면 좋은 도구

> **ESLint**
> 

코드 문법과 스타일을 자동 검사해주는 분석 도구

> **Prettier**
> 

자동 포맷팅 기능 → 일관된 코드 스타일 유지 가능

> **TypeScript**
> 

자바스크립트에 정적 타입을 도임 → 안전성을 높여 견고한 코드작성이 용이함

> **Tailwind CSS**
> 

유틸리티 퍼스트 방식의 CSS 프레임워크 

> **Supabase**
> 

백엔드 기능을 대체해줄 오픈소스 서비스 플랫폼

---

### 🗂️파일별 기능 및 역할 & 그에 따른 필요성 여부체크

> `.editorconfig` ✅
> 

프로젝트의 코드 스타일(들여쓰기, 공백, 줄 끝 문자 등) 및 편집기 설정을 일관성있게 유지하기 위한 설정 파일 → 다양한 편집기에서도 일관된 환경 제공 가능

> `.prettierrc.toml` ✅
> 

`.editorconfig` 와 코드 스타일을 통일하는 측면에서는 비슷한 역할로 보이지만, `prettier` 는 `코드 포맷팅` 기능에 더 특화되어 있음 

*⇒ 두 파일(`.editorconfig`, `.prettierrc.toml`)은 비슷한 역할을 가지고 있지만, 기능부문에서 다른 면을 보이고있어 같이 셋팅을 해도 충돌하지 않음. 오히려 비슷한 역할(스타일 설정을 통한 일관성 유지) 은 더욱 강화되며, 서로의 다른 기능은 보완되므로 시너지 효과를 냄*

> `eslint.config.mjs` ✅
> 

ESLint 설정을 정의하는 파일로, v9 부터는 module 기반의 설정방식인 `Flat Config`  를 권장함 
→ 이 때!!! 사용되는 기본파일이 `eslint.config.mjs` 이다!!!

- 규칙별 활성화여부 설정가능
- 다양한 플러그인 설치 설정가능 → 기능 확장성 용이
- 린팅할 환경(ex:  브라우저, node.js) 설정 가능
- 린팅 대상 설정가능: 특정 파일 및 폴더를 린팅 대상에서 제외/포함 시킬 수 있음
→ 주로 `node_modules` 나 `dist` 와 같은 빌드 결과물은 제외시킴

*⇒ `Prettier` 와 `ESLint` 같이 사용가능 → 포맷팅 규칙과 코드 스타일 검사 규칙 함께 사용*

<br />

**💡ESLint 와 Prettier 의 파일 설정관련**

<ESLint v9 이전 설정방식>

- `eslint-config-prettier` : 설정 충돌 방지 목적
- `eslint-config-prettier` : ESLint 에서 Prettier 실행을 위한 플러그인

---

<ESLint v9 이후 설정방식>

- `pluginReact.configs.flat['jsx-runtime']` → 리액트의 JSX 런타임 설정
- `pluginJsxA11y.flatConfigs.recommended` → JSX 접근성 권장 규칙 적용
- `pluginReactHooks.configs['recommended-latest']` → 리액트 훅의 올바른 사용을 위한 권자 규칙 적용
- `pluginPrettierRecommand` → Prettier 와 ESLint 충돌 방지 및 포맷팅 규칙 적용

<br />

> `.gitattributes` ✅
> 

**Git 저장소 내의 특정 파일 또는 패턴에 대한 속성을 정의하여 파일 처리방식, 도구의 동작 등의 제어방식을 설정하는 파일**

- 프로젝트 최상위 디렉토리에 생성하여 적용
- 주요 기능으로는 아래 내용들이 있음
1. 텍스트 파일 줄 바꿈 처리
2. 바이너리 파일 처리 → `binary` 속성사용으로 git 이 바이너리 파일로 인식하게함
3. 대용량 파일 처리
4. 커스텀 병합 드라이버 설정
- 사용자가 파일 관리를 세밀하게 조정할 수 있게 하고, 저장소의 효율성을 높이며, 프로젝트의 일관성 유지에 중요한 역할을 함

```jsx
// 설정내용
// 텍스트 줄바꿈 처리 설정
* text eol=lf
// 아래 확장자를 가진 파일은 바이너리 파일로 처리 설정
// 이미지, 영상, 압축파일은 이진으로 설정하는 것이 안전함
*.png binary
*.jpg binary
*.gif binary
*.avif binary
*.webp binary
```

> `.gitignore` ✅
> 

**Git 버전 관리 시스템 추적 대상 제외 설정하는 파일 → Git 사용시 필수 파일**

- 사용시 불필요한 파일이 저장소(레포)에 커밋되는 일 방지 → 저장소 용량 절약 및 보안강화

```jsx
// 설정 예시
# 주석 (설명)
*.log      # 모든 .log 파일
.idea/     # .idea 디렉토리
/dist/     # 루트 디렉토리의 dist 디렉토리
.env       # .env 파일
```

> `bun.lock` ✅
> 

**Bun 패키지 관리자가 의존성들을 추적하고 관리하기 위해 생성하는 파일**

- 프로젝트에 필요한 의존성들의 정확한 버전 정보 기록
- `bun install` 명령어 실행시, 해당 파일에 저장된 정보를 바탕으로 패키지가 설치됨

<br />

**💡`package.json` 파일과의 관계**

`package.json` 파일에 정의된 정보를 기반으로 `bun.lock` 파일 생성,

`bun.lock` 은 다시 패키지 설치시에 `package.json` 파일의 의존성 정보를 참조하여 의존성 관리를 수행함

**⇒ 상부상조하는 관계!**

<br />

**❓`package.json` 파일은 Node.js 환경에서 필수적인 파일이고, `bun.lock` 은 Bun 환경에서 필수적인데 두 파일을 같이 써?**

두 파일은 다른 환경에서 쓰이는 파일이 아니라 `역할` 이 다른 파일이다.

`bun.lock` 은 Bun 환경 전용 파일이 맞지만, `package.json` 파일은 Node.js 환경 전용 파일이 아니다! 그렇다면 정체가 무엇이냐? 개발환경이라면 필수적으로 있어야하는 파일이다. 

bun.lock 파일도 결국 package.json 파일을 읽어서 생성되는 파일인 것이다.

정리해보자면,

- `package.json` : “무슨 패키지가 필요한지” 알려줌 → 장바구니 리스트
- `bun.lock` : “패키지를 정확히 어떤 버전으로 설치했는지” → 구매 영수증

<br />

> `jsconfig.json` ✅
> 

**자바스크립트가 제공하는 기능들을 설정하는 파일**

- 경로 별칭 설정 또는 파일 확장자 생략 허용함으로써 코드 가독성 및 개발 생산성을 향상시킴
- 해당 파일이 있는 디렉토리가 프로젝트 `루트` 디렉토리로 인식됨 ⇒ *“내가 기준이다!”*

```jsx
// 설정내용
{
// 컴파일러 옵션 (TypeScript 옵션을 JavaScript 에도 적용)
  "compilerOptions": {
    "jsx": "react-jsx",
    "checkJs": true,// 해당 옵션값 true설정 -> js라도 타입검사와 코드분석 가능
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "node",
  },
// 분석대상 포함/미포함 설정
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

> `package.json` ✅
> 

**런타임 환경(Node.js, Bun)에서 필수적인 파일로 프로젝트에 대한 정보와 의존성을 관리하는 파일**

```jsx
// 설정내용
{
// 프로젝트의 이름, 버전, 설명, 라이선스와 같은 메타데이터 정의
  "private": true,
  "type": "module",
  "name": "react-build-environment",
  "description": "리액트 빌드 환경을 매뉴얼 구성합니다.",
  "version": "1.0.0",
// 프로젝트에서 사용할 수 있는 명령어 정의
  "scripts": {
    "dev": "bun index.html",
    "format:check": "prettier --check --cache \"src/**/*.{js,jsx,json}\"",
    "format:fix": "prettier --write --cache --list-different \"src/**/*.{js,jsx,json}\"",
    "lint:check": "eslint \"src/**/*.{js,jsx,json}\" --cache --cache-location ./node_modules/.cache/eslint/.eslintcache",
    "lint:fix": "bun lint:check --fix"
  },
// 프로젝트가 의존하는 소프트웨어 버전 명시
  "engines": {
    "bun": ">=1.0.0"
  },
// 의존성 관리: 프로젝트가 사용하는 외부 패키지(라이브러리) 목록과 버전 명시
// 프로덕션 환경에서 필요한 의존성
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1"
  },
// 개발 환경에서 필요한 의존성
  "devDependencies": {
    "@eslint/js": "^9.33.0",
    "@types/react": "^19.1.10",
    "@types/react-dom": "^19.1.7",
    "eslint": "^9.33.0",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-jsx-a11y": "^6.10.2",
    "eslint-plugin-prettier": "^5.5.4",
    "eslint-plugin-react": "^7.37.5",
    "eslint-plugin-react-hooks": "^5.2.0",
    "globals": "^16.3.0",
    "prettier": "^3.6.2"
  }
}
```
<br />

**💡비슷한 이름인 `package-lock.json` 파일과의 관계는?**

package.json 파일에 정의된 의존성들의 정확한 `버전`을 `기록`하여, 프로젝트 실행때마다 동일한 버전의 패키지가 설치되도록 보장함 → 프로젝트 일관성 유지 및 오류 방지

**❓Node.js 환경에서 package.json 파일이 없으면 무슨일이 일어날까?**

⇒ package.json 파일이 없으면 해당 프로젝트 디렉토리는 Node.js 환경으로 인식을 하지 않음 → 패키지 매니저 명령어(npm, pnpm 등) 사용불가❌**,** 프로젝트 메타데이터 관리불가

<br />

> `settings.json`  ✅
> 

**vs code 에서의 환경설정을 저장하는 파일**

- vs code 의 다양한 동작과 디자인을 취향에 맞게 설정가능
→ 검색속도 최적화, 편집 보조 기능 강화, 저장시 코드 정리 규칙 등 설정

```jsx
{
// vs code 검색에서 특정 폴더/내용 제외 설정
  "search.exclude": {
    "**/coverage": true,
    "**/node_modules": true
  },

  "javascript.autoClosingTags": true,
  "javascript.format.enable": false,
  "javascript.validate.enable": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "javascript.format.insertSpaceAfterSemicolonInForStatements": true,
  "javascript.inlayHints.parameterNames.enabled": "all",
  "javascript.inlayHints.functionLikeReturnTypes.enabled": true,
  "javascript.inlayHints.parameterNames.suppressWhenArgumentMatchesName": true,
  "javascript.inlayHints.propertyDeclarationTypes.enabled": true,
  "javascript.inlayHints.variableTypes.enabled": true,
  "javascript.suggest.autoImports": true,
  "javascript.suggest.paths": false,

  "editor.codeActionsOnSave": {
    "source.organizeImports": "explicit",
    "source.fixAll.eslint": "explicit",
    "source.removeUnused": "explicit"
  },

}
```

위의 설정내용을 바탕으로 해당 설정 내용은 ESLint + Prettier 기반에서 아래와 같은 흐름으로 진행됨

```jsx
[파일 편집]
      │
      ▼
[저장 (Ctrl+S / Cmd+S)]
      │
      ▼
┌─────────────────────────┐
│ VS Code settings.json   │
│ "editor.codeActionsOnSave" 감지 │
└─────────────────────────┘
      │
      ▼
┌─────────────────────────┐
│ 1. ESLint 실행          │
│   "source.fixAll.eslint" │
│   → 자동 수정 가능한 오류 해결 │
└─────────────────────────┘
      │
      ▼
┌─────────────────────────┐
│ 2. Unused 제거           │
│   "source.removeUnused"  │
│   → 쓰이지 않는 변수, import 삭제│
└─────────────────────────┘
      │
      ▼
┌─────────────────────────┐
│ 3. Import 정리           │
│   "source.organizeImports"│
│   → import 순서/중복 정리 │
└─────────────────────────┘
      │
      ▼
[저장 완료 → 정리된 코드 유지]
```

> `main.jsx` , `App.jsx`
> 

**초기 렌더링 및 애플리케이션 구조 구성에 필수적인 파일세트**

- `main.jsx` : 애플리케이션을 시작하고 렌더링 할 위치의 기준 ⇒ ***“시작점”***
- `App.jsx` : 전체 애플리케이션의 주요 컴포넌트 또는 루트 컴포넌트 역할 ⇒ ***“전체 컴포넌트 관리자”***
