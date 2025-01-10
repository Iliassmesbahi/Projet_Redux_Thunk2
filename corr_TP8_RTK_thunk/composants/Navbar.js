import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { rechercher } from "../features/StagiaireSlice";

const Navbar = () => {
  const list = useSelector((st) => st.stg.list);
  const dispatch = useDispatch();
  const terme = useRef();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Redux CRUD App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">
                Nouveau stagiaire
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/all">
                Tous les stagiaires ({list.length})
              </Link>
            </li>
          </ul>
          <div>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              ref={terme}
              onChange={()=>dispatch(rechercher(terme.current.value))}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
