const Jsx3 = () => {
  const isAdmin = false;

  // Comment satırı

  /*
   Comment bloğu
  */



  return (
    <>
      {/* Ternary ile conditional statement yazılabilir */}
      {isAdmin ? (
        <>
          <h2>Admin Menu</h2>
          <ul>
            <li>Create user</li>
            <li>Update user</li>
            <li>Delete user</li>
          </ul>
        </>
      ) : (
        <>
          <h2>User Menu</h2>
          <ul>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </>
      )}
    </>
  );
};

export default Jsx3;
