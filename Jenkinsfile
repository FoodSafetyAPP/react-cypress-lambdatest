pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                script {
                    def xyz = sh encoding: 'UTF-8',
                                script: 'echo hello scripted world'
                    echo "xyz is ${xyz}"
                }
            }
        }
    }
}