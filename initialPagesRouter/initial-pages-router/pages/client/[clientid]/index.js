import { useRouter } from 'next/router'
import React from 'react'

const HomePageClientId = () => {
    const router = useRouter()
    console.log(router.query)
  return (
    <div>HomePageClientId</div>
  )
}

export default HomePageClientId