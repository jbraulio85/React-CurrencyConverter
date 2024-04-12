import { useState } from "react";
import axios from "axios";
import "./convertidor.css";

function App() {
    const [formData, setFormData] = useState({
      from: "",
      to: "",
      amount: "",
    });
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");
  
    const currencyCodes = ["GTQ", "EUR", "MXN", "USD", "HNL", "NIO", "CRC","CAD"];
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
        console.log(formData)
      try {
        const response = await axios.post(
          "http://127.0.0.1:5174/api/v1/convert", 
          formData
        );
        setResult(response?.data);
        console.log(response.data)
        setError("");
      } catch (error) {
        setError(
          "Error",
          error?.response ? error?.response?.data : error?.message
        );
      }
    };
  
    return (
      <div>
        <section className="converter">
          <form onSubmit={handleSubmit}>
            <select
              name="from"
              value={formData.from}
              onChange={handleChange}
              className="input"
            >
              <option value="">Moneda de origen</option>
              {currencyCodes.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
            <select
              name="to"
              value={formData.to}
              onChange={handleChange}
              className="input"
            >
              <option value="">Moneda de destino</option>
              {currencyCodes.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
            <input
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Amount"
              type="number"
              className="input"
            />
            <button type="submit" className="submit-btn">
              convertir
            </button>
          </form>
          {result && (
            <div className="result">
              <p>
                Resultado: {result.conversionAmount} {result.target}
              </p>
              <p>tipo de cambio: {result.conversionRate}</p>
            </div>
          )}
          {error && <p className="error">Error: {error}</p>}
        </section>
      </div>
    );
  }
  
  
  export default App;