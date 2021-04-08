def IMG_NAME = 'student_on_duty_server'
def CONTAINER_NAME = 'student_on_duty_server'

pipeline {
  agent any

  stages {
    stage('Clear old container') {
      steps {
        script {
          try {
            sh "docker rm -f ${CONTAINER_NAME}"
          } catch (exc) {
            echo "Not Found container:${CONTAINER_NAME} "
            echo "${exc}"
          }
        }
      }
    }
    stage('Build') {
      steps {
        sh "docker build -t ${IMG_NAME} -f Dockerfile ."
        sh "docker run -d \
            -p 7405:3000 \
            -v /usr/local/config_center/student_on_duty/production.ts:/code/config/production.ts \
            --name ${CONTAINER_NAME} \
            ${IMG_NAME}"
      }
    }
  }

  post {
    success {
      echo 'success'
    }
    failure {
      echo 'fail'
    }
  }
}
