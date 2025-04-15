# 📐 유클리드 알고리즘 계산기 (확장 & 일반)

두 개의 양의 정수를 입력하면 **확장 유클리드 호제법**과 **일반 유클리드 호제법**을 통해 최대공약수(GCD)를 계산하고, 과정을 테이블로 시각화해주는 React 웹 애플리케이션입니다.

## 🚀 데모

> 로컬에서 실행하여 확인해보세요!

![Demo Screenshot](./demo.png) <!-- 필요시 스크린샷 추가 -->

---

## 🛠 기능

- ✅ 양의 정수 두 개를 입력받아 GCD 계산
- ✅ 일반 유클리드 알고리즘 단계별 계산과정 시각화
- ✅ 확장 유클리드 알고리즘을 통해 `gcd(a, b) = a·s + b·t` 형태의 베주 항등식 계산
- ✅ 각 단계의 `q`, `r`, `s`, `t` 값을 표 형태로 확인 가능
- ⚠️ 잘못된 입력에 대한 유효성 검사 및 에러 메시지 제공

---

## 📦 사용 기술

- React
- JavaScript (ES6+)
- CSS

---

## 📋 사용 방법

### 1. 프로젝트 클론

```
git clone https://github.com/BBIYAKYEE7/Euclidean-Algorithm.git
cd Euclidean-Algorithm
```

2. 패키지 설치

```
npm install
```

3. 로컬 서버 실행

```
npm start
```
localhost:3000에서 앱이 실행됩니다.

⸻

## 📁 주요 파일 구조
├── node_modules/           #필요한 Node 모듈 포함
├── public/
│   └── index.html          # HTML 템플릿
├── src/
│   ├── App.js              # 메인 컴포넌트
│   ├── App.css             # 기본 스타일
│   └── index.js            # 앱 진입점
└── README.md               # 프로젝트 설명서

⸻

## 📚 수학 개념 요약

✅ 일반 유클리드 알고리즘

두 수 a, b에 대해 gcd(a, b)는 다음과 같이 반복하여 계산됩니다:

gcd(a, b) = gcd(b, a % b)

✅ 확장 유클리드 알고리즘

ax + by = gcd(a, b) 형태의 베주 항등식(Bézout’s identity) 에서 x, y를 계산합니다.

⸻

## 🧠 개선 아이디어
	•	✅ 부정적인 정수 처리 및 예외 케이스 핸들링
	•	📈 계산 그래프 시각화 (차트 추가)
	•	🌐 다국어 지원 (i18n)
	•	📱 반응형 UI

⸻

##📝 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.