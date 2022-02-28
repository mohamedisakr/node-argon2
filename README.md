# Node.js Argon2 Password Hashing

- open Ubuntu 20.04 LTS
- run the following command

```
sudo service redis-server start
```

## curl

```sh
curl -X POST localhost:3000/register -H 'Content-Type:application/json' \ -d '{"email":"johndoe@gmail.com", "name":"johndoe", "password":"Password123", "passwordConfirmation":"Password123"}'
```

```sh
curl -v -X POST localhost:3000/register -H 'Content-Type:application/json' --cookie 'sid=s%3A8p17J1sXiZPgIVS2JPAQUEKdkew8Mkqq.D1dz9nn4QUh3wvnQWvwbPHzb7neLXDD8v%2BnBEYA0zSE'
```

```sh
curl -v localhost:3000/reg
```

```sh
curl -v -X POST localhost:3000/login -H 'Content-Type:application/json' -d '{"email":"johndoe@gmail.com", "password":"Password123"}'
```

```sh
curl -v localhost:3000/home
```

```sh
curl -v -X POST localhost:3000/logout --cookie ''
```
