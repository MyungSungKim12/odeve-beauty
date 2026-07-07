# AI 상담 기능 설계 (FAQ + 챗봇 + 사진 상담)

날짜: 2026-07-07
승인: 사용자 ("순서대로 진행해줘")

## 목표

정적 마케팅 사이트에 3단계로 상담 기능을 추가한다.

1. **FAQ 정적 섹션** — 반복 질문을 사이트에 상시 노출 (API 비용 0) ✅ 완료
2. **AI 상담 챗봇** — 시술/가격/관리 질문에 실시간 답변, 예약 채널로 유도 ✅ 완료
3. **사진 기반 상담** — 눈썹/입술 사진을 올리면 어울리는 시술 방향 제안 ⏸ 보류 (2026-07-07 사용자 요청으로 Step ②까지만 진행. 재개 시 아래 설계 그대로 구현)

## 아키텍처

```
방문자 브라우저
  └─ ChatWidget (클라이언트 컴포넌트, 플로팅 버튼 + 패널)
       └─ POST /api/chat  (Next.js Route Handler, Vercel 서버리스)
            ├─ 텍스트만: claude-opus-4-8 (스트리밍)
            └─ 사진 포함: claude-fable-5 + server-side fallback → claude-opus-4-8
```

- **별도 서버 없음.** Route Handler는 Vercel 배포 시 서버리스 함수로 함께 배포된다.
- API 키는 서버 환경변수 `ANTHROPIC_API_KEY`로만 사용, 클라이언트에 노출되지 않는다.
- 키가 없으면 챗봇 패널에 "카카오 채널로 문의해 주세요" 안내를 반환한다(사이트는 정상 동작).

## 구성 요소

### 1. FAQ 섹션 (`app/components/Faq.tsx`)
- 데이터는 `content.ts`의 `faq` 항목 (질문/답변 7개 내외)
- 네이티브 `<details>/<summary>` 아코디언 — JS 불필요, 기존 미니멀 톤 유지
- `page.tsx`에서 Services와 Booking 사이에 배치

### 2. 챗 API (`app/api/chat/route.ts`)
- 요청: `{ messages: [{role, content}], image?: {mediaType, data(base64)} }`
- 시스템 프롬프트: `content.ts`의 시술 메뉴 + FAQ를 삽입한 상담사 페르소나
  - 제공된 정보만 답변, 의학적 진단 금지, 사진 분석은 "상담 전 참고용" 톤
  - 마지막에 자연스럽게 카카오/네이버 예약 유도
- 응답: 평문 텍스트 스트리밍 (`ReadableStream`)
- 안전장치: 히스토리 최대 20턴, 메시지 4,000자 제한, 이미지 5MB 제한
- Fable 5 경로: `thinking` 파라미터 생략(항상 켜짐), `stop_reason === "refusal"` 시 안내 문구,
  `betas: ["server-side-fallback-2026-06-01"]` + `fallbacks: [{model: "claude-opus-4-8"}]`
- `export const maxDuration = 60` (Vercel 함수 타임아웃 여유)

### 3. 챗 위젯 (`app/components/ChatWidget.tsx`)
- 플로팅 버튼: 셸(480px) 기준 우하단 고정
- 패널: 바텀시트 스타일, 메시지 리스트 + 입력창 + 사진 첨부 버튼
- 사진은 캔버스로 최대 1280px 리사이즈 후 JPEG base64 전송
- 스트리밍 수신: `res.body.getReader()`로 텍스트 조각을 즉시 렌더

## 에러 처리
- 키 없음 → 서버가 503 + 안내 JSON, 위젯은 카카오 채널 링크 안내
- 네트워크/API 오류 → "잠시 후 다시 시도해 주세요" 메시지
- refusal(사진 경로) → "이 사진은 분석이 어려워요. 카카오 채널로 보내주시면 원장님이 직접 봐드려요"

## 비용/모델 정책
- 텍스트 상담: `claude-opus-4-8` (품질/비용 균형)
- 사진 상담: `claude-fable-5` (고해상도 비전) + 거절 시 opus 폴백
- 시스템 프롬프트에 `cache_control` 지정 (프롬프트 캐싱)

## 테스트/검증
- `next build` + `eslint` 통과
- 로컬 프리뷰에서 FAQ 렌더·위젯 UI·키 없음 폴백 확인
- 실제 API 호출은 Vercel에 `ANTHROPIC_API_KEY` 등록 후 확인
