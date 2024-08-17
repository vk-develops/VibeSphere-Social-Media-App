import cloudinary from "cloudinary";

const uploadMediaFiles = async (mediaFiles) => {
    const uploadPromises = mediaFiles.map(async (file) => {
        try {
            const res = await cloudinary.v2.uploader
                .upload_stream(
                    {
                        resource_type: file.mimetype.startsWith("video")
                            ? "video"
                            : "image",
                    },
                    (error, result) => {
                        if (error) throw error;
                        return result;
                    }
                )
                .end(file.buffer);

            return res.url;
        } catch (error) {
            console.error("Error uploading file to Cloudinary:", error);
        }
    });

    const mediaUrls = await Promise.all(uploadPromises);
    return mediaUrls;
};

export { uploadMediaFiles };
