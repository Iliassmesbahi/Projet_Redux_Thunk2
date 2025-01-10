import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStagiaire, getStagiaires } from "../features/ActionThunk";
import { Link } from "react-router-dom";
import Affichage from "./Affichage";

const List = () => {
  const { list, loading, error, modifie, search } = useSelector((st) => st.stg);

  const dispatch = useDispatch();
  //Filtre par niveau
  const [niveau, setNiveau] = useState("all");

  //Affichage de la fenetre modal:
  const [show, setShow] = useState(false);
  const [stg, setStg] = useState(null);

  useEffect(() => {
    dispatch(getStagiaires());
  }, [modifie]);

  function handleSupprimer(stg) {
    if (
      window.confirm(`Voulez vous vraiment supprimer le stagiaire ${stg.nom}?`)
    )
      dispatch(deleteStagiaire(stg.id));
  }
  return (
    <div className="container text-center">
      {show && <Affichage stg={stg} changerShow={setShow}></Affichage>}
      <h3 className="m-4">Tous les stagiaires</h3>
      <div className="filter_niveau">
        <input
          type="radio"
          name="niveau"
          id="niv0"
          defaultChecked="true"
          onChange={(e) => {
            e.target.checked && setNiveau("all");
          }}
        />
        <label htmlFor="nv0">All</label>

        <input
          type="radio"
          name="niveau"
          id="niv1"
          onChange={(e) => {
            e.target.checked && setNiveau("ts");
          }}
        />
        <label htmlFor="nv1">Technicien spécialisé</label>

        <input
          type="radio"
          name="niveau"
          value="t"
          id="niv2"
          onChange={(e) => {
            e.target.checked && setNiveau("t");
          }}
        />
        <label htmlFor="nv2">Technicien </label>
      </div>
      <div className="d-flex flex-wrap gap-3">
        {loading && (
          <img src="loading.gif" alt="loading" className="text-center" />
        )}
        {error && <p className="alert alert-danger">{error}</p>}
        {list.length > 0 &&
          list.filter((stg) => {return search !== ""? stg.nom.toUpperCase().includes(search.toUpperCase())
                : true;
            }).filter((stg) => (niveau != "all" ? stg.niveau === niveau : true)).map((stg,i) => (
              <div key={i} className="boite">
                <h4>{stg.nom}</h4>
                <p>
                  Email: {stg.email} <br />
                  Niveau:
                  {stg.niveau === "ts" ? "Technicien spécialisé" : "Technicien"}
                </p>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => {
                    setShow(true);
                    setStg(stg);
                  }}
                >
                  Afficher
                </button>
                <Link
                  className="btn btn-outline-success"
                  to={`/edit/${stg.id}`}
                >
                  Modifier
                </Link>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleSupprimer(stg)}
                >
                  Supprimer
                </button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default List;
