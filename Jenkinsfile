pipeline {
  agent any

  environment {
    LT_USERNAME = credentials('LT_USERNAME')
    LT_ACCESS_KEY = credentials('LT_ACCESS_KEY')
  }

  stages {
    stage('install dependencies') {
      steps {
        echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
        sh 'npm ci'
      }
    }

    stage('build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('start dev server') {
      steps {
        sh 'nohup npm run start-server &'
      }
    }

    stage('execute E2E') {
      steps {
        sh "npm run ci:lambdatest --build_name=${env.JOB_NAME}-${env.BUILD_ID}"
      }
    }
  }

  post {
    always {
      echo 'Stopping local server'
      sh 'pkill -f http-server'
    }
  }
}
