export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #071f18 0%, #0b2f24 45%, #03120e 100%)",
        color: "#f8f4ea",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <section
        style={{
          maxWidth: 1100,
          margin: "40px auto",
          padding: "110px 40px 100px",
          borderRadius: 36,
          background:
            "linear-gradient(135deg, rgba(7,31,24,0.96), rgba(11,47,36,0.92))",
          border: "1px solid rgba(212,175,55,.18)",
          boxShadow: "0 30px 80px rgba(0,0,0,.35)"
        }}
      >
        <div
          style={{
            display: "inline-block",
            border: "1px solid rgba(212,175,55,.28)",
            borderRadius: 999,
            padding: "10px 16px",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: ".22em",
            background: "rgba(255,255,255,.04)"
          }}
        >
          With Joanna Beauty
        </div>

        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 400,
            fontSize: 64,
            lineHeight: 1.05,
            maxWidth: 760,
            marginTop: 24,
            marginBottom: 22
          }}
        >
          Natural Beauty. Advanced Aesthetics. Personal Care.
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,.78)",
            fontSize: 20,
            lineHeight: 1.8,
            maxWidth: 760
          }}
        >
          Premium aesthetic treatments, wellness and personalised beauty care
          designed around your natural confidence.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            marginTop: 34
          }}
        >
          <a
            href="#contact"
            style={{
              borderRadius: 18,
              padding: "16px 28px",
              background: "#d4af37",
              color: "#111",
              fontWeight: 700,
              textDecoration: "none"
            }}
          >
            Book Consultation
          </a>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            style={{
              borderRadius: 18,
              padding: "16px 28px",
              border: "1px solid rgba(212,175,55,.4)",
              color: "#fff",
              fontWeight: 700,
              textDecoration: "none",
              background: "rgba(255,255,255,.04)"
            }}
          >
            WhatsApp
          </a>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px 80px"
        }}
      >
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 400,
            fontSize: 42,
            marginBottom: 28
          }}
        >
          Treatments
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 24
          }}
        >
          {[
            "Skin Boosters",
            "Vitamin Injections",
            "Facials",
            "Wellness & Nutrition"
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "rgba(255,255,255,.05)",
                border: "1px solid rgba(212,175,55,.16)",
                borderRadius: 24,
                padding: 28,
                backdropFilter: "blur(12px)"
              }}
            >
              <h3
                style={{
                  marginBottom: 14,
                  fontSize: 24,
                  fontWeight: 500
                }}
              >
                {item}
              </h3>

              <p
                style={{
                  color: "rgba(255,255,255,.72)",
                  lineHeight: 1.7
                }}
              >
                Luxury personalised treatments designed for natural and elegant
                results.
              </p>
            </div>
          ))}
        </div>
      </section>
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px 80px"
        }}
      >
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 400,
            fontSize: 42,
            marginBottom: 18
          }}
        >
          Why Choose With Joanna
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,.72)",
            fontSize: 18,
            lineHeight: 1.8,
            maxWidth: 760,
            marginBottom: 34
          }}
        >
          A calm, professional and personalised approach to aesthetic treatments,
          skin health and nutrition support — created to help you feel confident,
          balanced and cared for.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: 22
          }}
        >
          {[
            "Personalised treatment plans",
            "Natural-looking aesthetic results",
            "Skin health & wellness focus",
            "Nutrition-led confidence support"
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "rgba(255,255,255,.045)",
                border: "1px solid rgba(212,175,55,.16)",
                borderRadius: 24,
                padding: 26
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: "rgba(212,175,55,.16)",
                  marginBottom: 18
                }}
              />

              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 500,
                  lineHeight: 1.4
                }}
              >
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>
      <section
        id="contact"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px 100px"
        }}
      >
        <div
          style={{
            borderRadius: 30,
            padding: "50px 40px",
            background: "rgba(255,255,255,.05)",
            border: "1px solid rgba(212,175,55,.18)"
          }}
        >
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 42,
              fontWeight: 400,
              marginBottom: 18
            }}
          >
            CONTACT TEST
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,.75)",
              lineHeight: 1.8,
              marginBottom: 28
            }}
          >
            Get in touch to book your consultation or ask about treatments.
          </p>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              borderRadius: 18,
              padding: "16px 28px",
              background: "#d4af37",
              color: "#111",
              fontWeight: 700,
              textDecoration: "none"
            }}
          >
            Message on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
