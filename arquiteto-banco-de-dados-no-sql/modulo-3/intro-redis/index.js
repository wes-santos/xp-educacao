const { createClient } = require('redis');

async function main() {
    const client = createClient({
        url: 'redis://default:password@localhost:6379'
    });

    client.on('error', (error) => console.log(error));

    await client.connect();

    let response;

    // string
    await client.set('user:name', 'Weslley Santos');

    response = await client.get('user:name');
    console.log("Response received for string: ", response);

    // lists
    await client.rPush('tasks', 'Check emails');
    await client.rPush('tasks', 'Go to the gym');

    response = await client.lRange('tasks', 0, -1);
    console.log("Response received for list: ", response);

    // hashes
    await client.hSet('user:10', 'name', 'Theodoro', 'email', 'theodoro@email.com');
    response = await client.hGetAll('user:10');
    console.log("Response received for hash: ", response);

    await client.quit();
}

main();

