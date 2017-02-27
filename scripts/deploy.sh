#!/bin/sh

# Use the sync tool to update all the files in the app and node_modules
# folders.
echo "Syncing app folder to s3 bucket."
aws s3 sync app s3://nexis.et.web/app --region=ap-southeast-2 --delete
echo "Granting public read permissions to bucket."
aws s3api put-object-acl --acl public-read --bucket nexis.et.web --key app