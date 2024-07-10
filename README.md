# Proyecto 6: Api Rest

## _Rock The Code_

In this project I have created an API to store data of several students and the school subjects they attend.

## Index:

- [Requirements](#Requirements)
- [Scripts](#Scripts)
- [Structure](#Structure)
- [Contact](#Contact)

## Requirements:

Install node.js and the dependencies that are in package.json with:

```sh
npm install
```

## Scripts:

To start the api in normal operation:

```
npm run start
```

To start the API in developer mode and restart the API with every change:

```
npm run dev
```

And the last script we have is to be able to insert a data seed in our database:

```
npm run seed
```

`Beware that this last script deletes everything in the database.`

## Structure:

```
Proyecto6_API_Rest
├─ .env
├─ .gitignore
├─ index.js
├─ package-lock.json
├─ package.json
└─ src
   ├─ api
   │  ├─ controllers
   │  │  ├─ student.js
   │  │  └─ subject.js
   │  ├─ models
   │  │  ├─ student.js
   │  │  └─ subject.js
   │  └─ routes
   │     ├─ student.js
   │     └─ subject.js
   ├─ config
   │  └─ DB.js
   ├─ data
   │  ├─ students-seed.js
   │  └─ subjects-seed.js
   └─ utils
      └─ seeds
         ├─ students.js
         └─ subjects.js

```

## Contact:

| [**Jesus Elias Alba**](http://instagram.com/jesuseliasalba) |
| :---------------------------------------------------------: |
