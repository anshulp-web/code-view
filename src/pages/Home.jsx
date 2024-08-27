import { useState } from 'react';
import { v4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const [roomId, setRoomId] = useState('');
  const [username, setusername] = useState('');
  const navigate = useNavigate();
  const CreateNewRoom = (e) => {
    e.preventDefault();
    const Id = v4();
    setRoomId(Id);
    toast.success('Room id generated');
  };
  //HANDLE SUBMIT
  const handleSubmit = () => {
    if (!roomId || !username) {
      toast.error('Please enter room id or username');
      return;
    }
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };
  const handleenter = (e) => {
    if (e.key == 'Enter') {
      handleSubmit();
    }
  };
  return (
    <>
      {/* Home Page */}
      <div className="HomeWrapper">
        <div className="formWrapper">
          <span className="first-logo-text">C</span>
          <span className="first-logo">ode</span>
          <span className="last-logo-text">v</span>
          <span className="logo-text">iew</span>

          <div className="inputGroup">
            <h4>Enter invitation room id</h4>

            <input
              type="text"
              placeholder="Room Id"
              className="input"
              onChange={(e) => setRoomId(e.target.value)}
              value={roomId}
              onKeyUp={handleenter}
            />
            <input
              type="text"
              placeholder="User Name"
              className="input"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              onKeyUp={handleenter}
            />
            <button type="button" onClick={handleSubmit}>
              Join
            </button>
          </div>
          <p>
            If you do not have an invitaion id then create &nbsp;
            <a className="createNewRoom" onClick={CreateNewRoom}>
              Create new room
            </a>
          </p>
        </div>
        <footer>
          <h5>
            Copyright 2024
          </h5>
        </footer>
      </div>
    </>
  );
};

export default Home;
