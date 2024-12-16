import { useEffect, useState } from "react";
import "./styles.css";
import { get, del } from "../../util/rest";
import { NavLink, Link } from "react-router";
function Dashboard() {
  const [listType, setListType] = useState("all");
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getAPI();
  }, []);

  const getAPI = (userId) => {
    const url = `/bloggers/blogs${userId ? "/" + userId : ""}`;
    get(url)
      .then((res) => {
        console.log(res);
        setResponse(res);
      })
      .catch((err) => {
        setResponse([]);
        console.log(err);
      });
  };

  const getAll = () => {
    setListType("all");
    getAPI();
  };
  const getByMe = () => {
    setListType("byme");
    const userData = JSON.parse(localStorage.getItem("userData"));
    getAPI(userData.id);
  };

  const deleteBlog = (blogId) => {
    del(`/bloggers/deleteblog/${blogId}`)
      .then((res) => {
        console.log(res);
        getByMe();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="home">
      <div className="blogs">
        <div className="container mt-5 ">
          <div className="col-md-12">
            <ul>
              <li>
                <button
                  onClick={getAll}
                  className={`btn btn-default ${
                    listType === "all" && "btn-primary"
                  }`}
                >
                  All
                </button>
              </li>
              <li>
                <button
                  onClick={getByMe}
                  className={`btn btn-default ${
                    listType === "byme" && "btn-primary"
                  }`}
                >
                  My Blogs
                </button>
              </li>
            </ul>
          </div>
        </div>
        {response.length === 0 && (
          <div className="container mt-5 ">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <p>
                    No blogs have been posted yet. Start sharing your thoughts
                    and create your first blog
                    <NavLink to="/dashboard/createpost"> Create Post </NavLink> 
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {response.map((e) => (
          <div className="container mt-5 ">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="h3">
                    {e.title}
                    {listType === "byme" && (
                      <span
                        className="fa fa-trash"
                        onClick={() => deleteBlog(e.post_id)}
                      ></span>
                    )}
                  </div>
                  <div className="desc">{e.content}</div>
                  <div className="h6 mt-2">{e.owner}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
