import cloudinary from "./cloudinary.js";

const deleteAsset = (publicId, resourceType) => {
  cloudinary.uploader.destroy(publicId, {
    resource_type: resourceType,
  });
};

export default deleteAsset;
