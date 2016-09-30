#!/usr/bin/env bash

# Install nvm
sudo apt-get update
sudo apt-get install build-essential libssl-dev curl
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash
source ~/.profile

# Install node.js version
nvm install 6.2.2

