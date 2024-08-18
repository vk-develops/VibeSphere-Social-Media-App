import asyncHandler from "express-async-handler";
import User from "../Models/userModel.js";
import Post from "../Models/postModel.js";
import { uploadMediaFiles } from "../Helper/uploadMedia.js";

// @desc    Create Post
// @route   POST /api/v1/users/posts/create-post
// @access  Private

const createPost = asyncHandler(async (req, res) => {
    try {
        const { caption } = req.body;

        const mediaFiles = req.files;

        //Getting the id from the protect route
        const id = req.user._id;

        if (!caption) {
            return res
                .status(400)
                .json({ success: false, message: "Caption is required" });
        }

        //Find the user
        const user = await User.findById({ _id: id });

        if (user) {
            // Upload media files to Cloudinary
            let media = [];
            if (mediaFiles && mediaFiles.length > 0) {
                const mediaUrls = await uploadMediaFiles(mediaFiles);
                media = mediaUrls.map((url, index) => ({
                    url,
                    mediaType: mediaFiles[index].mimetype.startsWith("image")
                        ? "Image"
                        : "Video",
                }));
            }

            // Create the post
            const post = new Post({
                user: id,
                caption,
                media,
            });

            // Save the post
            await post.save();

            // Return success response
            return res.status(201).json({ success: true, post });
        } else {
            return res.status(400).json({
                success: false,
                message: "Not an user cannot create post",
            });
        }

        //Uploading media files to cloudinary
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ success: false, err: err.message });
    }
});

export { createPost };
