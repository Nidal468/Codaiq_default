#!/bin/bash
set -e

CONTAINER_NAME=$1

if [ -z "$CONTAINER_NAME" ]; then
  echo "Usage: ./container-uptime.sh <container_name>"
  exit 1
fi

# Check if the container is running
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
  # Get the uptime using docker inspect
  UPTIME=$(docker inspect -f '{{.State.StartedAt}}' "$CONTAINER_NAME")
  echo "Container '$CONTAINER_NAME' started at: $UPTIME"
else
  echo "Container '$CONTAINER_NAME' is not running."
fi
