1. 패키지 설치
터미널에 아래 점선 사이의 내용을 붙여 넣고 엔터를 누르세요.
----------
npm i react react-dom
----------
npm i -D @babel/core @babel/preset-env @babel/preset-react @pmmmwh/react-refresh-webpack-plugin babel-loader clean-webpack-plugin core-js cross-env css-loader file-loader html-webpack-plugin mini-css-extract-plugin style-loader terser-webpack-plugin webpack webpack-cli webpack-dev-server
----------

2. 개발용 서버 구동
터미널에 아래 점선 사이의 내용을 붙여 넣고 엔터를 누르세요.
----------
npm run dev
----------

3. 빌드(배포용 파일 생성)
터미널에 아래 점선 사이의 내용을 붙여 넣고 엔터를 누르세요.
----------
npm run build
----------

(!)
npm start 또는 npm run build 실행 시 에러가 난다면 Node.js를 LTS 버전(장기 지원 버전)으로 설치 후 다시 시도해 보세요.
터미널에 아래 점선 사이의 내용을 붙여 넣고 엔터를 누르면 설치할 수 있어요.
----------
n lts
----------