# Instruction

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/ttran375/comp229-test1)

Select **Open in GitHub Codespaces** and then **Create codespace**. **GitHub** will prepare the development environment.

### Install Packages

Install the necessary dependencies for both the server and client parts of the application.

```sh
yarn
```

### Start the Server

After installing the packages, start the server:

```sh
yarn start
```

## Test the REST API

### Testing the API with Thunder Client

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

### Endpoints
