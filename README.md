1. In this task, I connect to the server using socket.io library.
2. I have changed the data that the server sends to the client. Now instead of random numbers in the graphs 'change' and 'change__percent' the result is calculated.
3. Thanks to this, I made a visual color change when the price changes (rises or falls).
4. I also added a watch list where you can remove the stock or add.
5. Added the ability to change the interval of data transmission from the server

<hr>

Running the local service:
1. Open a new bash shell
2. ``cd server``
3. ``npm install`` or ``yarn install``
4. ``npm run start`` or ``yarn start``

You can visit http://localhost:4000 to check that the service is working correctly and inspect the data it produces.

<hr>

Run your application:
1. Open a new bash shell
2. ``cd client``
3. ``npm install`` or ``yarn install``
4. ``npm run start`` or ``yarn start``
