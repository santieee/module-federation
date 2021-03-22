import React from 'react';
interface IUserState {
  name: string;
  id: number | null;
}
interface IProps {
  user?: IUserState
}

function App({user}: IProps) {
  return (
    <div className="App">
      INDIVIDUAL LIMIT FRONTEND
      <br/>
      State from container: {JSON.stringify(user)}
    </div>
  );
}

export default App;
