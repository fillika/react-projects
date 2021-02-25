import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import CheckboxWithLabel from 'Scripts/main/ts/react/components/CheckboxWithLabel';

test('CheckboxWithLabel changes the text after click', () => {
  const rendered = render(<CheckboxWithLabel labelOn='On' labelOff='Off' />);

  const { queryByLabelText, getByLabelText } = rendered;

  expect(queryByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(getByLabelText(/off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy();
});
