import React from 'react'
import { shallow } from 'enzyme'
import Community from '../Community'

 describe('Community', () => {
   const wrapper = shallow(<Community/>)

   it('renders a component', () => {
     expect(wrapper.length).toBe(1)
   })
 })
