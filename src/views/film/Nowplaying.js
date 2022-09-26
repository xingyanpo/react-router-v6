import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Nowpalying() {
  const [films, setFilmes] = useState([])
  const navigate = useNavigate()
  const toDetail = id => {
    // navigate(`/detail?id=${id}`)
    // 动态路由
    navigate(`/detail/${id}`)
  }
  useEffect(() => {
    fetch('https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=7187752', {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16597710112470525318201345"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => res.json())
      .then(res => {
        setFilmes(res.data.films) 
      })
  }, [])
  return (
    <div>
      {
        films.map(item=> 
           <li key={item.filmId} onClick={() => {
            toDetail(item.filmId)
           }}>{item.name}</li>
          )
      }
    </div>
  )
}
