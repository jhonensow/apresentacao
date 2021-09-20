import { useState } from "react";
import { ThemeProvider, FontLoader, Button, Input } from "@gympass/yoga";
import Loader from "react-loader-spinner";

// exemplo da apresentacao de amanha
export default function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  function removeItem(index, e) {
    e.preventDefault();

    setLoading(true);
    list.splice(index, 1);
    setList(list);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  return (
    <ThemeProvider>
      <FontLoader />
      <main>
        <h1>Grupo de Estudos React</h1>
        {loading ? (
          <Loader type="Circles" color="#00BFFF" height={25} width={25} />
        ) : (
          <ol>
            {list.map((i, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <li style={{ marginRight: "10px" }}>{i}</li>
                <Button.Text onClick={(e) => removeItem(index, e)} small>
                  Remover Item
                </Button.Text>
              </div>
            ))}
          </ol>
        )}
      </main>

      <div style={{ marginBottom: "30px" }}>
        <Input
          label="Adicionar item"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClean={(cleaned) => setValue(cleaned)}
        />
        <div>
          <Button
            onClick={() => {
              setList([...list, value]);
              setValue("");
            }}
            small
            style={{ marginTop: 10 }}
          >
            Adicionar
          </Button>
          <Button.Outline
            onClick={() => {
              setList([]);
            }}
            small
            style={{ marginTop: 10, marginLeft: 10 }}
          >
            Limpar lista
          </Button.Outline>
        </div>
      </div>
    </ThemeProvider>
  );
}
