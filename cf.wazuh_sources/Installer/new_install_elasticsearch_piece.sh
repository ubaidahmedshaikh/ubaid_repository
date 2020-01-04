###########################################################################
###    Installation Controller and Elasticstack          ##################
#####  Septiembre 2017                                   ##################
## Created as separated step for timing regarding to availability port 9200
###########################################################################

echo "********************************************"
echo "********************************************"
echo ""
echo " Waiting for the vailability port 9200"
echo ""
echo "********************************************"
echo "*********************************************"
sleep 2m
apt-get install curl apt-transport-https

curl -s https://artifacts.elastic.co/GPG-KEY-elasticsearch | apt-key add -

echo "deb https://artifacts.elastic.co/packages/5.x/apt stable main" | tee /etc/apt/sources.list.
d/elastic-5.x.list

apt-get update

apt-get -y install  elasticsearch

systemctl daemon-reload

systemctl enable elasticsearch.service

systemctl start elasticsearch.service

curl https://raw.githubusercontent.com/wazuh/wazuh-kibana-app/master/server/startup/integration_files/template_file.json | curl -XPUT 'http://localhost:9200/_template/wazuh' -H 'Content-Type: application/json' -d @-



curl https://raw.githubusercontent.com/wazuh/wazuh-kibana-app/master/server/startup/integration_files/alert_sample.json | curl -XPUT "http://localhost:9200/wazuh-alerts-"`date +%Y.%m.%d`"/wazuh/sample" -H 'Content-Type: application/json' -d @-


#################################################################
##### put in place some configuration files
#################################################################
cd /usr/cf.wazuh/elastickstack.Appendix

cp ossec.conf    /var/ossec/etc
cp local_rules.xml  /var/ossec/etc/rules

cp en.json  /usr/share/kibana/src/core_plugins/kibana/translations/
chown kibana:kibana  0cebf3d61338c454670b1c5bdf5d6d8d.svg
chown kibana:kibana  commons.style.css
chown kibana:kibana  wazuh.style.css
  

cp  0cebf3d61338c454670b1c5bdf5d6d8d.svg   /usr/share/kibana/optimize/bundles
cp  commons.style.css      /usr/share/kibana/optimize/bundles
cp  wazuh.style.css   /usr/share/kibana/optimize/bundles

