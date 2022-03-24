pipeline {
  agent any
  tools {nodejs "node"}

  stages {
    stage('install dependencies') {
      steps {
        sh 'node -v'
        sh 'npm -v'
      }
    }
}
