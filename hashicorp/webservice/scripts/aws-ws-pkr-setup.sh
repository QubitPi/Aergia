#!/bin/bash
set -x
set -e

# Copyright Jiaqi Liu
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

sudo apt update && sudo apt upgrade -y
sudo apt install software-properties-common -y

# Install JDK 17 - https://www.rosehosting.com/blog/how-to-install-java-17-lts-on-ubuntu-20-04/
sudo apt update -y
sudo apt install openjdk-17-jdk -y
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64

# Install and configure Jetty (for JDK 17) container
JETTY_VERSION=11.0.15
wget https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-home/$JETTY_VERSION/jetty-home-$JETTY_VERSION.tar.gz
tar -xzvf jetty-home-$JETTY_VERSION.tar.gz
rm jetty-home-$JETTY_VERSION.tar.gz
export JETTY_HOME=${HOME_DIR}/jetty-home-$JETTY_VERSION
mkdir jetty-base
cd jetty-base
java -jar $JETTY_HOME/start.jar --add-module=annotations,server,http,deploy,servlet,webapp,resources,jsp
mv ${HOME_DIR}/ROOT.war webapps/ROOT.war
cd ../

# Install Nginx and load SSL config
sudo apt install -y nginx
sudo mv ${HOME_DIR}/nginx-ssl.conf /etc/nginx/sites-enabled/default
sudo mv ${HOME_DIR}/server.crt /etc/ssl/certs/server.crt
sudo mv ${HOME_DIR}/server.key /etc/ssl/private/server.key

# Filebeat
curl -L -O https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-8.9.2-amd64.deb
sudo dpkg -i filebeat-8.9.2-amd64.deb
sudo mv ${HOME_DIR}/filebeat.yml /etc/filebeat/filebeat.yml
sudo chown root /etc/filebeat/filebeat.yml