# PPW2
backend
# Term of Reference

## Project Name: Car Store.

## Entities

### Car Type:
    {
      id: number,
      type_name: string,
    }

### Car:
    {
      id: number,
      title: string(required, min: 5: max: 50),
      description: string(required, min: 20: max: 1000),
      model: string (required, min: 6: max: 50),
      score: number(optional),
      engine: string(required, min: 1: max: 50)
      type: string,
    }
    
### Brand:
    {
      id: number,
      name: string(required, min: 5: max: 100),
      class: string(required, min: 5: max: 200),
      year: number(optional),
      ID_Cars: number
    }
    
### Crud Methods:

- Create, 
- Read all entities,
- Read one entity by id,
- Update entity,
- Delete entity
      
### Custom endpoints:

- Get all cars,
- Get cars by engine,
- Get cars by brand,
- Get cars by score,
- Show only specific number of cars,
- Get all cars avialable for discount.

### User authentification:

Authentification system Will be implemented.

### Working with files:

At least one of entities will contain 1 or more files associated to. Example: Car entity will contain engiene.

Will be implemented the following functionalities

- Upload file
- Delete file
- Show file

### Docker:

The application must be encapsulated in the Docker container in order to be able to run on any computer

### Endpoints documentation:

Postman/Swagger - will be used to create the documentation for all endpoints.

### Endpoints testing coverage:

All enpoints must be tested.

- Create test cases
- Testing
- Create report about testing
