import DateFormatter from '../date-formatter';
import PostTitle from './post-title';


interface Props {
  title: string,
  coverImage?: {url: string, subtitle?: string},
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
  {coverImage && 
      <div className="mt-6">
        <img src={coverImage.url} className="w-full"/>
        {coverImage.subtitle && 
          <p className="text-gray-700 text-sm mt-1">{coverImage.subtitle}</p>}
      </div>
  }
  </header>
}