# Elasticsearch - Cooking Recipes

Simple NodeJS API with Elasticsearch and Redis

## Requirements

- Node.js v16+
- Docker & Docker Compose
- Optional: local Elasticsearch & Redis for development without Docker

## Run

Clone repository

```bash
git clone https://github.com/alitinart/elasticsearch-nodejs
```

### Run with Docker

```bash
docker compose up --build
```

### Run without Docker

Make sure to setup the `.env` file. In there you must include:

- ELASTIC_SEARCH_HOST
- REDIS_HOST
- CACHE_TIME

## API Endpoints

| Method | Endpoint                        | Description                                   | Request Body                                                                                                                                                                                                                                                                                                                                                    | Response                                                                                                                                                                                                                      |
| ------ | ------------------------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | `/api/recipes/search?q=<query>` | Search recipes by title, ingredients, or tags | N/A                                                                                                                                                                                                                                                                                                                                                             | `json { "hits": [ { "id": "12345", "title": "Chocolate Cake", "ingredients": ["flour","cocoa powder","sugar"], "instructions": "Mix ingredients and bake for 30 minutes.", "tags": ["dessert","cake"] } ], "cache": false } ` |
| POST   | `/api/recipes`                  | Create a new recipe                           | `json { "title": "Chocolate Cake", "ingredients": ["flour","cocoa powder","sugar"], "instructions": "Mix ingredients and bake for 30 minutes.", "tags": ["dessert","cake"] } `                                                                                                                                                                                  | `json { "message": "Recipe created successfully", "id": "generated-id" } `                                                                                                                                                    |
| POST   | `/api/recipes/bulk`             | Bulk create multiple recipes                  | `json { "recipes": [ { "title": "Chocolate Cake", "ingredients": ["flour","cocoa powder","sugar"], "instructions": "Mix ingredients and bake.", "tags": ["dessert","cake"] }, { "title": "Caesar Salad", "ingredients": ["lettuce","croutons","parmesan","caesar dressing"], "instructions": "Toss ingredients and serve.", "tags": ["salad","healthy"] } ] } ` | `json { "message": "Recipes created successfully" } `                                                                                                                                                                         |
| PATCH  | `/api/recipes/:id`              | Update a recipe by ID                         | `json { "title": "Updated Chocolate Cake", "tags": ["dessert","cake","chocolate"] } `                                                                                                                                                                                                                                                                           | `json { "message": "Recipe updated successfully" } `                                                                                                                                                                          |
| DELETE | `/api/recipes/:id`              | Delete a recipe by ID                         | N/A                                                                                                                                                                                                                                                                                                                                                             | `json { "message": "Recipe deleted successfully" } `                                                                                                                                                                          |
