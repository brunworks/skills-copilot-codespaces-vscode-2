// Create web server application with express.js
// Create a new comment
router.post('/', (req, res) => {
    // Create new comment
    var comment = new Comment({
        text: req.body.text,

    });
});