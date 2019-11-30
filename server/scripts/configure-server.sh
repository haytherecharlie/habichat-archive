# UPDATE UBUNTU
apt update
apt upgrade

#ZSH / OH MY ZSH
apt install zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

# DOWNLOAD AND INSTALL NODE
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sh nodesource_setup.sh
apt install nodejs

# INSTALL PM2 AND START NODE
npm install pm2@latest -g
pm2 startup systemd
pm2 start index.js
pm2 save

# INSTALL NGINX
apt install nginx
nano /etc/nginx/sites-available/default # EDIT THE CONFIG HERE
nginx -t # CHECK THERE ARE NO SYNTAX ERRORS
sudo service nginx restart

# CERTBOT
apt install software-properties-common
apt autoremove
add-apt-repository ppa:certbot/certbot
apt install python-certbot-nginx
certbot

# SETUP FIREWALL
ufw allow OpenSSH
ufw allow 'Nginx HTTPS'
ufw --force enable

# MONGO DB
apt install -y mongodb
systemctl status mongodb


systemctl restart nginx