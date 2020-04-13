import React from 'react'
import { shallow } from 'enzyme'
import Onboarding from '../Onboarding'

 describe('Onboarding', () => {
   const wrapper = shallow(<Onboarding/>)

   it('renders a component', () => {
     expect(wrapper.length).toBe(1)
   })
 })
