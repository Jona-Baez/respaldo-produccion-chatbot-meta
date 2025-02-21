import { addKeyword, EVENTS } from "@builderbot/bot"

const mainFlow = addKeyword([EVENTS.WELCOME])
    .addAnswer("Hola, bienvenido al *Chatbot*")

export { mainFlow };