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
                sh 'npm i @angular/cli@9.1.0-rc.0'
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm run build'
            }
        }
    }
}