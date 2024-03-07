'use client'

export const Banner = ({
  image,
  title,
  description,
  customSection
}: {
  title?: string
  image?: string
  description?: string
  customSection?: JSX.Element
}) => {
  return (
    <div
      className="w-full flex justify-center bg-cover relative h-[24rem] md:h-[28rem] "
      style={{
        backgroundImage: `url(${image})`,
        objectFit: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute h-full inset-0 bg-black bg-opacity-70"></div>

      <div className="flex flex-col w-full h-full justify-end px-4 sm:px-6 py-12 container max-w-7xl z-10">
        <div className="max-w-2xl">
          <h1 className="w-fit text-2xl sm:text-3xl lg:text-4xl font-bold text-white uppercase md:mb-3">
            {title}
          </h1>
          <div>
            <hr className="w-24 h-1 bg-yellow-400 mb-3" />
          </div>
          <div className="">
            {customSection ?? (
              <h3 className="text-white font-medium lg:text-lg">{description}</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
