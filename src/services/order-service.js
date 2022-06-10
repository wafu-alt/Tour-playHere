import { orderModel } from "../db";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class OrderService {
  // 본 파일의 맨 아래에서, new UserService(userModel) 하면, 이 함수의 인자로 전달됨
  constructor(orderModel) {
    this.orderModel = orderModel;
  }

  // 패키지 생성
  async addOrder(orderInfo) {
    // 객체 destructuring
    const {
      userName,
      email,
      totalNumber,
      packageName,
      category,
      country,
      days,
      departureAt,
      arrivalAt,
      registerDateAt,
      price,
      totalPrice,
      packageId,
    } = orderInfo;

    const newOrderInfo = {
      userName,
      email,
      totalNumber,
      packageName,
      category,
      country,
      days,
      departureAt,
      arrivalAt,
      registerDateAt,
      price,
      totalPrice,
      packageId,
    };

    // db에 저장
    const createdNewOrder = await this.orderModel.create(newOrderInfo);

    return createdNewOrder;
  }
  // 상품 목록 전체 가져옴
  async getOrders(query) {
    const orders = await this.orderModel.findAll(query);
    return orders;
  }
  // 상품 Id로 검색
  async getOrderId(OrderId) {
    const findOrder = await this.orderModel.findById(OrderId);

    return findOrder;
  }

  // 상품 목록 수정
  async setOrder(orderInfoRequired, toUpdate) {
    // 객체 destructuring
    const orderId = orderInfoRequired;

    // 우선 해당 id의 유저가 db에 있는지 확인
    let orders = await this.orderModel.findById(orderId);

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!orders) {
      throw new Error("상품 내역이 없습니다. 다시 한 번 확인해 주세요.");
    }

    // 업데이트 진행
    orders = await this.orderModel.update({
      packageId: orderId,
      update: toUpdate,
    });

    return orders;
  }

  // 상품 삭제
  async DeleteOrder(orderdate) {
    // 객체 destructuring
    const orderId = orderdate;

    // db에 저장
    const deleteOrder = await this.orderModel.delete(orderId);

    return deleteOrder;
  }
}

const orderService = new OrderService(orderModel);

export { orderService };
