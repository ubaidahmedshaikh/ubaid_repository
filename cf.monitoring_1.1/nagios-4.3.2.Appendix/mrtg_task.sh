#!/bin/sh
#Task to be placed in /etc/cron.d/mrtg
####  */5 * * * *  root mrtg_task.sh 

export env LANG=C
/usr/bin/mrtg /etc/mrtg.cfg
