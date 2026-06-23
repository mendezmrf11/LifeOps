pipeline {
    agent any

    environment {
        FRONTEND_IMAGE = 'lifeops-frontend'
        BACKEND_IMAGE = 'lifeops-backend'
    }

    stages {
        stage('Clonar Repositorio') {
            steps {
                checkout scm
            }
        }

        stage('Instalar dependencias Frontend') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Frontend') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Instalar dependencias Backend') {
            steps {
                dir('backend') {
                    bat 'npm install'
                }
            }
        }

        stage('Verificar Backend') {
            steps {
                dir('backend') {
                    bat 'node --version'
                }
            }
        }

        stage('Docker Build Frontend') {
            steps {
                bat "docker build -t %FRONTEND_IMAGE% ."
            }
        }

        stage('Docker Build Backend') {
            steps {
                bat "docker build -t %BACKEND_IMAGE% backend"
            }
        }

        stage('Docker Compose Up') {
            steps {
                bat 'docker compose up -d --build'
            }
        }
    }

    post {
        success {
            echo 'Pipeline ejecutado correctamente. Frontend y backend desplegados en contenedores.'
        }
        failure {
            echo 'La ejecución del pipeline falló. Revisar logs de Jenkins.'
        }
    }
}