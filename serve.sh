# seaport
echo "\nRunning Seaport"
npm run seaport listen 9090 &
sleep 2 # We want to wait until seaport has successfully started

# servers
echo "\nRunning servers"
npm run start:dev &
server1=$! # this is to save variables, if we want to shut down process manually. 'pkill node' is more efficient.
npm run start:dev &
server2=$!
sleep 2 # wait until servers are initialized

# loadbalancer
echo "\nRunning loadBalancer"
node load-balancer.js &
loadBalancer=$!
sleep 2 # wait until loadbalancer is initialized

# curl request
# echo "\nSending curl requests"
# for i in {1..10}
# do
# curl localhost:8080/clients
# echo ""
# # echo "\n"
# sleep 1
# done

read -p "press any key to shutdown"
echo "\nShutting down"
pkill node
kill -9 $(lsof -t -i:8080)
kill -9 $(lsof -t -i:9090)
