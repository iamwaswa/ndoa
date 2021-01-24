import Link from 'next/link';

export function Layout({ children }) {
  return (
    <main>
      <nav>
        <Link href="/">
          <a>Icon here</a>
        </Link>
        <section>
          <Link href="/gift-registry">
            <a>Gift registry</a>
          </Link>
          <Link href="/live-stream">
            <a>Live stream</a>
          </Link>
        </section>
      </nav>
      {children}
    </main>
  )
}