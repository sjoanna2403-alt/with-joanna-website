"use client";

import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("en");

  const t = {
    en: {
      home: "Home",
      about: "About",
      treatments: "Treatments",
      nutrition: "Nutrition",
      packages: "Packages",
      faq: "FAQ",
      contact: "Contact",
      heroTitle: "Natural Beauty. Advanced Aesthetics. Personal Care.",
      heroText:
        "Premium aesthetic treatments, skin health and nutrition support designed around your natural confidence.",
      consultation: "Book Consultation",
      whatsapp: "WhatsApp",
      aboutTitle: "About Joanna",
      aboutText:
        "With Joanna Beauty combines aesthetic care, skin health and wellness support in a calm, professional and personalised way.",
      treatmentsTitle: "Treatments",
      nutritionTitle: "Nutrition & Wellness",
      packagesTitle: "Packages",
      faqTitle: "FAQ",
      contactTitle: "Book Your Consultation"
    },
    pl: {
      home: "Start",
      about: "O mnie",
      treatments: "Zabiegi",
      nutrition: "Dietetyka",
      packages: "Pakiety",
      faq: "FAQ",
      contact: "Kontakt",
      heroTitle: "Naturalne piękno. Nowoczesna estetyka. Indywidualna opieka.",
      heroText:
        "Premium zabiegi estetyczne, pielęgnacja skóry i wsparcie dietetyczne dopasowane do Twojej naturalnej pewności siebie.",
      consultation: "Umów konsultację",
      whatsapp: "WhatsApp",
      aboutTitle: "O Joannie",
      aboutText:
        "With Joanna Beauty łączy medycynę estetyczną, zdrowie skóry i wsparcie wellness w spokojny, profesjonalny i indywidualny sposób.",
      treatmentsTitle: "Zabiegi",
      nutritionTitle: "Dietetyka i wellness",
      packagesTitle: "Pakiety",
      faqTitle: "FAQ",
      contactTitle: "Umów konsultację"
    }
  };

  const c = t[lang];

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
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16
        }}
      >
        <strong style={{ color: "#d4af37", fontSize: 20 }}>
          With Joanna Beauty
        </strong>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="#home">{c.home}</a>
          <a href="#about">{c.about}</a>
          <a href="#treatments">{c.treatments}</a>
          <a href="#nutrition">{c.nutrition}</a>
          <a href="#packages">{c.packages}</a>
          <a href="#faq">{c.faq}</a>
          <a href="#contact">{c.contact}</a>
          <button onClick={() => setLang(lang === "en" ? "pl" : "en")}>
            {lang === "en" ? "PL" : "EN"}
          </button>
        </div>
      </nav>

      <section id="home" style={{ maxWidth: 1100, margin: "40px auto", padding: "90px 40px" }}>
        <p style={{ color: "#d4af37", letterSpacing: ".2em" }}>
          WITH JOANNA BEAUTY
        </p>

        <h1 style={{ fontFamily: "Georgia, serif", fontSize: 58, maxWidth: 850 }}>
          {c.heroTitle}
        </h1>

        <p style={{ fontSize: 20, lineHeight: 1.8, maxWidth: 760 }}>
          {c.heroText}
        </p>

        <div style={{ display: "flex", gap: 16, marginTop: 30 }}>
          <a href="#contact">{c.consultation}</a>
          <a href="https://wa.me/" target="_blank" rel="noreferrer">
            {c.whatsapp}
          </a>
        </div>
      </section>

     <section
  id="about"
  style={{
    maxWidth: 1100,
    margin: "0 auto",
    padding: "60px 24px"
  }}
>
  <h2
    style={{
      fontFamily: "Georgia, serif",
      fontSize: 42,
      marginBottom: 24
    }}
  >
    About Joanna
  </h2>

  <div
    style={{
      background: "rgba(255,255,255,.05)",
      border: "1px solid rgba(212,175,55,.18)",
      borderRadius: 28,
      padding: 36,
      maxWidth: 900
    }}
  >
    <p
      style={{
        fontSize: 18,
        lineHeight: 1.9,
        color: "rgba(255,255,255,.82)"
      }}
    >
      With Joanna Beauty was created from a passion for aesthetics, skin
      health and holistic wellbeing. Since 2020, Joanna has been helping
      clients feel more confident through personalised treatments designed
      to enhance natural beauty in a safe and professional environment.
    </p>

    <p
      style={{
        fontSize: 18,
        lineHeight: 1.9,
        color: "rgba(255,255,255,.82)",
        marginTop: 22
      }}
    >
      Joanna holds accredited certifications across a wide range of
      aesthetic and skin treatments and is currently completing Level 4,
      5 and 7 Aesthetics qualifications, alongside a Diploma in Nutrition.
    </p>

    <p
      style={{
        fontSize: 18,
        lineHeight: 1.9,
        color: "rgba(255,255,255,.82)",
        marginTop: 22
      }}
    >
      Combining advanced aesthetic treatments with a holistic wellness
      approach, With Joanna Beauty focuses on confidence, balance, skin
      health and long-term results.
    </p>
  </div>
</section>
      <TreatmentSection />
     <section
  id="nutrition"
  style={{
    maxWidth: 1100,
    margin: "0 auto",
    padding: "60px 24px"
  }}
>
  <h2
    style={{
      fontFamily: "Georgia, serif",
      fontSize: 42,
      marginBottom: 18
    }}
  >
    Nutrition & Wellness
  </h2>

  <p
    style={{
      fontSize: 18,
      lineHeight: 1.8,
      maxWidth: 760,
      color: "rgba(255,255,255,.72)",
      marginBottom: 34
    }}
  >
    A holistic approach to beauty and wellbeing, supporting confidence,
    healthy lifestyle habits and wellness from within.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
      gap: 22
    }}
  >
    {[
      "Skin & Gut Health",
      "Women’s Wellness",
      "Healthy Lifestyle Support",
      "Weight Management Guidance"
    ].map((item) => (
      <div
        key={item}
        style={{
          background: "rgba(255,255,255,.05)",
          border: "1px solid rgba(212,175,55,.18)",
          borderRadius: 24,
          padding: 28
        }}
      >
        <h3
          style={{
            fontSize: 24,
            marginBottom: 12,
            fontFamily: "Georgia, serif"
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
          Personalised wellness-focused support tailored to your goals and
          lifestyle.
        </p>
      </div>
    ))}
  </div>
</section>
      <Cards id="packages" title={c.packagesTitle} items={["Glow Package", "Skin & Wellness Package", "Confidence Package"]} />
      <Section id="faq" title={c.faqTitle} text="More information coming soon." />
      <Section id="contact" title={c.contactTitle} text="Contact via WhatsApp to ask a question or arrange a consultation." />
    </main>
  );
}

function Section({ id, title, text }) {
  return (
    <section id={id} style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
      <h2 style={{ fontFamily: "Georgia, serif", fontSize: 42 }}>{title}</h2>
      <p style={{ fontSize: 18, lineHeight: 1.8, maxWidth: 760 }}>{text}</p>
    </section>
  );
}

function Cards({ id, title, items }) {
  return (
    <section id={id} style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
      <h2 style={{ fontFamily: "Georgia, serif", fontSize: 42 }}>{title}</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 22 }}>
        {items.map((item) => (
          <div
            key={item}
            style={{
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(212,175,55,.18)",
              borderRadius: 24,
              padding: 28
            }}
          >
            <h3>{item}</h3>
            <p style={{ color: "rgba(255,255,255,.72)", lineHeight: 1.7 }}>
              Personalised support designed around your goals.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
function TreatmentSection() {
  const categories = [
    {
      title: "Aesthetic Injectables & Skin Regeneration",
      items: [
        ["Anti-Wrinkle Injections", "from £100"],
        ["RF Microneedling", "from £200"],
        ["Skin Rejuvenation Mesotherapy", "from £170"],
        ["Under Eye Mesotherapy", "from £100"],
        ["PRP Vampire Facial", "from £220"],
        ["PRF Advanced Regeneration", "from £120"],
        ["Medical Microneedling Therapy", "from £100"]
      ]
    },
    {
      title: "Skin Treatments & Facials",
      items: [
        ["Diamond Glow Microdermabrasion", "from £60"],
        ["Deep Hydrogen Skin Cleanse", "from £90"],
        ["Advanced Chemical Peels", "from £75"],
        ["Cavitation Skin Peel", "from £30"],
        ["Deep Pore Skin Cleansing", "from £55"],
        ["Growth Factor Skin Therapy", "from £80"],
        ["Non-Needle Glow Mesotherapy", "from £70"]
      ]
    },
    {
      title: "Hair Restoration",
      items: [["PRP Hair Restoration Therapy", "from £220"]]
    },
    {
      title: "Body Contouring & Wellness",
      items: [
        ["Body Pressure Therapy", "£50"],
        ["Body Microdermabrasion Treatment", "£70"]
      ]
    },
    {
      title: "Brows & Beauty",
      items: [
        ["Luxury Brow Tint", "from £25"],
        ["Powder Henna Brows", "£35"]
      ]
    }
  ];

  return (
    <section id="treatments" style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
      <h2 style={{ fontFamily: "Georgia, serif", fontSize: 42 }}>
        Treatments
      </h2>

      <p style={{ fontSize: 18, lineHeight: 1.8, maxWidth: 760, color: "rgba(255,255,255,.72)" }}>
        A curated selection of aesthetic, skin, body and beauty treatments designed to support natural-looking results and confidence.
      </p>

      {categories.map((category) => (
        <div key={category.title} style={{ marginTop: 42 }}>
          <h3 style={{ color: "#d4af37", fontSize: 24, marginBottom: 18 }}>
            {category.title}
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 22 }}>
            {category.items.map(([name, price]) => (
              <div
                key={name}
                style={{
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(212,175,55,.18)",
                  borderRadius: 24,
                  padding: 26
                }}
              >
                <h4 style={{ fontSize: 20, marginBottom: 12 }}>
                  {name}
                </h4>

                <p style={{ color: "#d4af37", fontWeight: 700 }}>
                  {price}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
