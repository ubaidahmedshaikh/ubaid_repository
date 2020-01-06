#!/usr/bin/python
import socket
import os
from itertools import chain
from subprocess import call
import time
time.sleep(120)
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.connect(("8.8.8.8", 80))
IP = s.getsockname()[0]
s.close()
paths = ('/var/www/', '/etc/apache2/')
for paths, dirs, files in chain.from_iterable(os.walk(path) for path in paths):
    for filename in files:
        if filename.endswith('.html') or filename.endswith('.js') or filename.endswith('.php') or filename.endswith('.conf'):
            content=""
            with open(os.path.join(paths, filename), 'r+') as theFile:
                content = theFile.read()
                content = content.replace('192.168.50.117', IP)
                theFile.seek(0)
                theFile.truncate()
                theFile.write(content)


call(["/usr/sbin/service", "apache2", "restart"])
