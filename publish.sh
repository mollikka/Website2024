#!/bin/bash

set -o allexport
source "$(dirname "$0")/.env.local"
set +o allexport

rsync -avz --delete public/ "$PROD_USER@$PROD_HOST:$PROD_PATH"
