import React from 'react'

const SlugPage = ({params}) => {

    console.log(params)

  return (
    <div>
        <h1>SlugPage</h1>
        <p>{params.slugPage}</p>
    </div>
  )
}

export default SlugPage