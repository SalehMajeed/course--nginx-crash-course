```code
docker build . -t nodeapp
docker run --name nodeapp -p 9999:9999 nodeapp
```

```code
docker run -p 4444:9999 -e APPID=4444 -d nodeapp
docker run -p 5555:9999 -e APPID=5555 -d nodeapp
```