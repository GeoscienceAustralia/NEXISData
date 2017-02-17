#!/bin/sh

aws s3 sync app s3://nexis.et.web.com --region=ap-southeast-2 --delete
aws s3 sync node_modules s3://nexis.et.web.com --region=ap-southeast-2 --delete