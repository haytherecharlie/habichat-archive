import React from 'react'
import { shallow } from 'enzyme'
import Feed from '../Feed'

 describe('Feed', () => {
   const wrapper = shallow(<Feed/>)

   it('renders a component', () => {
     expect(wrapper.length).toBe(1)
   })
 })
