"use client";

import { useEffect, useRef, useState } from "react";
import { siteContent } from "../content";

type ChatTurn = {
  role: "user" | "assistant";
  content: string;
};

const MAX_TURNS = 20;
const MAX_INPUT_CHARS = 1000;

const GREETING: ChatTurn = {
  role: "assistant",
  content:
    "안녕하세요, 오드브 뷰티 AI 상담사예요. 시술이나 가격, 관리 방법이 궁금하시면 편하게 물어보세요.",
};

const NOT_CONFIGURED_NOTICE =
  "지금은 AI 상담 준비 중이에요. 카카오 채널 1:1 상담으로 문의 주시면 빠르게 도와드릴게요.";

const ERROR_NOTICE = "잠시 연결이 원활하지 않아요. 조금 뒤에 다시 시도해 주세요.";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatTurn[]>([GREETING]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const kakaoHref =
    siteContent.booking.ctas.find((c) => c.label.includes("카카오"))?.href ??
    siteContent.booking.ctas[0].href;

  useEffect(() => {
    const list = listRef.current;
    if (list) list.scrollTop = list.scrollHeight;
  }, [messages, open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  async function send() {
    const text = input.trim();
    if (!text || sending) return;

    const history = [...messages, { role: "user" as const, content: text }];

    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setSending(true);

    const appendToReply = (chunk: string, replace = false) => {
      setMessages((prev) => {
        const next = [...prev];
        const lastIndex = next.length - 1;
        next[lastIndex] = {
          ...next[lastIndex],
          content: replace ? chunk : next[lastIndex].content + chunk,
        };
        return next;
      });
    };

    try {
      const payload = history
        .slice(1) // 인사말 제외
        .slice(-MAX_TURNS)
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: payload }),
      });

      if (!res.ok || !res.body) {
        appendToReply(
          res.status === 503 ? NOT_CONFIGURED_NOTICE : ERROR_NOTICE,
          true,
        );
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let received = false;
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        if (chunk) {
          received = true;
          appendToReply(chunk);
        }
      }
      if (!received) appendToReply(ERROR_NOTICE, true);
    } catch {
      appendToReply(ERROR_NOTICE, true);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <button
        type="button"
        className="chat-fab"
        aria-label="AI 상담 열기"
        onClick={() => setOpen(true)}
      >
        <span className="font-serif">ai</span>
        <span>상담</span>
      </button>

      {open && (
        <div className="chat-layer" role="dialog" aria-label="AI 상담">
          <button
            type="button"
            className="chat-backdrop"
            aria-label="상담 닫기"
            onClick={() => setOpen(false)}
          />
          <section className="chat-panel">
            <header className="chat-header">
              <div>
                <p className="eyebrow">(ai consultation)</p>
                <strong>AI 상담</strong>
              </div>
              <button
                type="button"
                className="chat-close"
                aria-label="닫기"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
            </header>

            <div className="chat-messages" ref={listRef} role="log">
              {messages.map((m, i) => (
                <div key={i} className={`chat-msg chat-msg-${m.role}`}>
                  <p>{m.content || "…"}</p>
                </div>
              ))}
            </div>

            <form
              className="chat-input-row"
              onSubmit={(e) => {
                e.preventDefault();
                void send();
              }}
            >
              <input
                type="text"
                value={input}
                maxLength={MAX_INPUT_CHARS}
                placeholder="예: 눈썹문신이랑 콤보 차이가 뭐예요?"
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                className="chat-send-btn"
                disabled={sending || !input.trim()}
              >
                {sending ? "…" : "전송"}
              </button>
            </form>

            <p className="chat-disclaimer">
              AI 안내는 상담 전 참고용이에요. 정확한 진단과 견적은{" "}
              <a href={kakaoHref} target="_blank" rel="noopener noreferrer">
                카카오 채널 상담
              </a>
              에서 도와드려요.
            </p>
          </section>
        </div>
      )}
    </>
  );
}
