"use client";

import { useMemo, useState } from "react";

const content = {
  en: {
    brand: "With Joanna Beauty",
    location: "Rochdale",
    tagline: "Natural luxury for real women",
    nav: ["Home", "Treatments", "Packages", "Shop", "Blog", "About", "Contact"],
    heroTitle: "Natural beauty, advanced aesthetics, real confidence.",
    heroText:
      "Premium skin and aesthetic treatments in Rochdale, created for women who want visible results, personal care, and an elegant experience without the intimidating clinic feel.",
    heroPrimary: "Book Appointment",
    heroSecondary: "Message on WhatsApp",
    heroPoints: ["Skin-first approach", "Premium, approachable care", "Based in Rochdale"],
    focusLabel: "Signature focus",
    focusTitle: "Hydro Facial, RF Microneedling, PRP / PRF",
    focusText:
      "The website is structured to highlight your most desirable treatments first, while still keeping the wider offer beautifully organised for trust, bookings, and future growth.",
    pricingTitle: "Premium strategy with visible pricing",
    pricingText:
      "Pricing is shown in a refined, confidence-building way: premium enough to support your brand, clear enough that clients still feel comfortable booking.",
    treatmentsLabel: "Treatments",
    treatmentsTitle: "Advanced treatments with a natural-luxury feel",
    treatmentsText:
      "Your offer is organised by outcomes clients care about: glow, rejuvenation, anti-ageing, skin health, and confidence.",
    treatmentsBtn: "View details",
    packagesLabel: "Packages",
    packagesTitle: "Signature treatment journeys",
    packagesText:
      "Packages increase trust and booking value by helping clients buy a clear result instead of just a single appointment.",
    shopLabel: "Shop",
    shopTitle: "Skincare and aftercare ready for online sales",
    shopText:
      "The shop area is prepared for future product sales with card payments and PayPal, including skincare, post-treatment aftercare, and curated sets.",
    blogLabel: "Blog",
    blogTitle: "Content that helps clients trust you and find you on Google",
    blogText:
      "This layout includes a blog system structure so you can later add articles yourself and build authority around treatments, aftercare, and skin education.",
    aboutLabel: "About Joanna",
    aboutTitle: "Personal care, advanced training, visible results",
    aboutText:
      "With Joanna Beauty is built around natural-looking results, trusted client care, and advanced aesthetic treatments delivered in a calm, elegant, and welcoming way.",
    qualifications: "Ongoing qualifications in aesthetics and dietetics strengthen trust and future growth.",
    bookingLabel: "Booking",
    bookingTitle: "Book online or message directly",
    bookingText:
      "Fresha can be connected next month for online booking, confirmations, and reminders. Until then, WhatsApp works as a direct contact option.",
    fresha: "Book via Fresha",
    contactTitle: "Let’s create your best skin plan",
    contactText: "Use WhatsApp for quick enquiries, or keep the contact form on the site for new leads.",
    formName: "Your name",
    formEmail: "Email",
    formMessage: "Message",
    formBtn: "Send enquiry",
    footerTag: "Premium skin and aesthetic treatments",
    more: "Learn more",
    blogRead: "Read article",
    packages: [
      {
        title: "Glow Skin Package",
        price: "from £95",
        desc: "Ideal for clients who want hydration, brightness, and refreshed skin with a luxurious but approachable feel.",
      },
      {
        title: "Anti-Age Premium",
        price: "from £180",
        desc: "A results-focused combination designed to support firmer, smoother, healthier-looking skin.",
      },
      {
        title: "Skin Transformation Program",
        price: "from £320",
        desc: "A personalised multi-session treatment journey for clients committed to long-term improvement.",
      },
    ],
    shop: [
      { title: "Post-Treatment Essentials", price: "£34", desc: "Gentle support for recovery and skin comfort after advanced treatments." },
      { title: "Glow Homecare Set", price: "£49", desc: "A curated routine to maintain hydration, radiance, and smoother-looking skin." },
      { title: "Daily SPF & Skin Protection", price: "£22", desc: "A future-ready product slot for sun protection and healthy skin maintenance." },
    ],
    treatments: [
      {
        slug: "rf-microneedling",
        title: "RF Microneedling",
        price: "from £140",
        short: "Lift, refine texture, and support firmer-looking skin.",
        full: "A premium skin tightening treatment that supports skin firmness, texture refinement, and visible rejuvenation. Ideal for clients looking for advanced results without surgery.",
        category: "Skin Rejuvenation",
      },
      {
        slug: "prp-prf",
        title: "PRP / PRF",
        price: "from £120",
        short: "Natural regeneration and healthier-looking skin.",
        full: "Natural regenerative treatments designed to support skin renewal, improve glow, and encourage a fresher, healthier appearance using the body's own regenerative properties.",
        category: "Skin Rejuvenation",
      },
      {
        slug: "hydro-facial",
        title: "Hydro Facial",
        price: "from £75",
        short: "Deep cleansing, hydration, and instant glow.",
        full: "One of your hero services. This treatment deeply cleanses, exfoliates, hydrates, and refreshes the skin, making it ideal for dull, congested, or tired complexions.",
        category: "Glow & Facials",
      },
      {
        slug: "chemical-peels",
        title: "Chemical Peels",
        price: "from £70",
        short: "Refine tone, texture, and skin clarity.",
        full: "Target uneven tone, congestion, blemishes, and dull skin through carefully selected peel treatments tailored to skin needs and confidence level.",
        category: "Glow & Facials",
      },
      {
        slug: "mesotherapy",
        title: "Mesotherapy",
        price: "from £95",
        short: "Targeted hydration and revitalisation.",
        full: "A revitalising treatment designed to support deeper hydration and nourishment for skin that feels dull, tired, or in need of a fresh boost.",
        category: "Skin Rejuvenation",
      },
      {
        slug: "led-therapy",
        title: "LED Therapy",
        price: "from £35",
        short: "Calm, support, and enhance recovery.",
        full: "A gentle standalone or add-on treatment used to calm the skin, support healing, and complement other facial procedures.",
        category: "Glow & Facials",
      },
      {
        slug: "pressotherapy",
        title: "Pressotherapy",
        price: "from £60",
        short: "Body detox, drainage, and lighter-feeling legs.",
        full: "A body-focused treatment supporting circulation, drainage, and comfort. Popular with clients seeking a lighter, refreshed body feel.",
        category: "Body & Detox",
      },
      {
        slug: "needle-free-carboxytherapy",
        title: "Needle-Free Carboxytherapy",
        price: "from £65",
        short: "Support skin vitality with a non-invasive approach.",
        full: "A non-invasive treatment used to support circulation, skin vitality, and an energised appearance with a comfortable treatment experience.",
        category: "Body & Detox",
      },
      {
        slug: "botox",
        title: "Botox",
        price: "from consultation",
        short: "A refined anti-wrinkle option with a professional approach.",
        full: "A carefully delivered anti-wrinkle treatment for clients seeking a fresher, smoother, and more rested appearance in a premium but approachable setting.",
        category: "Aesthetics",
      },
    ],
    blogPosts: [
      {
        title: "Is RF Microneedling worth it?",
        excerpt: "What the treatment does, who it suits, and why it remains one of the strongest skin rejuvenation options.",
        tag: "RF Microneedling",
      },
      {
        title: "Hydro Facial benefits for dull skin",
        excerpt: "Why this treatment is ideal for glow, cleansing, and that fresh-skin look clients love.",
        tag: "Hydro Facial",
      },
      {
        title: "How to prepare for your aesthetic appointment",
        excerpt: "A practical guide to feeling confident, informed, and ready before your visit.",
        tag: "Client Education",
      },
    ],
  },
  pl: {
    brand: "With Joanna Beauty",
    location: "Rochdale",
    tagline: "Naturalny luksus dla prawdziwych kobiet",
    nav: ["Start", "Zabiegi", "Pakiety", "Sklep", "Blog", "O mnie", "Kontakt"],
    heroTitle: "Naturalne piękno, nowoczesna estetyka, prawdziwa pewność siebie.",
    heroText:
      "Premium zabiegi pielęgnacyjne i estetyczne w Rochdale stworzone dla kobiet, które chcą widocznych efektów, indywidualnej opieki i eleganckiego doświadczenia bez chłodnego klimatu kliniki.",
    heroPrimary: "Umów wizytę",
    heroSecondary: "Napisz na WhatsApp",
    heroPoints: ["Podejście skin-first", "Premium, ale przystępnie", "Rochdale"],
    focusLabel: "Główny fokus",
    focusTitle: "Hydro Facial, RF Microneedling, PRP / PRF",
    focusText:
      "Strona jest ułożona tak, aby najpierw promować Twoje najmocniejsze zabiegi, a jednocześnie pięknie porządkować całą ofertę pod zaufanie, rezerwacje i dalszy rozwój.",
    pricingTitle: "Strategia premium z widocznym cennikiem",
    pricingText:
      "Ceny są pokazane w elegancki i budujący zaufanie sposób: wystarczająco premium dla marki, ale nadal komfortowe dla klientki gotowej zarezerwować zabieg.",
    treatmentsLabel: "Zabiegi",
    treatmentsTitle: "Zaawansowane zabiegi w naturalno-luksusowym stylu",
    treatmentsText:
      "Oferta jest uporządkowana według efektów, na których zależy klientkom: glow, odmłodzenie, anti-ageing, zdrowa skóra i większa pewność siebie.",
    treatmentsBtn: "Zobacz szczegóły",
    packagesLabel: "Pakiety",
    packagesTitle: "Autorskie ścieżki zabiegowe",
    packagesText:
      "Pakiety zwiększają wartość rezerwacji, bo pomagają klientkom kupować rezultat, a nie tylko pojedynczą wizytę.",
    shopLabel: "Sklep",
    shopTitle: "Pielęgnacja i aftercare gotowe pod sprzedaż online",
    shopText:
      "Sekcja sklepu jest przygotowana pod przyszłą sprzedaż produktów z płatnościami kartą i PayPal, w tym skincare, aftercare pozabiegowy i gotowe zestawy.",
    blogLabel: "Blog",
    blogTitle: "Treści, które budują zaufanie i pomagają znaleźć Cię w Google",
    blogText:
      "Ten układ zawiera strukturę bloga, dzięki której później będziesz mogła samodzielnie dodawać artykuły i budować ekspercki wizerunek wokół zabiegów, pielęgnacji i edukacji skóry.",
    aboutLabel: "O Joannie",
    aboutTitle: "Indywidualna opieka, rozwój zawodowy, widoczne efekty",
    aboutText:
      "With Joanna Beauty buduje się wokół naturalnych efektów, zaufania klientek i zaawansowanych zabiegów estetycznych podanych w spokojny, elegancki i ciepły sposób.",
    qualifications: "Rozwijane kwalifikacje z estetyki i dietetyki wzmacniają wiarygodność marki i jej dalszy rozwój.",
    bookingLabel: "Rezerwacje",
    bookingTitle: "Rezerwuj online albo napisz bezpośrednio",
    bookingText:
      "W następnym miesiącu możesz podłączyć Fresha do rezerwacji online, potwierdzeń i przypomnień. Do tego czasu WhatsApp działa jako bezpośredni kontakt.",
    fresha: "Rezerwuj przez Fresha",
    contactTitle: "Stwórzmy plan dla Twojej skóry",
    contactText: "Używaj WhatsAppa do szybkich pytań albo formularza kontaktowego na stronie do pozyskiwania nowych klientek.",
    formName: "Twoje imię",
    formEmail: "Email",
    formMessage: "Wiadomość",
    formBtn: "Wyślij zapytanie",
    footerTag: "Premium zabiegi pielęgnacyjne i estetyczne",
    more: "Dowiedz się więcej",
    blogRead: "Czytaj artykuł",
    packages: [
      {
        title: "Glow Skin Package",
        price: "od £95",
        desc: "Idealny dla klientek, które chcą nawilżenia, rozświetlenia i świeższej skóry w luksusowej, ale przystępnej formule.",
      },
      {
        title: "Anti-Age Premium",
        price: "od £180",
        desc: "Skoncentrowane połączenie zabiegów wspierające jędrniejszą, gładszą i zdrowiej wyglądającą skórę.",
      },
      {
        title: "Skin Transformation Program",
        price: "od £320",
        desc: "Spersonalizowana ścieżka kilku wizyt dla klientek nastawionych na długoterminową poprawę skóry.",
      },
    ],
    shop: [
      { title: "Post-Treatment Essentials", price: "£34", desc: "Delikatne wsparcie regeneracji i komfortu skóry po bardziej zaawansowanych zabiegach." },
      { title: "Glow Homecare Set", price: "£49", desc: "Ułożona rutyna do podtrzymania nawilżenia, glow i gładszego wyglądu skóry." },
      { title: "Daily SPF & Skin Protection", price: "£22", desc: "Przyszłe miejsce na ochronę przeciwsłoneczną i codzienne wsparcie zdrowej skóry." },
    ],
    treatments: [
      {
        slug: "rf-microneedling",
        title: "RF Microneedling",
        price: "od £140",
        short: "Lifting, poprawa tekstury i wsparcie jędrniejszego wyglądu skóry.",
        full: "Zaawansowany zabieg ujędrniający, który wspiera napięcie skóry, poprawę struktury i widoczne odmłodzenie. Idealny dla klientek szukających mocniejszych efektów bez chirurgii.",
        category: "Odmłodzenie skóry",
      },
      {
        slug: "prp-prf",
        title: "PRP / PRF",
        price: "od £120",
        short: "Naturalna regeneracja i zdrowszy wygląd skóry.",
        full: "Naturalne zabiegi regeneracyjne wspierające odnowę skóry, poprawę glow i świeższy wygląd dzięki wykorzystaniu własnego potencjału regeneracyjnego organizmu.",
        category: "Odmłodzenie skóry",
      },
      {
        slug: "hydro-facial",
        title: "Hydro Facial",
        price: "od £75",
        short: "Dogłębne oczyszczanie, nawilżenie i instant glow.",
        full: "Jeden z Twoich głównych zabiegów. Głęboko oczyszcza, złuszcza, nawilża i odświeża skórę, dlatego świetnie sprawdza się przy cerze zmęczonej, zanieczyszczonej lub poszarzałej.",
        category: "Glow i faciale",
      },
      {
        slug: "chemical-peels",
        title: "Peelingi chemiczne",
        price: "od £70",
        short: "Wyrównanie kolorytu, tekstury i czystości skóry.",
        full: "Pomagają poprawić nierówny koloryt, zaskórniki, niedoskonałości i matowy wygląd skóry dzięki odpowiednio dobranym peelingom dopasowanym do potrzeb cery.",
        category: "Glow i faciale",
      },
      {
        slug: "mesotherapy",
        title: "Mezoterapia",
        price: "od £95",
        short: "Celowane nawilżenie i rewitalizacja.",
        full: "Zabieg rewitalizujący wspierający głębsze nawilżenie i odżywienie skóry, która wygląda na zmęczoną, poszarzałą albo potrzebuje świeżego impulsu.",
        category: "Odmłodzenie skóry",
      },
      {
        slug: "led-therapy",
        title: "LED Therapy",
        price: "od £35",
        short: "Wyciszenie, wsparcie i lepsza regeneracja.",
        full: "Delikatny zabieg samodzielny lub dodatek do innych procedur, który wspiera wyciszenie skóry, gojenie i ogólny komfort cery.",
        category: "Glow i faciale",
      },
      {
        slug: "pressotherapy",
        title: "Presoterapia",
        price: "od £60",
        short: "Detoks ciała, drenaż i uczucie lekkości.",
        full: "Zabieg na ciało wspierający krążenie, drenaż i komfort. Popularny wśród klientek, które chcą poczuć lekkość i odświeżenie.",
        category: "Body i detoks",
      },
      {
        slug: "needle-free-carboxytherapy",
        title: "Karboksyterapia bezigłowa",
        price: "od £65",
        short: "Wsparcie witalności skóry w nieinwazyjnej formie.",
        full: "Nieinwazyjny zabieg wspierający mikrokrążenie, witalność skóry i bardziej ożywiony wygląd przy komfortowym przebiegu zabiegu.",
        category: "Body i detoks",
      },
      {
        slug: "botox",
        title: "Botox",
        price: "od konsultacji",
        short: "Dopracowana opcja anti-wrinkle w profesjonalnym stylu.",
        full: "Starannie wykonywany zabieg anti-wrinkle dla klientek, które chcą świeższego, bardziej wypoczętego i gładszego wyglądu w premium, ale przyjaznym otoczeniu.",
        category: "Estetyka",
      },
    ],
    blogPosts: [
      {
        title: "Czy RF Microneedling naprawdę działa?",
        excerpt: "Co robi ten zabieg, dla kogo jest najlepszy i dlaczego nadal jest jedną z najmocniejszych opcji odmłodzenia skóry.",
        tag: "RF Microneedling",
      },
      {
        title: "Hydro Facial — korzyści dla poszarzałej skóry",
        excerpt: "Dlaczego ten zabieg świetnie sprawdza się przy glow, oczyszczaniu i świeżym wyglądzie skóry.",
        tag: "Hydro Facial",
      },
      {
        title: "Jak przygotować się do wizyty estetycznej",
        excerpt: "Praktyczny przewodnik, dzięki któremu klientka czuje się pewnie i wie, czego się spodziewać.",
        tag: "Edukacja klientki",
      },
    ],
  },
} as const;

const whatsappLink =
  "https://wa.me/447492828818?text=Hi%20Joanna%20%F0%9F%8C%B8%20I%E2%80%99d%20like%20to%20book%20a%20treatment.";

export default function Page() {
  const [lang, setLang] = useState<"en" | "pl">("en");
  const [selectedTreatment, setSelectedTreatment] = useState("rf-microneedling");
  const c = content[lang];

  const activeTreatment = useMemo(
    () => c.treatments.find((t) => t.slug === selectedTreatment) ?? c.treatments[0],
    [c, selectedTreatment]
  );

  return (
    <main>
      <nav className="nav">
        <div className="container nav-inner">
          <div>
            <div className="brand">{c.brand}</div>
            <div className="subbrand">{c.location}</div>
          </div>
          <div className="nav-links">
            <a href="#home">{c.nav[0]}</a>
            <a href="#treatments">{c.nav[1]}</a>
            <a href="#packages">{c.nav[2]}</a>
            <a href="#shop">{c.nav[3]}</a>
            <a href="#blog">{c.nav[4]}</a>
            <a href="#about">{c.nav[5]}</a>
            <a href="#contact">{c.nav[6]}</a>
          </div>
          <div className="lang">
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
            <button className={lang === "pl" ? "active" : ""} onClick={() => setLang("pl")}>PL</button>
          </div>
        </div>
      </nav>

      <section id="home" className="container hero">
        <div>
          <div className="badge">{c.tagline}</div>
          <h1>{c.heroTitle}</h1>
          <p>{c.heroText}</p>
          <div className="btn-row">
            <a className="btn" href="#booking">{c.heroPrimary}</a>
            <a className="btn secondary" href={whatsappLink} target="_blank">{c.heroSecondary}</a>
          </div>
          <div className="info-grid">
            {c.heroPoints.map((item) => (
              <div className="info-box" key={item}>{item}</div>
            ))}
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-panel-inner">
            <div className="section-kicker">{c.focusLabel}</div>
            <h2 className="section-title" style={{fontSize: 36}}>{c.focusTitle}</h2>
            <p className="section-text">{c.focusText}</p>
            <div className="card" style={{padding: 20, marginTop: 24, border: "1px dashed rgba(139,106,66,.4)"}}>
              <div style={{fontWeight: 700}}>{c.pricingTitle}</div>
              <p style={{marginBottom: 0}}>{c.pricingText}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="treatments" className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">{c.treatmentsLabel}</div>
            <h2 className="section-title">{c.treatmentsTitle}</h2>
            <p className="section-text">{c.treatmentsText}</p>
          </div>

          <div className="treatments-layout">
            <div className="card-grid">
              {c.treatments.map((t) => (
                <button
                  key={t.slug}
                  className={`feature-card ${selectedTreatment === t.slug ? "active" : ""}`}
                  onClick={() => setSelectedTreatment(t.slug)}
                >
                  <div style={{display:"flex", justifyContent:"space-between", gap:12, alignItems:"center"}}>
                    <span className="small-tag">{t.category}</span>
                    <span className="price">{t.price}</span>
                  </div>
                  <h3 style={{fontSize: 26, marginBottom: 8}}>{t.title}</h3>
                  <p style={{margin:0}}>{t.short}</p>
                  <div style={{marginTop: 16, fontWeight: 700}}>{c.treatmentsBtn} →</div>
                </button>
              ))}
            </div>

            <div className="detail-card">
              <span className="small-tag">{activeTreatment.category}</span>
              <h3 style={{fontSize: 38, marginBottom: 8}}>{activeTreatment.title}</h3>
              <div className="price" style={{fontSize: 16}}>{activeTreatment.price}</div>
              <p>{activeTreatment.full}</p>
              <div className="btn-row">
                <a className="btn" href="#booking">{c.heroPrimary}</a>
                <a className="btn secondary" href={whatsappLink} target="_blank">{c.more}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="section alt-bg">
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">{c.packagesLabel}</div>
            <h2 className="section-title">{c.packagesTitle}</h2>
            <p className="section-text">{c.packagesText}</p>
          </div>
          <div className="packages-grid">
            {c.packages.map((p) => (
              <div className="package-card" key={p.title}>
                <div style={{display:"flex", justifyContent:"space-between", gap:12, alignItems:"center"}}>
                  <h3 style={{fontSize: 30, margin: 0}}>{p.title}</h3>
                  <span className="price">{p.price}</span>
                </div>
                <p>{p.desc}</p>
                <div style={{fontWeight:700}}>{c.heroPrimary} →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">{c.shopLabel}</div>
            <h2 className="section-title">{c.shopTitle}</h2>
            <p className="section-text">{c.shopText}</p>
          </div>
          <div className="shop-grid">
            {c.shop.map((item) => (
              <div className="shop-card" key={item.title}>
                <div className="shop-image">🛍️</div>
                <div style={{display:"flex", justifyContent:"space-between", gap:12, alignItems:"center", marginTop:16}}>
                  <h3 style={{fontSize: 24, margin: 0}}>{item.title}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="section alt-bg">
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">{c.blogLabel}</div>
            <h2 className="section-title">{c.blogTitle}</h2>
            <p className="section-text">{c.blogText}</p>
          </div>
          <div className="blog-grid">
            {c.blogPosts.map((post) => (
              <div className="blog-card" key={post.title}>
                <span className="small-tag">{post.tag}</span>
                <h3 style={{fontSize: 24}}>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div style={{fontWeight:700}}>{c.blogRead} →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container about-center">
          <div className="section-kicker">{c.aboutLabel}</div>
          <h2 className="section-title">{c.aboutTitle}</h2>
          <p className="section-text">{c.aboutText}</p>
          <div className="trust-grid" style={{marginTop: 26}}>
            <div className="trust-item info-box">Aesthetics</div>
            <div className="trust-item info-box">EN / PL</div>
            <div className="trust-item info-box">{c.qualifications}</div>
          </div>
        </div>
      </section>

      <section id="booking" className="section booking">
        <div className="container section-head">
          <div className="section-kicker">{c.bookingLabel}</div>
          <h2 className="section-title">{c.bookingTitle}</h2>
          <p className="section-text">{c.bookingText}</p>
          <div className="btn-row" style={{justifyContent:"center"}}>
            <a className="btn" style={{background:"white", color:"black", borderColor:"white"}} href="https://www.fresha.com" target="_blank">{c.fresha}</a>
            <a className="btn secondary" style={{borderColor:"rgba(255,255,255,.3)", color:"white"}} href={whatsappLink} target="_blank">WhatsApp 07492 828818</a>
          </div>
          <div className="booking-chip">Fresha-ready booking section</div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contact-layout">
          <div className="contact-copy">
            <div className="section-kicker">{c.nav[6]}</div>
            <h2 className="section-title">{c.contactTitle}</h2>
            <p>{c.contactText}</p>
            <a href={whatsappLink} target="_blank">WhatsApp: 07492 828818</a>
            <a href="https://www.instagram.com/with_joanna20/" target="_blank">Instagram: @with_joanna20</a>
            <div>Rochdale</div>
          </div>

          <div className="contact-card" style={{padding: 24}}>
            <div className="form-grid">
              <input className="input" placeholder={c.formName} />
              <input className="input" placeholder={c.formEmail} />
              <textarea className="textarea" placeholder={c.formMessage} />
              <button className="btn" style={{width: "fit-content"}}>{c.formBtn}</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div style={{fontWeight:700, fontSize: 18}}>{c.brand}</div>
            <div style={{color:"#6b7280", marginTop: 6}}>{c.location} • {c.footerTag}</div>
          </div>
          <div className="footer-links">
            <a href={whatsappLink} target="_blank">WhatsApp</a>
            <a href="https://www.instagram.com/with_joanna20/" target="_blank">Instagram</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}