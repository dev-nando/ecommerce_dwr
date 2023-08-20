# Projeto do curso: [Django with React | An Ecommerce Website](https://www.udemy.com/course/django-with-react-an-ecommerce-website/)
![Badge](https://img.shields.io/static/v1?label=Django&message=4.0.5&color=red&style=flat&logo=Django) ![Badge](https://img.shields.io/static/v1?label=DjangoREST&message=3.12.2&color=red&style=flat&logo=DjangoREST) ![Badge](https://img.shields.io/static/v1?label=React&message=^18.2.0&color=red&style=flat&logo=React) ![Badge](https://img.shields.io/static/v1?label=PostgreSQL&message=database&color=blue&style=flat&logo=POSTGRESQL) ![Badge](https://img.shields.io/static/v1?label=Docker&message=container&color=blue&style=flat&logo=Docker) 
![Badge](https://img.shields.io/static/v1?label=Status&message=completo&color=brightgreen&style=flat)

Este é o repositório do projeto que desenvolvi no curso [Django with React | An Ecommerce Website](https://www.udemy.com/course/django-with-react-an-ecommerce-website/). Para incluir uma matéria a mais do meu interesse implementei o projeto com o Docker, criando containers para o frontend, backend e banco de dados. Como no projeto é utilizado um banco de dados Postgres também foi incluída um container para o PgAdmin4. Gostaria de recomendar os dois videos abaixo do canal Very Academy, que me ajudaram muito nesse processo doquerização.

 - [Docker Compose | How to configure PostgreSQL or MySQL database with Python Django](https://www.youtube.com/watch?v=q75wgk9jVjA&list=PLOLrQ9Pn6cazCfL7v4CdaykNoWMQymM_C&index=3)
 - [Docker-Compose | Dockerizing pgAdmin and Postgres - Volumes and Custom Network IP](https://www.youtube.com/watch?v=_oqSGs3rrf8&list=PLOLrQ9Pn6cazCfL7v4CdaykNoWMQymM_C&index=8)

No fim do curso o instrutor mostra como colocar as imagens em buckets do AWS e fazer o deploy no Heroku, mas este projeto não contém estas etapas. Como o meu objetivo era mais estudar as tecnologias (Django REST, React e Docker) julguei que era melhor deixar este repositório sem essas etapas.

## Requisitos para você rodar o projeto

 1. Ter docker e docker-compose instalados
 2. Criar um arquivo `.env` dentro da raiz do projeto com as variáveis de ambiente do projeto
 3. Criar um hard link do `.env` dentro do diretório `/backend`

## Variáveis de ambiente
Defina as variáveis de ambiente abaixo no arquivo `.env`:
 - BACK_END_PROJECT_FOLDER
 - FRONT_END_PROJECT_FOLDER
 - PERSISTING_DB_FOLDER
 - PERSISTING_PG_ADMIN_FOLDER
 - POSTGRES_DB
 - POSTGRES_USER
 - POSTGRES_PASSWORD
 - PGADMIN_DEFAULT_EMAIL
 - PGADMIN_DEFAULT_PASSWORD
 - DJANGO_SUPERUSER_USERNAME
 - DJANGO_SUPERUSER_EMAIL
 - DJANGO_SUPERUSER_PASSWORD
 - SECRET_KEY

### Disclaimer
Este repositório não tem fins comerciais e não equivale ao curso em que o projeto foi desenvolvido, para maior entendimento do assunto recomendo comprar o curso.