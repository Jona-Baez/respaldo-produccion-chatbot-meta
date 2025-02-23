import { addKeyword, EVENTS } from "@builderbot/bot";

const sendPdfFlow = addKeyword("GS0310973")
    .addAnswer("Te enviamos nuestra carta", {
        media: "./assets/carta.pdf"
    })

export { sendPdfFlow };