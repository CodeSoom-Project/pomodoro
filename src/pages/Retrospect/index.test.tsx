import { render } from '@testing-library/react';

import { RootState } from 'store/reducer';
import { useSelector } from 'react-redux';

import Retrospect from '.';

import { Status } from 'typings/time';

describe('Retrospect', () => {
  beforeEach(() => {
    (useSelector as jest.Mock).mockImplementation(
      (state: (arg: RootState) => void) =>
        state({
          time: {
            endTime: 0,
            remainTime: '01 : 00',
            location: '/focus',
            status: Status.Running,
          },
          retrospect: {
            isEnd: true,
            retrospect: [],
          },
        })
    );
  });

  it('헤더가 나타납니다.', () => {
    const { container } = render(<Retrospect />);

    expect(container).toHaveTextContent('오늘의 회고 목록');
  });
});
