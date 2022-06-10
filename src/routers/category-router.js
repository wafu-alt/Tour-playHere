import { Router } from "express";
import is from "@sindresorhus/is";
import { adminRequired } from '../middlewares';
import { categoryService } from "../services";

const categoryRouter = Router();

categoryRouter.post("/category", adminRequired, async (req, res, next) => {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }

    const categoryName = req.body.categoryName;

    const newCategory = await categoryService.addCategory({
      categoryName,
    });

    res.status(201).json(categoryName);
  } catch (error) {
    next(error);
  }
});

categoryRouter.get("/category/list", adminRequired, async (req, res, next) => {
  try {
    const allCategory = await categoryService.getAllCategory();

    res.status(201).json(allCategory);
    
  } catch (error) {
    next(error);
  }
  
});

export { categoryRouter };
