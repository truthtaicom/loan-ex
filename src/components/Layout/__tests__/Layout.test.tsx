import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../Layout';

describe('<Layout /> spec', () => {
  it('renders the component', () => {
    const component = render(<Layout />);
    expect(component).toMatchSnapshot();
  });
});
