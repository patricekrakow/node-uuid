```text
$ docker --version
Docker version 20.10.7, build f0df350

$ docker build --tag patrice1972/node-uuid:1.0.0 .
...
Successfully built f0535d996ae8
Successfully tagged patrice1972/node-uuid:1.0.0

$ docker images
REPOSITORY                                               TAG            IMAGE ID       CREATED          SIZE
patrice1972/node-uuid                                    1.0.0          f0535d996ae8   20 seconds ago   182MB
...

$ docker run --publish 80:3000 --detach patrice1972/node-uuid:1.0.0
da157b9702884fe7c6a6998f3ec62dea8072646ef5bdaf160910efaa375ed1a6

$ docker ps
CONTAINER ID   IMAGE                         COMMAND                  CREATED          STATUS          PORTS                                   NAMES
da157b970288   patrice1972/node-uuid:1.0.0   "docker-entrypoint.s…"   14 seconds ago   Up 13 seconds   0.0.0.0:80->3000/tcp, :::80->3000/tcp   frosty_gates

$ curl localhost/uuid
{
  "uuid": "1d0ac865-4e21-4d05-b210-03480af76cb5",
  "info": "Provided by node-uuid."
}

$ docker rm --force da157b970288
da157b970288

$ docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

$ docker login
...
Login Succeeded

$ docker push patrice1972/node-uuid:1.0.0
...
1.0.0: digest: sha256:2d66e66f7566f79a9f8aa1b5e177744da338dc0448b11aa7788e782d1383622f size: 2202
```
