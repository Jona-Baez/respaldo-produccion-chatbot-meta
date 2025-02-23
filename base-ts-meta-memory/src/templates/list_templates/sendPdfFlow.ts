import { addKeyword, EVENTS } from "@builderbot/bot";

const sendPdfFlow = addKeyword("carta")
    .addAnswer("Te enviamos nuestra carta", {
        media: "./assets/carta.pdf"
    })

export { sendPdfFlow };