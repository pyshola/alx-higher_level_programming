#!/bin/bash
# Script that takes an URL and shows the Allowed OPTIONS
curl -sI -X OPTIONS "$1" | grep "Allow:" | awk '{print $2}'
