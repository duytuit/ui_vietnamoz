import CallToAction2 from '@/components/widgets/CallToAction2'
import Contact from '@/components/widgets/Contact'
import Content from '@/components/widgets/Content'
import FAQs2 from '@/components/widgets/FAQs2'
import Features3 from '@/components/widgets/Features3'
import Hero from '@/components/widgets/Hero'
import Pricing from '@/components/widgets/Pricing'
import SocialProof from '@/components/widgets/SocialProof'
import Steps from '@/components/widgets/Steps'
import Team from '@/components/widgets/Team'
import Testimonial from '@/components/widgets/Testimonial'
import { callToActionData, content2Data, contentData, faqsData2, featuresData, heroData, pricingData, socialProofData } from '@/shared/data'
import Image from 'next/image'

export default function Home() {
  return (
   <> 
    <Hero data={heroData} />
    <Pricing {...pricingData} />
    <CallToAction2 {...callToActionData} />
   </>
  )
}
