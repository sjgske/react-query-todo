# 🎈 원티드 프리온보딩 프론트엔드 챌린지 사전과제

## 목차
1. [구현 요구 사항 목록](#1-구현-요구-사항-목록)
2. [실행 방법](#2-실행-방법)
3. [사용한 프레임워크 및 라이브러리](#3-사용한-프레임워크-및-라이브러리)
4. [폴더 구조](#4-폴더-구조-client)
5. [개선 before & after](#5-개선-before--after)
6. [느낀 점 및 한계](#6-느낀-점-및-한계)

<br>

## 1. 구현 요구 사항 목록

### `/auth` - 회원가입 / 로그인

- 로그인과 회원가입 시 이메일과 비밀번호 유효성 검사
  - 이메일 조건 : 최소 `@`, `.` 포함
  - 비밀번호 조건 : 8자 이상 입력
  - 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화된다.
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동
  - 응답으로 받은 토큰은 로컬 스토리지에 저장된다.
  - 로그인 페이지에 들어갈 때 토큰이 있으면 홈으로 리다이렉트된다.
- 로그아웃 버튼 클릭 시 로그아웃 되며 로그인 페이지로 리다이렉트된다.


#### 💻 Screenshot

<center><img src="https://user-images.githubusercontent.com/91328528/184358227-8d66ad06-2005-4c0c-8906-32477afa296a.gif" alt="로그인" width="500"></center>

<br>

### `/` - Todo List

- Todo List API를 호출하여 CRUD 기능 구현
  - 유저의 Todo 목록을 가져온다.
  - 유저 토큰이 유효하지 않으면 로그인 페이지로 리다이렉트된다. 
  - Todo 추가 버튼을 클릭하면 할 일이 추가된다.
  - Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있다.
  - Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있다.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현
  - 동적 라우팅으로 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 구현하였다.
  - 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되도록 구현하였다.


#### 💻 Screenshot

<center><img src="https://user-images.githubusercontent.com/91328528/184357429-89dc8bd0-36c2-4dce-80a2-044d34f796ce.gif" alt="로그인" width="500"></center>

<br>

## 2. 실행 방법
```js
// client, server 폴더에서 각각 따로 실행
npm i
npm start
```

<br>

## 3. 사용한 프레임워크 및 라이브러리
|라이브러리|용도
|---|---|
|axios|api 호출
|react-query|api 호출 로직을 전역에서 관리
|react-router-dom|라우팅
|styled-components|CSS in JS로 동적 스타일링

<br>

## 4. 폴더 구조 (client)
```
├── package-lock.json
├── package.json
├── public
├── src
|  ├── api
|  |  └── index.ts
|  ├── App.tsx
|  ├── components
|  |  ├── Auth
|  |  ├── common
|  |  └── Todo
|  ├── hooks
|  |  ├── useCreateTodo.ts
|  |  ├── useDeleteTodo.ts
|  |  ├── useGetTodos.ts
|  |  ├── useLogin.ts
|  |  ├── useSignUp.ts
|  |  └── useUpdateTodo.ts
|  ├── index.tsx
|  ├── pages
|  |  ├── Auth.tsx
|  |  ├── ErrorPage.tsx
|  |  └── Home.tsx
|  ├── styles
|  |  ├── GlobalStyles.ts
|  |  └── theme.ts
|  └── utils
|     └── index.ts
└── tsconfig.json
```

<br>

## 5. 개선 Before & After
- [x] View / Business 로직 분리
    > 화면에 보여지는 스타일링과 직접적인 관련이 없는 비즈니스 로직은 View component 외부로 분리하였다.

    - api 호출 로직을 react-query로 전역에서 관리하여 커스텀 훅으로 분리하였다. [커밋 보기](https://github.com/sjgske/wanted-pre-onboarding-challenge-fe-1/commit/49eaa29aa47cd0f6c05b41389f306c5dfa2d1491#diff-f8a4ee6f18be35b87fbff7acda42e3b5be5401f79c2ec280564eb5fd303a696b)
    - 로그인/로그아웃 상태를 각각의 페이지에서 확인하지 않고 라우터 단에서 체크한 후 redirect 시켜주도록 하였다. [커밋 보기](https://github.com/sjgske/wanted-pre-onboarding-challenge-fe-1/commit/bc025b733e3dc43bfa2f91087c7be3e92bb4628e#diff-ce931a2269184f4b06d6be36ead81f2ca3e95e44a5c8d600f47da1dfa35b9337)

- [x] 전역 에러 처리
    - ~~try-catch~~ ➡ 에러 처리 로직을 전역 queryClient에서 담당하도록 분리하여 유지보수를 향상시켰다. [커밋 보기](https://github.com/sjgske/wanted-pre-onboarding-challenge-fe-1/commit/558e9ea7600c4e91e1b67a9efa90f2c88039fb70#diff-e1037d6d8abe24e1273b402e4ed0ec490b5d522c0d267c507de7d5fa705f28bf)
    - ~~alert~~ ➡ toast ui를 적용하여 플로우가 멈추는 것을 막았다. [커밋 보기](https://github.com/sjgske/wanted-pre-onboarding-challenge-fe-1/commit/558e9ea7600c4e91e1b67a9efa90f2c88039fb70#diff-e1037d6d8abe24e1273b402e4ed0ec490b5d522c0d267c507de7d5fa705f28bf)

- [x] any, 타입 단언 제거
    - error 타입 `any` ➡ `AxiosError`, narrowing 처리하였다.
      ```ts
      // before
      ...
      catch (err: any) {
        alert(err.response.data.details);
      }

      // after
      onError: (error) => {
        if (error instanceof AxiosError) {
          toast.error(error.response?.data.details);
        }
      },
      ```
    - 타입 단언을 제거하고 input value를 useState로 관리하였다.
      ```ts
      // before
      const target = e.target as HTMLFormElement & {
        title: { value: string };
        content: { value: string };
      };
      const title = target.title.value;
      const content = target.content.value;

      // after
      const [form, setForm] = useState({ title: "", content: "" });
      const { title, content } = form;
      ```

- [x] 선언형 코드 작성
    > “무엇”을 하는 코드인지 한 눈에 파악할 수 있도록 명령형이 아닌 선언형으로 작성하였다.


- [x] 중복되는 UI 해결
    - 회원가입, 로그인 페이지에서 동일한 form UI를 중복해서 사용하고 있는 문제가 있었다.
    - 한 페이지에서 `formType` 상태값에 따라 로그인 / 회원가입 기능을 수행하도록 구현하여 중복되는 코드를 해결하였다. [커밋 보기](https://github.com/sjgske/wanted-pre-onboarding-challenge-fe-1/commit/be0e9854fd909d1c3ee8908ae3aaff111a29a885#diff-3608a5cb0ed08e3c9d84d4945def14855eab730dd89a1a10eb3e945bb53b506c)
<br>

## 6. 느낀 점 및 한계

  - 전역 상태관리 적용 X

    <details>
    <summary>📝 느낀 점 (0809)</summary>
    <div markdown="1">

    - 과제를 수행할 때는 코드의 전체적인 구조, 아키텍쳐를 보는 눈이 전혀 없었는데 수업을 통해 코드를 어떤 기준으로 분리해야 하는지 생각해보게 되었다. 말로만 클린코드 클린코드 했는데 진정한 의미를 몰랐던 것 같다. 그저 코드 자체를 깔끔하게 작성하고 불필요한 로직 없이 효율적으로 동작하도록 하는 것만 생각했는데, 그 뿐만 아니라 관심사를 어떻게 분리할지 고민하고 선언형과 추상화 등등 이렇게 생각해야 할 게 많구나..라는 걸 깨달았다. 다른 분들의 코드를 보면서 엄청 시야가 넓어진 것 같다.

    - 리팩토링을 하면서 로직 분리에 신경을 써보려고 했는데, 상태관리를 전역으로 하고 있지 않은 상황에서 성급하게 분리부터 하려고 하니 다 꼬이고 어려움을 겪었다. 사실 전에는 리덕스 같은 전역 상태관리 라이브러리를 왜 사용해야 하는지 잘 와닿지 않았다. 컴포넌트 안에서 선언하면 되는데 왜 무거운 라이브러리를 써야하나라는 생각이었는데 이번 계기로 생각을 고쳐먹게 된것같고 다른 분들의 코드를 참고해서 잘 해결해봐야겠다…

    </div>
    </details>