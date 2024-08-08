pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = "manureichel/manu-portfolio"
        REGISTRY_URL = "index.docker.io"
        REGISTRY_CREDENTIALS = 'docker-credentials-id'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://www.github.com/manureichel/manuportfolio.git'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${DOCKER_IMAGE}:${env.BUILD_NUMBER}")
                }
            }
        }
        
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry("https://${REGISTRY_URL}", "${REGISTRY_CREDENTIALS}") {
                        dockerImage.push()
                    }
                }
            }
        }
        
        stage('Deploy') {
            steps {
                sh """
                docker pull ${REGISTRY_URL}/${DOCKER_IMAGE}:${env.BUILD_NUMBER}
                docker stop manu-portfolio || true
                docker rm manu-portfolio || true
                docker run -d -p 8080:8080 --name manu-portfolio ${REGISTRY_URL}/${DOCKER_IMAGE}:${env.BUILD_NUMBER}
                """
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
    }
}
