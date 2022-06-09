import { categoryModel } from '../db';
import { subCategoryModel } from '../db'
import nodemailer from "nodemailer";


class SubCategoryService {
    constructor(categoryModel, subCategoryModel) {
      this.categoryModel = categoryModel;
      this.subCategoryModel = subCategoryModel;
    }

    async sendMail() {
       // nodemailer 구현중
      const transporter = nodemailer.createTransport({
        service: 'Naver',
        host: 'smtp.naver.com',
        // port: 587,
        secure: false,
        auth: {
          // Gmail 주소 입력, 'testmail@gmail.com'
          // user: process.env.NODEMAILER_USER,
          user: 'jsjohan92@naver.com',
          // Gmail 패스워드 입력
          pass: '',
        },
      })
      const generatedAuthNumber = '이것은 메일 테스트용'
      const info = await transporter.sendMail({
        // 보내는 곳의 이름과, 메일 주소를 입력
        from: `"WDMA Team" <jsjohan92@naver.com>`,
        // 받는 곳의 메일 주소를 입력
        to: "johnjskim21@gmail.com",
        // 보내는 메일의 제목을 입력
        subject: 'WDMA Auth Number',
        // 보내는 메일의 내용을 입력
        // text: 일반 text로 작성된 내용
        // html: html로 작성된 내용
        text: generatedAuthNumber,
        html: `<b>${generatedAuthNumber}</b>`,
      });

      res.status(200).json({
        status: 'Success',
        code: 200,
        message: 'Sent Auth Email',
      });

    }

    async addSubCategory(categoryName, subCategoryName) {
      const category  = await this.categoryModel.findByName(categoryName);

      if (!category) {
        throw new Error(
          '메인 카테고리명이 올바르지 않습니다.'
        );
      }

      const subCategory  = await this.subCategoryModel.findBySubCategoryName(subCategoryName);
      const subcategoryName  = subCategoryName;
      const categoryid = category.categoryId;

      if (subCategory) {
        throw new Error(
          `'${subcategoryName}'는(은) 이미 등록된 서브카테고리 입니다.`
        )
      }

      const createdNewSubCategory = await this.subCategoryModel.create(categoryid, subcategoryName);

      // nodemailer TEST
      this.sendMail().catch(console.error);


      return createdNewSubCategory;
      
    }
    
    async updateSubCategory(curSubCategoryName, updatedSubCategoryName) {
      const subCategory = await this.subCategoryModel.findBySubCategoryName(curSubCategoryName);
      if (!subCategory) {
        throw new Error(
          `'${curSubCategoryName}'는(은) 존재하지 않는 서브카테고리 입니다.`
        )
      }

      const filter = { subCategoryId : subCategory.subCategoryId};
      const update = { subCategoryName : updatedSubCategoryName };

      let updatedSubCategory = await this.subCategoryModel.updateSubCategoryName(filter, update);

      updatedSubCategory = await this.subCategoryModel.findBySubCategoryName(updatedSubCategoryName);

      return updatedSubCategory;
    }
    async deleteSubCategory(subCategoryName) {
      const subcategoryName = subCategoryName.subCategoryName;
      const subCategory = await this.subCategoryModel.findBySubCategoryName(subcategoryName);

      if (!subCategory) {
        throw new Error(
          `'${subcategoryName}'는(은) 존재하지 않는 서브카테고리 입니다.`
        )
      }
      
      const deletedSubCategory = await this.subCategoryModel.delete(subCategory.subCategoryId);

      return deletedSubCategory;
    }
}

const subCategoryService = new SubCategoryService(categoryModel, subCategoryModel);

export { subCategoryService };