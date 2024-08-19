module.exports = (err, req, res, next) => {
    console.error('Error Handling Middleware'); // Log error message for debugging
    console.error(err.stack); // Log error stack trace for debugging
    res.status(err.status || 500).json({
        message: err.message || 'Something went wrong!',
    });
}