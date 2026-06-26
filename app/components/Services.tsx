const services = [
  {
    name: "눈썹문신",
    sub: "엠보 / 화장 / 콤보 / 남자",
    price: "170,000원",
    extra: "+중화 50,000 / +제거 70,000",
  },
  {
    name: "아이라인문신",
    sub: "점막 / 브라운",
    price: "200,000원",
    extra: "+꼬리 50,000",
  },
  {
    name: "입술문신",
    sub: "풀틴트 / 그라데이션",
    price: "200,000원",
    extra: "+오버립 80,000 / +다크립 50,000",
  },
  {
    name: "두피문신",
    sub: "헤어라인",
    price: "400,000원",
    extra: "3회 패키지",
  },
  {
    name: "속눈썹 펌",
    sub: "기본 / LED 연장",
    price: "40,000원~",
    extra: "+블랙틴팅 5,000 / +영양 5,000",
  },
  {
    name: "펌 포인트",
    sub: "LED 연장",
    price: "60,000원",
    extra: "",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{ background: "var(--bg-light)", padding: "52px 24px" }}
    >
      {/* 헤더 */}
      <p
        className="font-serif"
        style={{ fontSize: 13, fontStyle: "italic", color: "var(--muted)", marginBottom: 8 }}
      >
        (service menu)
      </p>
      <h2
        className="font-serif"
        style={{ fontSize: 30, fontWeight: 300, color: "var(--text)", marginBottom: 32, lineHeight: 1.2 }}
      >
        시술 항목 안내
      </h2>

      {/* 리스트 */}
      <div>
        {services.map((svc, i) => (
          <div
            key={svc.name}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              padding: "18px 0",
              borderBottom: i < services.length - 1 ? "1px solid var(--line)" : "none",
            }}
          >
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 15, fontWeight: 400, color: "var(--text)", marginBottom: 3 }}>
                {svc.name}
              </p>
              <p
                className="font-serif"
                style={{ fontSize: 12, fontStyle: "italic", color: "var(--subtle)" }}
              >
                {svc.sub}
              </p>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0, paddingLeft: 12 }}>
              <p style={{ fontSize: 14, fontWeight: 300, color: "#555", marginBottom: 2 }}>
                {svc.price}
              </p>
              {svc.extra && (
                <p style={{ fontSize: 10, fontWeight: 300, color: "var(--subtle)", lineHeight: 1.5 }}>
                  {svc.extra}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
