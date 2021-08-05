import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="pt-28 pb-24 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Yichen Wei's website.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            
          </div>
        </div>
        <div className="text-center text-gray-400 pb-4">
          <p>Built using {" "}
            <a href="https://nextjs.org/" className="underline hover:text-black transition-colors">
            Next.js
            </a> 
            {" "} from their {" "}
            <a href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter" className="underline hover:text-black transition-colors">
              Example.
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}
