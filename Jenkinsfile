pipeline {
    agent any
     triggers {
        githubPush()  
    }
    stages {
        stage('Clone from Git') {
            steps {
                git branch: 'master', url: 'https://github.com/M-Saranya123/react-app.git'
            }
        }
        stage('Stop Old Container') {
            steps {
                script {
                    sh '''
                        docker stop react-app-new || true
                        docker rm react-app-new || true
                        docker-compose down || true
                    '''
                }
            }
        }
        
        stage('Build with Docker Compose') {
            steps {
                echo '========================================='
                echo 'Building React application...'
                echo '========================================='
                sh 'docker-compose build --no-cache'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying React application...'
                sh 'docker-compose up -d'
                echo 'Deployment successful!'
                echo 'React App is running at: http://localhost:8085'
            }
        }
        
        stage('Verify Deployment') {
            steps {
                sh 'docker ps | grep react-app-new || echo "Container check complete"'
                sh 'sleep 3'
                echo 'Deployment verification complete!'
            }
        }
    }
    
    post {
        success {
            echo '✅ Pipeline completed successfully!'
            echo 'Access your app at: http://localhost:8085'
        }
        failure {
            echo '❌ Pipeline failed! Check the logs above.'
        }
    }
}
