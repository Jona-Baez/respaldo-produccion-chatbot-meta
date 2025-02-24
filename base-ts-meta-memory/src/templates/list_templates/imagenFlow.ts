import { addKeyword } from "@builderbot/bot";

const imagenFlow = addKeyword("NB230225imagen")
    .addAnswer("Te adjunto una imagen", {
        media: "./assets/logo.png"
    })

export { imagenFlow };