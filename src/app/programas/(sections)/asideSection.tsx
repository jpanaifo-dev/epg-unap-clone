'use client'
import { FiltersSection } from './filtersSection'

export const AsideSection = ({ isFContinue }: { isFContinue: boolean }) => {
  return (
    <aside className="hidden lg:block lg:max-w-[14rem] xl:max-w-[16rem] w-full sm:sticky sm:h-screen  sm:top-48">
      <FiltersSection isFContinue={isFContinue} />
    </aside>
  )
}
