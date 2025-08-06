#요구사항 명세서
개인 포트폴리오 1페이지 웹사이트 기능 명세서
1. 개요
목적: 개발자에게 개인 포트폴리오 1페이지 웹사이트 개발 요청

스타일: 모던하고 전문적인 디자인

기술 스택 제안: Next.js + TypeScript + Tailwind CSS + Shadcn UI (또는 React + Vite + Tailwind도 가능)

2. 주요 구성 및 기능 명세
2.1. 헤더(Header)
구성: 상단 고정 네비게이션 바 (sticky)

내용: 로고 or 이름, 섹션 이동 anchor 메뉴 (About, Projects, Skills, Contact)

기능:

클릭 시 해당 섹션으로 부드러운 스크롤 이동

스크롤 시 섹션 활성화 표시 (scroll spy 기능)

2.2. 소개 섹션 (Hero / About)
내용:

프로필 이미지 또는 배경

이름, 직무, 간단한 소개 문구

이력서 다운로드 버튼

기능:

텍스트 페이드 인 애니메이션

이력서 PDF 다운로드 (정적 파일 연결)

2.3. 프로젝트 섹션 (Projects)
내용:

3~6개 대표 프로젝트 카드 형태로 나열

각 프로젝트는 썸네일, 제목, 설명, 사용 기술, GitHub 링크, 배포 링크 포함

기능:

카드 hover 시 인터랙션 효과

필요시 Carousel 또는 Grid Layout 적용

2.4. 기술 스택 섹션 (Skills)
내용:

아이콘 또는 텍스트 기반 기술 나열 (예: HTML, CSS, JavaScript, React, Node.js 등)

기능:

기술별 Progress bar 또는 레벨 시각화 (예: 숙련도 90%)

반응형 레이아웃

2.5. 연락처 섹션 (Contact)
내용:

간단한 메시지 폼 (이름, 이메일, 메시지)

이메일, GitHub, LinkedIn 등의 아이콘

기능:

이메일 전송 기능 (EmailJS 또는 Formspree 등 외부 연동 가능)

입력값 유효성 검사

2.6. 푸터 (Footer)
내용:

이름 또는 저작권 문구

SNS 링크 (GitHub, Blog 등)

기능:

현재 연도 자동 표시