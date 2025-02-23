import { addKeyword } from "@builderbot/bot";

const sendImageFlow = addKeyword("imagen")
    .addAnswer("Te adjunto una imagen", {
        media: "./assets/logo.png"
    })

export { sendImageFlow };