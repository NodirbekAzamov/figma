import React from 'react'

const SinglePage = () => {
  
  const id = +window.location.href.split("/")[4]
  console.log(id.name);
  return (
    <div>

    </div>
  )
}

export default SinglePage