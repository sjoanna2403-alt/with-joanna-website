import React, { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Instagram,
  MessageCircle,
  MapPin,
  Sparkles,
  Clock3,
  BookOpen,
  ChevronRight,
  Globe,
  ShoppingBag,
  ShieldCheck,
  Star,
  Phone,
  Mail,
  CalendarDays,
} from "lucide-react";

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
    currency: "£",
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
    currency: "£",
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
};

const whatsappLink =
  "https://wa.me/447492828818?text=Hi%20Joanna%20%F0%9F%8C%B8%20I%E2%80%99d%20like%20to%20book%20a%20treatment.";

export default function WithJoanna() {
  const [lang, setLang] = useState("en");
  const [selectedTreatment, setSelectedTreatment] = useState("rf-microneedling");
  const c = content[lang];

  const activeTreatment = useMemo(
    () => c.treatments.find((t) => t.slug === selectedTreatment) ?? c.treatments[0],
    [c, selectedTreatment]
  );

  return (
    <div className="min-h-screen bg-[#f7f2ec] text-zinc-800">
      <nav className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f2ec]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xl font-semibold tracking-wide">{c.brand}</div>
            <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">{c.location}</div>
          </div>
          <div className="hidden gap-6 text-sm md:flex">
            <a href="#home" className="hover:text-black">{c.nav[0]}</a>
            <a href="#treatments" className="hover:text-black">{c.nav[1]}</a>
            <a href="#packages" className="hover:text-black">{c.nav[2]}</a>
            <a href="#shop" className="hover:text-black">{c.nav[3]}</a>
            <a href="#blog" className="hover:text-black">{c.nav[4]}</a>
            <a href="#about" className="hover:text-black">{c.nav[5]}</a>
            <a href="#contact" className="hover:text-black">{c.nav[6]}</a>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setLang("en")} className={`rounded-full px-3 py-1 text-xs ${lang === "en" ? "bg-black text-white" : "bg-white text-zinc-700"}`}>EN</button>
            <button onClick={() => setLang("pl")} className={`rounded-full px-3 py-1 text-xs ${lang === "pl" ? "bg-black text-white" : "bg-white text-zinc-700"}`}>PL</button>
          </div>
        </div>
      </nav>

      <section id="home" className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <div className="mb-4 inline-flex items-center rounded-full border border-[#c7ab7b]/40 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.25em] text-zinc-600">
            {c.tagline}
          </div>
          <h1 className="max-w-xl text-5xl font-light leading-tight md:text-6xl">{c.heroTitle}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">{c.heroText}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="rounded-2xl px-6 py-6 text-base"><a href="#booking">{c.heroPrimary}</a></Button>
            <Button variant="outline" className="rounded-2xl px-6 py-6 text-base"><a href={whatsappLink} target="_blank" rel="noreferrer">{c.heroSecondary}</a></Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm"><Sparkles className="mb-3 h-5 w-5" /><div className="text-sm font-medium">{c.heroPoints[0]}</div></div>
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm"><Clock3 className="mb-3 h-5 w-5" /><div className="text-sm font-medium">{c.heroPoints[1]}</div></div>
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm"><MapPin className="mb-3 h-5 w-5" /><div className="text-sm font-medium">{c.heroPoints[2]}</div></div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#d8c2a0]/50 bg-gradient-to-br from-white to-[#efe4d7] p-8 shadow-xl">
          <div className="rounded-[1.5rem] bg-[#fcfaf7] p-8">
            <div className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-500">{c.focusLabel}</div>
            <h2 className="text-3xl font-light">{c.focusTitle}</h2>
            <p className="mt-4 leading-7 text-zinc-600">{c.focusText}</p>
            <div className="mt-8 rounded-2xl border border-dashed border-[#c7ab7b]/50 bg-white p-5">
              <div className="text-sm font-medium">{c.pricingTitle}</div>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{c.pricingText}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="treatments" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-500">{c.treatmentsLabel}</div>
          <h2 className="text-4xl font-light">{c.treatmentsTitle}</h2>
          <p className="mt-4 leading-7 text-zinc-600">{c.treatmentsText}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 md:grid-cols-2">
            {c.treatments.map((t) => (
              <button
                key={t.slug}
                onClick={() => setSelectedTreatment(t.slug)}
                className={`rounded-[1.5rem] border p-6 text-left transition ${selectedTreatment === t.slug ? "border-[#b8905f] bg-white shadow-md" : "border-white/70 bg-white/70 hover:bg-white"}`}
              >
                <div className="mb-3 flex items-center justify-between gap-4">
                  <Badge variant="secondary" className="rounded-full bg-[#efe4d7] text-[#7b5c37]">{t.category}</Badge>
                  <span className="text-sm font-medium text-[#8b6a42]">{t.price}</span>
                </div>
                <h3 className="text-xl font-medium">{t.title}</h3>
                <p className="mt-2 leading-7 text-zinc-600">{t.short}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-800">
                  {c.treatmentsBtn} <ChevronRight className="h-4 w-4" />
                </div>
              </button>
            ))}
          </div>

          <Card className="sticky top-24 h-fit rounded-[2rem] border-white/70 bg-white shadow-sm">
            <CardContent className="p-8">
              <Badge className="mb-4 rounded-full bg-[#efe4d7] text-[#7b5c37] hover:bg-[#efe4d7]">{activeTreatment.category}</Badge>
              <h3 className="text-3xl font-light">{activeTreatment.title}</h3>
              <div className="mt-3 text-base font-medium text-[#8b6a42]">{activeTreatment.price}</div>
              <p className="mt-5 leading-8 text-zinc-600">{activeTreatment.full}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button className="rounded-2xl"><a href="#booking">{c.heroPrimary}</a></Button>
                <Button variant="outline" className="rounded-2xl"><a href={whatsappLink} target="_blank" rel="noreferrer">{c.more}</a></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="packages" className="bg-white/80 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-500">{c.packagesLabel}</div>
            <h2 className="text-4xl font-light">{c.packagesTitle}</h2>
            <p className="mt-4 leading-7 text-zinc-600">{c.packagesText}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {c.packages.map((p) => (
              <div key={p.title} className="rounded-[1.75rem] border border-[#d8c2a0]/40 bg-[#fcfaf7] p-7 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-light">{p.title}</h3>
                  <span className="text-sm font-medium text-[#8b6a42]">{p.price}</span>
                </div>
                <p className="mt-4 leading-7 text-zinc-600">{p.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                  {c.heroPrimary} <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-500">{c.shopLabel}</div>
          <h2 className="text-4xl font-light">{c.shopTitle}</h2>
          <p className="mt-4 leading-7 text-zinc-600">{c.shopText}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {c.shop.map((item) => (
            <Card key={item.title} className="rounded-[1.75rem] border-white/70 bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-40 items-center justify-center rounded-[1.25rem] bg-[#efe4d7]">
                  <ShoppingBag className="h-10 w-10 text-[#8b6a42]" />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-medium">{item.title}</h3>
                  <span className="text-sm font-medium text-[#8b6a42]">{item.price}</span>
                </div>
                <p className="mt-3 leading-7 text-zinc-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="blog" className="bg-white/80 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-500">{c.blogLabel}</div>
            <h2 className="text-4xl font-light">{c.blogTitle}</h2>
            <p className="mt-4 leading-7 text-zinc-600">{c.blogText}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {c.blogPosts.map((post) => (
              <div key={post.title} className="rounded-[1.75rem] border border-[#d8c2a0]/30 bg-[#fcfaf7] p-6 shadow-sm">
                <Badge className="mb-4 rounded-full bg-[#efe4d7] text-[#7b5c37] hover:bg-[#efe4d7]">{post.tag}</Badge>
                <h3 className="text-xl font-medium">{post.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{post.excerpt}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                  {c.blogRead} <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-6 py-20 text-center">
        <div className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-500">{c.aboutLabel}</div>
        <h2 className="text-4xl font-light">{c.aboutTitle}</h2>
        <p className="mx-auto mt-6 max-w-3xl leading-8 text-zinc-600">{c.aboutText}</p>
        <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-3">
          <div className="rounded-[1.5rem] bg-white p-5 shadow-sm"><ShieldCheck className="mx-auto mb-3 h-5 w-5" /><div className="text-sm font-medium">Aesthetics</div></div>
          <div className="rounded-[1.5rem] bg-white p-5 shadow-sm"><Globe className="mx-auto mb-3 h-5 w-5" /><div className="text-sm font-medium">EN / PL</div></div>
          <div className="rounded-[1.5rem] bg-white p-5 shadow-sm"><Star className="mx-auto mb-3 h-5 w-5" /><div className="text-sm font-medium">{c.qualifications}</div></div>
        </div>
      </section>

      <section id="booking" className="bg-[#1d1a17] py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-white/60">{c.bookingLabel}</div>
          <h2 className="text-4xl font-light">{c.bookingTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">{c.bookingText}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button className="rounded-2xl bg-white px-6 py-6 text-black hover:bg-white/90">
              <a href="https://www.fresha.com" target="_blank" rel="noreferrer">{c.fresha}</a>
            </Button>
            <Button variant="outline" className="rounded-2xl border-white/30 bg-transparent px-6 py-6 text-white hover:bg-white/10">
              <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp 07492 828818</a>
            </Button>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/60">
            <CalendarDays className="h-4 w-4" /> Fresha-ready booking section
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-500">{c.nav[6]}</div>
            <h2 className="text-4xl font-light">{c.contactTitle}</h2>
            <p className="mt-4 max-w-xl leading-8 text-zinc-600">{c.contactText}</p>
            <div className="mt-8 space-y-4 text-sm text-zinc-700">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-3"><MessageCircle className="h-4 w-4" /> 07492 828818</a>
              <a href="https://www.instagram.com/with_joanna20/" target="_blank" rel="noreferrer" className="flex items-center gap-3"><Instagram className="h-4 w-4" /> @with_joanna20</a>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4" /> Rochdale</div>
            </div>
          </div>

          <Card className="rounded-[2rem] border-white/70 bg-white shadow-sm">
            <CardContent className="p-8">
              <div className="grid gap-4">
                <Input placeholder={c.formName} className="h-12 rounded-xl" />
                <Input placeholder={c.formEmail} className="h-12 rounded-xl" />
                <Textarea placeholder={c.formMessage} className="min-h-[140px] rounded-xl" />
                <Button className="mt-2 w-fit rounded-2xl px-6">{c.formBtn}</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-black/5 bg-[#f7f2ec] px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-semibold">{c.brand}</div>
            <div className="mt-2 text-sm text-zinc-600">{c.location} • {c.footerTag}</div>
          </div>
          <div className="flex items-center gap-5 text-sm text-zinc-600">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-black"><Phone className="h-4 w-4" /> WhatsApp</a>
            <a href="https://www.instagram.com/with_joanna20/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-black"><Instagram className="h-4 w-4" /> Instagram</a>
            <a href="#contact" className="inline-flex items-center gap-2 hover:text-black"><Mail className="h-4 w-4" /> Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
