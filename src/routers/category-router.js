import { Router } from "express";
import is from "@sindresorhus/is";
import { adminRequired } from '../middlewares';
import { categoryService } from "../services";

const categoryRouter = Router();

// 회원가입 api (아래는 /register이지만, 실제로는 /api/register로 요청해야 함.)
// categoryRouter.post("/category", adminRequired, async (req, res, next) => {
categoryRouter.post("/category", async (req, res, next) => {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }
    // req (request)의 body 에서 데이터 가져오기
    const categoryName = req.body.categoryName;

    // 위 데이터를 유저 db에 추가하기
    const newCategory = await categoryService.addCategory({
      categoryName,
    });

    // 추가된 유저의 db 데이터를 프론트에 다시 보내줌
    // 물론 프론트에서 안 쓸 수도 있지만, 편의상 일단 보내 줌
    res.status(201).json(categoryName);
  } catch (error) {
    next(error);
  }
});

// categoryRouter.get("/category/list", adminRequired, async (req, res, next) => {
categoryRouter.get("/category/list", async (req, res, next) => {
  try {
    const allCategory = await categoryService.getAllCategory();

    res.status(201).json(allCategory);
    
  } catch (error) {
    next(error);
  }
  
});

export { categoryRouter };
