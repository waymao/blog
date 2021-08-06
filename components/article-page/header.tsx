import Link from 'next/link'

export default function Header({ category, cat_url }: {category?: string, cat_url?: string}) {
  return (
    <h2 className="font-bold tracking-tight md:tracking-tighter leading-tight mb-14 md:mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline font-serif text-2xl md:text-4xl">Blog</a>
      </Link>
      {(category && cat_url) ?
      <>
        <span className="mx-2 md:mx-4 font-lg">{">"}</span>
        <Link href={cat_url}>
          <a className="text-xl font-serif md:font-2xl tracking-normal hover:underline font-medium">{category}</a>
        </Link>
      </>
      : 
      ""}
    </h2>
  )
}
