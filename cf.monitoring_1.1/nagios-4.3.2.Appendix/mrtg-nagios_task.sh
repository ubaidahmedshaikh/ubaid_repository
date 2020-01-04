#!/bin/sh
#Task to be placed in /etc/cron.d/mrtg-nagios
####  */5 * * * *  root mrtg-nagios_task.sh 

export env LANG=C
/usr/bin/mrtg /usr/local/rtm/etc/mrtg.cfg
