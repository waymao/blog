import { PostInfo } from "../../lib/api";
import Link from 'next/link';
import DateFormatter from "../date-formatter";

export default function ArticleBlock({ post }: {post: PostInfo}) {
  return (
  <div className="md:p-3 my-5 md:mx-3">
    <h3 className="hover:underline font-medium text-xl md:text-2xl">
      <Link href={`posts/${post.slug}`}>
        {post.title}
      </Link>
    </h3>
    
    <p>{post.excerpt ?? ""}</p>
    <p className="text-gray-700 text-sm mt-2"><DateFormatter dateString={post.date}/></p>
  </div>
  )
}

