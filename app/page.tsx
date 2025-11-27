'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [activeLocation, setActiveLocation] = useState('dubai')

  return (
    <div className="page-shell">
      <header className="hero">
        <Image
          src="/assets/ONIX_GROUP_0002.png"
          alt="ONIX GROUP"
          className="hero__logo"
          width={280}
          height={110}
          priority
        />
        <div className="brand-grid">
          <div className="brand-card">
            <Image
              src="/assets/ONIX Engineering Consultancy White.webp"
              alt="ONIX Engineering Consultancy"
              width={220}
              height={100}
              className="brand-card__logo"
            />
          </div>
          <div className="brand-card">
            <Image
              src="/assets/onix-plus-logo.png"
              alt="ONIX PLUS"
              width={220}
              height={100}
              className="brand-card__logo"
            />
          </div>
          <div className="brand-card">
            <Image
              src="/assets/Onix Prime Logo White[1].webp"
              alt="ONIX PRIME"
              width={220}
              height={100}
              className="brand-card__logo"
            />
          </div>
          <div className="brand-card">
            <Image
              src="/assets/onix-design-studio-logo.png"
              alt="ONIX Design Studio"
              width={220}
              height={100}
              className="brand-card__logo"
            />
          </div>
          <div className="brand-card">
            <Image
              src="/assets/CRIMSON 001[1].webp"
              alt="CRIMSON Steel Contracting"
              width={220}
              height={100}
              className="brand-card__logo"
            />
          </div>
        </div>
      </header>

      <main className="main">
        <section className="announcement card">
          <p className="eyebrow">Update</p>
          <h1>We&apos;ve got something new!</h1>
          <p className="lead">
            We&apos;ve moved to a new home online! Please visit us at:
          </p>

          <a
            className="cta-button"
            href="https://www.onixgroup.ae/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>https://www.onixgroup.ae/</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M7 17 17 7M9 7h8v8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            className="qr"
            href="https://www.onixgroup.ae/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/WhatsApp Image 2025-11-27 at 10.34.11_45924ac4.jpg"
              alt="QR code linking to onixgroup.ae"
              width={180}
              height={180}
            />
          </a>

          <p className="supporting">
            Same great service—just a fresh new address!<br />
            Thank you for staying connected!
          </p>
        </section>

        <section className="locations card">
          <div className="section-heading">
            <p className="eyebrow">Visit Us</p>
            <h2>We&apos;re ready to welcome you</h2>
          </div>

          <div className="tabs" role="tablist">
            <button
              type="button"
              className={`tab ${activeLocation === 'dubai' ? 'is-active' : ''}`}
              onClick={() => setActiveLocation('dubai')}
            >
              Dubai HQ
            </button>
            <button
              type="button"
              className={`tab ${activeLocation === 'abu-dhabi' ? 'is-active' : ''}`}
              onClick={() => setActiveLocation('abu-dhabi')}
            >
              Abu Dhabi Office
            </button>
          </div>

          <div
            className={`location-card ${activeLocation === 'dubai' ? 'is-active' : ''}`}
            data-panel="dubai"
          >
            <h3>Dubai HQ</h3>
            <p>
              Mardoof Building, Gate B, Office 114<br />
              Sheikh Zayed Road, Al Safa 1, Dubai
            </p>
            <a
              className="maps-link"
              href="https://www.google.com/maps/place/Onix+engineering+consultancy/@25.1763494,55.2421577,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f6950cab81057:0x64e84a568d8bd8e1!8m2!3d25.1763446!4d55.2447326!16s%2Fg%2F11vytgw0z5?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
            <div className="contact-grid">
              <div>
                <p className="label">Phone</p>
                <a href="tel:+97142838880">+971 4 283 8880</a>
              </div>
              <div>
                <p className="label">Email</p>
                <a href="mailto:info@onixgroup.ae">info@onixgroup.ae</a>
              </div>
            </div>
          </div>

          <div
            className={`location-card ${activeLocation === 'abu-dhabi' ? 'is-active' : ''}`}
            data-panel="abu-dhabi"
          >
            <h3>Abu Dhabi Office</h3>
            <p>
            Omniah Tower - Al Hisn               <br />
            Al Markaziyah West - Abu Dhabi
            </p>
            <a
              className="maps-link"
              href="https://www.google.com/maps/place/Onix+Engineering+Consultancy,+Omniah+Tower+-+Al+Hisn+-+Al+Markaziyah+West+-+Abu+Dhabi/data=!4m2!3m1!1s0x3e5e67005e94375f:0x7d1b79275c7a4b73?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI1LjQ3LjgYACCIJyqiASw5NDI2NzcyNyw5NDI3NTQwNyw5NDI5MjE5NSw5NDI4NDQ2Myw5NDIyMzI5OSw5NDIxNjQxMyw5NDI4MDU3Niw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIyOTgzOSw5NDI3NTE2OCw5NDI3OTYxOSw0NzA4NDM5Myw5NDIxMzIwMEICQUU%3D&skid=7e50d3d6-4238-4d63-931f-1bcf91152c5b&g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
            <div className="contact-grid">
              <div>
                <p className="label">Phone</p>
                <a href="tel:+971022358881">+971 02 235 8881</a>
              </div>
              <div>
                <p className="label">Email</p>
                <a href="mailto:info.ad@onixgroup.ae">info.ad@onixgroup.ae</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer card">
        <div className="footer__branding">
          <Image
            src="/assets/ONIX_GROUP_0002.png"
            alt="ONIX GROUP small logo"
            width={260}
            height={100}
            style={{ objectFit: 'contain' }}
          />
          <p>
            We deliver integrated engineering, construction, and design
            experiences—driven by innovation, disciplined execution, and
            relentless client focus.
          </p>
        </div>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/onixgroup.ae/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="footer__icon"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" role="img">
              <rect
                x="3.5"
                y="3.5"
                width="17"
                height="17"
                rx="5"
                ry="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="12"
                cy="12"
                r="3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/onixdubai/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="footer__icon"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" role="img">
              <path
                fill="currentColor"
                d="M13 10h2.5l.5-3H13V5.5c0-.8.4-1.5 1.6-1.5H16V1.2S14.9 1 13.8 1c-2.6 0-4.3 1.6-4.3 4.4V7H7v3h2.5v10h3.5V10Z"
              />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@ONIX_GROUP"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="footer__icon"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M21.4 7.2c-.2-1.4-1.4-2.5-2.8-2.6C16 4.4 12 4.4 12 4.4s-4 0-6.6.2c-1.4.1-2.6 1.2-2.8 2.6C2.4 9 2.4 12 2.4 12s0 3 .2 4.8c.2 1.4 1.4 2.5 2.8 2.6 2.6.2 6.6.2 6.6.2s4 0 6.6-.2c1.4-.1 2.6-1.2 2.8-2.6.2-1.8.2-4.8.2-4.8s0-3-.2-4.8zM10.2 15.5V8.5l5.1 3.5-5.1 3.5z"
              />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@onix_engineering"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="footer__icon"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M18.5 9.1a5 5 0 0 1-3-1v5.2a4.6 4.6 0 1 1-4.6-4.6c.2 0 .4 0 .6.1v2.4a2.2 2.2 0 1 0 1.6 2.1V4.4h2.4a3.1 3.1 0 0 0 3 2.9v1.8z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/onix-engineering-consultancy/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer__icon"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" role="img">
              <path
                fill="currentColor"
                d="M6 9h3.2v10.5H6zM7.6 4a2 2 0 1 1-.1-4 2 2 0 0 1 .1 4ZM11.7 9h3v1.5h.1c.4-.7 1.6-1.5 3.1-1.5 3.3 0 3.9 2.2 3.9 5v5.5H18.6v-4.9c0-1.2-.1-2.7-1.6-2.7s-1.8 1.3-1.8 2.6v5H11.7Z"
              />
            </svg>
          </a>
        </div>

        <div className="footer__meta">
          <div className="links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Support</a>
          </div>
          <p>© 2025 Onix Group of Companies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

