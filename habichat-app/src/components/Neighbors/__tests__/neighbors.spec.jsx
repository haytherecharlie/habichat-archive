import React from 'react'
import { shallow } from 'enzyme'
import Neighbors from '../Neighbors'

 describe('Neighbors', () => {
   const wrapper = shallow(<Neighbors/>)

   it('renders a component', () => {
     expect(wrapper.length).toBe(1)
   })
 })
