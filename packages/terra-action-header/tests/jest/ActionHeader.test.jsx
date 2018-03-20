import React from 'react';
import ActionHeader from '../../src/ActionHeader';

describe('ActionHeader', () => {
  // Snapshot Tests
  it('should render a default action header', () => {
    const actionHeader = render(<ActionHeader />);
    expect(actionHeader).toMatchSnapshot();
  });

  it('should render an action header with title', () => {
    const actionHeader = render(<ActionHeader title="Action Header" />);
    expect(actionHeader).toMatchSnapshot();
  });

  it('should render an action header with back button and title', () => {
    const actionHeader = render(<ActionHeader onBack={() => {}} title="Action Header" />);
    expect(actionHeader).toMatchSnapshot();
  });

  it('should render an action header with close button and title', () => {
    const actionHeader = render(<ActionHeader onClose={() => {}} title="Action Header" />);
    expect(actionHeader).toMatchSnapshot();
  });

  it('should render an action header with back and close buttons and title', () => {
    const actionHeader = render(<ActionHeader onBack={() => {}} onClose={() => {}} title="Action Header" />);
    expect(actionHeader).toMatchSnapshot();
  });
  // // Prop Tests
  // it('should use the default value when no value is given', () => {
  //   const wrapper = shallow(defaultRender);
  //   expect(wrapper.find('.action-header').text()).toEqual('default');
  // });
  //
  // // Structure Tests
  // it('should have the class action-header', () => {
  //   const wrapper = shallow(defaultRender);
  //   expect(wrapper.prop('className')).toContain('action-header');
  // });
});
