import React from "react"

const LazyLoad = (path)=>{
  const Comp = React.lazy(()=>import(`../views/${path}`))
  return (
      <React.Suspense fallback={<>加载中....</>}>
          <Comp/>
      </React.Suspense>
  )
}

export default LazyLoad