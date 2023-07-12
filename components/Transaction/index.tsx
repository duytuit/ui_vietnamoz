"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const TransactionResult = (props) => {
  const param = useSearchParams();
  console.log("ket_qua", param.toString());
  return (
    <>
      <section className="relative mb-[120px] pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="mb-8 mt-20 w-full md:mb-12 lg:mb-16">
            <h1 className="bp-h1 black dark:text-white">Payment Transaction</h1>
          </div>
          {/* <table>
            <tbody>
              <tr>
                <td>
                  <span>Giao dịch nhận thanh toán</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    Dear, <span className="uppercase">Nguyễn Duy Tu</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                  Bạn đã thực hiện giao dịch thanh toán thành công, vui lòng xem chi tiết giao dịch dưới đây.
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td align="left">
                          <span>
                            Khách hàng:
                            <br />
                            <span className="uppercase">Nguyễn Duy Tú</span>
                            <br />
                          </span>
                        </td>
                        <td>
                          <span>
                            Số điện thoại: 0366961008
                            <br />
                            Địa chỉ: Hà nội
                            <br />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td align="left">Nội dung thanh toán</td>
                        <td>E Visa</td>
                      </tr>
                      <tr>
                        <td align="left">Mã giao dịch</td>
                        <td>VNE43543564355</td>
                      </tr>
                      <tr>
                        <td align="left">Mã đơn hàng</td>
                        <td>VNE43543564355</td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td align="left">Giá trị đơn hàng</td>
                        <td align="right">
                          <strong>1000000</strong> VND
                        </td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td align="left">Số tiền thanh toán</td>
                        <td align="right">
                          <strong>10000000</strong> VND
                        </td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td align="left">Thời gian</td>
                        <td>12/12/2023</td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td align="left">Trạng thái giao dịch</td>
                        <td>Thành công</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div>
                    <a href="/">Nhấn vào đây để trở về trang chủ</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </section>
    </>
  );
};

export default TransactionResult;
