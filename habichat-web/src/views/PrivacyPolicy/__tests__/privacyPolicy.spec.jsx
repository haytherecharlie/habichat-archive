import { shallow } from 'enzyme'
import PrivacyPolicy from '../PrivacyPolicy'

 describe('PrivacyPolicy', () => {
   const wrapper = shallow(<PrivacyPolicy/>)

   it('renders a component', () => {
     expect(wrapper.length).toBe(1)
   })
 })
