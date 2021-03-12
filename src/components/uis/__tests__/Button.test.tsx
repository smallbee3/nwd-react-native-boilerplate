import 'react-native';

import {
  act,
  fireEvent,
  render,
  RenderAPI,
} from '@testing-library/react-native';
import { ThemeType } from 'dooboo-ui';
import * as React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import { createTestElement } from '../../../../test/testUtils';
import Button from '../Button';

let props: any;
let component: React.ReactElement;
let testingLib: RenderAPI;

describe('[Button]', () => {
  let cnt = 1;

  beforeEach(() => {
    props = {
      onPress: (): number => cnt++,
      testID: 'btn',
    };

    component = createTestElement(<Button {...props} />);
  });

  it('[ThemeType.Light] renders without crashing', () => {
    const rendered = renderer.create(component).toJSON();

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it('should render [ThemeType.Dark] without crashing', () => {
    component = createTestElement(<Button {...props} />, ThemeType.DARK);

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it('should render [isDisabled] status without crashing', () => {
    props.isDisabled = true;
    component = createTestElement(<Button {...props} />);

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it('should render [isLoading] status without crashing', () => {
    props.isLoading = true;
    component = createTestElement(<Button {...props} />);

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  describe('interactions', () => {
    beforeEach(() => {
      testingLib = render(component);
    });

    it('should simulate onClick', () => {
      const btn = testingLib.queryByTestId('btn');

      act(() => {
        fireEvent.press(btn);
        fireEvent.press(btn);
      });

      expect(cnt).toBe(3);
    });
  });
});
