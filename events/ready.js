module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Noot Noot! We are live! Logged in as ${client.user.tag}`);
    },
};