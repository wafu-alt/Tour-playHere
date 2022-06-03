import { categoryModel } from '../db';
import { subCategoryModel } from '../db'

class SubCategoryService {
    constructor(categoryModel, subCategoryModel) {
      this.categoryModel = categoryModel;
      this.subCategoryModel = subCategoryModel;
    }
    
    async addSubCategory(categoryName, subCategoryName) {
      const { categoryId } = await this.categoryModel.findByName(categoryName);
      if (!categoryId) {
        throw new Error(
          '메인 카테고리명이 올바르지 않습니다. 다시 확인해 주세요'
        );
      } else {
        const subCategory = await this.subCategoryModel.findByCategoryId(categoryId);
        if (subCategory) {
          return subCategory;
        }

        const createdNewSubCategory = await this.subCategoryModel.create(categoryId, subCategoryName);
        
        return createdNewSubCategory;
      }
    }
}

const subCategoryService = new SubCategoryService(categoryModel, subCategoryModel);

export { subCategoryService };