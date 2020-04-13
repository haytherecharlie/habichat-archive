# Install Mongodb
echo 'Tapping Mongo DB from Homebrew'
brew tap mongodb/brew

echo 'Installing Mongo DB'
brew install mongodb-community@4.0

echo 'Creating /data/db directory'
sudo mkdir -p /data/db
sudo chmod -R go+w /data/db

# Install NPM Modules
echo 'Installing node modules'
npm i

# Clone Config
echo 'Cloning private config'
cd ./src
git clone git@github.com:haytherecharlie/habichat-node-config.git
mv ./habichat-node-config ./config
