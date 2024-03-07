import { type IPublicationForList } from '@/types'
import { CardEvent } from './(variants)/CardEvent'
import { CardNews } from './(variants)/CardNews'
import { CardSmall } from './(variants)/CardSmall'
interface ICardPublication {
  publication: IPublicationForList
  variant?: 'gallery' | 'list'
  type?: 'news' | 'event' | 'small' | '' | string
  //   style?: React.CSSProperties
}

export function CardPublication (props: ICardPublication) {
  return (
    <div>
      {props.type === 'event' ? (
        <CardEvent props={props.publication} />
      ) : props.type === 'small' ? (
        <CardSmall props={props.publication} />
      ) : (
        <CardNews props={props.publication} />
      )}
    </div>
  )
}
