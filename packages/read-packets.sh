#!/bin/bash

cd /var/ossec/logs/alerts/pcap/

suricata -c /etc/suricata/suricata.yaml -r . --pcap-file-delete --pcap-file-continuous
