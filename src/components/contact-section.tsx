"use client";

import { AtSign, ExternalLink, Mail, MessageCircle } from "lucide-react";

import { profile } from "@/data/portfolio";
import { trackEvent } from "@/lib/analytics";
import { createMailto, createZaloUrl } from "@/lib/links";

const contacts = [
  {
    label: "Zalo",
    href: createZaloUrl(profile.phone),
    clarityLabel: "contact_zalo",
    icon: MessageCircle,
  },
  {
    label: "Email",
    href: createMailto(profile.email, "Portfolio inquiry"),
    clarityLabel: "contact_email",
    icon: Mail,
  },
  {
    label: "Facebook",
    href: profile.facebookUrl,
    clarityLabel: "contact_facebook",
    icon: ExternalLink,
  },
  {
    label: "LinkedIn",
    href: profile.linkedinUrl,
    clarityLabel: "contact_linkedin",
    icon: AtSign,
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="px-5 py-16 md:px-8 md:py-24"
      data-clarity-label="contact"
    >
      <div className="mx-auto grid max-w-7xl gap-6 rounded-[36px] border-2 border-ink bg-violetPop p-5 text-white shadow-deck deck-grid md:grid-cols-[0.9fr_1.1fr] md:p-8">
        <div className="rounded-deck bg-ink p-6 md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-yellowPop">
            Contact
          </p>
          <h2 className="mt-4 text-balance text-4xl font-black leading-tight md:text-6xl">
            Let&apos;s talk about marketing work.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/80">
            Reach out for roles, collaborations, or portfolio questions.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            const content = (
              <>
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyanPop">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <span className="min-w-0 break-words text-2xl">
                  {contact.label}
                </span>
              </>
            );

            if (!contact.href) {
              return (
                <span
                  key={contact.label}
                  aria-disabled="true"
                  className="flex min-h-32 items-center gap-4 rounded-deck border-2 border-ink bg-white/80 p-5 font-black text-ink/50 shadow-sticker"
                  data-clarity-label={contact.clarityLabel}
                >
                  {content}
                </span>
              );
            }

            return (
              <a
                key={contact.label}
                href={contact.href}
                className="flex min-h-32 items-center gap-4 rounded-deck border-2 border-ink bg-white p-5 font-black text-ink shadow-sticker transition-transform hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-yellowPop"
                data-clarity-label={contact.clarityLabel}
                onClick={() => trackEvent(contact.clarityLabel)}
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
