import React, { useState } from 'react'

export default function FBC(props) {
    let [state,changeState ] = useState()

  return (
    <div>
      <p> i am a FBC {props.topic} </p>
    </div>
  )
}
