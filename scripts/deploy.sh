#!/bin/sh

# Use the sync tool to update all the files in the app and node_modules
# folders.
echo "Syncing app folders to s3 bucket."
aws s3 sync app s3://nexis.et.web --region=ap-southeast-2 --delete
aws s3 sync node_modules s3://nexis.et.web --region=ap-southeast-2 --delete