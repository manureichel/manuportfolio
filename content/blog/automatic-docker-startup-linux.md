---
external: false
title: "Automatic Docker startup on Linux"
description: "Learn how to set up automatic startup for your Docker services on a Linux system to ensure your applications are always ready to go."
date: 2023-09-24
---

I often use a Raspberry Pi for developing and testing applications. Sometimes, I'm even limited to a desktop PC where the server will run. To ensure that my docker-compose starts automatically every time I reboot my Ubuntu machine, I follow these steps:

1. Create a file named 'docker-compose.service' in the directory '/etc/systemd/system/' with the following content:

	```
	[Unit]
	Description=Docker Compose Service
	Requires=docker.service
	After=docker.service
	
	[Service]
	Type=oneshot
	RemainAfterExit=yes
	WorkingDirectory=/path/to/your/docker-compose/
	ExecStart=/usr/local/bin/docker-compose up -d
	ExecStop=/usr/local/bin/docker-compose down
	
	[Install]
	WantedBy=multi-user.target
	```

2. Save the file and execute the following commands in the terminal:

	```bash
	sudo chmod 644 /etc/systemd/system/docker-compose.service
	sudo systemctl daemon-reload
	sudo systemctl enable docker-compose.service
	```

3. To start the service, run the following command:

	```bash
	sudo systemctl start docker-compose.service
	```

4. To stop the service, run the following command:

	```bash
	sudo systemctl stop docker-compose.service
	```

Now, docker-compose will automatically start every time you reboot your Ubuntu machine.
