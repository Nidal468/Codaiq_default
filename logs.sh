set -e                     # Stop the script if any command fails
CONTAINER_NAME=$1          # The first argument (container name or ID)
docker logs --tail 100 "$CONTAINER_NAME"  # Print the last 100 log lines
