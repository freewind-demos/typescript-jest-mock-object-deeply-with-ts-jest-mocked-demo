import {mocked} from 'ts-jest/utils'
import {user} from './user';

jest.mock('./user');

describe('User', () => {

  const userMock = mocked(user, true);

  beforeEach(() => jest.clearAllMocks());

  it('data fields are not changed', () => {
    expect(userMock.name).toBe('testing-user')
  });

  it('deep methods can also have right typing', () => {
    expect(userMock.deep.hello()).toBe(undefined);

    userMock.deep.hello.mockReturnValue('new-hello');
    expect(userMock.deep.hello()).toBe('new-hello');
  })

})
