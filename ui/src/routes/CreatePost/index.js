import { useState } from "react";
import "./styles.css";
import PageUnderConstruction from "../../components/PageUnderConstruction";
import { post } from "../../util/rest";
import { NavLink, Link } from "react-router";

function CreatePost() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [response, setResponse] = useState("");

  const submitForm = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    post("/bloggers/create", { title, content, user_id: userData.id })
      .then((res) => {
        console.log(res);
        setResponse(res);
        setContent("");
        setTitle("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="page">
      <h1> Create Post </h1>
      <div className="container mt-5 ">
        {response && (
          <div class="alert alert-success" role="alert">
            <p>{response.message} !!
            <NavLink to="/dashboard"> Its Live now</NavLink> </p>
          </div>
        )}
      </div>
      <div className="container mt-5 ">
        <div className="row justify-content-center text-left align-items-center">
          <div className="col-md-6">
            <div className="form-group">
              <label for="email">User Name</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Title"
                required
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label for="content">Content</label>
              <textarea
                type="email"
                className="form-control"
                id="content"
                placeholder="content"
                required
                value={content}
                onChange={(event) => setContent(event.target.value)}
              />
            </div>
            <button className="btn btn-danger" onClick={submitForm}>
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
