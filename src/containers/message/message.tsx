import React from 'react';
import { useSelector } from 'react-redux';
import CreateNewUserButton from 'src/containers/message/create-new-user/create-user-button';
import ReduxStorage from 'src/models/storage';

function Message() {
  const rooms = useSelector((state: ReduxStorage) => {
    console.log(state);
    return state?.rooms ?? [];
  });

  return (
    <div className="message-content">
      {rooms.map((room) => (
        <div>{room.roomName}</div>
      ))}
      <CreateNewUserButton />
    </div>
  );
}

export default Message;
