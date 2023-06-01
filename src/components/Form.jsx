import PropTypes from "prop-types";

const Form = ({ setTitulo, setImgSrc, setDescripcion, agregarPost }) => {
  return (
    <div className="form">
      <div className="mb-2">
        <h6>Agregar post</h6>
        <label>Título</label>
        <input id="inputTitulo"
          onChange={(event) => setTitulo(event.target.value)}
          className="form-control" required
        />
      </div>
      <div className="mb-2">
        <label>URL de la imagen</label>
        <input id="inputUrlImagen"
          onChange={(event) => setImgSrc(event.target.value)}
          className="form-control" required
        />
      </div>
      <div className="mb-3">
        <label>Descripción</label> <br />
        <textarea id="inputParrafo"
          onChange={(event) => setDescripcion(event.target.value)}
          className="form-control" required
        ></textarea>
      </div>
      <div className="d-flex">
        <button onClick={agregarPost} className="btn btn-light m-auto">
          Agregar
        </button>
      </div>
    </div>
  );
};

Form.propTypes = {
  setTitulo: PropTypes.func.isRequired,
  setImgSrc: PropTypes.func.isRequired,
  setDescripcion: PropTypes.func.isRequired,
  agregarPost: PropTypes.func.isRequired,
};

export default Form;
