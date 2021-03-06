# Sencha Ext JS 6 - User Application

This is an example Ext JS 6 front-end application running on Nginx.
The code can be found on Github: https://github.com/savelee/docker-ext-client

## How to use this image?

`$ docker pull savelee/docker-ext-client`
`$ docker run --name extjsapp -p 80:80 -d savelee/docker-ext-client`

## Configuring this application locally.

This application doesn't do much without a proper back-end.
We can serve this with a valid Node.js, Express, MongoDB server.

The code can be found here:

https://github.com/savelee/docker-node-server
Run with `$ nodemon app.js`

To create an admin account, use Curl or Postman:

` $ curl -H "Content-Type: application/json" -X POST  -d '{ "username" : "admin", "password": "admin" }' http://127.0.0.1:9000/register`

We will use this client:
https://github.com/savelee/docker-ext-client

You will need to edit the *app/utils/Contants.js* file to:
```javascript
Ext.define('Client.utils.Constants', {
    singleton: true,

    'LIVE_URL': window.location.protocol + "//" + window.location.host + ':9000',

    'TOKEN_PREFIX': '',
    'DISABLE_TOKEN': false
});
```

Then you can start the Ext JS app locally with:
`$ sencha app watch`
Open your browser, and browse to: http://127.0.0.1:1841, and login with your admin account.

## Configuring this application with Docker Compose

First make an Ext JS build:
`$ sencha app build`

Create a *docker-compose.yml*

```yml
client:
    build: ./client
    restart: always
    ports:
      - "80:80"
    links:
      - server
server:
    build: ./server
    restart: always
    ports:
     - "9000:9000"
    links:
     - mongo
mongo:
  image: mongo
  command: --smallfiles
  restart: always
  ports:
    - "27017:27017"
```

# Do you want to run this Sencha client app locally?

1. Remove the following files/folders: *ext*, *.sencha*, *workspace.json*

2. Navigate to a folder on your hd which contains the sencha framework, and re-generate the project:

`$ sencha generate app --starter=false Client [path-to-client-app]`

3. Navigate to your client app on the CLI, and run app watch:

`$ sencha app watch`

http://127.0.0.1/:1841

4. To create an admin account, use Curl or Postman:

` $ curl -H "Content-Type: application/json" -X POST  -d '{ "username" : "admin", "password": "admin" }' http://127.0.0.1:9000/register
