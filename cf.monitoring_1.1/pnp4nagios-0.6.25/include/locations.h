/************************************************************************
 *
 * Nagios Locations Header File
 * Written By: Ethan Galstad (nagios@nagios.org)
 * Last Modified: 04-30-2007
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 2 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.
 ************************************************************************/

#define DEFAULT_TEMP_FILE			"/usr/local/rtm/var/tempfile"
#define DEFAULT_TEMP_PATH                       "/tmp"
#define DEFAULT_CHECK_RESULT_PATH		"/usr/local/rtm/var/spool/checkresults"
#define DEFAULT_STATUS_FILE			"/usr/local/rtm/var/status.dat"
#define DEFAULT_LOG_FILE			"/usr/local/rtm/var/rtm.log"
#define DEFAULT_LOG_ARCHIVE_PATH		"/usr/local/rtm/var/archives/"
#define DEFAULT_DEBUG_FILE                      "/usr/local/rtm/var/rtm.debug"
#define DEFAULT_COMMENT_FILE			"/usr/local/rtm/var/comments.dat"
#define DEFAULT_DOWNTIME_FILE			"/usr/local/rtm/var/downtime.dat"
#define DEFAULT_RETENTION_FILE			"/usr/local/rtm/var/retention.dat"
#define DEFAULT_COMMAND_FILE			"/usr/local/rtm/var/rw/rtm.cmd"
#define DEFAULT_CONFIG_FILE			"/usr/local/rtm/etc/rtm.cfg"
#define DEFAULT_PHYSICAL_HTML_PATH		"/usr/local/rtm/share"
#define DEFAULT_URL_HTML_PATH			"/rtm"
#define DEFAULT_PHYSICAL_CGIBIN_PATH		"/usr/local/rtm/sbin"
#define DEFAULT_URL_CGIBIN_PATH			"/RealTimeMonitoring/cgi-bin"
#define DEFAULT_CGI_CONFIG_FILE			"/usr/local/rtm/etc/cgi.cfg"
#define DEFAULT_LOCK_FILE			"/usr/local/rtm/var/rtm.lock"
#define DEFAULT_OBJECT_CACHE_FILE		"/usr/local/rtm/var/objects.cache"
#define DEFAULT_PRECACHED_OBJECT_FILE		"/usr/local/rtm/var/objects.precache"
#define DEFAULT_EVENT_BROKER_FILE		"/usr/local/rtm/var/broker.socket"
#define DEFAULT_P1_FILE				"/usr/local/rtm/bin/p1.pl"	/**** EMBEDDED PERL ****/
#define DEFAULT_AUTH_FILE			""			/**** EMBEDDED PERL - IS THIS USED? ****/
