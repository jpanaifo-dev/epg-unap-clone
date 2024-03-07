import InfoSection from './sections/infoSection'
import ProgramSection from './sections/programSection'
import ProgramsActiveSection from './sections/programsActiveSections'
import InfoStudents from './sections/infoStudents'
import EventSection from './sections/eventsSection'
import { NewsSection } from './sections/newsSection'
import { BannerSection } from './sections/bannerSection'

export default function HomePage () {
  return (
    <>
      <BannerSection />
      <ProgramSection />
      <InfoSection />
      <ProgramsActiveSection />
      <InfoStudents />
      <EventSection />
      <NewsSection />
    </>
  )
}
