import Link from 'next/link'
import React from 'react'

const HomeBlogPage = () => {
  return (
    <main>
        <h1>HomeBlogPage</h1>
        <Link href={"/blog/qualquerlink"}>Link 1</Link>
        <Link href={"/blog/outrapagina"}>Link 2</Link>
    </main>
  )
}

export default HomeBlogPage