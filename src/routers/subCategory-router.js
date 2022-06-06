import { Router } from 'express';
import is from '@sindresorhus/is';
import { adminRequired } from '../middlewares';
import { subCategoryService } from '../services';

const  subCategoryRouter  = Router();

// subCategoryRouter.post('/subcategory/register', adminRequired, async (req, res, next) => {
subCategoryRouter.post('/subcategory/register', async (req, res, next) => {

  try {
    // Content-Type: application/json 설정을 안 한 경우, 에러를 만들도록 함.
    // application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨.
    if (is.emptyObject(req.body)) {
        throw new Error(
          'headers의 Content-Type을 application/json으로 설정해주세요'
        );
    }
    const categoryName = req.body.categoryName;
    const subCategoryName = req.body.subCategoryName;

    const newCategory = await subCategoryService.addSubCategory(
      { categoryName, },
      { subCategoryName,}
    );
    
    // 추가된 서브카테고리의 db 데이터를 프론트에 다시 보내줌
    // 물론 프론트에서 안 쓸 수도 있지만, 편의상 일단 보내 줌
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
});

subCategoryRouter.patch('/subcategory', async (req, res, next) => {
// subCategoryRouter.patch('/subcategory', adminRequired, async (req, res, next) => {
  try {
    if (is.emptyObject(req.body)) {
        throw new Error(
          'headers의 Content-Type을 application/json으로 설정해주세요'
        );
    }

    const curSubCategoryName = req.query.curSubCategoryName;
    const updatedSubCategoryName = req.query.updatedSubCategoryName;

    // 두 값중 하나라도 안들어오면 예외 처리
    // TODO: 각각이 빈 문자열 혹은 널값인지 체크 추가
    if (!(curSubCategoryName && updatedSubCategoryName)) {
      throw new Error(
        '현재 서브카테고리명과 수정 후 카테고리명을 모두 입력해 주세요'
      )
    }
    const changedSubCategory = await subCategoryService.updateSubCategory(
      curSubCategoryName.replace (/"/g,''), 
      updatedSubCategoryName.replace (/"/g,'')
    );

    res.status(200).json(changedSubCategory);

  } catch (error){
    next(error);
  }  

});

// subcategory delete router
subCategoryRouter.delete('/subcategory', async (req, res, next) => {
// subCategoryRouter.delete('/subcategory', adminRequired, async (req, res, next) => {
  try {
    if (is.emptyObject(req.body)) {
        throw new Error(
          'headers의 Content-Type을 application/json으로 설정해주세요'
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
});

export { subCategoryRouter };
