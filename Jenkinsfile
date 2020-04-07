pipeline{
       
    agent any 
    stages{       
       
    stage('checkout'){
           steps{
            
             checkout scm
            // checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'github-creds-global', url: 'https://github.com/raydeo-cicd/simple-node-app.git']]])
           
        }
     }
     stage('Building docker images'){
       steps{   
        script{
        img= docker.build("raydeo/simple-connect-mongo-app")
        }
        
        
    }
    }
    stage('Pushing docker images'){
     steps{
        withDockerRegistry(credentialsId: 'dockerhub-user-global',url:'') {
        script{
           img.push("${env:BUILD_NUMBER}")
        }
}
    }
    }
    stage('updating helm chart'){
           steps{
            sh "kubectl cluster-info "
           sh "helm upgrade bubs nodejs-helm --set nodeImage=raydeo/simple-connect-mongo-app:${env:BUILD_NUMBER}"   
            
        }
     }
    
    



        
    }
    
}

