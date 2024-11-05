# Setting up the project 

### Allow HTTPS 

Run these three following commands in the terminal
```
brew install mkcert 
mkcert -install 
mkcert localhost
```

Provide following envs in `.env` file:
```
HTTPS=true
SSL_CRT_FILE=localhost.pem
SSL_KEY_FILE=localhost-key.pem
```
When you are using Chrome browser, paste it into search input `chrome://flags/#allow-insecure-localhost` and turn on that option.

[Source](https://stackoverflow.com/questions/41192491/how-can-i-provide-a-ssl-certificate-with-create-react-app)