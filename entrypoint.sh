sleep 5

PID=$(lsof -t -i :8091)

if [ -n "$PID" ]; then
  kill -9 "$PID"
else
  echo "No process found on port 8091. Skipping termination."
fi