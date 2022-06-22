# My Assets App Server

My Assets App is an application to manage your assets. This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

## RESTful endpoints
## BASE URL = https://event-ticketting-app.herokuapp.com
### /user

> User register

### POST:

### /register

_request body_

```
{
		"fullName": "Boedi",
		"phoneNumber": "014468028767",
		"email": "Boedi@mail.com",
		"birthdayDate": "11-13-10",
		"password": "123456",
		"gender": "male",
        "userType": "organizer",
        "address":"Jl rarerwr 1 adaasd",
        "profilePhotoUrl": "https://pinterest.com"
}

```

_response (201 created)_

```
{
    "success": true,
    "message": "User registered successfully",
    "data": {
        "userName": "Alanis",
        "userMail": "alanalan@mail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcsInVzZXJOYW1lIjoiQWxhbmlzIiwidXNlck1haWwiOiJhbGFuYWxhbkBtYWlsLmNvbSIsImlhdCI6MTY1NTQwMzE4N30.s6Mb8vwgdPtKieEMkIDmTlAC3lx3zfLzQNq5mHqbUuY"
    }
}

```

_response (400 Bad Request)_

```
{
	message : "<field> cannot empty"
}

{
    "success": false,
    "message": "User already registered"
}

```

---

### POST /user/login

> User Sign in

_Request Body_

```
{
		"email": "alanalan@mail.com",
		"password": "123456"
	}

```

_Response 200_

```
{
    "success": true,
    "message": "Succes login",
    "data": {
        "userName": "Camilla Cherry",
        "userMail": "aliquam@google.edu",
        "userType": "participant",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJOYW1lIjoiQ2FtaWxsYSBDaGVycnkiLCJ1c2VyTWFpbCI6ImFsaXF1YW1AZ29vZ2xlLmVkdSIsInVzZXJUeXBlIjoicGFydGljaXBhbnQiLCJpYXQiOjE2NTU0MDM0MzB9.94jfuU01W9wOTLzoHG3C6RHQKll2rcFX9r9KsRnc-08"
    }
}

```

_Response 400_

```
{
    "success": false,
    "message": "Wrong email/password"
}

```

---

### /user

> Even organizer register

### POST:

### /event-organizer/register

_request body_

```
{
    "name":"PT Jakaria",
    "phoneNumber":"0909080980808",
    "email":"ababa2@gmail.com",
    "address":"Jl Nuri 1 rt 2rw 3",
    "logoUrl":"htttp://logourl.com",
    "password":"123456"
}
```

_response (201 created)_

```
{
    "success": true,
    "message": "User registered successfully",
    "data": {
        "name": "PT Jakaria",
        "mail": "ababa2@gmail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywibmFtZSI6IlBUIEpha2FyaWEiLCJtYWlsIjoiYWJhYmEyQGdtYWlsLmNvbSIsImlhdCI6MTY1NTgzNTcyOX0.hzaVENBOmNd5G8I4gSiO13yk2GUqg9QSWtlrd5JjPEk"
    }
}

```

_response (400 Bad Request)_

```
{
	message : "<field> cannot empty"
}

{
    "success": false,
    "error_code": 400,
    "message": "User already registered"
}

```

---

### POST /event-organizer/login

> E O Sign in

_Request Body_

```
{
    "email":"ababa2@gmail.com",
    "password":"123456"
}

```

_Response 200_

```
{
    "success": true,
    "message": "Succes login",
    "data": {
        "name": "PT Jakaria",
        "email": "ababa2@gmail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywibmFtZSI6IlBUIEpha2FyaWEiLCJlbWFpbCI6ImFiYWJhMkBnbWFpbC5jb20iLCJpYXQiOjE2NTU4Mzk2Mjl9.r5U1QiBRT31hMpXGayz0-W3MSmyXePYmCYdVLlDT1No"
    }
}

```

_Response 400_

```
{
	message : "<field> cannot empty"
}

{
    "success": false,
    "error_code": 400,
    "message": "User already registered"
}
```

---

### /event/create

> Event organizer create event

_Req headers_

```
{
  access_token: <given token>
}
```

_Req body_

```
{ 
    "name":"Seminar Kesehatan Bababa", 
    "eventDate":"01-07-2022", 
    "posterUrl":"https://dassdadas.com",
    "description":"Lorem Ipsum dolor amet",
    "goldQuotas":10,
    "goldPrice":1000000,
    "theme":"Health" 
}
```

_Response 201 created_

```
{
    "success": true,
    "message": "Succes create new event",
    "data": {
        "id": 13,
        "eventName": "Seminar Kesehatan Bababa"
    }
}
```
_Response 400_

```
{
	message : "<field> cannot empty"
}
```

### GET /event/list

> get all list event with pagination
_Req Query_
```
{
  limit:<number>,
  page:<number>,
  status:['published','created','done']
}
```

_response 200 ok_
```
{
    "totalItems": 1,
    "stories": [
        {
            "id": 5,
            "name": "Cras vulputate",
            "eventDate": "2022-06-16T00:00:00.000Z",
            "posterUrl": "http://zoom.us",
            "description": "ac tellus.",
            "theme": "Pendidikan",
            "status": "published",
            "organizerId": 1,
            "goldQuotas": 0,
            "goldPrice": 0,
            "platinumQuotas": 0,
            "platinumPrice": 0,
            "silverQuotas": 0,
            "silverPrice": 0,
            "createdAt": "2022-06-20T18:14:58.398Z",
            "updatedAt": "2022-06-20T18:21:50.893Z",
            "organizer": {
                "id": 1,
                "name": "Tortor Nunc Commodo Corporation",
                "phoneNumber": "1-446-802-8767",
                "email": "dolor.egestas.rhoncus@google.org",
                "address": "893-3551 Ligula. St.",
                "logoUrl": "https://naver.com",
                "password": "$2a$10$ZkTWlOqkG3vTZY54SUU4QukzOgLNVT7Fc9aQ60sZ35CFqUVqzQ70e",
                "createdAt": "2022-06-20T18:14:58.098Z",
                "updatedAt": "2022-06-20T18:14:58.098Z"
            },
            "fullfiledQuotum": null
        },
    ],
    "totalPages": 5,
    "currentPage": 1
}
```

### event/status-update/:eventId

> Mengupdate status event : created/published/done
> hanya status event published saja yang bisa dicheckout

_Req headers_

```
{
  access_token: <given token>
}
```

_req params_
```
{
  eventId:<number>
}
```

_req body_
```
{
  status : in[created,published,done]
} 
```

_response 200 ok_
```
{
    "success": true,
    "message": "Succes update event status to published",
    "data": {
        "id": 13,
        "name": "Seminar Kesehatan Bababa",
        "eventDate": "2022-01-06T17:00:00.000Z",
        "posterUrl": "https://dassdadas.com",
        "description": "Lorem Ipsum dolor amet",
        "theme": "Health",
        "status": "published",
        "organizerId": 7,
        "goldQuotas": 10,
        "goldPrice": 100000,
        "platinumQuotas": 0,
        "platinumPrice": 0,
        "silverQuotas": 0,
        "silverPrice": 0,
        "createdAt": "2022-06-21T19:26:06.656Z",
        "updatedAt": "2022-06-21T19:30:04.210Z"
    }
}
```

### /event/find/:eventId

> Melihat detail event by Id

_Req headers_

```
{
  access_token: <given token>
}
```

_req params_
```
{
  eventId:<number>
}
```

_response 200 ok_
```
{
    "success": true,
    "message": "Success get event",
    "data": {
        "id": 13,
        "name": "Seminar Kesehatan Bababa",
        "eventDate": "2022-01-06T17:00:00.000Z",
        "posterUrl": "https://dassdadas.com",
        "description": "Lorem Ipsum dolor amet",
        "theme": "Health",
        "status": "created",
        "organizerId": 7,
        "goldQuotas": 0,
        "goldPrice": 0,
        "platinumQuotas": 0,
        "platinumPrice": 0,
        "silverQuotas": 0,
        "silverPrice": 0,
        "createdAt": "2022-06-21T19:26:06.656Z",
        "updatedAt": "2022-06-21T19:26:06.656Z",
        "fullfiledQuotum": {
            "id": 3,
            "gold": 0,
            "silver": 0,
            "platinum": 0,
            "event_id": 13,
            "createdAt": "2022-06-21T19:26:06.671Z",
            "updatedAt": "2022-06-21T19:26:06.671Z"
        },
        "organizer": {
            "id": 7,
            "name": "PT Jakaria",
            "phoneNumber": "0909080980808",
            "email": "ababa2@gmail.com",
            "address": "Jl Nuri 1 rt 2rw 3",
            "logoUrl": "htttp://logourl.com",
            "createdAt": "2022-06-21T18:22:09.689Z",
            "updatedAt": "2022-06-21T18:22:09.689Z"
        }
    }
}
}
```

### /event/quota-update/:eventId

> Update quota ticket dan harga

_Req headers_

```
{
  access_token: <given token>
}
```

_req params_
```
{
  eventId:<number>
}
```

_req body_
```
{
    "goldQuotas" : 10,
    "goldPrice": 100000
}
```

_response 200 ok_
```
{
    "success": true,
    "message": "Success update event class",
    "data": {
        "id": 13,
        "name": "Seminar Kesehatan Bababa",
        "eventDate": "2022-01-06T17:00:00.000Z",
        "posterUrl": "https://dassdadas.com",
        "description": "Lorem Ipsum dolor amet",
        "theme": "Health",
        "status": "created",
        "organizerId": 7,
        "goldQuotas": 10,
        "goldPrice": 100000,
        "platinumQuotas": 0,
        "platinumPrice": 0,
        "silverQuotas": 0,
        "silverPrice": 0,
        "createdAt": "2022-06-21T19:26:06.656Z",
        "updatedAt": "2022-06-21T19:28:00.594Z"
    }
}
```

### /event/list-participant/:eventId

> data event dan peserta yang sudah melakukan pembayaran


_Req headers_

```
{
  access_token: <given token>
}
```

_req params_
```
{
  eventId:<number>
}
```

_response 200 ok_
```
{
    "success": true,
    "message": "Success get list event participant",
    "data": [
        {
            "id": 50,
            "userId": 6,
            "eventId": 13,
            "gold": 1,
            "platinum": 0,
            "silver": 0,
            "nominal": 100000,
            "paymentStatus": "done",
            "createdAt": "2022-06-21T19:31:50.029Z",
            "updatedAt": "2022-06-21T19:32:19.076Z",
            "Event": {
                "id": 13,
                "name": "Seminar Kesehatan Bababa",
                "eventDate": "2022-01-06T17:00:00.000Z",
                "posterUrl": "https://dassdadas.com",
                "description": "Lorem Ipsum dolor amet",
                "theme": "Health",
                "status": "published",
                "organizerId": 7,
                "goldQuotas": 10,
                "goldPrice": 100000,
                "platinumQuotas": 0,
                "platinumPrice": 0,
                "silverQuotas": 0,
                "silverPrice": 0,
                "createdAt": "2022-06-21T19:26:06.656Z",
                "updatedAt": "2022-06-21T19:30:04.210Z"
            },
            "User": {
                "id": 6,
                "fullName": "Alanis",
                "phoneNumber": "014468028767",
                "email": "alanalan@mail.com",
                "birthdayDate": "2010-11-13",
                "gender": "male",
                "address": "Jl rarerwr 1 adaasd",
                "profilePhotoUrl": "https://pinterest.com",
                "createdAt": "2022-06-20T18:15:26.477Z",
                "updatedAt": "2022-06-20T18:15:26.477Z"
            }
        }
    ]
}
```

### /checkout/event/:eventId

> user checkout mendapatkan url untuk melakukan pembayaran


_Req headers_

```
{
  access_token: <given token>
}
```

_req params_
```
{
  eventId:<number>
}
```

_req body_
```
{
    "gold" : 1,
    "platinum" : 0,
    "silver" : 0
}
```

_response 200 ok_
```
{
    "success": true,
    "message": "Succes checkout event : Seminar Kesehatan Bababa",
    "data": {
        "id": 50,
        "gold": 1,
        "platinum": 0,
        "silver": 0,
        "ammounts": 100000,
        "checkoutUrl": "https://checkout-staging.xendit.co/web/62b21ca8bd311e5852d21198"
    }
}
```

_response 400 bad request_
```
{
    "success": false,
    "error_code": 400,
    "message": "Tiket <jenis tiket> tidak tersedia"
}
```

### /checkout/list

> mendapatkan semua list transaksi

_response 200 ok_
```
{
    "success": true,
    "message": "Succes get all data transactions",
    "data": {
        "0": {
            "id": 16,
            "userId": 6,
            "eventId": 11,
            "gold": 1,
            "platinum": 2,
            "silver": 0,
            "nominal": 1700000,
            "paymentStatus": "pending",
            "createdAt": "2022-06-21T14:42:45.903Z",
            "updatedAt": "2022-06-21T14:42:45.903Z"
        },
        "1": {
            "id": 17,
            "userId": 6,
            "eventId": 11,
            "gold": 1,
            "platinum": 2,
            "silver": 0,
            "nominal": 1700000,
            "paymentStatus": "pending",
            "createdAt": "2022-06-21T14:50:46.454Z",
            "updatedAt": "2022-06-21T14:50:46.454Z"
        },
        "2": {
            "id": 18,
            "userId": 6,
            "eventId": 11,
            "gold": 1,
            "platinum": 2,
            "silver": 0,
            "nominal": 1700000,
            "paymentStatus": "pending",
            "createdAt": "2022-06-21T14:51:24.000Z",
            "updatedAt": "2022-06-21T14:51:24.000Z"
        },
        "3": {
            "id": 19,
            "userId": 6,
            "eventId": 11,
            "gold": 1,
            "platinum": 2,
            "silver": 0,
            "nominal": 1700000,
            "paymentStatus": "pending",
            "createdAt": "2022-06-21T17:00:21.505Z",
            "updatedAt": "2022-06-21T17:00:21.505Z"
        }
    }
}
```

### callback payment gateway

### /checkout/notify-payment

> merubah status transaksi setelah pembayaran dilakukan
> mengembalikan jumlah quota tiket jika pembayaran gagal/expired

_response 200 ok_
{
  message: 'Success update data transaction'
}