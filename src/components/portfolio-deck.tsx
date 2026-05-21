'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowDown,
    BarChart3,
    Brush,
    Camera,
    CalendarDays,
    Code2,
    Download,
    ExternalLink,
    Home,
    Lightbulb,
    Mail,
    MapPin,
    Megaphone,
    Phone,
    PieChart,
    Search,
    Sparkles,
    Target,
    TrendingUp,
    UserRound,
    Video,
} from 'lucide-react';

import { experiences, profile, skillGroups, works } from '@/data/portfolio';
import { trackEvent } from '@/lib/analytics';
import { createMailto, createZaloUrl } from '@/lib/links';

const stickerIcons = [
    {
        Icon: Megaphone,
        className:
            'left-[6%] top-[13%] -rotate-12 bg-white [--float-x:10px] [--float-y:-14px]',
    },
    {
        Icon: Target,
        className:
            'left-[4%] top-[30%] rotate-6 bg-white motion-delay-1 [--float-x:-8px] [--float-y:-10px]',
    },
    {
        Icon: TrendingUp,
        className:
            'left-[26%] top-[22%] -rotate-6 bg-white motion-delay-2 [--float-x:12px] [--float-y:9px]',
    },
    {
        Icon: Lightbulb,
        className:
            'right-[20%] top-[8%] rotate-12 bg-white motion-delay-1 [--float-x:-10px] [--float-y:-12px]',
    },
    {
        Icon: Search,
        className:
            'right-[17%] top-[30%] -rotate-12 bg-white motion-delay-2 [--float-x:9px] [--float-y:12px]',
    },
    {
        Icon: PieChart,
        className:
            'right-[5%] top-[31%] rotate-6 bg-white [--float-x:-12px] [--float-y:8px]',
    },
];

const showcase = [
    {
        label: '01. Content Strategy & Production',
        title: 'Social Media Design',
        color: 'bg-primary',
        copy: 'Placeholder grid for seasonal content, campaign content, always-on posts, and channel planning.',
        icon: Brush,
    },
    {
        label: '02. CRM & Funnel',
        title: 'Audience Journey Boards',
        color: 'bg-yellowPop',
        copy: 'A future section for CRM/email journeys, audience segments, retention messages, and growth loops.',
        icon: BarChart3,
    },
    {
        label: '03. Brand Campaign',
        title: 'Visual Campaign System',
        color: 'bg-ink',
        copy: 'Deck-style room for brand assets, launch visuals, offline materials, and campaign direction.',
        icon: Camera,
    },
    {
        label: '04. Web & Tools',
        title: 'Marketing Landing Pages',
        color: 'bg-bluePop',
        copy: 'Skeleton area for landing page, web optimization, tracking setup, and responsive marketing assets.',
        icon: Code2,
    },
];

function Sticker({
    Icon,
    className,
}: {
    Icon: typeof Megaphone;
    className: string;
}) {
    return (
        <div
            className={`deck-sticker hero-sticker-float absolute z-20 grid h-16 w-16 place-items-center rounded-2xl border-[5px] border-white text-ink shadow-[0_4px_0_#111] md:h-20 md:w-20 ${className}`}
            aria-hidden='true'
        >
            <Icon size={34} strokeWidth={3} />
        </div>
    );
}

function PlaceholderMedia({ label }: { label: string }) {
    return (
        <div className='relative min-h-44 overflow-hidden rounded-[28px] border-2 border-ink bg-white shadow-sticker'>
            <div className='absolute inset-0 deck-grid opacity-80' />
            <div className='absolute left-5 top-5 rounded-full bg-yellowPop px-4 py-2 text-xs font-black text-ink'>
                {label}
            </div>
            <div className='absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3'>
                <div className='h-20 rounded-2xl bg-primary' />
                <div className='h-20 rounded-2xl bg-cyanPop' />
                <div className='h-20 rounded-2xl bg-ink' />
            </div>
        </div>
    );
}

function SectionRule({ label }: { label: string }) {
    return (
        <div className='mb-8 flex items-center gap-4 text-sm font-black'>
            <span>{label}</span>
            <span className='h-px flex-1 bg-ink/40' />
            <span className='grid h-8 w-8 place-items-center rounded-full border border-ink'>
                →
            </span>
        </div>
    );
}

export function PortfolioDeck() {
    return (
        <main id='main' className='bg-white text-ink'>
            <section
                id='hero'
                className='relative overflow-hidden bg-white'
                data-clarity-label='hero'
            >
                <div className='absolute inset-0 deck-grid opacity-70' />
                <div className='absolute inset-x-0 top-0 h-[368px] bg-primary brick-wall md:h-[400px]' />
                <div className='relative mx-auto max-w-[1440px]'>
                    <div className='relative min-h-[760px] overflow-hidden md:min-h-[820px]'>
                        {stickerIcons.map(({ Icon, className }) => (
                            <Sticker
                                key={className}
                                Icon={Icon}
                                className={className}
                            />
                        ))}

                        <div className='pointer-events-none absolute inset-x-0 top-0 z-10 h-[368px] overflow-hidden md:h-[400px]'>
                            <div className='motion-bob absolute left-1/2 top-4 h-[390px] w-[300px] -translate-x-1/2 overflow-hidden rounded-t-[160px] border-[10px] border-white bg-white shadow-deck md:h-[500px] md:w-[420px] md:rounded-t-[220px]'>
                                <Image
                                    src='/assets/images/Banner%20hero.png'
                                    alt='Vu Thi Bich Ngoc portrait'
                                    fill
                                    priority
                                    sizes='(min-width: 768px) 420px, 300px'
                                    className='object-cover object-[50%_16%]'
                                />
                            </div>
                        </div>

                        <div className='absolute inset-x-0 top-[350px] z-20 mx-auto max-w-5xl px-5 text-center md:top-[430px]'>
                            <p className='font-serif text-6xl italic leading-none md:text-8xl'>
                                Welcome to my
                            </p>
                            <div className='motion-drift mx-auto mt-1 w-fit -rotate-2 border-2 border-ink bg-primary px-6 py-3 shadow-sticker md:px-10'>
                                <h1
                                    aria-label={profile.headline}
                                    className='text-5xl font-black uppercase leading-none tracking-tight text-white md:text-8xl'
                                >
                                    Portfolio.
                                </h1>
                            </div>
                        </div>

                        <div className='absolute inset-x-0 bottom-0 z-20 bg-primary py-7 text-center text-white'>
                            <p className='text-lg font-black uppercase tracking-[0.45em] md:text-2xl'>
                                ✦ Vu Thi Bich Ngoc ✦
                            </p>
                        </div>
                    </div>

                    <div className='relative z-30 mx-auto mt-6 flex max-w-4xl flex-col justify-center gap-3 px-5 pb-12 sm:flex-row'>
                        <a
                            href={profile.cvPath}
                            download
                            className='inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-ink px-6 py-4 font-black text-white shadow-sticker'
                            data-clarity-label='download_cv'
                            onClick={() => trackEvent('download_cv')}
                        >
                            <Download size={20} aria-hidden='true' />
                            Download CV
                        </a>
                        <a
                            href='#work'
                            className='inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-yellowPop px-6 py-4 font-black text-ink shadow-sticker'
                            data-clarity-label='view_selected_work'
                            onClick={() => trackEvent('view_selected_work')}
                        >
                            <ArrowDown size={20} aria-hidden='true' />
                            View Selected Work
                        </a>
                    </div>
                </div>
            </section>

            <section className='mx-auto grid max-w-[1440px] gap-8 px-5 py-14 md:grid-cols-[0.95fr_1.05fr] md:px-8'>
                <div className='relative grid min-h-[430px] place-items-center overflow-visible p-0'>
                    <div className='relative h-[430px] w-[min(86vw,360px)] md:h-[500px] md:w-[390px]'>
                        <Image
                            src='/assets/images/Portrait-transparent.png'
                            alt='Vu Thi Bich Ngoc profile portrait'
                            fill
                            sizes='(min-width: 768px) 390px, 86vw'
                            className='object-contain'
                        />
                    </div>
                    <div className='absolute right-8 top-8 grid h-16 w-16 place-items-center rounded-full bg-white text-3xl shadow-sticker'>
                        👀
                    </div>
                </div>

                <div className='flex flex-col justify-center'>
                    <div className='motion-greeting w-fit'>
                        <p className='text-xl font-black uppercase'>
                            Hello{' '}
                            <span className='motion-greeting-hand inline-block'>
                                👋
                            </span>
                        </p>
                        <h2 className='mt-3 text-5xl font-black leading-none md:text-7xl'>
                            I&apos;m <span className='text-primary'>Ngoc</span>
                        </h2>
                    </div>
                    <p className='mt-8 text-xl font-black'>Get to know me</p>
                    <p className='mt-5 max-w-2xl text-lg leading-8 text-neutral-700'>
                        Brand &amp; Marketing Specialist with 5+ years of
                        experience in integrated marketing, brand positioning,
                        and content strategy. Skilled in developing
                        multi-platform campaigns, developing &amp; managing
                        brand assets, and executing creative projects that drive
                        engagement and business growth.
                    </p>
                    <div className='mt-8 grid gap-4 text-base font-bold text-ink sm:grid-cols-2'>
                        <p className='flex items-center gap-3'>
                            <UserRound
                                className='shrink-0 text-primary'
                                size={22}
                            />
                            <span>Vu Thi Bich Ngoc (Kara Vu)</span>
                        </p>
                        <p className='flex items-center gap-3'>
                            <CalendarDays
                                className='shrink-0 text-primary'
                                size={22}
                            />
                            <span>21/12/1999</span>
                        </p>
                        <p className='flex items-center gap-3'>
                            <Home className='shrink-0 text-primary' size={22} />
                            <span>Thai Binh City</span>
                        </p>
                        <p className='flex items-center gap-3'>
                            <Phone
                                className='shrink-0 text-primary'
                                size={22}
                            />
                            <span>0962605693</span>
                        </p>
                        <p className='flex items-center gap-3 sm:col-span-2'>
                            <Mail className='shrink-0 text-primary' size={22} />
                            <span className='break-all'>
                                ngocvu.211299@gmail.com
                            </span>
                        </p>
                    </div>
                </div>
            </section>

            <section
                id='experience'
                className='mx-auto grid max-w-[1440px] gap-8 px-5 py-10 md:grid-cols-[0.9fr_1.1fr] md:px-8'
                data-clarity-label='experience'
            >
                <div>
                    <div className='mb-10'>
                        <h2 className='work-heading mb-6'>
                            Education
                        </h2>
                        <p className='mt-4 font-bold'>
                            Major: Finance and Banking in English
                        </p>
                        <p className='mt-2 text-sm font-bold text-primary'>
                            Hanoi University | September 2017 - July 2021
                        </p>
                    </div>

                    <div className='mb-10'>
                        <h2 className='work-heading mb-6'>
                            Certification
                        </h2>
                        <p className='mt-4 font-bold text-primary'>
                            2021
                        </p>
                        <p className='mt-2 font-bold'>
                            Certificate level B2 of proficiency in English
                        </p>
                    </div>

                    <h2 className='work-heading mb-8'>
                        Tool Stack
                    </h2>

                    <h2 className='work-heading mb-8 mt-10'>
                        Skills
                    </h2>
                    <div className='grid gap-3'>
                        {skillGroups.map((group) => (
                            <div
                                key={group.title}
                                className='rounded-2xl bg-neutral-100 p-4'
                            >
                                <p className='font-black'>{group.title}</p>
                                <p className='mt-2 text-sm text-neutral-700'>
                                    {group.skills.join(' • ')}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='rounded-[36px] bg-neutral-100 p-6 shadow-deck'>
                    <h2 className='work-heading mb-8'>
                        Working Experience
                    </h2>
                    <div className='experience-timeline'>
                        {experiences.map((item) => (
                            <article
                                key={item.company}
                                className='experience-timeline-item'
                            >
                                <h3 className='experience-timeline-role'>
                                    {item.role}
                                </h3>
                                <p className='experience-timeline-period'>
                                    <span>{item.company}</span>
                                    <span aria-hidden='true'>|</span>
                                    <span>{item.period}</span>
                                </p>
                                {[item.summary, ...item.highlights].map((highlight) => (
                                    <p
                                        key={highlight}
                                        className='experience-timeline-copy'
                                    >
                                        - {highlight}
                                    </p>
                                ))}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className='border-y-8 border-primary bg-black px-5 py-14 text-white md:px-8'>
                <div className='mx-auto grid max-w-[1440px] gap-8 md:grid-cols-[0.9fr_1.1fr]'>
                    <div className='grid gap-3'>
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className='min-h-48 rounded-none bg-gradient-to-r from-neutral-900 to-neutral-700'
                            />
                        ))}
                    </div>
                    <div className='flex flex-col justify-center'>
                        <p className='text-7xl font-black uppercase leading-none text-primary [writing-mode:vertical-rl] md:absolute'>
                            Achievement
                        </p>
                        <div className='ml-0 md:ml-44'>
                            <h2 className='text-4xl font-black'>
                                Best Staff of the Month
                            </h2>
                            <div className='mt-8 grid gap-4 sm:grid-cols-3'>
                                <div className='bg-pink-100 p-5 text-center font-black text-ink'>
                                    15
                                    <br />
                                    B2B leads / month
                                </div>
                                <div className='bg-green-100 p-5 text-center font-black text-ink'>
                                    +1.3K
                                    <br />
                                    Organic LinkedIn followers
                                </div>
                                <div className='bg-white p-5 text-center font-black text-ink'>
                                    KPI
                                    <br />
                                    Placeholder
                                </div>
                            </div>
                            <div className='mt-8 rounded-2xl bg-white p-5 text-ink'>
                                <p className='font-black'>
                                    Content Performance
                                </p>
                                <div className='mt-4 grid gap-3 sm:grid-cols-3'>
                                    <div className='rounded-xl bg-neutral-100 p-4'>
                                        329.3K
                                    </div>
                                    <div className='rounded-xl bg-neutral-100 p-4'>
                                        1.9K
                                    </div>
                                    <div className='rounded-xl bg-neutral-100 p-4'>
                                        9.1K
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-neutral-200 px-5 py-16 md:px-8'>
                <div className='mx-auto max-w-[1440px]'>
                    <SectionRule label='Table Of Content' />
                    <h2 className='text-center text-5xl font-black md:text-7xl'>
                        Table <span className='text-yellow-500'>of</span>{' '}
                        Content.
                    </h2>
                    <div className='mt-12 grid gap-5 md:grid-cols-4'>
                        {[
                            ['Graphic Design', Brush],
                            ['Photographer', Camera],
                            ['Videographer', Video],
                            ['Marketing Tools', Code2],
                        ].map(([label, Icon]) => {
                            const TypedIcon = Icon as typeof Brush;
                            return (
                                <div
                                    key={label as string}
                                    className='rounded-[32px] bg-yellow-500 p-8 text-center font-black shadow-sticker'
                                >
                                    <TypedIcon
                                        className='mx-auto mb-4'
                                        size={52}
                                    />
                                    {label as string}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id='work' data-clarity-label='selected_work'>
                {showcase.map((item, index) => {
                    const Icon = item.icon;
                    const work = works[index % works.length];
                    return (
                        <article
                            key={item.title}
                            className='relative overflow-hidden border-b border-ink/10 bg-neutral-100 px-5 py-16 md:px-8'
                        >
                            <div className='absolute inset-0 deck-grid opacity-40' />
                            <div className='relative mx-auto grid max-w-[1440px] gap-8 md:grid-cols-[0.85fr_1.15fr]'>
                                <div>
                                    <SectionRule label={item.label} />
                                    <p className='text-sm font-black uppercase tracking-widest'>
                                        Marketing Portfolio
                                    </p>
                                    <h2 className='mt-4 text-4xl font-black uppercase leading-tight md:text-6xl'>
                                        {item.title}.
                                    </h2>
                                    <p className='mt-5 max-w-xl leading-8 text-neutral-700'>
                                        {item.copy}
                                    </p>
                                    <Link
                                        href={`/work/${work.slug}`}
                                        className='mt-8 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-5 py-3 font-black shadow-sticker'
                                        data-clarity-label='open_case_detail'
                                        onClick={() =>
                                            trackEvent('open_case_detail')
                                        }
                                    >
                                        Open case structure{' '}
                                        <ExternalLink size={18} />
                                    </Link>
                                </div>
                                <div
                                    className={`rounded-[42px] p-5 shadow-deck ${item.color}`}
                                >
                                    <div className='grid gap-5 md:grid-cols-3'>
                                        <div className='rounded-[28px] bg-white p-5 shadow-sticker md:col-span-1'>
                                            <Icon size={56} />
                                            <p className='mt-5 font-black'>
                                                {work.title}
                                            </p>
                                        </div>
                                        <div className='grid gap-4 md:col-span-2'>
                                            <PlaceholderMedia label='Campaign asset' />
                                            <div className='grid gap-4 sm:grid-cols-3'>
                                                <div className='h-28 rounded-3xl bg-white shadow-sticker' />
                                                <div className='h-28 rounded-3xl bg-white shadow-sticker' />
                                                <div className='h-28 rounded-3xl bg-white shadow-sticker' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </section>

            <section
                id='contact'
                className='px-5 py-14 md:px-8'
                data-clarity-label='contact'
            >
                <div className='mx-auto max-w-[1440px] rounded-b-[48px] rounded-t-[12px] bg-primary p-8 text-white md:p-14'>
                    <div className='mb-16 flex items-center gap-6'>
                        <span className='rounded-full border border-white px-12 py-2 font-bold'>
                            Marketing
                        </span>
                        <span className='h-px flex-1 bg-white' />
                        <Sparkles />
                    </div>
                    <h2 className='text-6xl font-black uppercase leading-none md:text-9xl'>
                        Thank You
                    </h2>
                </div>
                <div className='mx-auto grid max-w-[1440px] gap-5 px-4 py-8 md:grid-cols-4'>
                    <a
                        href={createMailto(profile.email, 'Portfolio inquiry')}
                        className='flex items-center gap-3 font-bold'
                        data-clarity-label='contact_email'
                        onClick={() => trackEvent('contact_email')}
                    >
                        <Mail className='text-primary' /> {profile.email}
                    </a>
                    <a
                        href={profile.facebookUrl}
                        className='flex items-center gap-3 font-bold'
                        data-clarity-label='contact_facebook'
                        onClick={() => trackEvent('contact_facebook')}
                    >
                        <ExternalLink className='text-primary' /> Facebook
                    </a>
                    <a
                        href={createZaloUrl(profile.phone)}
                        className='flex items-center gap-3 font-bold'
                        data-clarity-label='contact_zalo'
                        onClick={() => trackEvent('contact_zalo')}
                    >
                        <Phone className='text-primary' /> {profile.phone}
                    </a>
                    <p className='flex items-center gap-3 font-bold'>
                        <MapPin className='text-primary' /> {profile.location}
                    </p>
                </div>
            </section>
        </main>
    );
}
