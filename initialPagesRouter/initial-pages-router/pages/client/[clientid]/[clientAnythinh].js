import { useRouter } from 'next/router'
import React from 'react'

const clientAnythinh = () => {
    const router = useRouter()
    console.log(router.query)
  return (
    <div>clientAnythinh</div>
  )
}

export default clientAnythinh