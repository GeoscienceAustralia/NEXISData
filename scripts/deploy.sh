#!/bin/sh

# Use the sync tool to update all the files in the app and node_modules
# folders.
echo "Syncing app folders to s3 bucket."
aws s3 sync app s3://nexis.et.web/app --region=ap-southeast-2 --delete
aws s3 sync node_modules s3://nexis.et.web/node_modules --region=ap-southeast-2 --delete
echo "Granting public read permissions to bucket."
aws s3api put-bucket-acl --bucket nexis.et.web --grant-read uri=http://acs.amazonaws.com/groups/global/AllUsers