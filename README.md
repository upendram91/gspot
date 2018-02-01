# GSpot API
API for Gamer Spot DB

### setup
Go to root directory and run `npm install`

### start server
From Root Server, run `gulp`

### stop server
`Ctrl+C` and then `y` to terminate the gulp task

### Current phase
`Exploration` -  Server starts, creates a database connection, closes connection in the callback and waits for incoming API requests.

`Gotchas` - Server prints error message if connection cannot be established.

### Goals

Contribute to Database schema as needed and add more dimensions.

1. Add testing modules `chai`, `mocha`, and other modules that could mock and stub the code in unit tests.
2. Finish CRUD operations.
3. Test code.
4. Explore Controllers.
5. Explore design patterns for maintaining database connections efficiently.
6. Store images in S3 or any equivalent object store and access/write data in & out.
7. Explore Continuous Integration & Continious Deployment pipelines(Use docker to have local servers, or lets use AWS VM's after local testing).
8. Deploy code in EC2/ECS if docker image is created for the repository.