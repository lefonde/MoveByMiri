import Image from 'next/image'
import { Button, Footer, EyebrowLabel, TrustBar, TestimonialCard, HeroWordmark } from '@yoga/ui'

import { ScrollReveal } from '@/components/scroll-reveal'

// ─── Link helpers ─────────────────────────────────────────────────────────────
const SMS_HREF = 'sms:9296273163?body=Hi%20Miri%2C%20I%27d%20like%20to%20book%20a%20class'
const SMS_HREF_SINGLE =
  'sms:9296273163?body=Hi%20Miri%2C%20I%27d%20like%20to%20book%20a%20single%20class'
const SMS_HREF_FIVE =
  'sms:9296273163?body=Hi%20Miri%2C%20I%27d%20like%20to%20get%20the%205-class%20pack'
const SMS_HREF_TEN =
  'sms:9296273163?body=Hi%20Miri%2C%20I%27d%20like%20to%20get%20the%2010-class%20pack'
const TEL_HREF = 'tel:9296273163'

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <main id="main-content">
        {/* ── Station 1: ARRIVAL ─────────────────────────────────── */}
        <section
          className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
          id="arrival"
        >
          {/* Background studio photo — LCP element */}
          <Image
            src="/images/studio-full-view.jpg"
            alt="MOOV by Miri studio interior — arched walls, warm light, and open floor"
            fill
            priority
            sizes="100vw"
            className="parallax-image object-cover"
          />

          {/* VERDANT scrim — forest green overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'var(--gradient-hero-verdant-scrim)' }}
          />

          {/* Centered content stack — locale → wordmark → rule → subtitle → CTA */}
          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            {/* Location — above wordmark */}
            <p
              className="mb-7 font-sans font-medium uppercase text-[#FAF8F5]/55"
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.28em',
                opacity: 0,
                animation: 'fadeUp 0.6s ease forwards 2.7s',
              }}
            >
              Wesley Hills, NY
            </p>

            {/* MOOV wordmark — per-letter stagger */}
            <HeroWordmark text="MOOV" />

            {/* Terracotta rule */}
            <div
              className="mx-auto"
              style={{
                width: 'clamp(50px, 7vw, 90px)',
                height: '1px',
                background: 'rgba(194, 126, 96, 0.65)',
                margin: '1.4rem auto',
                transformOrigin: 'center',
                transform: 'scaleX(0)',
                animation: 'lineIn 0.7s ease forwards 1.75s',
              }}
            />

            {/* Subtitle — appears before CTA so context precedes the ask */}
            <p
              className="mb-11 font-sans font-normal uppercase text-[#FAF8F5]/70"
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                opacity: 0,
                animation: 'fadeUp 0.7s ease forwards 1.8s',
              }}
            >
              Boutique pilates &amp; strength
            </p>

            {/* Primary CTA — after subtitle so visitor has context before the ask */}
            <div style={{ opacity: 0, animation: 'fadeUp 0.6s ease forwards 2.2s' }}>
              <Button href={SMS_HREF} variant="bone" size="md">
                Text Miri to Reserve — $25
              </Button>
            </div>
          </div>
        </section>

        {/* ── Station 2: TRUST BAR ───────────────────────────────── */}
        <TrustBar
          headline="3 spots open this week."
          subline="Text Miri to hold yours — 929-627-3163"
          ctaHref={TEL_HREF}
        />

        {/* ── Station 3: HONEST MIRROR ───────────────────────────── */}
        <section className="bg-[#F5F0E8] px-8 py-16 md:py-24 lg:py-36" id="honest-mirror">
          <div className="mx-auto max-w-[820px]">
            <ScrollReveal variant="fade">
              <EyebrowLabel color="terra" className="mb-6 block">
                03 — Honest Mirror
              </EyebrowLabel>
            </ScrollReveal>

            <ScrollReveal variant="up-far">
              <h2
                className="font-serif italic text-[#2A2218]"
                style={{
                  fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                  fontWeight: 400,
                  lineHeight: '1.18',
                  marginBottom: '2rem',
                }}
              >
                &ldquo;You&rsquo;ve tried
                <br />
                the alternatives.&rdquo;
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="up" delay={150}>
              <p
                className="font-sans text-[#7A6C5E]"
                style={{ fontSize: '1.05rem', lineHeight: '1.88', maxWidth: '580px' }}
              >
                The big gym where no one knows you. The boutique where you can&rsquo;t get a spot.
                The app that doesn&rsquo;t move your body the way you need it to. You already know
                what doesn&rsquo;t work. This is what does.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Station 4: THRESHOLD ───────────────────────────────── */}
        <section id="threshold">
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] md:min-h-[600px]">
            {/* Photo — left 3fr */}
            <div className="relative min-h-[300px] overflow-hidden md:min-h-0">
              <Image
                src="/images/studio-arch-niche.jpg"
                alt="MOOV studio interior — arched niche with equipment and warm light"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover object-center"
                loading="lazy"
              />
            </div>

            {/* Text — right 2fr, stone bg */}
            <div className="flex flex-col justify-center bg-[#E8DDD0] px-6 py-12 md:px-16 md:py-20">
              <ScrollReveal variant="fade">
                <EyebrowLabel color="terra" className="mb-6 block">
                  04 — Threshold
                </EyebrowLabel>
              </ScrollReveal>

              <ScrollReveal variant="up-far" delay={100}>
                <h2
                  className="font-serif italic text-[#2A2218]"
                  style={{
                    fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                    fontWeight: 400,
                    lineHeight: '1.2',
                    marginBottom: '1.5rem',
                  }}
                >
                  10 students per class.
                  <br />
                  Miri knows your name.
                </h2>
              </ScrollReveal>

              <ScrollReveal variant="up" delay={200}>
                <p
                  className="font-sans text-[#7A6C5E]"
                  style={{ fontSize: '1rem', lineHeight: '1.82', marginBottom: '2.5rem' }}
                >
                  This isn&rsquo;t a drop-in gym. It&rsquo;s a studio built around you. Every class
                  is capped. Every student is seen. You&rsquo;re not a member number.
                </p>
              </ScrollReveal>

              <ScrollReveal variant="fade" delay={300}>
                <Button href={SMS_HREF} variant="forest" size="md" className="self-start">
                  Reserve Your Spot — $25
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Station 5: VOICES ──────────────────────────────────── */}
        <section className="bg-[#1A2E1A] px-8 py-16 md:py-20 lg:py-32" id="voices">
          <div className="mx-auto max-w-[1160px]">
            <ScrollReveal variant="fade">
              <EyebrowLabel className="mb-6 block text-[#C27E60]/85">05 — Voices</EyebrowLabel>
            </ScrollReveal>

            <ScrollReveal variant="up-far">
              <h2
                className="font-serif italic text-[#F5F0E8]"
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  fontWeight: 400,
                  marginBottom: '3.5rem',
                }}
              >
                &ldquo;Real members. Real results.&rdquo;
              </h2>
            </ScrollReveal>

            {/* 1-col → 3-col (skip 2-col to avoid orphaned card at sm) */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <ScrollReveal variant="up-far" delay={0}>
                <TestimonialCard
                  variant="dark"
                  quote="I've tried every boutique studio in Rockland. MOOV is the only one where I feel genuinely known. Miri remembers everything."
                  name="Sarah M."
                />
              </ScrollReveal>

              <ScrollReveal variant="up-far" delay={120}>
                <TestimonialCard
                  variant="dark"
                  quote="Three months in and my posture is transformed. The small class size means Miri actually corrects your form. It matters."
                  name="Danielle K."
                />
              </ScrollReveal>

              <ScrollReveal variant="up-far" delay={240}>
                <TestimonialCard
                  variant="dark"
                  quote="I was nervous about pilates. Miri made me feel capable from day one. I've been coming every week for a year."
                  name="Rachel T."
                />
              </ScrollReveal>
            </div>

            <ScrollReveal variant="fade" delay={350}>
              <div className="mt-12 text-center">
                <Button href={SMS_HREF} variant="bone" size="md">
                  Join them — $25
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Station 6: THE SPACE ───────────────────────────────── */}
        <section id="the-space">
          {/* Cinematic full-bleed studio photo at 21:9 */}
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: '21/9' }}>
            <Image
              src="/images/studio-mats-wide.jpg"
              alt="MOOV by Miri — the studio floor, warm light, and open space to move"
              fill
              sizes="100vw"
              className="object-cover object-center"
              loading="lazy"
            />
            {/* Subtle forest scrim for depth */}
            <div className="absolute inset-0 bg-[#1A2E1A]/25" />
          </div>

          {/* Logistics grid below photo */}
          <div className="bg-[#F5F0E8] px-8 py-12 md:px-16 md:py-16">
            <div className="mx-auto max-w-[820px]">
              <ScrollReveal variant="fade">
                <EyebrowLabel color="terra" className="mb-8 block">
                  06 — The Space
                </EyebrowLabel>
              </ScrollReveal>

              <ScrollReveal variant="up-far">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                  <div>
                    <p
                      className="font-serif italic text-[#2A2218]"
                      style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.5rem' }}
                    >
                      Location
                    </p>
                    <p
                      className="font-sans text-[#7A6C5E]"
                      style={{ fontSize: '0.9rem', lineHeight: '1.7' }}
                    >
                      Wesley Hills, NY
                      <br />
                      20 min from Mahwah Bridge
                    </p>
                  </div>
                  <div>
                    <p
                      className="font-serif italic text-[#2A2218]"
                      style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.5rem' }}
                    >
                      Schedule
                    </p>
                    <p
                      className="font-sans text-[#7A6C5E]"
                      style={{ fontSize: '0.9rem', lineHeight: '1.7' }}
                    >
                      Mon – Sat
                      <br />6 am – 7 pm
                    </p>
                  </div>
                  <div>
                    <p
                      className="font-serif italic text-[#2A2218]"
                      style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.5rem' }}
                    >
                      Class Size
                    </p>
                    <p
                      className="font-sans text-[#7A6C5E]"
                      style={{ fontSize: '0.9rem', lineHeight: '1.7' }}
                    >
                      10 students max.
                      <br />
                      Every class. Always.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Station 7: THE PERSON ──────────────────────────────── */}
        {/* TODO: Restore 2-column grid (portrait left, quote right) once Miri portrait photography is ready */}
        <section className="bg-[#F5F0E8] px-8 py-16 md:py-24 lg:py-32" id="the-person">
          <div className="mx-auto max-w-[680px] text-center">
            <ScrollReveal variant="fade">
              <EyebrowLabel color="terra" className="mb-8 block">
                07 — The Person
              </EyebrowLabel>
            </ScrollReveal>

            <ScrollReveal variant="up-far" delay={100}>
              <blockquote>
                <p
                  className="font-serif italic text-[#2A2218]"
                  style={{
                    fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                    fontWeight: 400,
                    lineHeight: '1.3',
                    marginBottom: '2rem',
                  }}
                >
                  &ldquo;I built MOOV because I wanted to train people the way I wanted to be
                  trained. Not as a number. As a person.&rdquo;
                </p>
                <footer>
                  <cite
                    className="font-sans not-italic text-[#C27E60] uppercase"
                    style={{ fontSize: '0.65rem', letterSpacing: '0.18em' }}
                  >
                    — Miri, Founder &amp; Instructor
                  </cite>
                </footer>
              </blockquote>
            </ScrollReveal>

            <ScrollReveal variant="fade" delay={250}>
              <Button href={SMS_HREF} variant="forest" size="md" className="mt-10">
                Train with Miri — $25
              </Button>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Station 8: THE PRICE ───────────────────────────────── */}
        <section className="bg-[#F5F0E8] px-8 py-16 md:py-20 lg:py-32" id="pricing">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal variant="fade">
              <EyebrowLabel color="terra" className="mb-6 block">
                08 — The Price
              </EyebrowLabel>
            </ScrollReveal>

            <ScrollReveal variant="up-far">
              <h2
                className="font-serif text-[#2A2218]"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 400,
                  marginBottom: '4rem',
                }}
              >
                Simple, honest pricing.
              </h2>
            </ScrollReveal>

            {/* 1-col → 3-col (skip 2-col orphan) */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Drop-in */}
              <ScrollReveal variant="up-far" delay={0}>
                <div
                  className="rounded-[1.75rem] bg-white"
                  style={{ border: '1.5px solid #B8A898', padding: '2.75rem 2.25rem' }}
                >
                  <p
                    className="font-sans font-semibold uppercase text-[#C27E60]"
                    style={{ fontSize: '0.6rem', letterSpacing: '0.22em', marginBottom: '1.5rem' }}
                  >
                    Start here
                  </p>
                  <div
                    className="font-serif text-[#2A2218]"
                    style={{
                      fontSize: '4.5rem',
                      fontWeight: 400,
                      lineHeight: 1,
                      marginBottom: '0.5rem',
                    }}
                  >
                    <sup className="align-super" style={{ fontSize: '1.75rem' }}>
                      $
                    </sup>
                    25
                  </div>
                  <p
                    className="font-sans text-[#7A6C5E]"
                    style={{ fontSize: '0.875rem', lineHeight: '1.65', marginBottom: '2rem' }}
                  >
                    Single class, no expiry. No commitment. Come once and see why people stay.
                  </p>
                  <Button href={SMS_HREF_SINGLE} variant="forest" size="sm" className="w-full">
                    Reserve a Single
                  </Button>
                </div>
              </ScrollReveal>

              {/* 5-class pack — popular, sage border */}
              <ScrollReveal variant="up-far" delay={120}>
                <div
                  className="rounded-[1.75rem] bg-white"
                  style={{ border: '1.5px solid #6B8B4E', padding: '2.75rem 2.25rem' }}
                >
                  <p
                    className="font-sans font-semibold uppercase text-[#C27E60]"
                    style={{ fontSize: '0.6rem', letterSpacing: '0.22em', marginBottom: '1.5rem' }}
                  >
                    Most popular
                  </p>
                  <div
                    className="font-serif text-[#2A2218]"
                    style={{
                      fontSize: '4.5rem',
                      fontWeight: 400,
                      lineHeight: 1,
                      marginBottom: '0.5rem',
                    }}
                  >
                    <sup className="align-super" style={{ fontSize: '1.75rem' }}>
                      $
                    </sup>
                    115
                  </div>
                  <p
                    className="font-sans text-[#7A6C5E]"
                    style={{ fontSize: '0.875rem', lineHeight: '1.65', marginBottom: '2rem' }}
                  >
                    Five classes, valid 2 months. The pace most members find sustainable.
                  </p>
                  <Button href={SMS_HREF_FIVE} variant="forest" size="sm" className="w-full">
                    Get Five Classes
                  </Button>
                </div>
              </ScrollReveal>

              {/* 10-class pack */}
              <ScrollReveal variant="up-far" delay={240}>
                <div
                  className="rounded-[1.75rem] bg-white"
                  style={{ border: '1.5px solid #B8A898', padding: '2.75rem 2.25rem' }}
                >
                  <p
                    className="font-sans font-semibold uppercase text-[#C27E60]"
                    style={{ fontSize: '0.6rem', letterSpacing: '0.22em', marginBottom: '1.5rem' }}
                  >
                    Best value
                  </p>
                  <div
                    className="font-serif text-[#2A2218]"
                    style={{
                      fontSize: '4.5rem',
                      fontWeight: 400,
                      lineHeight: 1,
                      marginBottom: '0.5rem',
                    }}
                  >
                    <sup className="align-super" style={{ fontSize: '1.75rem' }}>
                      $
                    </sup>
                    200
                  </div>
                  <p
                    className="font-sans text-[#7A6C5E]"
                    style={{ fontSize: '0.875rem', lineHeight: '1.65', marginBottom: '2rem' }}
                  >
                    Ten classes, valid 3 months. For those who know they&rsquo;re in.
                  </p>
                  <Button href={SMS_HREF_TEN} variant="forest" size="sm" className="w-full">
                    Get Ten Classes
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Station 9: INSTAGRAM PROOF ─────────────────────────── */}
        <section className="bg-[#F5F0E8] px-8 py-16 md:py-20 lg:py-28" id="instagram-proof">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal variant="fade">
              <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <EyebrowLabel color="terra">09 — Instagram Proof</EyebrowLabel>
                <a
                  href="https://instagram.com/moovbymiri"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow MOOV by Miri on Instagram (opens in new tab)"
                  className="font-sans text-[#2D4A2E] uppercase transition-colors duration-150 hover:text-[#C27E60] focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[#2D4A2E] focus-visible:ring-offset-2"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.18em' }}
                >
                  @moovbymiri →
                </a>
              </div>
            </ScrollReveal>

            {/* 3-square grid — replace with actual Instagram post crops */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {(
                [
                  {
                    src: '/images/studio-mats-angle.jpg',
                    alt: 'MOOV studio — mats and open floor',
                  },
                  {
                    src: '/images/studio-arch-detail.jpg',
                    alt: 'MOOV studio — arch and warm light',
                  },
                  { src: '/images/studio-mats-wide.jpg', alt: 'MOOV studio — wide view' },
                ] as { src: string; alt: string }[]
              ).map(({ src, alt }, i) => (
                <ScrollReveal key={src} variant="up-far" delay={i * 80}>
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      sizes="(max-width: 768px) 33vw, 350px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Station 10: THE DOOR ───────────────────────────────── */}
        <section
          className="px-8 py-16 text-center md:py-24 lg:py-36"
          id="the-door"
          style={{ background: 'var(--gradient-forest)' }}
        >
          <div className="mx-auto max-w-[460px]">
            <ScrollReveal variant="up-far">
              <h2
                className="font-serif italic text-[#F5F0E8]"
                style={{
                  fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                  fontWeight: 400,
                  marginBottom: '1.25rem',
                }}
              >
                &ldquo;This week has a few spots left.&rdquo;
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade" delay={200}>
              <p
                className="font-sans text-[#FAF8F5]/[0.68]"
                style={{ fontSize: '0.9rem', lineHeight: '1.75', marginBottom: '2.75rem' }}
              >
                Text Miri. She&rsquo;ll tell you what&rsquo;s open and hold it while you decide.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade" delay={350}>
              <Button href={SMS_HREF} variant="bone" size="lg">
                Text Miri to Reserve — $25
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
