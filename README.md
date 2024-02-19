# My-Notes-Api

## Getting Started

### Running Locally
1. Check your Node.js version by running `node -v` in your terminal. I recommend using version 20 or higher.
2. Install dependencies by running `pnpm install` or `npm install`.
3. Start the server by running `pnpm run dev`.
4. The server listens locally on PORT 7001. You can customize the port in the `.env` file if needed.

### Running via Docker
1. Make sure Docker is installed on your machine.
2. Run `docker compose up` to start the Docker container.

## Testing the APIs

**Note:** *I used an in-memory array as my data storage, so restarting the application by any means will reset your data.*

### Endpoints:

1. **Create a new note**
    ```bash
    curl  -X POST \
      'http://localhost:7001/notes' \
      --header 'Accept: */*' \
      --header 'Content-Type: application/json' \
      --data-raw '{
      "title": "MY Test Note",
      "body": "my test notes body"
    }'
    ```

2. **Retrieve all notes**
    ```bash
    curl  -X GET 'http://localhost:7001/notes' --header 'Accept: */*'
    ```

3. **Retrieve a specific note by ID**
    ```bash
    curl  -X GET 'http://localhost:7001/notes/1' --header 'Accept: */*'
    ```

4. **Update a specific note**
    ```bash
    curl  -X PUT \
      'http://localhost:7001/notes/1' \
      --header 'Accept: */*' \
      --header 'Content-Type: application/json' \
      --data-raw '{
      "title": "My Test Note Updated",
      "description": "My test notes body updated"
    }'
    ```

5. **Delete a specific note**
    ```bash
    curl  -X DELETE 'http://localhost:7001/notes/3' --header 'Accept: */*'
    ```