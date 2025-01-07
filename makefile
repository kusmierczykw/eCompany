start:
	docker compose up -d

sh:
	docker compose exec client sh

serve_client_app:
	docker compose exec client npm run start
