pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                script {
                    def xyz = sh encoding: 'UTF-8', 
                                returnStdout: true, 
                                lambdatest-cypress run --eof true --bn testing
                    echo "xyz is ${xyz}"
                }
            }
        }
    }
}