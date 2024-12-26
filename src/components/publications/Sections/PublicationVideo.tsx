import { IPublicationFileList } from '@/types'

interface IProps {
  dataList: IPublicationFileList[]
}

export const PublicationVideo = (props: IProps) => {
  const { dataList } = props
  return (
    <section>
      {/* <div>PublicationVideo</div> */}
      <div className="flex flex-col gap-4">
        {dataList.map((item, index) => {
          return (
            <div key={index} className="w-full">
              <video width="320" height="240" controls>
                <source src={item.file} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )
        })}
      </div>
    </section>
  )
}
