import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { LogoCluster } from '@/components/logo-cluster'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Drop is an open-source, self-hostabled alternative to platforms like Steam and Epic Games.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            An open Steam.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Drop is an open-source, self-hosted alternative to platforms like
            Steam and Epic.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#">Get started</Button>
            <Button variant="secondary" href="/about">
              About
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          A better experience for DRM&#8209;free games.
        </Heading>
        <Screenshot
          width={3408}
          height={1846}
          src="/screenshots/app.webp"
          className="mt-16 h-144 sm:h-auto sm:w-304"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Features</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Upgrade your games library.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Metadata"
          title="Rich metadata editing"
          description="Drop has a rich metadata editor - you can use Markdown, images, and update icons, descriptions, and names."
          graphic={
            <div className="flex h-full w-full items-center justify-center p-4">
              <div className="bg-position-center h-full w-full grow rounded-lg bg-[url(/screenshots/metadata.webp)] bg-cover bg-no-repeat" />
            </div>
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Store"
          title="Let your users discover games"
          description="Drop has a fully featured store, where your users can discover and filter your game library, and create collections of their favourite games."
          graphic={
            <div className="flex h-full w-full items-center justify-center p-4">
              <div className="bg-position-center h-full w-full grow rounded-lg bg-[url(/screenshots/storepage.png)] bg-cover bg-no-repeat" />
            </div>
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Authentication"
          title="Flexible authentication"
          description="Drop supports both simple and SSO authentication, with more features like SCIM on the way."
          graphic={
            <div className="flex h-full w-full items-center justify-center p-4">
              <div className="bg-position-center h-full w-full grow rounded-lg bg-[url(/screenshots/authentication.png)] bg-cover bg-no-repeat" />
            </div>
          }
          fade={['bottom']}
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Metadata"
          title="Automatically import metadata"
          description="Drop can import metadata for your games from platforms like IGDB, GiantBomb, and PCGamingWiki."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="News"
          title="Keep your users up-to-date with server news"
          description="Admins can write news articles that appear in-browser and client, to keep users up-to-date."
          fade={['bottom']}
          graphic={
            <div className="flex h-full w-full items-center justify-center p-4">
              <div className="bg-position-center h-full w-full grow rounded-lg bg-[url(/screenshots/news.png)] bg-cover bg-no-repeat" />
            </div>
          }
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
