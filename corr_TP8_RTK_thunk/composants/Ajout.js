import { useState } from "react";
import { createStagiaire } from "../features/ActionThunk";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Ajout = () => {
  const error = useSelector((st) => st.stg.error);
  const [nvStg, setNvStg] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    if (e.target.name === "niveau") {
      setNvStg({
        ...nvStg,niveau: e.target.checked && e.target.value,
      });
    } else {
      setNvStg({ ...nvStg, [e.target.name]: e.target.value });
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createStagiaire(nvStg));
    navigate("/all");
  }

  return (
    <div>
      {error && <p className="alert alert-danger">{error}</p>}
      <h3 className="mt-4 mb-4 text-center">Ajouter un nouveau stagiaire</h3>
      <form className="w-50 mx-auto mt-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="nom" className="form-label">
            Nom complet
          </label>
          <input
            type="text"
            className="form-control"
            id="nom"
            name="nom"
            placeholder="Entrez le nom complet"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            placeholder="Entrez l'email'"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label for="tel" className="form-label">
            Téléphone
          </label>
          <input
            type="text"
            className="form-control"
            id="tel"
            name="tel"
            placeholder="Entrez le téléphone"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="niveau" className="form-label">
            Niveau
          </label>
          <div>
            <input
              type="radio"
              name="niveau"
              id="n1"
              value="ts"
              onChange={handleChange}
            />
            <span>Technicien spécialisé</span>
            <input
              type="radio"
              name="niveau"
              className="mx-3"
              id="n2"
              value="t"
              onChange={handleChange}
            />
            <span>Technicien</span>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Ajout;
