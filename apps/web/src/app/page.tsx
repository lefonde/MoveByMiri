import Image from 'next/image'
import {
  Button,
  Navbar,
  Footer,
  EyebrowLabel,
  DisplayHeading,
  TrustBar,
  TestimonialCard,
  FounderQuote,
  ArchImage,
} from '@yoga/ui'

import { SplitSection } from '@/components/split-section'
import { CurtainReveal } from '@/components/curtain-reveal'
import { ScrollReveal } from '@/components/scroll-reveal'
import { HeroLine } from '@/components/hero-line'
import { CounterRise } from '@/components/counter-rise'

// ─── SMS link helpers ────────────────────────────────────────────────────────
const SMS_HREF = 'sms:9296273163?body=Hi%20Miri%2C%20I%27d%20like%20to%20book%20a%20class'
const TEL_HREF = 'tel:9296273163'
const IG_HREF = 'https://instagram.com/moovbymiri'

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── Station 1: ARRIVAL ─────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden" id="arrival">
        {/* Background studio photo — LCP element, no animation */}
        <Image
          src="/images/studio-full-view.jpg"
          alt="MOOV by Miri studio interior — arched walls, warm light, and open floor"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Two-layer hero overlay: dark scrim + warm amber bloom */}
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero-scrim)' }} />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero-bloom)' }} />

        {/* Bottom-anchored content — text grounded to floor, photo breathes above */}
        <div className="relative flex min-h-screen flex-col items-center justify-end px-4 pb-20 text-center sm:pb-24">
          {/* MOOV wordmark — breatheIn animation */}
          <h1
            className="font-serif font-medium italic text-[#FAF8F5]"
            style={{
              fontSize: 'clamp(3rem, 8vw, 6.5rem)',
              lineHeight: '1.05',
              animation: 'breatheIn 800ms cubic-bezier(0.22, 1, 0.36, 1) both',
            }}
          >
            MOOV
          </h1>

          {/* Horizontal rule — the choreographic pivot */}
          <HeroLine />

          {/* Orientation line */}
          <p
            className="mt-5 font-sans text-sm text-[#FAF8F5]/80 sm:text-base"
            style={{
              animation: 'fadeUp 500ms cubic-bezier(0.22, 1, 0.36, 1) both',
              animationDelay: '900ms',
            }}
          >
            Boutique pilates &amp; strength. Wesley Hills, NY.
          </p>

          {/* Primary CTA — links to SMS */}
          <div
            className="mt-8"
            style={{
              animation: 'fadeUp 400ms cubic-bezier(0.22, 1, 0.36, 1) both',
              animationDelay: '1100ms',
            }}
          >
            <a href={SMS_HREF}>
              <Button size="md" className="px-6 py-3">
                Text Miri to Reserve — $25
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── Station 2: TRUST BAR ───────────────────────────────── */}
      <TrustBar
        headline="3 spots open this week."
        subline="Text Miri to hold yours: 929-627-3163"
        ctaHref={TEL_HREF}
      />

      {/* ── Station 3: THE HONEST MIRROR ───────────────────────── */}
      <section className="bg-[#FAF8F5] py-16 sm:py-20" id="honest-mirror">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <ScrollReveal variant="up-far">
            <p
              className="font-serif italic text-[#3A3632]"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                lineHeight: '1.2',
              }}
            >
              You&rsquo;ve tried the alternatives.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={150}>
            <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-[#756A5E] sm:text-lg">
              The big gym where no one knows you. The group class where you&rsquo;re just a mat
              number. The app that gave you a streak but not a body you trust. MOOV is ten women,
              one room, and Miri. She&rsquo;ll remember which side is your tight one.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Station 4: THRESHOLD ───────────────────────────────── */}
      <section className="bg-[#F5F0EB] py-0" id="threshold">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SplitSection
            weight="60-40"
            crossAxisAlign="start"
            imageSlot={
              <div className="py-12 pr-0 md:py-16 md:pr-8">
                <CurtainReveal
                  src="/images/studio-arch-niche.jpg"
                  alt="MOOV studio interior — arched niche with equipment and warm light"
                  aspectRatio="landscape"
                  curtainColor="#F5F0EB"
                />
              </div>
            }
            textSlot={
              <div className="flex flex-col justify-center px-4 py-12 md:px-10 md:py-16">
                <ScrollReveal variant="fade">
                  <EyebrowLabel className="mb-4">studio</EyebrowLabel>
                </ScrollReveal>
                <ScrollReveal variant="up-far" delay={100}>
                  <DisplayHeading as="h2" headingStyle="roman">
                    10 students per class.
                  </DisplayHeading>
                </ScrollReveal>
                <ScrollReveal variant="up-far" delay={200}>
                  <DisplayHeading as="h2" headingStyle="italic" className="mt-2">
                    Miri knows your name.
                  </DisplayHeading>
                </ScrollReveal>
                <ScrollReveal variant="up" delay={300}>
                  <p className="mt-6 font-sans text-base leading-relaxed text-[#756A5E] sm:text-lg">
                    No class over ten. No two classes the same. Miri reads the room, adjusts the
                    work, and remembers that you mentioned your left shoulder last time. This is
                    what instruction looks like when the instructor isn&rsquo;t managing a crowd.
                  </p>
                </ScrollReveal>
                <ScrollReveal variant="fade" delay={400}>
                  <div className="mt-8">
                    <a href={SMS_HREF}>
                      <Button size="lg" className="px-8 py-4">
                        Text Miri to Reserve — $25
                      </Button>
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            }
          />
        </div>
      </section>

      {/* ── Station 5: VOICES ──────────────────────────────────── */}
      <section className="bg-[#2A2623] py-16 sm:py-20" id="voices">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade">
            <EyebrowLabel color="neutral" className="mb-10 block text-center text-[#B5A899]">
              from our members
            </EyebrowLabel>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <ScrollReveal variant="up-far" delay={0}>
              <TestimonialCard
                quote="I hadn't worked out in two years. Miri figured out where I was in about five minutes and never made me feel behind. I've been coming every week since January."
                name="Sarah M."
                detail="started January 2025"
              />
            </ScrollReveal>

            <ScrollReveal variant="up-far" delay={120}>
              <TestimonialCard
                quote="Three months in. My posture changed. My lower back stopped hurting. I didn't expect results like this from a class this small."
                name="Danielle K."
                detail="Wesley Hills"
              />
            </ScrollReveal>

            <ScrollReveal variant="up-far" delay={240}>
              <TestimonialCard
                quote="It's the only place I go where I'm not competing with myself. Miri's attention is total. You feel it."
                name="Rachel T."
                detail="coming since October"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Station 6: THE SPACE ───────────────────────────────── */}
      <section className="overflow-hidden bg-[#FAF8F5]" id="the-space">
        {/* Full-bleed cinematic image */}
        <div className="relative w-full" style={{ aspectRatio: '21/9' }}>
          <Image
            src="/images/studio-full-view.jpg"
            alt="Full panoramic view of MOOV studio — arches, plants, and warm natural light"
            fill
            sizes="100vw"
            className="object-cover"
            loading="lazy"
          />
        </div>

        {/* Left-aligned logistics block */}
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <ScrollReveal variant="up">
            <div className="max-w-lg">
              <p
                className="font-serif italic text-[#3A3632]"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              >
                Come before you commit.
              </p>
              <p className="mt-4 font-sans text-base leading-relaxed text-[#756A5E]">
                Drop-ins welcome. Bring a water bottle and socks with grip. Park in the lot off
                Route 202. Miri will be there.
              </p>
              <div className="mt-4 flex flex-col gap-1 font-sans text-sm text-[#968A7B]">
                <a
                  href="https://maps.google.com/?q=Wesley+Hills+NY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-block text-[#574E44] transition-colors duration-150 hover:text-[#3A3632]"
                >
                  Wesley Hills, NY &rarr;
                </a>
                <a
                  href={TEL_HREF}
                  className="link-underline inline-block text-[#574E44] transition-colors duration-150 hover:text-[#3A3632]"
                >
                  929-627-3163 — Miri answers.
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Station 7: THE PERSON ──────────────────────────────── */}
      <section className="bg-[#F5F0EB] py-16 sm:py-20 lg:py-24" id="the-person">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Founder quote — editorial scale, left-aligned */}
            <div className="order-2 lg:order-1 lg:pl-8">
              <ScrollReveal variant="up-far">
                <FounderQuote
                  quote="I built this space for women who are done settling."
                  attribution="— Miri, founder"
                  size="editorial"
                />
              </ScrollReveal>
              <ScrollReveal variant="fade" delay={200}>
                <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-[#756A5E]">
                  Miri has trained women in small groups for over a decade. She opened MOOV because
                  she wanted a room where every woman in it would feel like the class was made for
                  her. Most of the time, it is.
                </p>
              </ScrollReveal>
              <ScrollReveal variant="fade" delay={300}>
                <a
                  href={IG_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-6 inline-flex items-center gap-2 font-sans text-sm font-medium text-[#556B2F] transition-colors duration-150 hover:text-[#455825]"
                >
                  @moovbymiri
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </ScrollReveal>
            </div>

            {/* Miri portrait — placeholder for now */}
            <div className="order-1 lg:order-2">
              <ScrollReveal variant="right">
                <ArchImage
                  src="/images/studio-arch-detail.jpg"
                  alt="Miri — founder of MOOV by Miri"
                  aspectRatio="portrait"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Station 8: THE PRICE ───────────────────────────────── */}
      <section className="bg-[#2A2623] py-16 sm:py-20" id="pricing">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Pre-header */}
          <ScrollReveal variant="fade">
            <p className="mb-12 text-center font-sans text-sm text-[#D4C9BD]">
              Simple pricing. No memberships. No contracts. Show up.
            </p>
          </ScrollReveal>

          {/* Horizontal rule separator */}
          <div className="mx-auto mb-12 max-w-4xl border-t border-[#574E44]" />

          {/* Three pricing declarations */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {/* Single class */}
            <div className="text-center">
              <ScrollReveal variant="fade">
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#C27E60]">
                  Start here
                </span>
              </ScrollReveal>
              <p
                className="mt-3 font-serif font-medium text-[#FAF8F5]"
                style={{ fontSize: 'clamp(3.5rem, 7vw, 5rem)', lineHeight: '1.0' }}
              >
                <CounterRise value={25} floor={18} />
              </p>
              <p className="mt-4 font-sans text-base text-[#D4C9BD]">One class. No commitment.</p>
            </div>

            {/* 5-class pack */}
            <div className="text-center">
              <ScrollReveal variant="fade" delay={120}>
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#C27E60]">
                  Most popular
                </span>
              </ScrollReveal>
              <p
                className="mt-3 font-serif font-medium text-[#FAF8F5]"
                style={{ fontSize: 'clamp(3.5rem, 7vw, 5rem)', lineHeight: '1.0' }}
              >
                <CounterRise value={115} floor={90} />
              </p>
              <p className="mt-4 font-sans text-base text-[#D4C9BD]">
                Five classes. Two months to use them.
              </p>
            </div>

            {/* 10-class pack */}
            <div className="text-center">
              <ScrollReveal variant="fade" delay={240}>
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#968A7B]">
                  Best value
                </span>
              </ScrollReveal>
              <p
                className="mt-3 font-serif font-medium text-[#FAF8F5]"
                style={{ fontSize: 'clamp(3.5rem, 7vw, 5rem)', lineHeight: '1.0' }}
              >
                <CounterRise value={200} floor={160} />
              </p>
              <p className="mt-4 font-sans text-base text-[#D4C9BD]">
                Ten classes. Three months. Make it yours.
              </p>
            </div>
          </div>

          {/* Payment + policy */}
          <div className="mt-12 text-center">
            <p className="font-sans text-sm text-[#D4C9BD]">
              Payment by Venmo or Zelle. Miri confirms your spot within a few hours.
            </p>
            <p className="mt-2 font-sans text-xs text-[#968A7B]">
              Your spot is saved once payment is sent. 24-hour cancellation policy.
            </p>
            <div className="mt-6">
              <a
                href={TEL_HREF}
                className="link-underline font-sans text-sm text-[#D4C9BD] transition-colors duration-150 hover:text-[#FAF8F5]"
              >
                Text Miri to Book — 929-627-3163
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Station 9: INSTAGRAM PROOF ─────────────────────────── */}
      <section className="bg-[#FAF8F5] py-12 sm:py-16" id="instagram">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
            <ScrollReveal variant="fade" delay={0}>
              <div className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/images/studio-mats-wide.jpg"
                  alt="Studio mats laid out for class"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade" delay={100}>
              <div className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/images/studio-mats-angle.jpg"
                  alt="Studio angle with equipment"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade" delay={200}>
              <div className="aspect-square overflow-hidden rounded-lg max-sm:col-span-2">
                <Image
                  src="/images/studio-arch-detail.jpg"
                  alt="Studio arch detail with warm textures"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
          <div className="mt-4 text-center">
            <a
              href={IG_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-sans text-sm text-[#968A7B] transition-colors duration-150 hover:text-[#574E44]"
            >
              More at @moovbymiri
            </a>
          </div>
        </div>
      </section>

      {/* ── Station 10: THE DOOR ───────────────────────────────── */}
      <section
        className="py-16 sm:py-20"
        id="the-door"
        style={{ background: 'var(--gradient-olive)' }}
      >
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <ScrollReveal variant="up-far">
            <p
              className="font-serif italic text-[#FAF8F5]"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: '1.2' }}
            >
              This week has a few spots left.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={200}>
            <p className="mt-4 font-sans text-base text-[#FAF8F5]/70">
              Text Miri. She&rsquo;ll tell you what&rsquo;s open and hold it while you decide.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={350}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              {/* Primary: cream-fill CTA */}
              <a href={SMS_HREF} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full bg-[#FAF8F5] px-8 py-4 text-[#556B2F] hover:bg-[#FAF8F5]/90 sm:w-auto"
                >
                  Text to Reserve — $25
                </Button>
              </a>

              {/* Secondary: phone */}
              <a
                href={TEL_HREF}
                className="link-underline font-sans text-sm text-[#FAF8F5]/80 transition-colors duration-150 hover:text-[#FAF8F5]"
              >
                Or call: 929-627-3163
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={450}>
            <a
              href={IG_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-sans text-xs text-[#FAF8F5]/50 transition-colors duration-150 hover:text-[#FAF8F5]/80"
            >
              DM @moovbymiri
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
