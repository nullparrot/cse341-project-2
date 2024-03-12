const sendHello = (req, res) => {
    const hello = 'Hello World';
    res.status(200).send(hello);
};

module.exports = { sendHello };