#!/bin/sh
*/5 *   * * *   root    if [ -x /usr/bin/mrtg ] && [ -r /etc/mrtg.cfg ] && [ -d "$(grep '^[[:space:]]*[^#]*[[:space:]]*WorkDir' /etc/mrtg.cfg | awk '{ print $NF }')" ]; then mkdir -p /var/log/mrtg ; env LANG=C /usr/bin/mrtg /etc/mrtg.cfg 2>&1 | tee -a /var/log/mrtg/mrtg.log ; fi > /etc/cron.d/mrtg