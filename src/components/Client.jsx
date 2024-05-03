import Avator from 'react-avatar';
const Client = ({ username }) => {
  return (
    <>
      <div className="client">
        <Avator name={username} size={'40px'} round="10px" />
        <span className="clientName">{username}</span>
      </div>
    </>
  );
};

export default Client;
