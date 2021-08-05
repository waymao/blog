import styles from './nav.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavInfo {
  href: string,
  title: string,
  is_prefix?: boolean
}

function shouldHighLight(path: string, navinfo: NavInfo) {
  if (navinfo.is_prefix) {
    return path.startsWith(navinfo.href);
  } else {
    return path == navinfo.href;
  }
}

const link_list: NavInfo[] = [
  {href: "/", title: "home"},
  {href: "/tech", title: "tech", is_prefix: true},
  {href: "/life", title: "life", is_prefix: true},
]

export default function nav() {
  const { asPath } = useRouter();

  return <nav className={styles.nav + " text-center font-serif md:text-left text-lg mt-5 md:pl-8"}>
    <ol className="flex flex-row">
      {link_list.map((item, idx) => 
        <li key={idx} className={shouldHighLight(asPath, item) ? styles.hl : ""}>
          <Link href={item.href}>{item.title}</Link>
        </li>)}
    </ol>
  </nav>;
}
