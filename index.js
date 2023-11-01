import App from "./src/app.js";
import {apiPort} from "./src/config/index.js";

const start = () => {
    const webserver = new App()

    webserver.app.listen(apiPort, "localhost", () => {
        console.log(`server running on url http://localhost:${apiPort}`)
    })
}

start()