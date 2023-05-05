import React from 'react';
import renderer from 'react-test-renderer';
import {EmptyState} from '../../../src/components';
/* import * as ReactDOM from 'react-dom'; */

describe('EmptyState', () => {
  it('debe mostrar text como prop', () => {
    const wrapper = renderer.create(
        <EmptyState text="mi mock text prop"/>
    )
    expect(wrapper.toJSON()).toMatchSnapshot()

  });
});