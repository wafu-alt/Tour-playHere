import { model } from 'mongoose';
import { SubCategorySchema } from '../schemas/sub-category-schema';

const SubCategory = model('subcategories', SubCategorySchema);

export class SubCategoryModel {

  async findBySubCategoryId(subCategoryId) {
    const subCategory = await SubCategory.findOne({ subCategoryId:  subCategoryId });
    return subCategory;
  }

  async findByCategoryId(categoryId) {
    const subCategories = await SubCategory.findOne({ categoryId });
    return subCategories;
  }

  async findAll() {
    const subCategories = await SubCategory.find({});
    return subCategories;
  }

  async create(categoryId, { subCategoryName }) {
    console.log(categoryId);
    console.log(subCategoryName);

    const createdNewSubCategory = await SubCategory.create( {categoryId, subCategoryName});
    return createdNewSubCategory;
  }

  async delete(subCategoryId) {
    const deletedSubCategory = await SubCategory.findOneAndDelete({ subCategoryId:  subCategoryId });
    return deletedSubCategory;
  }

}

const subCategoryModel = new SubCategoryModel();

export { subCategoryModel };