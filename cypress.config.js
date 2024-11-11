const { defineConfig } = require("cypress");
const ExcelJs = require('exceljs')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task',{
       async writeExcel({searchText,replaceText,change,filePath}) {

          const workbook = new ExcelJs.Workbook();
          await workbook.xlsx.readFile(filePath);
          const workSheet = workbook.getWorksheet('Sheet1');
         const output=await readExcel(workSheet,searchText)
        
          const cell=workSheet.getCell(output.row,output.column+change.colChange);
          cell.value=replaceText;
          await workbook.xlsx.writeFile(filePath);
          return workbook.xlsx.writeFile(filePath).then(()=>
            {
              return true;
            })
            .catch((error)=>
              {
                return false;
              })
       
        }
      })
    },
  },
});
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
