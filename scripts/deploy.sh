#!/bin/sh

# Use the sync tool to update all the files in the app and node_modules
# folders.
echo "Syncing app folders to s3 bucket."
aws s3 sync app s3://nexis.et.web/app --region=ap-southeast-2 --delete
aws s3 sync node_modules s3://nexis.et.web/node_modules --region=ap-southeast-2 --delete
echo "Granting public read permissions to bucket."
aws s3api put-object-acl --acl public-read --bucket nexis.et.web --key app\*
aws s3api put-object-acl --acl public-read --bucket nexis.et.web --key node_modules\*