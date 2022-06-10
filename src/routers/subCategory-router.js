import { Router } from 'express';
import is from '@sindresorhus/is';
import { adminRequired, errorHandler } from '../middlewares';
import { subCategoryService } from '../services';

const subCategoryRouter = Router();

subCategoryRouter.post(
  "/subcategory/register",
  adminRequired,
  async (req, res, next) => {
    try {
      if (is.emptyObject(req.body)) {
        throw new Error(
          "headers의 Content-Type을 application/json으로 설정해주세요"
        );
      }

    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
}, errorHandler);

      const newCategory = await subCategoryService.addSubCategory(
        categoryName,
        subCategoryName
      );

      res.status(201).json(newCategory);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

subCategoryRouter.patch(
  "/subcategory",
  adminRequired,
  async (req, res, next) => {
    try {
      const curSubCategoryName = req.query.curSubCategoryName;
      const updatedSubCategoryName = req.query.updatedSubCategoryName;

  } catch (error){
    next(error);
  }

}, errorHandler);

// subcategory delete router
subCategoryRouter.delete(
  "/subcategory",
  adminRequired,
  async (req, res, next) => {
    try {
      if (is.emptyObject(req.body)) {
        throw new Error(
          "headers의 Content-Type을 application/json으로 설정해주세요"
        );
      }
      const subCategoryName = req.body.subCategoryName;
      const deletedSubCategory = await subCategoryService.deleteSubCategory({
        subCategoryName,
      });

      res.status(200).json(deletedSubCategory);
    } catch (error) {
      next(error);
    }
  }
}, errorHandler);

export { subCategoryRouter };
