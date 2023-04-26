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

type subCategoryDataType = {
  id: string,
  name: string,
  route: string,
}

type categoryDataType = {
  id: string,
  name: string,
  route: string,
  subcategories: Array<subCategoryDataType>;
};

type categoriesType = Array<categoryDataType>;

export {
  type productType,
  type imageData,
  type subCategoryDataType,
  type categoryDataType,
  type categoriesType,
}