import { model } from "mongoose";
import { CategorySchema } from "../schemas/category-schema";

const Category = model("categories", CategorySchema);

export class CategoryModel {
  async findById(categoryId) {
<<<<<<< HEAD
    const category = await Category.findOne({ categoryId: categoryId });
    return category;
  }

  async findByName(categoryName) {
    const category = await Category.findOne({ categoryName: categoryName });

=======
    const category = await Category.findOne({ _id: categoryId });
>>>>>>> feature/oh
    return category;
  }

  async create(categoryInfo) {
<<<<<<< HEAD
    const createdNewCategory = await Category.create({ categoryName: categoryInfo});

=======
    const createdNewCategory = await Category.create({
      categoryName: categoryInfo,
    });
>>>>>>> feature/oh
    return createdNewCategory;
  }

  async findAll() {
    const categories = await Category.find({});
    return categories;
  }

  async update({ categoryId, update }) {
    const filter = { categoryId: categoryId };
    const option = { returnOriginal: false };

<<<<<<< HEAD
    const updatedCategory = await Category.findOneAndUpdate(filter, update, option);

=======
    const updatedCategory = await Category.findOneAndUpdate(
      filter,
      update,
      option
    );
>>>>>>> feature/oh
    return updatedCategory;
  }
}

const categoryModel = new CategoryModel();

export { categoryModel };
