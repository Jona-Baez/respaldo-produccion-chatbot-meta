import { createFlow } from "@builderbot/bot";
import { mainFlow } from "./mainFlow";
import { opcionesFlow } from "./opcionesFlow";
import { cartaFlow } from "./list_templates/cartaFlow";
import { audioFlow } from "./list_templates/audioFlow";
import { imagenFlow } from "./list_templates/imagenFlow";

export default createFlow ([
    mainFlow,
    opcionesFlow,
    cartaFlow,
    audioFlow,
    imagenFlow
]);