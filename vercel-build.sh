#!/bin/bash

# Debug: Print current directory and list files
echo "Current directory: $(pwd)"
echo "Contents of current directory:"
ls -la

# Debug: Print contents of src directory
echo "Contents of src directory:"
ls -la src/

# Ensure the build directory exists
mkdir -p build

# Run the build command
CI=false npm run build

# If build fails, exit with error
if [ $? -ne 0 ]; then
  echo "Build failed"
  exit 1
fi 