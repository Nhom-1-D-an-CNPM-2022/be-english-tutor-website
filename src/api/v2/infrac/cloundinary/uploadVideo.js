import cloudinary from "./cloudinary";

const uploadVideo = async (URLFile) => {
  let linkVideo;
  try {
    const uploadResponse = await cloudinary.uploader.upload(URLFile, {
      resource_type: "video",
      upload_preset: "dev_setups",
    });
    if (uploadResponse) {
      linkVideo = uploadResponse.url;
    }
  } catch (error) {
    linkVideo = error;
  }
  return linkVideo;
};

export default uploadVideo;
