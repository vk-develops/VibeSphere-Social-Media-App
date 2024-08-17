import asyncHandler from "express-async-handler";

// @desc    Create Post
// @route   POST /api/v1/users/posts/create-post
// @access  Private

const createPost = asyncHandler(async (req, res) => {
    try {
        const { caption } = req.body;

        const { mediaFiles } = req.files;

        //Uploading media files to cloudinary
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ success: false, err: err.message });
    }
});
