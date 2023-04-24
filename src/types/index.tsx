type imageData = {
  extension: string,
  isMain: string,
  storageRef: string,
  uid: string,
  url: string,
}

type productType = {
  id: string,
  category: {label: string, value: string},
  description: string,
  imagesData: Array<imageData>,
  subCategory: {label: string, value: string},
}

export {
  type productType,
  type imageData,
}