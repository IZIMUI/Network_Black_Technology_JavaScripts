const HOST_List = new Array(
"music.163.com",
"interface.music.163.com",
"interface3.music.163.com",
"apm.music.163.com",
"apm3.music.163.com",
"59.111.181.38",
"59.111.181.60",
"223.252.199.66",
"223.252.199.67",
"59.111.160.195",
"59.111.160.197",
"193.112.159.225",
"39.105.63.80",
"47.100.127.239",
"118.24.63.156",
"59.111.181.35",
"115.236.118.33",
"115.236.121.1",
"112.13.122.1",
"112.13.119.17",
"103.126.92.132"
);

function HOST_Judge (HOST) {
for (let Value = 0; Value < HOST_List.length; Value++)
if (HOST == HOST_List[Value])
return true;
};

function FindProxyForURL (URL, HOST) {
if (HOST_Judge(HOST) == true)
return "PROXY 106.52.127.72:19951";
else
return "DIRECT";
};
