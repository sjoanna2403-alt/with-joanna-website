export default function AboutPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(34,74,60,.9), transparent 35%), radial-gradient(circle at bottom right, rgba(12,45,35,.9), transparent 30%), linear-gradient(135deg, #03110d 0%, #0f2f26 40%, #071b16 100%)",
        color: "#f8f4ea",
        padding: "80px 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#d4af37",
            letterSpacing: ".2em",
            marginBottom: 12,
          }}
        >
          WITH JOANNA BEAUTY
        </p>

        <h1
          style={{
            fontSize: 56,
            fontFamily: "Georgia, serif",
            marginBottom: 28,
          }}
        >
          About Joanna
        </h1>

        <div
          style={{
            background: "rgba(255,255,255,.05)",
            border: "1px solid rgba(212,175,55,.18)",
            borderRadius: 32,
            padding: 40,
          }}
        >
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.9,
              color: "rgba(255,255,255,.82)",
            }}
          >
            With Joanna Beauty was created from a passion for aesthetics,
            skin health and holistic wellbeing. Since 2020, Joanna has been
            helping clients feel more confident through personalised
            treatments designed to enhance natural beauty.
          </p>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.9,
              color: "rgba(255,255,255,.82)",
              marginTop: 24,
            }}
          >
            Joanna holds accredited certifications across aesthetic and
            skin treatments and continues expanding her qualifications
            within advanced aesthetics and nutrition.
          </p>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.9,
              color: "rgba(255,255,255,.82)",
              marginTop: 24,
            }}
          >
            The focus of With Joanna Beauty is natural confidence,
            healthy skin, wellness and long-term results in a calm,
            luxurious environment.
          </p>
        </div>
      </div>
    </main>
  );
}