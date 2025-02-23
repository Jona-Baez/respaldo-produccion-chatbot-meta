import { addKeyword, EVENTS } from "@builderbot/bot"
import { menuFlow } from "./menuFlow";

const mainFlow = addKeyword([EVENTS.WELCOME])
    .addAnswer("Hola, bienvenido al *Chatbot*")
    .addAction( async (ctx, ctxFn) =>{
        return ctxFn.gotoFlow(menuFlow)
     })

export { mainFlow };