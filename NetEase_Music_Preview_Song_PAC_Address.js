const HOST_List = new Array(
  "music.163.com",
  "interface.music.163.com",
  "interface3.music.163.com",
  "apm.music.163.com",
  "apm3.music.163.com",
  "39.105.63.80",
  "47.100.127.239",
  "59.111.21.10",
  "59.111.21.14",
  "59.111.160.195",
  "59.111.160.197",
  "59.111.181.35",
  "59.111.181.38",
  "59.111.181.60",
  "103.126.92.132",
  "112.13.122.1",
  "112.13.119.17",
  "115.236.118.33",
  "115.236.121.1",
  "118.24.63.156",
  "193.112.159.225",
  "223.252.199.66",
  "223.252.199.67"
);

function HOST_Judges(HOST) {
  for (let Value = 0; Value < HOST_List.length; Value++)
    if (HOST == HOST_List[Value])
      return true;
      return false;
};

function FindProxyForURL(URL, HOST) {
  const HOST_Judge = HOST_Judges(HOST);   
  if (HOST_Judge == true)
    return "PROXY 106.52.127.72:19951";
  else if (HOST_Judge == false)
    return "DIRECT";
};
