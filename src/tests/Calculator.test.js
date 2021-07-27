import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it("should be able to add numbers together", () => {
    const button4 = container.find("#number4");
    const add = container.find("#operator_add");
    const button1 = container.find("#number1");
    const equals = container.find("#operator-equals");
    const runningTotal = container.find("#running-total")
    button4.simulate("click");
    add.simulate("click");
    button1.simulate("click");
    equals.simulate("click");
    expect(runningTotal.text()).toEqual("5");
  })

  it("should be able to subtract numbers", () => {
    const button7 = container.find("#number7");
    const subtract = container.find("#operator-subtract");
    const button4 = container.find("#number4");
    const equals = container.find("#operator-equals");
    const runningTotal = container.find("#running-total")
    button7.simulate("click");
    subtract.simulate("click");
    button4.simulate("click");
    equals.simulate("click");
    expect(runningTotal.text()).toEqual("3");
  })

  it("should be able to multiply numbers", () => {
    const button3 = container.find("#number3");
    const multiply = container.find("#operator-multiply");
    const button5 = container.find("#number5");
    const equals = container.find("#operator-equals");
    const runningTotal = container.find("#running-total")
    button3.simulate("click");
    multiply.simulate("click");
    button5.simulate("click");
    equals.simulate("click");
    expect(runningTotal.text()).toEqual("15");
  })

})

