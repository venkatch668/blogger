import "./index.css"
import { NavLink, Link } from "react-router";
function Sidebar() {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse nav"
    >
      <div className="sidebar-sticky pt-6">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/dashboard" className="nav-link active">
              <span className="fas fa-home"></span>
              Dashboard <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/createpost" className="nav-link" >
              <span className="fas fa-tasks"></span>
              Create Post
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/comments"className="nav-link" >
              <span className="fas fa-smile"></span>
              Comments
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/settings" className="nav-link" >
              <span className="fas fa-th-list"></span>
              Settings
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/reports" className="nav-link" >
              <span className="fas fa-khanda"></span>
              Reports
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/integrations" className="nav-link" >
              <span className="fas fa-cloud"></span>
              Integrations
            </NavLink>
          </li>
        </ul>

        
      </div>
    </nav>
  );
}
export default Sidebar;
