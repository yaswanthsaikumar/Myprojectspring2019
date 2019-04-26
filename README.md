# fitness-tracker

## setup

this repo includes both client and server apps. clone or download this repository and run `npm install` to install the dependencies.

## server

run `npm run start:server` to start express server.

### api endpoints

#### profile

##### sign-up

```http
POST {{host}}/profile/signup HTTP/1.1
Content-Type: application/json

{
    "email": "ssa@b.com",
    "username": "asab",
    "password": "password"
}
```

##### sign-in

```http
POST {{host}}/profile/signin HTTP/1.1
Content-Type: application/json

{
    "logemail": "ssa@b.com",
    "logpassword": "password"
}
```

##### sign-out

```http
GET {{host}}/profile/signout HTTP/1.1
```

#### exercise

##### add-exercise

```http
POST {{host}}/exercise/add HTTP/1.1
Content-Type: application/json

{
    "type": "running",
    "duration": "1"
}
```

#### diet

##### add-diet

```http
POST {{host}}/diet/add HTTP/1.1
Content-Type: application/json

{
    "name": "oats",
    "quantity": 5
}
```

#### share

##### share stats

```http
POST {{host}}/statmessage/share HTTP/1.1
Content-Type: application/json

{
    "to": "5c9788262911c53854be8d1c",
}
```

#### users

##### query-users

```http
@q=asab
GET {{host}}/user/{{q}} HTTP/1.1
```

##### get auth user details

```http
GET {{host}}/user/auth/details HTTP/1.1
```

## client

run `npm run start:client` to start client app
