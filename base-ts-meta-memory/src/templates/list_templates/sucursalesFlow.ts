import { addKeyword } from "@builderbot/bot";

const sucursalesFlow= addKeyword("sucursales")
    .addAnswer("Da clic en en enlace de la sucursale que te ineteresa acudir", {
        media: "./assets/logo.png"
    })

export { sucursalesFlow};