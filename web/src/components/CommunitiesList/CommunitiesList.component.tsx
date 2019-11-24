import React, { useEffect, useState } from 'react'
import { getOptions } from 'src/utils/options'
import * as S from './CommunitiesList.style'

const CommunitiesList = ({ activeCommunity, setActiveCommunity }) => {
  const [communities, setCommunities] = useState([])
  const fetchCommunities = async () => {
    try {
      const req = await fetch('http://localhost:4000/communities/fetch/20', getOptions())
      const { data } = await req.json()
      setCommunities(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchCommunities()
    const logData = (e) => setCommunities((prev) => [...prev, JSON.parse(e.data)])
    const listener = new EventSource('http://localhost:4000/communities/stream')
    listener.addEventListener('event', logData, false)
    return () => listener.removeEventListener('event', logData, false)
  }, [])

  return (
    <S.CommunitiesList>
      <div>{activeCommunity || 'Select a Community'}</div>
      <ul>
        {communities.map(({ name, _id }) => (
          <button onClick={() => setActiveCommunity(_id)} key={name}>{name}</button>
        ))}
      </ul>
    </S.CommunitiesList>
  )
}

export default CommunitiesList
