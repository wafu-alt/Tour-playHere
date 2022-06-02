import { categoryModel } from '../db';

class CategoryService {
    constructor(categoryModel) {
      this.categoryModel = categoryModel;
    }
    
    async addCategory(categoryInfo) {
      // 중복확인 추가하기

      // db에 저장
      const createdNewCategory = await this.categoryModel.create(categoryInfo.categoryName);
      return createdNewCategory;

    }
}

const categoryService = new CategoryService(categoryModel);

export { categoryService };