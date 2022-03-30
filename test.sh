#!/bin/bash
set -eo pipefail
npm run ci:lambdatest --build_name=${{ github.head_ref }}-${{ github.run_id }}