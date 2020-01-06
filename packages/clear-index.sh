#!/bin/bash
sleep 5m
#Clear wazuh alerts
curl -X DELETE "localhost:9200/wazuh-alerts-*" &> /dev/null
curl -X DELETE "localhost:9200/wazuh-monitoring-*" &> /dev/null

#Delete the wazuh-monitoring index pattern
curl -X DELETE "http://localhost:5601/api/saved_objects/index-pattern/wazuh-monitoring-3.x-*" -H 'kbn-xsrf: true' &> /dev/null
#Delete the wazuh-alerts index pattern
curl -X DELETE "http://localhost:5601/api/saved_objects/index-pattern/wazuh-alerts-3.x-*" -H 'kbn-xsrf: true' &> /dev/null


#Delete interceptor-alerts-* index pattern, without the color coding
curl -X DELETE http://localhost:5601/api/saved_objects/index-pattern/interceptor-alerts-* -H "kbn-xsrf: true"

#Add interceptor-alerts-* index pattern
curl https://s3-us-west-1.amazonaws.com/interceptor-storage/index-pattern-input.json | curl -X POST http://localhost:5601/api/saved_objects/index-pattern/interceptor-alerts-* -H "Content-Type: application/json" -H "kbn-xsrf: true" -d @-

#Make interceptor-alerts-* as the default pattern
curl -X POST "localhost:5601/api/kibana/settings/defaultIndex" -H "Content-Type: application/json" -H "kbn-xsrf: true" -d "{\"value\":\"interceptor-alerts-*\"}"