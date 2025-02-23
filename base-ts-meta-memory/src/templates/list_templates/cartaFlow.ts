import { addKeyword, EVENTS } from "@builderbot/bot";

const cartaFlow = addKeyword("carta")
    .addAnswer("Te enviamos nuestra carta", {
        media: "./assets/carta.pdf"
    })

export { cartaFlow };