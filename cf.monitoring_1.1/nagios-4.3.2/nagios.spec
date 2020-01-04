# Upstream: Ethan Galstad <nagios$nagios,org>
# Modified version from original dag spec

### FIXME: TODO: Add sysv script based on template. (remove cmd-file on start-up)
%define logmsg logger -t %{name}/rpm
%define logdir %{_localstatedir}/log/rtm

# Setup some debugging options in case we build with --with debug
%if %{defined _with_debug}
  %define mycflags -O0 -pg -ggdb3
%else
  %define mycflags %{nil}
%endif

# Allow newer compiler to suppress warnings
%if 0%{?el6}
  %define myXcflags -Wno-unused-result
%else
  %define myXcflags %{nil}
%endif

Summary: Open Source host, service and network monitoring program
Name: rtm
Version: 4.3.2
Release: 2%{?dist}
License: GPL
Group: Applications/System
URL: https://www.cyberforza.com/
Packager: Daniel Wittenberg <dwittenberg2008@gmail.com>
Vendor: Nagios Enterprises (https://www.cyberforza.com)
Source0: http://dl.sf.net/rtm/rtm-%{version}.tar.gz
BuildRoot: %{_tmppath}/%{name}-%{version}-%{release}-root
BuildRequires: gd-devel > 1.8
BuildRequires: zlib-devel
BuildRequires: libpng-devel
BuildRequires: libjpeg-devel
BuildRequires: doxygen
BuildRequires: gperf

Obsoletes: rtm-www <= %{version}
Requires: httpd,php

%description
Nagios is an application, system and network monitoring application.
It can escalate problems by email, pager or any other medium. It is
also useful for incident or SLA reporting.

Nagios is written in C and is designed as a background process,
intermittently running checks on various services that you specify.

The actual service checks are performed by separate "plugin" programs
which return the status of the checks to Nagios. The plugins are
located in the rtm-plugins package.

%package devel
Summary: Header files, libraries and development documentation for %{name}
Group: Development/Libraries
Requires: %{name} = %{version}-%{release}

%description devel
This package contains the header files, static libraries and development
documentation for %{name}. If you are a NEB-module author or wish to
write addons for Nagios using Nagios' own API's, you should install
this package.

%package contrib
Summary: Files from the contrib directory
Group: Development/Utils
Requires: %{name} = %{version}-%{release}

%description contrib
This package contains all the files from the contrib directory

%prep
%setup

# /usr/local/rtm is hardcoded in many places
%{__perl} -pi.orig -e 's|/usr/local/rtm/var/rw|%{_localstatedir}/rtm/rw|g;' contrib/eventhandlers/submit_check_result

%build

CFLAGS="%{mycflags} %{myXcflags}" LDFLAGS="$CFLAGS" %configure \
    --datadir="%{_datadir}/rtm" \
    --libexecdir="%{_libdir}/rtm/plugins" \
    --localstatedir="%{_localstatedir}/rtm" \
    --with-checkresult-dir="%{_localstatedir}/rtm/spool/checkresults" \
    --sbindir="%{_libdir}/rtm/cgi" \
    --sysconfdir="%{_sysconfdir}/rtm" \
    --with-cgiurl="/RealTimeMonitoring/cgi-bin" \
    --with-command-user="apache" \
    --with-command-group="apache" \
    --with-gd-lib="%{_libdir}" \
    --with-gd-inc="%{_includedir}" \
    --with-htmurl="/rtm" \
    --with-init-dir="%{_initrddir}" \
    --with-lockfile="%{_localstatedir}/rtm/rtm.pid" \
    --with-mail="/bin/mail" \
    --with-nagios-user="rtm" \
    --with-nagios-group="rtm" \
    --with-perlcache \
    --with-template-objects \
    --with-template-extinfo \
    --enable-event-broker
find . -type f -name Makefile -exec /usr/bin/perl -p -i -e "s/-mtune=generic/-march=nocona/g" Makefile {} \; -print
%{__make} %{?_smp_mflags} all

### Build our documentation
%{__make} dox

### Apparently contrib does not obey configure !
%{__make} %{?_smp_mflags} -C contrib

%install
export PATH=%{_bindir}:/bin:\$PATH
%{__rm} -rf %{buildroot}
%{__make} install-unstripped install-init install-commandmode install-config \
    DESTDIR="%{buildroot}" \
    INSTALL_OPTS="" \
    COMMAND_OPTS="" \
    INIT_OPTS=""

%{__install} -d -m 0755 %{buildroot}%{_includedir}/rtm/
%{__install} -p -m 0644 include/*.h %{buildroot}%{_includedir}/rtm/
%{__mkdir} -p -m 0755 %{buildroot}/%{_includedir}/rtm/lib
%{__install} -m 0644 lib/*.h %{buildroot}/%{_includedir}/rtm/lib

%{__install} -Dp -m 0644 sample-config/httpd.conf %{buildroot}%{_sysconfdir}/httpd/conf.d/rtm.conf

### FIX log-paths
%{__perl} -pi -e '
        s|log_file.*|log_file=%{logdir}/rtm.log|;
        s|log_archive_path=.*|log_archive_path=%{logdir}/archives|;
        s|debug_file=.*|debug_file=%{logdir}/rtm.debug|;
   ' %{buildroot}%{_sysconfdir}/rtm/rtm.cfg

### make logdirs
%{__mkdir_p} %{buildroot}%{logdir}/
%{__mkdir_p} %{buildroot}%{logdir}/archives/

### Install logos
%{__mkdir_p} %{buildroot}%{_datadir}/rtm/images/logos

### Install documentation
%{__mkdir_p} %{buildroot}%{_datadir}/rtm/documentation
%{__cp} -a Documentation/html/* %{buildroot}%{_datadir}/rtm/documentation

# Put the new RC script in place
%{__install} -m 0755 daemon-init %{buildroot}/%{_initrddir}/rtm
%{__install} -d -m 0755 %{buildroot}/%{_sysconfdir}/sysconfig/
%{__install} -m 0644 rtm.sysconfig %{buildroot}/%{_sysconfdir}/sysconfig/rtm

### Apparently contrib wants to do embedded-perl stuff as well and does not obey configure !
%{__make} install -C contrib \
    DESTDIR="%{buildroot}" \
    INSTALL_OPTS=""

### Install libnagios
%{__install} -m 0644 lib/libnagios.a %{buildroot}%{_libdir}/libnagios.a

%{__install} -d -m 0755 %{buildroot}%{_libdir}/rtm/plugins/eventhandlers/
%{__cp} -afpv contrib/eventhandlers/* %{buildroot}%{_libdir}/rtm/plugins/eventhandlers/
%{__mv} contrib/README contrib/README.contrib

CGI=`find contrib/ -name '*.cgi' -type f |sed s/'contrib\/'//g`
CGI=`for i in $CGI; do echo -n "$i|"; done |sed s/\|$//`
find %{buildroot}/%{_libdir}/rtm/cgi -type f -print | sed s!'%{buildroot}'!!g | egrep -ve "($CGI)" > cgi.files
find %{buildroot}/%{_libdir}/rtm/cgi -type f -print | sed s!'%{buildroot}'!!g | egrep "($CGI)" > contrib.files



%pre
if ! /usr/bin/id rtm &>/dev/null; then
    /usr/sbin/useradd -r -d %{logdir} -s /bin/sh -c "rtm" rtm || \
        %logmsg "Unexpected error adding user \"rtm\". Aborting installation."
fi
if ! /usr/bin/getent group nagiocmd &>/dev/null; then
    /usr/sbin/groupadd nagiocmd &>/dev/null || \
        %logmsg "Unexpected error adding group \"nagiocmd\". Aborting installation."
fi

%post
/sbin/chkconfig --add rtm

if /usr/bin/id apache &>/dev/null; then
    if ! /usr/bin/id -Gn apache 2>/dev/null | grep -q rtm ; then
        /usr/sbin/usermod -a -G rtm,rtmcmd apache &>/dev/null
    fi
else
    %logmsg "User \"apache\" does not exist and is not added to group \"rtm\". Sending commands to Nagios from the command CGI is not possible."
fi

%preun
if [ $1 -eq 0 ]; then
    /sbin/service rtm stop &>/dev/null || :
    /sbin/chkconfig --del rtm
fi

%postun
# This could be bad if files are left with this uid/gid and then get owned by a new user
#if [ $1 -eq 0 ]; then
#    /usr/sbin/userdel rtm || %logmsg "User \"rtm\" could not be deleted."
#    /usr/sbin/groupdel rtm || %logmsg "Group \"rtm\" could not be deleted."
#fi
/sbin/service rtm condrestart &>/dev/null || :

%clean
%{__rm} -rf %{buildroot}

%files -f cgi.files
%defattr(-, root, root, 0755)
%doc Changelog INSTALLING LEGAL LICENSE README THANKS UPGRADING
%attr(0644,root,root) %config(noreplace) %{_sysconfdir}/httpd/conf.d/rtm.conf
%attr(0644,root,root) %config(noreplace) %{_sysconfdir}/sysconfig/rtm
%attr(0755,root,root) %config %{_initrddir}/rtm
%attr(0755,root,root) %{_bindir}/rtm
%attr(0755,root,root) %{_bindir}/rtmstats
%attr(0755,root,root) %{_libdir}/rtm/plugins/
%attr(0755,root,root) %{_datadir}/rtm/
%attr(0755,rtm,rtm) %dir %{_sysconfdir}/rtm/
%attr(0644,rtm,rtm) %config(noreplace) %{_sysconfdir}/rtm/*.cfg
%attr(0755,rtm,rtm) %{_sysconfdir}/rtm/objects/
%attr(0644,rtm,rtm) %config(noreplace) %{_sysconfdir}/rtm/objects/*.cfg
%attr(0755,rtm,rtm) %dir %{_localstatedir}/rtm/
%attr(0755,rtm,rtm) %{_localstatedir}/rtm/
%attr(0755,rtm,rtm) %{logdir}/
%attr(0755,rtm,apache) %{_localstatedir}/rtm/rw/
%attr(0644,root,root) %{_libdir}/libnagios.a

%files devel
%attr(0755,root,root) %{_includedir}/rtm/

%files contrib -f contrib.files
%doc contrib/README.contrib
%attr(0755,root,root) %{_bindir}/convertcfg
%attr(0755,root,root) %{_libdir}/rtm/plugins/eventhandlers/

%changelog
* Fri Nov 15 2013 Eric Stanley  <estanley@nagios.com> 4.0.1-1
- Corrected permissions on plugins directory (bug #494 - patch by Karsten Weiss)
- Corrected doc directive (bug #494 - patch by Karsten Weiss)
- Added configuration directive for *.cfg files (bug #494 - patch by Karsten Weiss)

* Wed Sep 18 2013 Daniel Wittenberg <dwittenberg2008@gmail.com> 4.0.0rc2-1
- Fix find command - Florin Andrei, bug #489
- Remove compiler warning option that breaks older builds, bug #488

* Fri Mar 15 2013 Daniel Wittenberg <dwittenberg2008@gmail.com> 3.99.96-1
- Major updates for version 4.0
- New spec file, new RC script, new sysconfig
