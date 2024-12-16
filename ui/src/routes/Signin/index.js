import { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router";
import { post } from "../../util/rest";
import { NavLink, Link } from "react-router";
function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [response, setResponse] = useState("");
  let navigate = useNavigate();
  const submitForm = () => {
    post("/users/login", { email, password })
      .then((res) => {
        console.log(res);
        localStorage.setItem("userData", JSON.stringify(res));
        navigate("/dashboard");
      })
      .catch((err) => {
        setResponse(err);
        console.log(err);
      });
  };

  // const navigateToCreateAccount = () => {
  //   navigate("/createAccount");
  // };
  return (
    <div className="container mt-5 ">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="card gradient-container">
            <div className="card-body">
              {response ? (
                <div class="alert alert-danger" role="alert">
                  <p> {response.message} </p>
                </div>
              ) : (
                <>
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      required
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      required
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                  <button className="btn btn-danger" onClick={submitForm}>
                    Login
                  </button>
                </>
              )}
              <p className="mt-3">
                Not registered?
                <NavLink to="/createAccount"> Create an account </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
