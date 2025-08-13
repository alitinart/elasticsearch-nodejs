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

# API Endpoints

| Method | Endpoint                        | Description                                   |
| ------ | ------------------------------- | --------------------------------------------- |
| GET    | `/api/recipes/search?q=<query>` | Search recipes by title, ingredients, or tags |
| POST   | `/api/recipes`                  | Create a new recipe                           |
| POST   | `/api/recipes/bulk`             | Bulk create multiple recipes                  |
| PATCH  | `/api/recipes/:id`              | Update a recipe by ID                         |
| DELETE | `/api/recipes/:id`              | Delete a recipe by ID                         |
