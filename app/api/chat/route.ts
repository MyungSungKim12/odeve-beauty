import { GoogleGenAI } from "@google/genai";
import { siteContent } from "../../content";

export const maxDuration = 60;

const MAX_TURNS = 20;
const MAX_MESSAGE_CHARS = 4000;

type ChatTurn = {
  role: "user" | "assistant";
  content: string;
};

type ChatRequest = {
  messages: ChatTurn[];
};

function buildSystemPrompt(): string {
  const { brand, services, faq, booking } = siteContent;

  const serviceLines = services.items
    .map((s) => `- ${s.name} (${s.sub}): ${s.price} / ${s.extra}`)
    .join("\n");

  const faqLines = faq.items.map((f) => `Q. ${f.q}\nA. ${f.a}`).join("\n\n");

  const bookingLines = booking.steps
    .map((s) => `- ${s.strong}: ${s.text}`)
    .join("\n");

  return `당신은 "${brand.studio}"의 AI 상담사입니다. ${brand.description}인 이 스튜디오를 방문한 고객의 질문에 답합니다.

## 시술 메뉴와 가격
${serviceLines}

## 자주 묻는 질문
${faqLines}

## 예약 방법
${bookingLines}

## 답변 규칙
- 위에 제공된 정보를 근거로만 답하고, 모르는 내용은 지어내지 말고 카카오 채널 1:1 상담을 안내하세요.
- 가격은 "~부터" 시작가이며, 정확한 견적은 상담 시 결정된다고 안내하세요.
- 의학적 진단이나 치료 판단은 하지 마세요. 피부 질환, 임신·수유, 복용 약물 등이 언급되면 반드시 시술 전 전문 상담이 필요하다고 안내하세요.
- 답변은 한국어 존댓말로, 2~4문장 이내로 간결하게 하세요.
- 대화가 예약으로 이어질 만하면 마지막에 자연스럽게 네이버 예약 또는 카카오 채널 상담을 권해 주세요.`;
}

function validate(body: unknown): ChatRequest | null {
  if (typeof body !== "object" || body === null) return null;
  const { messages } = body as Record<string, unknown>;

  if (!Array.isArray(messages) || messages.length === 0) return null;
  if (messages.length > MAX_TURNS) return null;

  for (const m of messages) {
    if (typeof m !== "object" || m === null) return null;
    const { role, content } = m as Record<string, unknown>;
    if (role !== "user" && role !== "assistant") return null;
    if (typeof content !== "string" || content.length === 0) return null;
    if (content.length > MAX_MESSAGE_CHARS) return null;
  }

  return body as ChatRequest;
}

export async function POST(request: Request) {
  if (!process.env.GEMINI_API_KEY) {
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  let parsed: unknown;
  try {
    parsed = await request.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  const chat = validate(parsed);
  if (!chat) {
    return Response.json({ error: "invalid_request" }, { status: 400 });
  }

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  // Claude는 "assistant", Gemini는 "model" 역할명을 쓴다.
  const contents = chat.messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  const encoder = new TextEncoder();
  const readable = new ReadableStream<Uint8Array>({
    async start(controller) {
      const emit = (text: string) => controller.enqueue(encoder.encode(text));
      try {
        const stream = await ai.models.generateContentStream({
          model: "gemini-2.5-flash",
          contents,
          config: { systemInstruction: buildSystemPrompt() },
        });

        let received = false;
        for await (const chunk of stream) {
          const text = chunk.text;
          if (text) {
            received = true;
            emit(text);
          }
        }
        if (!received) {
          emit("죄송해요, 이 내용은 답변이 어려워요. 카카오 채널로 문의 주시면 원장님이 직접 안내해 드릴게요.");
        }
      } catch {
        emit("잠시 연결이 원활하지 않아요. 조금 뒤에 다시 시도해 주세요.");
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}