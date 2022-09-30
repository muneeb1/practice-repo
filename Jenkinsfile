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
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm run build'
                sh 'ls -ltr'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'dist', fingerprint: true
        }
    }
}