#!/bin/sh
*/5 * * * *  root  env LANG=C /usr/bin/mrtg /usr/local/rtm/etc/mrtg.cfg  > /etc/cron.d/mrtg-nagios
