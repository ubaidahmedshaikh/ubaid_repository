#!/bin/sh
echo ""
echo "Syncronization phase-1 starting...."
echo ""
PATH=/usr/jre1.8.0_144/bin/:$PATH
cd /etc/lsc
 /usr/bin/lsc -s insert
echo ""
echo "Syncronization phase-1 finished"
echo ""
