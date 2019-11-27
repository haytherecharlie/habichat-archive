import React, { useState } from 'react'
import slug from 'slug'
import { useSelector } from 'react-redux'
import { postOptions } from 'src/utils/options'
import * as S from './AddCommunity.style'

const AddCommunity = () => {
  const { id } = useSelector((s) => s.user)
  const [name, setName] = useState('')

  const updateName = ({ target }) => {
    setName(target.value)
  }

  const createCommunity = async () => {
    try {
      const body = JSON.stringify({ name, founder: id, slug: slug(name) })
      const req = await fetch('http://localhost:4000/community', postOptions(body))
      const res = req.json()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <S.AddCommunity>
      <input onChange={updateName} />
      <button onClick={createCommunity}>Submit</button>
    </S.AddCommunity>
  )
}

export default AddCommunity
