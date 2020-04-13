import React from 'react'
import { shallow } from 'enzyme'
import UnauthenticatedRouter from '../UnauthenticatedRouter'

 describe('UnauthenticatedRouter', () => {
   const wrapper = shallow(<UnauthenticatedRouter/>)

   it('renders a component', () => {
     expect(wrapper.length).toBe(1)
   })
 })
