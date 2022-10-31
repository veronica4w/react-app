import '../setupTests.js'
import { shallow } from 'enzyme';
import Title from '../components/Title/Title';
describe('Title',()=>{
  it('Title Check',()=>{
    const title = 'Crud App';
    const wrapper = shallow(<Title />);
    expect(wrapper.contains(title)).toBeTruthy();
  })
})

