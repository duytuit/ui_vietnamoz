"use client";
import { Body } from "@react-email/body";
import { Column } from "@react-email/column";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Hr } from "@react-email/hr";
import { Html } from "@react-email/html";
import { Img } from "@react-email/img";
import { Preview } from "@react-email/preview";
import { Row } from "@react-email/row";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import { Link } from "@react-email/link";
import { stringToTime } from "../Common/Utils/Helper";

const TemaplateEmail = ({bill}) => {
    console.log("bill",bill);
  return (
    <>
      <Html>
        <Head />
        <Body style={main}>
          <Container style={container}>
            <Section style={informationTable}>
              <Row style={informationTableRow}>
                <Column colSpan={2}>
                  <Row>
                    <Column style={informationTableColumn}>
                      <Text style={informationTableLabel}>EMAIL: </Text>
                      <Link
                        style={{
                          ...informationTableValue,
                          color: "#15c",
                          textDecoration: "underline",
                        }}
                      >
                       {bill ? bill.data.bill.email : ''}
                      </Link>
                    </Column>
                  </Row>

                  <Row>
                    <Column style={informationTableColumn}>
                      <Text style={informationTableLabel}>INVOICE DATE</Text>
                      <Text style={informationTableValue}> {bill ? stringToTime(bill.data.bill.createTime)  : ''}</Text>
                    </Column>
                  </Row>

                  <Row>
                    <Column style={informationTableColumn}>
                      <Text style={informationTableLabel}>ORDER ID</Text>
                      <Link
                        style={{
                          ...informationTableValue,
                          color: "#15c",
                          textDecoration: "underline",
                        }}
                      >
                       {bill ? bill.data.bill.id  : ''}
                      </Link>
                    </Column>
                    <Column style={informationTableColumn}>
                      <Text style={informationTableLabel}>DOCUMENT NO.</Text>
                      <Text style={informationTableValue}>  {bill ? bill.data.bill.billCode  : ''}</Text>
                    </Column>
                  </Row>
                </Column>
                <Column style={informationTableColumn} colSpan={2}>
                  <Text style={informationTableLabel}>BILLED TO</Text>
                  <Text style={informationTableValue}>
                  {bill ? bill.data.bill.customerName  : ''}
                  </Text>
                </Column>
              </Row>
            </Section>
            <Section style={productTitleTable}>
              <Text style={productsTitle}>Invoice Details</Text>
            </Section>

            {
                  bill.data.customers.map((item,index)=>(
                    <>
                       <Section>
                        <Column style={{ width: "10px" }}></Column>
                        <Column style={{ paddingLeft: "22px" }}>
                            <Text style={productPrice}>{item.first_name + ' '+item.last_name}</Text>
                            <Text style={productDescription}>
                              Passport No: {item.passport_no}
                            </Text>
                            <Text style={productDescription}>Country: {item.country}</Text>
                            <Text style={productDescription}>Travel Date: {item.travel_date}</Text>
                        </Column>
                        <Column style={{ paddingLeft: "22px", display: "block" }}>
                            <Text style={productPrice}>Product Name: {bill.data.product.name}</Text>
                           {
                               bill.data.services.map((item_1,index_1)=>(
                                 <>
                                  <Text style={productDescription}>{index_1+1}. Service Name: {item_1.name}</Text>
                                 </>
                               ))
                           }
                        </Column>
                        <Column style={productPriceWrapper} align="right">
                            <Text style={productDescription}> ${  (bill.data.product.price / parseInt(bill.data.exchange_rate) ).toFixed(2)}</Text>
                            {
                               bill.data.services.map((item_1,index_1)=>(
                                 <>
                                  <Text style={productDescription}>${  (item_1.price / parseInt(bill.data.exchange_rate) ).toFixed(2) }</Text>
                                 </>
                               ))
                           }

                        </Column>
                        </Section>
                    </>
                  ))
                }
            <Hr style={productPriceLine} />
            <Section align="right">
              <Column style={tableCell} align="right">
                <Text style={productPriceTotal}>TOTAL</Text>
              </Column>
              <Column style={productPriceVerticalLine}></Column>
              <Column style={productPriceLargeWrapper}>
                <Text style={productPriceLarge}>${ (bill.data.bill.cost / parseInt(bill.data.exchange_rate) ).toFixed(2)}</Text>
              </Column>
            </Section>
            <Hr style={productPriceLine} />
          </Container>
        </Body>
      </Html>
    </>
  );
};
export default TemaplateEmail;
// Styles for the email template
const main = {
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  backgroundColor: "#ffffff",
};


const resetText = {
  margin: "0",
  padding: "0",
  lineHeight: 1.6,
  fontWeight: "600",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "660px",
};

const tableCell = { display: "table-cell" };


const informationTable = {
  borderCollapse: "collapse" as const,
  borderSpacing: "0px",
  color: "rgb(51,51,51)",
  backgroundColor: "rgb(250,250,250)",
  borderRadius: "3px",
  fontSize: "14px",
};

const informationTableRow = {
  height: "46px",
};

const informationTableColumn = {
  paddingLeft: "20px",
  borderStyle: "solid",
  borderColor: "white",
  borderWidth: "0px 1px 1px 0px",
  height: "44px",
};

const informationTableLabel = {
  ...resetText,
  color: "rgb(102,102,102)",
  fontSize: "14px",
};

const informationTableValue = {
  fontSize: "14px",
  margin: "0",
  padding: "0",
  lineHeight: 1.4,
};

const productTitleTable = {
  ...informationTable,
  margin: "30px 0 15px 0",
  height: "24px",
};

const productsTitle = {
  background: "#fafafa",
  paddingLeft: "10px",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0",
};


const productDescription = {
  fontSize: "14px",
  color: "rgb(102,102,102)",
  ...resetText,

};


const productPriceTotal = {
  margin: "0",
  color: "rgb(102,102,102)",
  fontSize: "14px",
  fontWeight: "600",
  padding: "0px 30px 0px 0px",
  textAlign: "right" as const,
};

const productPrice = {
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
};

const productPriceLarge = {
  margin: "0px 20px 0px 0px",
  fontSize: "16px",
  fontWeight: "600",
  whiteSpace: "nowrap" as const,
  textAlign: "right" as const,
};

const productPriceWrapper = {
  display: "table-cell",
  padding: "3px 20px 0px 0px",
  width: "100px",
  verticalAlign: "top",
};

const productPriceLine = { margin: "30px 0 0 0" };

const productPriceVerticalLine = {
  height: "48px",
  borderLeft: "1px solid",
  borderColor: "rgb(238,238,238)",
};

const productPriceLargeWrapper = { display: "table-cell", width: "90px" };