#!/bin/bash
set -e

CONTAINER_NAME=$1

if [ -z "$CONTAINER_NAME" ]; then
  echo "Usage: ./stop-container.sh <container_name>"
  exit 1
fi

echo "Stopping Docker container: $CONTAINER_NAME..."

# Stop container if it's running
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
  docker stop "$CONTAINER_NAME"
  echo "✅ Container '$CONTAINER_NAME' stopped successfully."
else
  echo "⚠️  No running container found with name '$CONTAINER_NAME'."
fi
