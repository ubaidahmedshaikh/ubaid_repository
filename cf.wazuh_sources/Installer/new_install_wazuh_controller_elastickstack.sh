#####################################################################
######  Installation Controller and Elasticstack   ##################
#####  Septiembre 2017                             ################## 
#####################################################################
mkdir -p  /usr/cf.wazuh

cd  $HOME_CSS
tar xzvf  cf.wazuh-1.0.5.tar.gz  -C /usr/cf.wazuh
apt-get update
apt-get install curl apt-transport-https lsb-release


curl -s https://packages.wazuh.com/key/GPG-KEY-WAZUH | apt-key add -

CODENAME=$(lsb_release -cs)
echo "deb https://packages.wazuh.com/apt $CODENAME main" | tee /etc/apt/sources.list.d/wazuh.list

apt-get update

apt-get -y install wazuh-manager


######systemctl status wazuh-manager

echo  "******************************BEFORE curl"
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
echo "*******************************AFTER curl"

####read -s “Waiting..... for input: ” var
 

apt-get -y  install nodejs

apt-get -y install wazuh-api

####systemctl status wazuh-api

echo "deb http://ppa.launchpad.net/webupd8team/java/ubuntu xenial main" | tee /etc/apt/sources.list.d/webupd8team-java.list

echo "deb-src http://ppa.launchpad.net/webupd8team/java/ubuntu xenial main" | tee -a /etc/apt/sources.list.d/webupd8team-java.list

apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys EEA14886

add-apt-repository ppa:webupd8team/java

apt-get update

echo "oracle-java8-installer shared/accepted-oracle-license-v1-1 select true" | sudo debconf-set-selections
sudo apt-get install -y oracle-java8-installer


apt-get -y  install curl apt-transport-https

curl -s https://artifacts.elastic.co/GPG-KEY-elasticsearch | apt-key add -

echo "deb https://artifacts.elastic.co/packages/5.x/apt stable main" | tee /etc/apt/sources.list.d/elastic-5.x.list

apt-get update

apt-get -y install elasticsearch

systemctl daemon-reload

systemctl enable elasticsearch.service

systemctl start elasticsearch.service

curl https://raw.githubusercontent.com/wazuh/wazuh-kibana-app/master/server/startup/integration_files/template_file.json | curl -XPUT 'http://localhost:9200/_template/wazuh' -H 'Content-Type: application/json' -d @-



curl https://raw.githubusercontent.com/wazuh/wazuh-kibana-app/master/server/startup/integration_files/alert_sample.json | curl -XPUT "http://localhost:9200/wazuh-alerts-"`date +%Y.%m.%d`"/wazuh/sample" -H 'Content-Type: application/json' -d @-

apt-get -y install logstash

curl -so /etc/logstash/conf.d/01-wazuh.conf https://raw.githubusercontent.com/wazuh/wazuh/2.0/extensions/logstash/01-wazuh.conf
curl -so /etc/logstash/wazuh-elastic5-template.json https://raw.githubusercontent.com/wazuh/wazuh/2.0/extensions/elasticsearch/wazuh-elastic5-template.json


usermod -a -G ossec logstash

systemctl daemon-reload

systemctl enable logstash.service

systemctl start logstash.service

apt-get -y install kibana
echo "**********************************************************"
echo "**********************************************************"
echo "                                                          "
echo "Please wait....this step would take several minutes ......"
echo "                                                          "
echo "**********************************************************"
echo "**********************************************************"
 /usr/share/kibana/bin/kibana-plugin install https://packages.wazuh.com/wazuhapp/wazuhapp.zip



cd  /usr/cf.wazuh/elastickstack.Appendix

cp  kibana.yml  /etc/kibana/

service kibana restart

cp 01-wazuh.conf  /etc/logstash/conf.d/

service  logstash restart



