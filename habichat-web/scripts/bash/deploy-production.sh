echo "Build react application."
npm run build

echo "Copy .htaccess to build folder"
cp ./scripts/apache/.htaccess.production ./build/.htaccess

echo "SSH and clear production folder."
ssh l781hsw5zn41@107.180.25.212 'rm -rf www/production/*'

echo "Logout of server."
logout

echo "SSH and copy files to production server."
rsync -avzP ./build/. l781hsw5zn41@107.180.25.212:www/production/
