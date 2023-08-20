# Projeto do curso: [Django with React | An Ecommerce Website](https://www.udemy.com/course/django-with-react-an-ecommerce-website/) [![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/dev-nando/ecommerce_dwr/blob/main/README.pt-br.md)
![Badge](https://img.shields.io/static/v1?label=Django&message=4.0.5&color=red&style=flat&logo=Django) ![Badge](https://img.shields.io/static/v1?label=DjangoREST&message=3.12.2&color=red&style=flat&logo=DjangoREST) ![Badge](https://img.shields.io/static/v1?label=React&message=^18.2.0&color=red&style=flat&logo=React) ![Badge](https://img.shields.io/static/v1?label=PostgreSQL&message=database&color=blue&style=flat&logo=POSTGRESQL) ![Badge](https://img.shields.io/static/v1?label=Docker&message=container&color=blue&style=flat&logo=Docker) 
![Badge](https://img.shields.io/static/v1?label=Status&message=completo&color=brightgreen&style=flat)

This is the repository of the project developed in the course [Django with React | An Ecommerce Website](https://www.udemy.com/course/django-with-react-an-ecommerce-website/).To include one more subject of my interest, I implemented the project with Docker, creating containers for the frontend, backend and database. As the project uses a Postgres database, a container for PgAdmin4 was also included. I would like to recommend the two videos below from the Very Academy channel, which helped me a lot in this dokerization process.

 - [Docker Compose | How to configure PostgreSQL or MySQL database with Python Django](https://www.youtube.com/watch?v=q75wgk9jVjA&list=PLOLrQ9Pn6cazCfL7v4CdaykNoWMQymM_C&index=3)
 - [Docker-Compose | Dockerizing pgAdmin and Postgres - Volumes and Custom Network IP](https://www.youtube.com/watch?v=_oqSGs3rrf8&list=PLOLrQ9Pn6cazCfL7v4CdaykNoWMQymM_C&index=8)

At the end of the course the instructor shows how to put the images in AWS buckets and deploy with Heroku, but this project does not contain these steps. As my goal was more to study the technologies (Django REST, React and Docker) I thought it was better to leave this repository without these steps.

## Requirements for you to run the project

 1. Have docker and docker-compose installed
 2. Create an `.env` file inside the project root with the project's environment variables
 3. Create an `.env` hard link inside the `/backend` directory

## Environment variables

Set the environment variables below in the `.env` file:

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

This repository has no commercial purposes and is not equivalent to the course in which the project was developed, for a better understanding of the subject I recommend buying the course.