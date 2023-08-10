// function test(one,{two=true,three=true}={}){
//     console.log(one,two,three)
// }

// test(true,{two:false,three:false})


const document = {
    request: {
      method: 'POST',
      url: 'localhost:4321',
      headers: [],
      body: '{"ReportRequest":{"Address":{"Suite":"","StreetNumber":"2","StreetName":"Blue Horizon CRT","Municipality":"Caledon Village","PostalCode":"L7K0V1","ProvinceCode":"ON"},"OwnerName":""}}',
      userId: 'asdf'
    },
    response: {
      statusCode: 200,
      headers: {
        ReportID: 10032477,
        ReportDate: "2023-08-09T13:05:25.000Z",
        ValuationDate: "2023-08-09T00:00:00.000Z",
        AVMModel: 'Teranet AVM Model',
        AVMModelType: 'AVM'
      },
      body: '{"Header":{"ReportID":10032477,"ReportDate":"2023-08-09T13:05:25.000Z","ValuationDate":"2023-08-09T00:00:00.000Z","AVMModel":"Teranet AVM Model","AVMModelType":"AVM"},"ReportDetail":{"EstimatedValue":{"EstimatedValue":1355000,"EstimatedValueLow":1128000,"EstimatedValueHigh":1548000,"MinimumSaleValue":810000,"MaximumSaleValue":4010000,"AverageSaleValue":1629024,"MedianSaleValue":1495500,"SalesInLast6Months":76,"MarketShift":-0.282103},"EquityAndMortgages":{"EquityEstimate":290000,"EstimatedValue":1355000,"RegisteredMortgages":1065000,"MortgageDetails":[{"ConsiderationValue":1065000,"Institution":"THE BANK OF NOVA SCOTIA","DateIssued":"2021-06-25T00:00:00.000Z"},{"ConsiderationValue":1065000,"Institution":"THE BANK OF NOVA SCOTIA","DateIssued":"2021-06-25T00:00:00.000Z"},{"ConsiderationValue":1065000,"Institution":"THE BANK OF NOVA SCOTIA","DateIssued":"2021-06-25T00:00:00.000Z"},{"ConsiderationValue":1065000,"Institution":"THE BANK OF NOVA SCOTIA","DateIssued":"2021-06-25T00:00:00.000Z"}]}}}',
      reason: null,
      code: null
    },
    createdAt: "2023-08-09T17:05:23.594Z",
    type: 'purview',
    isReplicaData: false
    }

console.log("body",document.response.body)
const documentBody =  JSON.parse(document.response.body)

console.log("body",documentBody)

if (!false) {
  console.log("here")
//   console.log(JSON.parse(document), "data")
  const mortgageDetailsSum = documentBody.ReportDetail.EquityAndMortgages.MortgageDetails.reduce(
    (total, mortgage) => total + mortgage.ConsiderationValue,
    0
  );
  const avmValue = mortgageDetailsSum + documentBody.ReportDetail.EstimatedValue.EstimatedValue;
  documentBody.avm = avmValue;
  document.response.body = documentBody
}

console.log(document.response.body)