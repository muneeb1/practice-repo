#!/usr/bin/env groovy

pipeline {
    
    agent {
        docker {
            image 'node:14'
            args '-u root'
        }
    }
    environment {
        EMAIL = credentials('mail')
    }
    stages {
        stage('Packages') {
            steps {
                echo "Installing..."
                sh 'apt-get update && apt-get install zip unzip -y'
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm run build'
                sh 'zip dist.zip dist/angular-trial/*'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'dist.zip', fingerprint: true
        }
        success {
            echo 'I succeeded!'
        }
        unstable {
            echo 'I am unstable :/'
        }
        failure {
            mail to: "${EMAIL}", // It will not work for now, as Email configuration setup is pending on Jenkins
             subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
             body: "Something is wrong with ${env.BUILD_URL}"
        }
        changed {
            echo 'Things were different before...'
        }
    }
}