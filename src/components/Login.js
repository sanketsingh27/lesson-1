import { useState } from "react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`the email is ${email}`);
  };

  return (
    <>
      <h1>Login page</h1>

      <form onSubmit={handleSubmit}>
        <label>E-mail</label>
        <input type="email" value={email} onChange={handleEmail} />

        <label>password</label>
        <input type="password" value={password} onChange={handlePassword} />

        <button disabled={true} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
