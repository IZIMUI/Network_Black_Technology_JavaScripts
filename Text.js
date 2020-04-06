function FindProxyForURL (Url, Host){
if(Host == "www.baidu.com")
return "PROXY 192.168.1.105:4199"
else
return "DIRECT";
}
