import { Router } from 'express';
import is from '@sindresorhus/is';
// 폴더에서 import하면, 자동으로 폴더의 index.js에서 가져옴
// import { loginRequired } from '../middlewares';
import { subCategoryService } from '../services';

const  subCategoryRouter  = Router();

subCategoryRouter.post('/subcategory/register', async (req, res, next) => {
  try {
    // Content-Type: application/json 설정을 안 한 경우, 에러를 만들도록 함.
    // application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨.
    if (is.emptyObject(req.body)) {
        throw new Error(
          'headers의 Content-Type을 application/json으로 설정해주세요'
        );
    }
    // const { categoryName, subCategoryName } = req.body;
    const categoryName = req.body.categoryName;
    const subCategoryName = req.body.subCategoryName;

    const newCategory = await subCategoryService.addSubCategory({
      categoryName},{
      subCategoryName,
    });

    console.log('11111');
    console.log(newCategory);
    
    // 추가된 서브카테고리의 db 데이터를 프론트에 다시 보내줌
    // 물론 프론트에서 안 쓸 수도 있지만, 편의상 일단 보내 줌
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
});

export { subCategoryRouter };
