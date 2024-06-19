# MIDTERM TEST

Using the given datafile provided carefully review the code notice the
strings of Array

```js
// Array of strings (movies)
let movies = ['Friction', 'Cartoon', 'Game', 'Action', 'Education', 'Moral'];
```

use the index value of each element in the array as the id number.

Test the API for the routes using Thunder Client, POSTMAN e.t.c as
follows:

At the terminal/root run the application using the following command:

```sh
node server
```

The application is listening on port 8080

The requested body for your API testing is movieName e.g `"movieName":"Pitch"`

**<u>NOTE</u>: provide the screen snapshot to the API Testing**

These are APIs that Node.js Express App will export:

| **Methods** | **Urls** | **Actions** |
|------------|---------------------|---------------------------------------|
| GET | api/items | get all items |
| GET | api/items/:id | get item by id |
| POST | api/items | add new item |
| PUT | api/items/:id | update item by id |
| DELETE | api/items/:id | remove item by id |
| GET | api/items?title=\[Fr\] | find all items which title contains 'Fr' |
