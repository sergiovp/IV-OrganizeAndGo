import { NowRequest, NowResponse } from '@vercel/node';

/* Función serverless de prueba */
export default (request: NowRequest, response: NowResponse) => {
    response.status(200).send("Hola mi gente");
}
