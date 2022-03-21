#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

# main, developブランチにpushされた際のみpreview deployを行う
# 参考: https://zenn.dev/catnose99/articles/b37104fc7ef214
# https://vercel.com/support/articles/how-do-i-use-the-ignored-build-step-field-on-vercel#with-environment-variables 
if [[ "$VERCEL_GIT_COMMIT_REF" == "develop" || "$VERCEL_GIT_COMMIT_REF" == "main" ]] ; then
  # Proceed with the build
  echo "✅ - Build can proceed"
  exit 1;

else
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;
fi