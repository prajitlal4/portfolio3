import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description: 'I’m Prajit Lal. I live in Perth, Western Australia.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Prajit Lal. I live in Perth, Western Australia.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Hello! I&apos;m Prajit Lal, a Computer Science graduate with a
              deep-seated passion for technology, particularly in the realms of
              AI, object-oriented programming, and mobile app development. Since
              graduating, I&apos;ve taken on the role of a fullstack developer
              and, over the past six months, I&apos;ve not only broadened my
              technical skillset but also deepened my understanding of creating
              functional and efficient digital solutions.
            </p>

            <p>
              One of my proudest achievements to date is the successful
              development of a marketing website, a major project that showcased
              my proficiency in integrating various tech stacks and tools. While
              I&apos;ve worked on numerous small-scale projects, it&apos;s the
              larger, more intricate tasks that truly invigorate me. My
              aspiration is clear: to design and develop apps that simplify
              tasks and streamline operations for businesses and individuals
              alike.
            </p>

            <p>
              Beyond the world of bits and bytes, fitness is a cornerstone of my
              life. Regular visits to the gym have become more than just a
              routine; they&apos;re a testament to my commitment to personal
              growth, both mentally and physically. Each rep, each set
              symbolizes my unyielding pursuit of excellence and my quest for
              new challenges.
            </p>

            <p>
              In an industry that&apos;s constantly evolving, I believe in the
              power of continuous learning. That&apos;s why, in addition to my
              formal education, I&apos;ve actively pursued various programming
              courses. These endeavors equip me with a versatile skill set,
              positioning me not just as a developer but as a solo developer
              with the ability to drive projects from ideation to execution.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/PrajitLal" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink
              href="https://github.com/prajitlal4"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/prajit-lal-2756ba189/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:prajit.lal4@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              Get in contact with me!
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
