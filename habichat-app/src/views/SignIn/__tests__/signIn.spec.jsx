import React from 'react'
import { shallow } from 'enzyme'
import SignIn from '../SignIn'

 describe('SignIn', () => {
   const wrapper = shallow(<SignIn/>)

   it('renders a component', () => {
     expect(wrapper.length).toBe(1)
   })
 })
