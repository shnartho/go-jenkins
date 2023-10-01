## An uncomplicated website developed in Go, supported by a CI/CD pipeline managed through Jenkins✌️

### 🔰 Overview 
![](./images/overview.png)
#### 🟢 The website is running in localhost. To update and push the changes in the server we have Jenkins for CI. 

![](./images/server.png)
#### 🟢 Here I prepared the Jenkins server for CI

![](./images/code.png)
#### 🟢 Lets update the code and push it to the git repository

![](./images/g.png)
#### 🟢 The code repository has been updated

![](./images/gw.png)
#### 🟢 Update got triggered by the GitHub webhook

![](./images/j1.png)
#### 🟢 Jenkins pulling the updated code repository and executing shell commands

![](./images/j2.png)
#### 🟢 Jenkins workspace after pulling the latest repo

![](./images/pu.png)
#### 🟢 The website is running on Jenkins server port 8091

![](./images/pu2.png)
#### 🟢 The website functionalities are working as expected


### 🖥️ Servers Setup 
1. EC2: To connect using aws ec2 instances, first check if "etc/ssh/sshd_config -> PasswordAuthentication yes", incase it is set to no then change it to yes otherwise using putty you cant connet to the ec2 instances. 
1. Jenkins: Install java runtime environment. For Jenkins installing follow https://www.jenkins.io/doc/book/installing/linux/. 

🎯 In summary, Updating code and pushing it to git repository will trigger the webhook, jenkins will pull the updated code repo in the project workspace and execute necessary shell comands for port and running the website.

