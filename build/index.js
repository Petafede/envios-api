"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)(); // instanciando a express.
app.use(express_1.default.json()); // esto nos permite devolver json en la api.
app.use((0, cors_1.default)()); // seguridad para acceder a la api.
var appRouter = express_1.default.Router(); // instancia del router guardada en appRouter.
appRouter.get('/', function (req, res) {
    console.log(req);
});
app.listen(3000, function () {
    console.log('Listening to port 3000'); // arranca por el puerto 3000 que devuelve la informacion de la api.
});
