#!/bin/bash

# Function to kill background processes when the script exits
cleanup() {
  echo "Cleaning up..."
  # Kill all background processes
  kill $(jobs -p)
}
trap cleanup EXIT

# Start services as background processes

python3 themes/MollikkaStuffMonospaceZolaTheme/renderserver/main.py &

sleep 1

zola build
