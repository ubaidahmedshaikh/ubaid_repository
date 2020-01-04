#!/bin/sh
echo ""
echo "Syncronization phase-2 starting...."
echo ""
PATH=/usr/jre1.8.0_144/bin/:$PATH
cd /etc/lsc
 /usr/bin/lsc -c insert
echo ""
echo "Syncronization phase-2 finished"
echo ""
