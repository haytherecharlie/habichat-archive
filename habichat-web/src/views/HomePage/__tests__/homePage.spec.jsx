import { shallow } from 'enzyme'
import HomePage from '../HomePage'

 describe('HomePage', () => {
   const wrapper = shallow(<HomePage/>)

   it('renders a component', () => {
     expect(wrapper.length).toBe(1)
   })
 })
