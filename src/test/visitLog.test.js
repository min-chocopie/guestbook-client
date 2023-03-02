import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import VisitLog from '../components/visitLog/Main';
import { READ_ALL_LOG, CREATE_LOG } from '../share/gql';


// test code 
it("should render loading and visig log", async () => {
  const readMock = { 
    request: {
      query: READ_ALL_LOG,
    },
    result: {
      data: {
        readAllLog: [
          { id: '1', name: '토끼', comment: '안녕하세요', createdAt: Date.now(), updatedAt: Date.now() }
        ]
      }
    }
  };

  render(
    <MockedProvider mocks={[readMock]}>
      <VisitLog />
    </MockedProvider>
  );

  // console.log(await screen.findByText('토끼'));
  expect(await screen.findByText('토끼')).toBeInTheDocument;
});


it('visitLog should added', async () => {
  const newLog = {
    name: '호랑이', password: 'password', comment: '반갑습니다',
  }

  const addMock = {
    request: {
      query: CREATE_LOG,
      variables: {
        name: newLog.name, password: newLog.password, comment: newLog.comment,
      }
    },
    result: {
      data: {
        createLog: {
          id: '2', name: newLog.name, comment: newLog.comment, createdAt: Date.now(), updatedAt: Date.now(),
        }
      }
    }
  }

  window.alert = jest.fn();
  window.alert.mockClear();

  Object.defineProperty(window, 'location', {
    writable: true,
    value: { assign: jest.fn() }
  });

  render(
    <MockedProvider mocks={[addMock]}>
      <VisitLog />
    </MockedProvider>
  )

  const name = await screen.findByPlaceholderText('이름');
  const password = await screen.findByPlaceholderText('비밀번호');
  const comment = await screen.findByPlaceholderText('방명록을 적어주세요');

  userEvent.type(name, newLog.name);
  userEvent.type(password, newLog.password);
  userEvent.type(comment, newLog.comment);

  const button = await screen.findByText('등록');
  userEvent.click(button);
  expect(await screen.findByText(newLog.comment)).toBeInTheDocument();
})
