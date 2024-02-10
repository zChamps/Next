import { useRouter } from 'next/router'
import React from 'react'

const BlogHomePage = () => {
    const router = useRouter()
    console.log(router.query)
  return (
    <div>BlogHomePage</div>
  )
}

export default BlogHomePage