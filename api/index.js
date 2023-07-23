const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Configuración de CORS para permitir solicitudes desde "http://localhost:4200"
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

// Rutas
const routes = require("./src/routes/index");
app.use("/", routes);

// Conexión a la base de datos
const connectDB = require("./src/db");
connectDB();

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
