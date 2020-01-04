#!/bin/sh
ip=$1
sshpass -p "sai123" ssh -o StrictHostKeyChecking=no root@"$ip"  "sudo apt-get update;usbguard generate-policy > rules.conf;sudo install -m 0600 -o root -g root rules.conf /etc/usbguard/rules.conf;sudo systemctl restart usbguard;sudo apt-get update"






