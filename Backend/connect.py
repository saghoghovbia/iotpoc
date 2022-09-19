import socket

#this code connects the raspberry pi to this server allowing signals to be passed

s = socket.socket()
print ('Socket successfully created')

port = 12346

s.bind(('192.168.1.182', port))
print ('socket binded to %s' %(port) )

s.listen(5)
print ('socket is listening')


def rp(s):
    c, arr = s.accept()
    data = c.recv(1024).decode("utf-8")
    print(str(data))
    c.close() 

while True:
    rp(s)

