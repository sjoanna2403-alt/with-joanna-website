"use client";

import { useState } from "react";

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #071f18 0%, #0b2f24 45%, #03120e 100%)",
    color: "#f8f4ea",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "60px 24px",
  },
  gold: {
    color: "#d4af37",
  },
  card: {
    background: "rgba(255,255,255,.05)",
    border: "1px solid rgba(212,175,55,.18)",
    borderRadius: 24,
    padding: 28,
  },
  button: {
    display: "inline-block",
    padding: "13px 22px",
    borderRadius: 999,
    border: "1px solid rgba(212,175,55,.5)",
    color: "#f8f4ea",
    textDecoration: "none",
    background: "rgba(212,175,55,.12)",
    fontWeight: 700,
  },
  link: {
    color: "#f8f4ea",
    textDecoration: "none",
  },
};

export default function Home() {
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      nav: {
        home: "Home",
        about: "About",
        treatments: "Treatments",
        nutrition: "Nutrition",
        packages: "Packages",
        faq: "FAQ",
        contact: "Contact",
      },
      heroTitle: "Natural Beauty. Advanced Aesthetics. Personal Care.",
      heroText:
        "Premium aesthetic treatments, skin health and nutrition support designed around your natural confidence.",
      consultation: "Book Consultation",
      whatsapp: "WhatsApp",
      aboutTitle: "About Joanna",
      aboutParagraphs: [
        "With Joanna Beauty was created from a passion for aesthetics, skin health and holistic wellbeing. Since 2020, Joanna has been helping clients feel more confident through personalised treatments designed to enhance natural beauty in a safe and professional environment.",
        "Joanna holds accredited certifications across a wide range of aesthetic and skin treatments and is currently completing Level 4, 5 and 7 Aesthetics qualifications, alongside a Diploma in Nutrition.",
        "Combining advanced aesthetic treatments with a holistic wellness approach, With Joanna Beauty focuses on confidence, balance, skin health and long-term results.",
      ],
      treatmentsTitle: "Treatments",
      treatmentsIntro:
        "A curated selection of aesthetic, skin, body and beauty treatments designed to support natural-looking results and confidence.",
      nutritionTitle: "Nutrition & Wellness",
      nutritionIntro:
        "A holistic approach to beauty and wellbeing, supporting confidence, healthy lifestyle habits and wellness from within.",
      nutritionItems: [
        "Skin & Gut Health",
        "Women’s Wellness",
        "Healthy Lifestyle Support",
        "Weight Management Guidance",
      ],
      nutritionText:
        "Personalised wellness-focused support tailored to your goals and lifestyle.",
      packagesTitle: "Packages",
      packageItems: [
        "Glow Package",
        "Skin & Wellness Package",
        "Confidence Package",
      ],
      packageText: "Personalised support designed around your goals.",
      faqTitle: "FAQ",
      faqs: [
        [
          "How many treatments will I need?",
          "Every client is different, which is why treatment plans are always personalised. Some clients notice visible improvements after just one session, while others may benefit from a course of treatments depending on their skin goals, concerns and desired results.",
        ],
        [
          "Is there downtime?",
          "Downtime depends on the treatment chosen. Many treatments involve little to no downtime, while more advanced procedures such as RF Microneedling or PRP may require a short recovery period. Full aftercare guidance is always provided to support healing and results.",
        ],
        [
          "Are consultations available?",
          "Yes — consultations are available to discuss your goals, skin concerns and the most suitable treatment options for you. A personalised approach is always taken to ensure treatments are safe, comfortable and tailored to your individual needs.",
        ],
        [
          "Are treatments personalised?",
          "Absolutely. Every treatment is tailored to your skin type, concerns and desired outcome. The focus is always on natural-looking, balanced results that help you feel confident and comfortable in your own skin.",
        ],
      ],
      contactTitle: "Book Your Consultation",
      contactText:
        "Contact via WhatsApp to ask a question or arrange a consultation.",
      treatmentCategories: [
        {
          title: "Aesthetic Injectables & Skin Regeneration",
          items: [
            ["Anti-Wrinkle Injections", "from £100"],
            ["RF Microneedling", "from £200"],
            ["Skin Rejuvenation Mesotherapy", "from £170"],
            ["Under Eye Mesotherapy", "from £100"],
            ["PRP Vampire Facial", "from £220"],
            ["PRF Advanced Regeneration", "from £120"],
            ["Medical Microneedling Therapy", "from £100"],
          ],
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
            ["Non-Needle Glow Mesotherapy", "from £70"],
          ],
        },
        {
          title: "Hair Restoration",
          items: [["PRP Hair Restoration Therapy", "from £220"]],
        },
        {
          title: "Body Contouring & Wellness",
          items: [
            ["Body Pressure Therapy", "£50"],
            ["Body Microdermabrasion Treatment", "£70"],
          ],
        },
        {
          title: "Brows & Beauty",
          items: [
            ["Luxury Brow Tint", "from £25"],
            ["Powder Henna Brows", "£35"],
          ],
        },
      ],
    },

    pl: {
      nav: {
        home: "Start",
        about: "O mnie",
        treatments: "Zabiegi",
        nutrition: "Dietetyka",
        packages: "Pakiety",
        faq: "FAQ",
        contact: "Kontakt",
      },
      heroTitle: "Naturalne piękno. Nowoczesna estetyka. Indywidualna opieka.",
      heroText:
        "Premium zabiegi estetyczne, pielęgnacja skóry i wsparcie dietetyczne dopasowane do Twojej naturalnej pewności siebie.",
      consultation: "Umów konsultację",
      whatsapp: "WhatsApp",
      aboutTitle: "O Joannie",
      aboutParagraphs: [
        "With Joanna Beauty powstało z pasji do estetyki, zdrowia skóry i holistycznego podejścia do dobrego samopoczucia. Od 2020 roku Joanna pomaga klientkom i klientom czuć się pewniej dzięki indywidualnie dobranym zabiegom podkreślającym naturalne piękno.",
        "Joanna posiada akredytowane certyfikaty z wielu zabiegów estetycznych i pielęgnacyjnych oraz kontynuuje kwalifikacje Aesthetics Level 4, 5 i 7, a także Diploma in Nutrition.",
        "Łącząc zaawansowane zabiegi estetyczne z podejściem wellness, With Joanna Beauty skupia się na pewności siebie, równowadze, zdrowiu skóry i długotrwałych efektach.",
      ],
      treatmentsTitle: "Zabiegi",
      treatmentsIntro:
        "Starannie dobrana oferta zabiegów estetycznych, pielęgnacyjnych, body i beauty wspierających naturalne efekty oraz pewność siebie.",
      nutritionTitle: "Dietetyka i wellness",
      nutritionIntro:
        "Holistyczne podejście do piękna i samopoczucia — wsparcie zdrowych nawyków, pewności siebie i wellness od środka.",
      nutritionItems: [
        "Zdrowie skóry i jelit",
        "Wellness dla kobiet",
        "Wsparcie zdrowego stylu życia",
        "Wsparcie w kontroli masy ciała",
      ],
      nutritionText:
        "Indywidualne wsparcie wellness dopasowane do Twoich celów i stylu życia.",
      packagesTitle: "Pakiety",
      packageItems: [
        "Pakiet Glow",
        "Pakiet Skin & Wellness",
        "Pakiet Confidence",
      ],
      packageText: "Indywidualne wsparcie dopasowane do Twoich celów.",
      faqTitle: "FAQ",
      faqs: [
        [
          "Ile zabiegów będę potrzebować?",
          "Każda osoba jest inna, dlatego plan zabiegowy jest zawsze dobierany indywidualnie. Niektóre efekty mogą być widoczne już po jednej wizycie, a w innych przypadkach najlepsze rezultaty daje seria zabiegów.",
        ],
        [
          "Czy po zabiegu jest czas rekonwalescencji?",
          "To zależy od rodzaju zabiegu. Wiele procedur ma krótki lub minimalny czas rekonwalescencji, natomiast bardziej zaawansowane zabiegi, takie jak RF Microneedling lub PRP, mogą wymagać kilku dni regeneracji.",
        ],
        [
          "Czy dostępne są konsultacje?",
          "Tak — konsultacje pozwalają omówić Twoje cele, potrzeby skóry i najlepsze opcje zabiegowe. Podejście jest zawsze indywidualne, bezpieczne i dopasowane do Ciebie.",
        ],
        [
          "Czy zabiegi są personalizowane?",
          "Tak. Każdy zabieg jest dobierany do typu skóry, potrzeb i oczekiwanego efektu. Celem są naturalne, harmonijne rezultaty.",
        ],
      ],
      contactTitle: "Umów konsultację",
      contactText:
        "Skontaktuj się przez WhatsApp, aby zadać pytanie lub umówić konsultację.",
      treatmentCategories: [
        {
          title: "Iniekcje estetyczne i regeneracja skóry",
          items: [
            ["Anti-Wrinkle Injections", "od £100"],
            ["RF Microneedling", "od £200"],
            ["Mezoterapia regenerująca skórę", "od £170"],
            ["Mezoterapia okolicy oka", "od £100"],
            ["PRP Vampire Facial", "od £220"],
            ["PRF Advanced Regeneration", "od £120"],
            ["Mikronakłuwanie medyczne", "od £100"],
          ],
        },
        {
          title: "Zabiegi na skórę i twarz",
          items: [
            ["Diamond Glow Microdermabrasion", "od £60"],
            ["Wodorowe oczyszczanie skóry", "od £90"],
            ["Zaawansowane peelingi chemiczne", "od £75"],
            ["Peeling kawitacyjny", "od £30"],
            ["Głębokie oczyszczanie porów", "od £55"],
            ["Terapia czynnikami wzrostu", "od £80"],
            ["Mezoterapia bezigłowa glow", "od £70"],
          ],
        },
        {
          title: "Regeneracja włosów",
          items: [["PRP Hair Restoration Therapy", "od £220"]],
        },
        {
          title: "Modelowanie ciała i wellness",
          items: [
            ["Body Pressure Therapy", "£50"],
            ["Body Microdermabrasion Treatment", "£70"],
          ],
        },
        {
          title: "Brwi i beauty",
          items: [
            ["Luxury Brow Tint", "od £25"],
            ["Powder Henna Brows", "£35"],
          ],
        },
      ],
    },
  };

  const c = content[lang];

  return (
    <main style={styles.page}>
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <strong style={{ color: "#d4af37", fontSize: 20 }}>
          With Joanna Beauty
        </strong>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
          <a style={styles.link} href="#home">{c.nav.home}</a>
          <a style={styles.link} href="#about">{c.nav.about}</a>
          <a style={styles.link} href="#treatments">{c.nav.treatments}</a>
          <a style={styles.link} href="#nutrition">{c.nav.nutrition}</a>
          <a style={styles.link} href="#packages">{c.nav.packages}</a>
          <a style={styles.link} href="#faq">{c.nav.faq}</a>
          <a style={styles.link} href="#contact">{c.nav.contact}</a>

          <button
            onClick={() => setLang(lang === "en" ? "pl" : "en")}
            style={{
              border: "1px solid rgba(212,175,55,.5)",
              background: "rgba(212,175,55,.12)",
              color: "#f8f4ea",
              padding: "9px 14px",
              borderRadius: 999,
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            {lang === "en" ? "PL" : "EN"}
          </button>
        </div>
      </nav>

      <section id="home" style={{ ...styles.container, paddingTop: 90, paddingBottom: 90 }}>
        <p style={{ color: "#d4af37", letterSpacing: ".2em" }}>
          WITH JOANNA BEAUTY
        </p>

        <h1 style={{ fontFamily: "Georgia, serif", fontSize: 58, maxWidth: 850 }}>
          {c.heroTitle}
        </h1>

        <p style={{ fontSize: 20, lineHeight: 1.8, maxWidth: 760 }}>
          {c.heroText}
        </p>

        <div style={{ display: "flex", gap: 16, marginTop: 30, flexWrap: "wrap" }}>
          <a href="#contact" style={styles.button}>
            {c.consultation}
          </a>

          <a
            href="https://wa.me/447492828818?text=Hi%20Joanna,%20I%20would%20like%20to%20book%20a%20consultation."
            target="_blank"
            rel="noreferrer"
            style={styles.button}
          >
            {c.whatsapp}
          </a>
        </div>
      </section>

      <section id="about" style={styles.container}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 42, marginBottom: 24 }}>
          {c.aboutTitle}
        </h2>

        <div style={{ ...styles.card, maxWidth: 900 }}>
          {c.aboutParagraphs.map((text) => (
            <p
              key={text}
              style={{
                fontSize: 18,
                lineHeight: 1.9,
                color: "rgba(255,255,255,.82)",
                marginTop: 0,
              }}
            >
              {text}
            </p>
          ))}
        </div>
      </section>

      <TreatmentSection title={c.treatmentsTitle} intro={c.treatmentsIntro} categories={c.treatmentCategories} />

      <section id="nutrition" style={styles.container}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 42, marginBottom: 18 }}>
          {c.nutritionTitle}
        </h2>

        <p style={{ fontSize: 18, lineHeight: 1.8, maxWidth: 760, color: "rgba(255,255,255,.72)", marginBottom: 34 }}>
          {c.nutritionIntro}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 22 }}>
          {c.nutritionItems.map((item) => (
            <div key={item} style={styles.card}>
              <h3 style={{ fontSize: 24, marginBottom: 12, fontFamily: "Georgia, serif" }}>
                {item}
              </h3>
              <p style={{ color: "rgba(255,255,255,.72)", lineHeight: 1.7 }}>
                {c.nutritionText}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Cards id="packages" title={c.packagesTitle} items={c.packageItems} text={c.packageText} />

      <section id="faq" style={styles.container}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 42 }}>
          {c.faqTitle}
        </h2>

        {c.faqs.map(([question, answer]) => (
          <div key={question} style={{ ...styles.card, marginTop: 22 }}>
            <h3 style={{ fontSize: 22, marginBottom: 12 }}>
              {question}
            </h3>
            <p style={{ color: "rgba(255,255,255,.72)", lineHeight: 1.8 }}>
              {answer}
            </p>
          </div>
        ))}
      </section>
<section
  style={{
    maxWidth: 1100,
    margin: "0 auto",
    padding: "60px 24px",
  }}
>
  <div
    style={{
      background: "rgba(255,255,255,.05)",
      border: "1px solid rgba(212,175,55,.18)",
      borderRadius: 32,
      padding: 40,
      textAlign: "center",
    }}
  >
    <p
      style={{
        color: "#d4af37",
        letterSpacing: ".18em",
        marginBottom: 12,
      }}
    >
      INSTAGRAM
    </p>

    <h2
      style={{
        fontFamily: "Georgia, serif",
        fontSize: 42,
        marginBottom: 18,
      }}
    >
      Follow With Joanna Beauty
    </h2>

    <p
      style={{
        maxWidth: 700,
        margin: "0 auto",
        lineHeight: 1.8,
        color: "rgba(255,255,255,.72)",
        fontSize: 18,
      }}
    >
      Follow for aesthetic treatments, skin confidence, wellness inspiration
      and behind-the-scenes content from With Joanna Beauty.
    </p>

    <a
      href="https://instagram.com/"
      target="_blank"
      rel="noreferrer"
      style={{
        display: "inline-block",
        marginTop: 30,
        padding: "14px 28px",
        borderRadius: 999,
        border: "1px solid rgba(212,175,55,.4)",
        background: "rgba(212,175,55,.12)",
        color: "#f8f4ea",
        textDecoration: "none",
        fontWeight: 700,
      }}
    >
      @withjoannabeauty
    </a>
  </div>
</section>
      <section id="contact" style={styles.container}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 42 }}>
          {c.contactTitle}
        </h2>

        <p style={{ fontSize: 18, lineHeight: 1.8, maxWidth: 760, color: "rgba(255,255,255,.78)" }}>
          {c.contactText}
        </p>

        <a
          href="https://wa.me/"
          target="_blank"
          rel="noreferrer"
          style={{ ...styles.button, marginTop: 20 }}
        >
          {c.whatsapp}
        </a>
      </section>
    </main>
  );
}

function TreatmentSection({ title, intro, categories }) {
  return (
    <section id="treatments" style={styles.container}>
      <h2 style={{ fontFamily: "Georgia, serif", fontSize: 42 }}>
        {title}
      </h2>

      <p style={{ fontSize: 18, lineHeight: 1.8, maxWidth: 760, color: "rgba(255,255,255,.72)" }}>
        {intro}
      </p>

      {categories.map((category) => (
        <div key={category.title} style={{ marginTop: 42 }}>
          <h3 style={{ color: "#d4af37", fontSize: 24, marginBottom: 18 }}>
            {category.title}
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 22 }}>
            {category.items.map(([name, price]) => (
              <div key={name} style={{ ...styles.card, padding: 26 }}>
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

function Cards({ id, title, items, text }) {
  return (
    <section id={id} style={styles.container}>
      <h2 style={{ fontFamily: "Georgia, serif", fontSize: 42 }}>
        {title}
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 22 }}>
        {items.map((item) => (
          <div key={item} style={styles.card}>
            <h3>{item}</h3>
            <p style={{ color: "rgba(255,255,255,.72)", lineHeight: 1.7 }}>
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
