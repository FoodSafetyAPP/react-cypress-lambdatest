pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                script {
                    def xyz = sh encoding: 'UTF-8', 
                                returnStdout: true, 
                                script: sh (lambdatest-cypress run --eof true --bn dddd)
                    echo "xyz is ${xyz}"
                }
            }
        }
    }
}