#!/usr/bin/env groovy

pipeline {
    
    /*agent {
        docker {
            image 'node:14'
            args '-u root'
        }
    }*/
    agent { label 'Linux-agent' }
    environment {
        EMAIL = credentials('mail')
    }
    stages {
        stage('Packages') {
            steps {
                echo "Installing..."
                sh 'sudo apt-get update && sudo apt-get install zip unzip -y' // remove sudo when need to run in docker container
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
        stage('Sanity check') {
            steps{
                input(message: 'Does the staging env looks good?')
            }
        }
        stage('Deploy'){
            steps{
                echo 'deploying...'
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
