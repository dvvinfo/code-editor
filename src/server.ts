   // src/server.js
   import { createServer, Response } from 'miragejs';

   export function makeServer() {
     createServer({
       routes() {
         this.namespace = 'api';

         this.post('/execute', (schema, request) => {
           const attrs = JSON.parse(request.requestBody);
           const { language, code } = attrs;

           if (code.includes('error')) {
             return new Response(
               400,
               {},
               { status: 'error', error: 'SyntaxError: Unexpected token' }
             );
           }

           return {
             status: 'success',
             output: `Executed code in ${language}: ${code}`,
           };
         });
       },
     });
   }