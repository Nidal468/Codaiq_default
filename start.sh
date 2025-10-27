#!/bin/bash
set -e

echo "🧹 Cleaning up any old codaiq containers..."
docker rm -f "${ID:-error}" 2>/dev/null || true

echo "🚀 Starting (${ID:-error}) (${MODE:-dev}) mode..."
MODE=${MODE:-dev} docker compose up --build -d
