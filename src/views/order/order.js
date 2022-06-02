/*

 <!-- 배송지 정보 입력 박스
     <section class="section">
      <div class="container">
        <div class="cart-header">
          <div class="subtitle subtitle-cart" id="subtitleCart">
            <p class="is-size-6">장바구니 &nbsp; &gt;</p>
          </div>
          <div class="title">
            <p class="is-size-2">주문결제</p>
          </div>
          <div class="subtitle">
            <p class="is-size-6">&gt; &nbsp;주문완료</p>
          </div>
        </div>

        <div class="tile is-ancestor">
          <div class="tile is-parent cart-products">
            <div class="box delivery-info">
              <!-- 배송지 정보 -->
              <p class="subtitle is-4">배송지정보</p>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label" for="receiverName">이름</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control">
                      <input
                        class="input"
                        id="receiverName"
                        type="text"
                        placeholder="받는 분 이름을 입력해 주세요."
                        autocomplete="on"
                      />
                    </p>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label" for="receiverPhoneNumber">연락처</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control">
                      <input
                        class="input"
                        id="receiverPhoneNumber"
                        type="number"
                        placeholder="- 없이 입력해 주세요."
                        autocomplete="on"
                      />
                    </p>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label" for="address2">주소</label>
                </div>
                <div class="field-body search">
                  <div class="field">
                    <p class="control">
                      <input
                        class="input"
                        id="postalCode"
                        type="text"
                        placeholder="주소찾기를 클릭해 주세요."
                        readonly
                      />
                    </p>
                  </div>
                  <div>
                    <button
                      class="button is-light is-hovered"
                      id="searchAddressButton"
                    >
                      주소찾기
                    </button>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-normal no-label"></div>
                <div class="field-body">
                  <div class="field">
                    <p class="control">
                      <input
                        class="input"
                        id="address1"
                        type="text"
                        placeholder=""
                        autocomplete="on"
                        readonly
                      />
                    </p>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-normal no-label"></div>
                <div class="field-body">
                  <div class="field">
                    <p class="control">
                      <input
                        class="input"
                        id="address2"
                        type="text"
                        placeholder=""
                        autocomplete="on"
                      />
                    </p>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label" for="requestSelectBox">요청사항</label>
                </div>
                <div class="field-body">
                  <div class="select">
                    <select id="requestSelectBox">
                      <option value="0">
                        배송시 요청사항을 선택해 주세요.
                      </option>
                      <option value="1" class="select-option">
                        직접 수령하겠습니다.
                      </option>
                      <option value="2" class="select-option">
                        배송 전 연락바랍니다.
                      </option>
                      <option value="3" class="select-option">
                        부재 시 경비실에 맡겨주세요.
                      </option>
                      <option value="4" class="select-option">
                        부재 시 문 앞에 놓아주세요.
                      </option>
                      <option value="5" class="select-option">
                        부재 시 택배함에 넣어주세요.
                      </option>
                      <option value="6" class="select-option">직접 입력</option>
                    </select>
                  </div>
                </div>
              </div>

              <div
                class="field is-horizontal custom-request"
                id="customRequestContainer"
              >
                <div class="field-label is-normal no-label"></div>
                <div class="field-body">
                  <div class="field">
                    <p class="control">
                      <input
                        class="input"
                        id="customRequest"
                        type="text"
                        maxlength="50"
                        placeholder="최대 50자 입력이 가능합니다."
                        autocomplete="on"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 주문 정보 요약 -->
          <div class="tile is-parent tile-order-summary">
            <div class="box order-summary">
              <div class="header">
                <p>결제정보</p>
              </div>
              <div class="order-info">
                <div class="info">
                  <p>주문상품</p>
                  <p class="products-title" id="productsTitle"></p>
                </div>
                <div class="info">
                  <p>상품총액</p>
                  <p id="productsTotal"></p>
                </div>
                <div class="info">
                  <p>유류할증료</p>
                  <p id="fuelSurcharge"></p>
                </div>
              </div>
              <div class="total">
                <p class="total-label">총 결제금액</p>
                <p class="total-price" id="orderTotal"></p>
              </div>
              <div class="purchase">
                <button class="button is-info" id="checkoutButton">
                  결제하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->*/
