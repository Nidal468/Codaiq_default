#!/bin/bash
set -e

CONTAINER_NAME=$1

if [ -z "$CONTAINER_NAME" ]; then
  echo "Usage: ./restart-container.sh <container_name>"
  exit 1
fi

echo "Restarting Docker container: $CONTAINER_NAME..."

# Stop container if running
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
  docker stop "$CONTAINER_NAME"
fi

# Start container
docker start "$CONTAINER_NAME"

echo "✅ Container '$CONTAINER_NAME' restarted successfully."
