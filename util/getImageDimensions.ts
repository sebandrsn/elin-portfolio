export function getImageDimensions(url: string): {
  width: number;
  height: number;
} | null {
  try {
    const assetUrl = url;
    const [widthStr, heightStr] = assetUrl.split("/")[5].split("x");
    return {
      width: parseInt(widthStr, 10),
      height: parseInt(heightStr, 10),
    };
  } catch (error) {
    console.error("Error parsing image dimensions from URL:", error);
    return null;
  }
}
