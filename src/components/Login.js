import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

// import { unstable_HistoryRouter } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({email:"",password:""})
  // let history = unstable_HistoryRouter();
  let navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({email:credentials.email,password:credentials.password })
    });
    const json = await response.json();
    console.log(json)
    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      // history.push("/");
      props.showAlert("succesfully Logged in  your account","success")
      navigate("/")

    }else{
      props.showAlert("invalid Details","danger")
    }
  };

  const onChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-4">
      <h1>Login in to continue Mynotebook</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            onChange={onChange}
            id='email'
            name='email'
            aria-describedby='emailHelp'
            value={credentials.email}
          />
          <div id='emailHelp' className='form-text'>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            name='password'
            id='password'
            onChange={onChange}
            value={credentials.password}
          />
        </div>

        <button
          type='submit'
          className='btn btn-primary'
          >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
