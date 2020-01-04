
###################################################################
#### Installing LSC syncrhonization  ##############################
##### September 15,  2017            ##############################
###################################################################
mkdir -p  /usr/cf.synchronization
tar  xzvf LSCconnector-1.0.5.tar.gz  -C /usr/cf.synchronization
cd  /usr/cf.synchronization
cd LSC
dpkg -i lsc_2.1.4-1_all.deb
cd /usr/cf.synchronization/JRE	
tar xzvf  jre-8u144-linux-x64.tar.gz
mv jre1.8.0_144  /usr
export PATH=$PATH:/usr/jre1.8.0_144/bin   
cd /usr/cf.synchronization/sync.Appendix
cp lsc.xml   /etc/lsc
cp sql-map-config.xml  /etc/lsc
cp InetOrgPerson.xml   /etc/lsc/sql-map-config.d
cp mysql-connector-java-5.1.18.jar  /usr/lib/lsc/
cp start.sync.sh  /etc/lsc
cp start.clean.sh  /etc/lsc
cp start.LSC.sh  /etc/lsc

chmod 775 /etc/lsc/start.sync.sh
./feed_cron_sync.sh


