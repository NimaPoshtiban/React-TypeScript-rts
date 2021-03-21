import { useState } from 'react';

const users = [
  { name: 'Sara', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
    // console.log(foundUser);
  };

  return (
    <div>
      <h3>User Search</h3>
      <input
        required
        spellCheck
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={onClick}>find User</button>
      <div>
        {user && user.name}
        <br />
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
