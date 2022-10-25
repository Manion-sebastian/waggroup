import React from 'react'
import { ExpandedExample } from '../typings'

type Props = {
    test : ExpandedExample // the type must be passed here
}

export default function TestPage({ test }: Props) {
  return (
    <div>
        testPage
        {/* ? dictates that the value may or may not be there. this is important for queries */}
        <p>{test?.title}</p>
        <p>{test?.complete}</p>
        <p>{test?.id}</p>
        <p>{test?.createdAt}</p>
        
        
        
        
    </div>
  )
}