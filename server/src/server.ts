import app from "./app";

const init = () => {
  app.listen(app.get('port'), () => {
    console.log("The server is running on port: " + app.get('port'));
  });
}

init();