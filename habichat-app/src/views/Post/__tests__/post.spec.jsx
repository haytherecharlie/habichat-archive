import React from 'react'
import { shallow } from 'enzyme'
import Post from '../Post'

 describe('Post', () => {
   const wrapper = shallow(<Post/>)

   it('renders a component', () => {
     expect(wrapper.length).toBe(1)
   })
 })
