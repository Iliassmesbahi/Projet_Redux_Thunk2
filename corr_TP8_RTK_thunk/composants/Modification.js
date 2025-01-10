import { useDispatch, useSelector } from "react-redux";
import { updateStagiaire } from "../features/ActionThunk";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Modification = () => {
  const error = useSelector((st) => st.stg.error);

  const { id } = useParams();
  const list = useSelector((st) => st.stg.list);
  const stagiaire = list.find((stg) => stg.id == id);
  const [newStg, setNewStg] = useState(stagiaire);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleChange(e) {
    if (e.target.name === "niveau") {
      setNewStg({...newStg,niveau: e.target.checked && e.target.value});
    } else {
      setNewStg({ ...newStg, [e.target.name]: e.target.value });
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateStagiaire(newStg));
    navigate("/all");
  }
  return (
    <div className="container m-4">
      {stagiaire ? (
        <>
          <h3 className="mt-4 mb-4 text-center">
            Modifier le stagiaire numéro {id}
          </h3>
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
                defaultValue={stagiaire.nom}
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
                defaultValue={stagiaire.email}
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
                defaultValue={stagiaire.tel}
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
                  defaultChecked={stagiaire.niveau === "ts"}
                />
                <span>Technicien spécialisé</span>
                <input
                  type="radio"
                  name="niveau"
                  className="mx-3"
                  id="n2"
                  value="t"
                  onChange={handleChange}
                  defaultChecked={stagiaire.niveau === "t"}
                />
                <span>Technicien</span>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Enregistrer
            </button>
          </form>
        </>
      ) : (
        <p className="alert alert-warning">Aucun stagiaire n'est trouvé!</p>
      )}
      {error && <p className="alert alert-danger">{error}</p>}
    </div>
  );
};

export default Modification;
