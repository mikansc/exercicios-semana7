import PropTypes from "prop-types";

export const FiltroSecao = ({ secoes = [], onSelecionarSecao }) => {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        {secoes.map((secao) => (
          <li>
            <button onClick={() => {}}>{secao.nome}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

FiltroSecao.propTypes = {
  onSelecionarSecao: PropTypes.func.isRequired,
  secoes: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string,
    })
  ),
};
