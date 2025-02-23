import { addKeyword, EVENTS } from "@builderbot/bot"

const menuFlow = addKeyword('EVENTS.ACTION')
    .addAction(async (ctx, {provider}) => {
            const list = {
                "header": {
                    "type": "text",
                    "text": "Menú de Opciones"
                },
                "body": {
                    "text": "¿En que te podemos ayudar hoy?"
                },
                "footer": {
                    "text": ""
                },
                "action": {
                    "button": "Opciones",
                    "sections": [
                        {
                            "title": "Acciones",
                            "rows": [
                                {
                                    "id": "GS0310971",
                                    "title": "Audio",
                                    "description": "Quiero escuchar un audio"
                                },
                                {
                                    "id": "GS0310972",
                                    "title": "Imagen",
                                    "description": "Quiero recibir una imagen"
                                },
                                {
                                    "id": "GS0310973",
                                    "title": "Alimentos y bebidas",
                                    "description": "Descarga nuestro menu"
                                },
                                {
                                    "id": "sucursales",
                                    "title": "📍 Sucursales y horarios:",
                                    "description": "Quiero conocer las diferentes ubicaciones"
                                }/*,
                                {
                                    "id": "reservaciones",
                                    "title": "📅 Reservaciones:",
                                    "description": "Puedes hacer tu reservación aquí"
                                },
                                {
                                    "id": "gruposyeventos",
                                    "title": "🎉 Paquetes para grupos y eventos",
                                    "description": "Puedes hacer tu reservación aquí"
                                },
                                {
                                    "id": "promocionesycupones",
                                    "title": "🎉 Promociones y cupones",
                                    "description": "Pregunta por los paquetes que tenemos para ti"
                                },
                                {
                                    "id": "quejasysugerencias",
                                    "title": "🎉 Quejas y sugerencias",
                                    "description": "Pregunta por los paquetes que tenemos para ti"
                                }*/
                            ]
                        }
                    ]
                }
            }
            await provider.sendList(`${ctx.from}@s.whatsapp.net`, list)
        })
        
export { menuFlow };