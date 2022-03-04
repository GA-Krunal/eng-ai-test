import React from 'react'
import { useSelector } from 'react-redux'
import { json } from 'stream/consumers'

const RawJson = () => {
    type stateType = {
        data:any
        rawJson:any
}
    const rawJson = useSelector((state:stateType)=>{
        return state.rawJson
    })
  return (
    <div> {JSON.stringify(rawJson)}</div>
  )
}

export default RawJson