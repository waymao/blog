import React from "react";
import { PostInfo } from "../../lib/api";
import ArticleBlock from './article-block';

export default function ArticleList({ articles } : {articles: PostInfo[]}) {
  return <div className="mt-10">
  {articles.map((article, idx) => 
    <ArticleBlock post={article} key={idx}/>
  )}
  </div>;
}
