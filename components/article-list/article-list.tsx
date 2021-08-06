import React from "react";
import { PostInfo } from "../../lib/api";
import ArticleBlock from './article-block';

export default function ArticleList({ articles } : {articles: PostInfo[]}) {
  return <div className="mt-10">
  {articles.length > 0 ?
  articles.map((article, idx) => 
    <ArticleBlock post={article} key={idx}/>
  )
  :
  <p>No content right now. Please check back soon!</p>}
  </div>;
}
