import { createFlow } from "@builderbot/bot";
import { mainFlow } from "./mainFlow";
import { opcionesFlow } from "./opcionesFlow";
import { cartaFlow } from "./list_templates/cartaFlow";
import { sucursalesFlow } from "./list_templates/sucursalesFlow";
import { sendVoiceFlow } from "./list_templates/sendVoiceFlow";
import { sendImageFlow } from "./list_templates/sendimageFlow";

export default createFlow ([
    mainFlow,
    opcionesFlow,
    cartaFlow,
    sucursalesFlow,
    sendVoiceFlow,
    sendImageFlow
]);