import { shallow } from 'enzyme'
import AuthenticatedRouter from '../AuthenticatedRouter'

 describe('AuthenticatedRouter', () => {
   const wrapper = shallow(<AuthenticatedRouter/>)

   it('renders a component', () => {
     expect(wrapper.length).toBe(1)
   })
 })
