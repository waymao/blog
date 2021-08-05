import Nav from './nav';

interface Props {
  title?: string
}

export default function Intro({ title }: Props) {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-10 md:mt-16 mb-12">
      <h1 className="text-6.5xl font-medium tracking-tighter leading-tight md:pr-8 font-serif">
        {title ?? "Welcome."}
      </h1>
      <Nav/>
    </section>
  )
}
