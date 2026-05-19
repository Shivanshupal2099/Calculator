
function Button({ value, onClick }) {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        style={{
          height: "50px",
          border: "3px solid black",
          width: "90px",
          backgroundColor: "black",
          borderRadius: "10px",
          margin: "20px",
          padding: 0,
          cursor: "pointer",
        }}
      >
        <h2 style={{ color: "red", margin: "10px" }}>{value}</h2>
      </button>
    </>
  );
}

export default Button;

