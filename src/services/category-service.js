import { categoryModel } from "../db";

class CategoryService {
  constructor(categoryModel) {
    this.categoryModel = categoryModel;
  }

  async addCategory(categoryInfo) {
<<<<<<< HEAD
=======
    // 중복확인 추가하기

>>>>>>> feature/oh
    // db에 저장
    const createdNewCategory = await this.categoryModel.create(
      categoryInfo.categoryName
    );
<<<<<<< HEAD
    console.log(createdNewCategory);
=======
>>>>>>> feature/oh
    return createdNewCategory;
  }
}

const categoryService = new CategoryService(categoryModel);

export { categoryService };
