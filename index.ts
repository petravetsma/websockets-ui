import { wsServer } from "ws_server";
import { httpServer } from "./src/http_server/index";

const WS_PORT = 3000;

wsServer(WS_PORT);
console.log(`Start web socket server on the ${WS_PORT} port!`);

const HTTP_PORT = 8181;

httpServer.listen(HTTP_PORT);
console.log(`Start static http server on the ${HTTP_PORT} port!`);
