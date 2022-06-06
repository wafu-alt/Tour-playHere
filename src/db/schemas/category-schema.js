import { Schema } from "mongoose";
<<<<<<< HEAD
import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
autoIncrement.initialize(mongoose.connection);
=======
>>>>>>> feature/oh

const CategorySchema = new Schema(
  {
    // categoryId는 auto increment로 작성
    categoryId: {
      type: Number,
      default: 0,
    },
    categoryName: {
      type: String,
      required: true,
    },
  },
  {
    collection: "categories",
<<<<<<< HEAD
    versionKey: false,
=======
>>>>>>> feature/oh
    timestamps: true,
  }
);

<<<<<<< HEAD
CategorySchema.plugin(autoIncrement.plugin, {
  model: "Category",
  field: "categoryId",
  startAt: 1, //시작
  increment: 1, // 증가
});

=======
>>>>>>> feature/oh
export { CategorySchema };
