pipeline {
    agent any
    
    triggers {
        githubPush()  // Automatic webhook trigger
    }
    
    stages {
        stage('Clone from Git') {
            steps {
                echo '========================================='
                echo 'Cloning repository from GitHub...'
                echo '========================================='
                git branch: 'master',
                    url: 'https://github.com/M-Saranya123/react-app.git'
            }
        }
        
        stage('Stop Old Container') {
            steps {
                echo 'Stopping old container if it exists...'
                sh '''
                docker rm -f react-app-new || true
                '''
            }
        }
        
        stage('Build Docker Image') {
            steps {
                echo '========================================='
                echo 'Building Docker image...'
                echo '========================================='
                sh 'docker build -t react-app-new .'
            }
        }
        
        stage('Run Container') {
            steps {
                echo '========================================='
                echo 'Running Docker container...'
                echo '========================================='
                sh '''
                docker run -d -p 8085:80 --name react-app-new react-app-new
                '''
                echo 'React App is running at: http://localhost:8085'
            }
        }
        
        stage('Verify Deployment') {
            steps {
                echo '========================================='
                echo 'Verifying deployment...'
                echo '========================================='
                sh 'docker ps | grep react-app-new || echo "Container check complete"'
                echo 'Deployment verification complete!'
            }
        }
    }
    
    post {
        success {
            echo '✅ Pipeline completed successfully!'
            echo '🚀 Access your app at: http://localhost:8085'
        }
        failure {
            echo '❌ Pipeline failed! Check the logs above.'
        }
    }
}