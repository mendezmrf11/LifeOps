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
                sh 'npm install'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Instalar dependencias Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Verificar Backend') {
            steps {
                dir('backend') {
                    sh 'node --version'
                }
            }
        }

        stage('Docker Build Frontend') {
            steps {
                sh "docker build -t ${FRONTEND_IMAGE} ."
            }
        }

        stage('Docker Build Backend') {
            steps {
                sh "docker build -t ${BACKEND_IMAGE} ./backend"
            }
        }

        stage('Docker Compose Up') {
            steps {
                sh 'docker compose up -d --build'
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