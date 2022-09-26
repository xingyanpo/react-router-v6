import React from 'react'
import { useParams } from 'react-router-dom'
// import { useSearchParams } from 'react-router-dom'

export default function Detail() {
  // const [searchParams, setSearchParams] = useSearchParams()
  const obj = useParams()
  return (
    // <div>Detail-{searchParams.get('id')}
    // <button onClick={()=> {
    //   setSearchParams('id=1000')
    // }}>其他产品</button>
    // </div>

    // 动态传参
    <div>
      Detail-{obj.id}
    </div>
  )
}
