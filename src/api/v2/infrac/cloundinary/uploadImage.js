import cloudinary from "./cloudinary";

const uploadImg = async (URLFile) => {
  let linkImage;
  try {
    const uploadResponse = await cloudinary.uploader.upload(URLFile, {
      upload_preset: "dev_setups",
    });
    if (uploadResponse) {
      linkImage = uploadResponse.url;
    }
  } catch (error) {
    linkImage = error;
  }
  return linkImage;
};

export default uploadImg;
