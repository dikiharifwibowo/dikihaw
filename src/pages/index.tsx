import { Inter } from '@next/font/google'
import { Flipped } from 'react-flip-toolkit';
import { LandingHero } from '@/components/Hero';
import { SectionTitle } from '@/components/Typography/SectionTitle';
import { PageMetaTags } from '@/components/Seo/PageMetaTags';
import { PostPreviewList } from '@/components/Post/PostPreviewList';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <PageMetaTags />
      <LandingHero/>

      <div className="my-16" />

      <Flipped flipId="latest-writing-heading" spring="noWobble" translate>
      {(flippedProps) => (
          <SectionTitle {...flippedProps}>Latest Writing</SectionTitle>
        )}
      </Flipped>

      <PostPreviewList/>
    </>
  )
}
