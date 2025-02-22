import { addKeyword, EVENTS } from "@builderbot/bot"

const mainFlow = addKeyword([EVENTS.WELCOME])
    .addAnswer("Hola, bienvenido al *Chatbot*, pronto será productivo :)")

export { mainFlow };