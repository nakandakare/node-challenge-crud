import app from "./app";

const init = () => {
  app.listen(app.get('port'), () => {
    console.log("El servidor se está ejecutando en el port: " + app.get('port'));
  });
}

init();