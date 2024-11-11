/// <reference types="Cypress"/>
const ExcelJs = require('exceljs')

async function writeexcel(searchText,replaceText,change,filePath) {

  const workbook = new ExcelJs.Workbook();
  await workbook.xlsx.readFile(filePath);
  const workSheet = workbook.getWorksheet('Sheet1');
 const output=await readExcel(workSheet,searchText)

  const cell=workSheet.getCell(output.row,output.column+change.colChange);
  cell.value=replaceText;
  await workbook.xlsx.writeFile(filePath);
}


async function readExcel(workSheet,searchText){
  let output={row:-1,column:-1}
  workSheet.eachRow((row, rowNum) => {
    row.eachCell((cell, colNum) => {
      if(cell.value===searchText){
        output.row=rowNum;
        output.column=colNum;
      }
    })
  })
  return output;
}

//update banana price by 31 
writeexcel('Banana',350,{rowChange:0,colChange:2},'D:/Practice/ExcelManipulation/prodData.xlsx');