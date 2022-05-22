import axios from "axios";

export default function Clients() {
  const getConsult = async () => {
    try {
      const resultados = document.getElementById("resultados");
      let formData = new FormData();
      var consulta = document.getElementById("consult").value;
      formData.append("consult", consulta);
      const url = "https://apigrupogr.com/grapi/clientes/lista-clientes";

      let result = await axios({
        url,
        method: "POST",
        dataType: "json",
        ContentType: "application/json",
        data: formData
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <header className="App-header">
        <b>Press button</b>
        <input
          type="button"
          className="btn btn-light"
          onClick={
            getConsult;
          }}
          value="Consultar"
          id="consult"
        />
      </header>
    </div>
  );
}
