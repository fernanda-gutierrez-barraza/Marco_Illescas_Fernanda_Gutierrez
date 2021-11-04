# Marco_Illescas_Fernanda_Gutierrez
Segunda evaluación proyecto aplicaciones móviles relacionado a energías renovables 


Para visualizar el proyecto de forma correcta instalar en cmd en la carpecta de proyecto lo siguiente:
instalar cmd del proyecto:
1- ionic cordova plugin add cordova-sqlite-storage
2- npm i cordova-sqlite-storage
3- npm install --save @ionic/storage

-------------------------------------------------------------------------------------------------------
Ademas se debe crear una cuenta en https://newsapi.org/ para obtener una apy Key, posteriormente cambiar
en el archivo environment.prod.ts por su propia api key, hacer lo mismo en el archivo environments.ts, y en noticias.service.ts en la linea 16 cambiar la direccion https por una que contenga su propia api key, de la siguiente forma:

https://newsapi.org/v2/everything?q=tesla&from=2021-10-04&sortBy=publishedAt&apiKey=(aqui va su api key)
