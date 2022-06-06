import { categoryModel } from '../db';

class CategoryService {
    constructor(categoryModel) {
      this.categoryModel = categoryModel;
    }
    
    async addCategory(categoryInfo) {
      // db에 저장
      const createdNewCategory = await this.categoryModel.create(categoryInfo.categoryName);
      console.log(createdNewCategory);
      return createdNewCategory;

    }
}

const categoryService = new CategoryService(categoryModel);

export { categoryService };