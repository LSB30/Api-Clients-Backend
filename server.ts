import app from "./src/app";

app.listen(3000, () => {
  try {
    console.log("Servidor rodando");
  } catch (err) {
    process.exit(1);
  }
});
