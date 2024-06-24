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

### Install Packages

Navigate to API

```sh
cd API
```

Install the necessary dependencies.

```sh
yarn
```

### Start the Server

After installing the packages, start the server:

```sh
yarn start
```

## Test the REST API with Thunder Client

### Post Endpoint Examples

1. **Open Thunder Client:**
   * Open **Thunder Client** readily installed in **Codespaces** by clicking on its icon on the sidebar.

2. **Create a New Request:**
   * In **Thunder Client**, click on the **New Request** button to start setting up the API request.
   * Enter the API endpoint URL in the URL field: `http://localhost:8080/api/items`.
   * Select the HTTP method `POST` from the dropdown next to the URL field.

3. **Set Up Request Body:**
   * Click on the "Body" tab, choose and enter the JSON data:

   ```json
   {
     "movieName": "Pitch"
   }
   ```

4. **Send the Request:**
   * Click the "Send" button to execute the request. **Thunder Client** will display the response from the API, including status code, response time, and the body.

### All Endpoint Examples

#### Get all items

* **URL:** `http://localhost:8080/api/items`
* **Method:** `GET`
* **Query Params:**
  * `title` - Optional query parameter to filter movies by title (e.g., `title=[Fr]`).
* **Response:**

  ```json
  [
    "Friction",
    "Cartoon",
    "Game",
    "Action",
    "Education",
    "Moral"
  ]
  ```

  *Response when filtering by title (e.g., `title=[Fr]`):*

  ```json
  [
    "Friction"
  ]
  ```

#### Get an item by ID

* **URL:** `http://localhost:8080/api/1`
* **Method:** `GET`
* **URL Params:**
  * `itemId` - ID of the movie
* **Response:**

  ```json
  {
   "movie": "Cartoon"
  }
  ```

#### Add a new item

* **URL:** `/api/items`
* **Method:** `POST`
* **Body:**

  ```json
  {
    "movieName": "NewMovie"
  }
  ```

* **Response:**

  ```json
  {
    "message": "Added NewMovie as item identifier 6"
  }
  ```

#### Edit an item by ID

* **URL:** `/api/items/0`
* **Method:** `PUT`
* **URL Params:**
  * `id` - ID of the movie
* **Body:**

  ```json
  {
    "movieName": "UpdatedMovie"
  }
  ```

* **Response:**

  ```json
  {
    "message": "Updated item with identifier: 0 to UpdatedMovie"
  }
  ```

#### Delete an item by ID

* **URL:** `/api/items/2`
* **Method:** `DELETE`
* **URL Params:**
  * `id` - ID of the movie
* **Response:**

  ```json
  {
    "message": "Deleted movie: Game"
  }
  ```
