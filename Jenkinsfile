#!/usr/bin/env groovy

pipeline {
    
    agent {
        docker {
            image 'node:14'
            args '-u root'
        }
    }
    stages {
        stage('Packages') {
            steps {
                echo 'Installing...'
                sh 'sudo apt install zip && npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm run build'
                sh 'zip dist.zip dist'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'dist.zip', fingerprint: true
        }
    }
}