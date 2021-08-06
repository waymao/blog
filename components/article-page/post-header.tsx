import DateFormatter from '../date-formatter';
import PostTitle from './post-title';


interface Props {
  title: string,
  coverImage?: string,
  date: string
}

export default function PostHeader({title, coverImage, date}: Props) {
  return <header>
  <PostTitle>
    {title}
  </PostTitle>
  <p className="text-center">
    <DateFormatter dateString={date}/>
  </p>
  </header>
}