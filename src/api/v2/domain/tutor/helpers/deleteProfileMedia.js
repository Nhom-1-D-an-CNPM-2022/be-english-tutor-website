import deleteAssets from "../../../infrac/cloundinary/deleteAsset";

const deleteProfileMedia = async (mediaType, publicId) => {
  switch (mediaType) {
    case "profilePicture":
      deleteAsset(publicId, "image");
      break;
    default:
      deleteAsset(publicId, "video");
      break;
  }
};

export default deleteProfileMedia;
