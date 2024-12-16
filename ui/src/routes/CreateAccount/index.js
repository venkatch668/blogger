import { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router";
import { NavLink, Link } from "react-router";
import { post } from "../../util/rest";
function CreateAccount() {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [response, setResponse] = useState("");

  let navigate = useNavigate();
  const submitForm = () => {
    post("/users/register", { username, password, email })
      .then((res) => {
        console.log(res);
        setResponse(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mt-5 ">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="card gradient-container">
            <div className="card-body">
              {response ? (
                <div class="alert alert-success" role="alert">
                  <p>{response.message}</p> 
                  <NavLink to="/"> Login now !</NavLink>
                </div>
                
              ) : (
                <>
                  <div className="form-group">
                    <label for="email">User Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="User Name"
                      required
                      onChange={(event) => setUserName(event.target.value)}
                    />
                  </div>

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
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
