import fs from "node:fs/promises";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputDir = "/Users/hadiaqaiser/Documents/ChatGPT/FullTime/d365-client-onboarding-case-hub";
const workbook = Workbook.create();
const dashboard = workbook.worksheets.add("Dashboard");
const sheet = workbook.worksheets.add("Onboarding Cases");
dashboard.showGridLines = false;
sheet.showGridLines = false;

const data = [
  ["Case ID", "Case Title", "Customer", "Contact Email", "Request Type", "Priority", "Status", "Service Owner", "Created Date", "Target Date", "Resolution"],
  ["ONB-001", "New Client Onboarding Request", "Fourth Coffee", "claudia@example.com", "Account setup", "Normal", "Resolved", "Hadia Qaiser", "2026-10-05", "2026-10-06", "Client details validated and onboarding request completed"],
  ["ONB-002", "Client Onboarding Access Follow-up", "Fourth Coffee", "claudia@example.com", "Access request", "High", "In Progress", "Hadia Qaiser", "2026-10-05", "2026-10-06", ""],
  ["ONB-003", "New Client Onboarding Request", "GreenGrid Energy", "aisha@example.com", "Account setup", "Normal", "New", "Service Team", "2026-10-06", "2026-10-07", ""],
  ["ONB-004", "Client Onboarding Data Query", "Harbour Retail", "daniel@example.com", "Data validation", "Normal", "New", "Service Team", "2026-10-06", "2026-10-08", ""],
  ["ONB-005", "Client Onboarding Access Follow-up", "SunStream Power", "liam@example.com", "Access request", "High", "In Progress", "Service Team", "2026-10-07", "2026-10-08", ""]
];

sheet.getRange("A1:K6").values = data;
const table = sheet.tables.add("A1:K6", true);
table.name = "OnboardingCases";
sheet.getRange("A1:K1").format = {
  fill: "#1F4E78",
  font: { bold: true, color: "#FFFFFF" },
  horizontalAlignment: "center",
  verticalAlignment: "center"
};
sheet.getRange("A1:K6").format.wrapText = true;
sheet.getRange("A1:K6").format.autofitColumns();
sheet.getRange("A:A").format.columnWidth = 14;
sheet.getRange("B:B").format.columnWidth = 34;
sheet.getRange("C:C").format.columnWidth = 20;
sheet.getRange("D:D").format.columnWidth = 28;
sheet.getRange("E:E").format.columnWidth = 18;
sheet.getRange("F:F").format.columnWidth = 12;
sheet.getRange("G:G").format.columnWidth = 14;
sheet.getRange("H:H").format.columnWidth = 18;
sheet.getRange("I:J").format.columnWidth = 14;
sheet.getRange("K:K").format.columnWidth = 42;
sheet.freezePanes.freezeRows(1);

dashboard.getRange("A2:H2").merge();
dashboard.getRange("A2").values = [["Client Onboarding Service Dashboard"]];
dashboard.getRange("A2").format = {
  fill: "#1F4E78",
  font: { bold: true, color: "#FFFFFF", size: 16 },
  horizontalAlignment: "left",
  verticalAlignment: "center"
};
dashboard.getRange("A2:H2").format.rowHeight = 30;
dashboard.getRange("A4:B4").merge();
dashboard.getRange("D4:E4").merge();
dashboard.getRange("G4:H4").merge();
dashboard.getRange("A4").values = [["Total cases"]];
dashboard.getRange("D4").values = [["Active cases"]];
dashboard.getRange("G4").values = [["High-priority cases"]];
dashboard.getRange("A5:B5").merge();
dashboard.getRange("D5:E5").merge();
dashboard.getRange("G5:H5").merge();
dashboard.getRange("A5").formulas = [["=COUNTA('Onboarding Cases'!A2:A6)"]];
dashboard.getRange("D5").formulas = [["=COUNTIF('Onboarding Cases'!G2:G6,\"In Progress\")"]];
dashboard.getRange("G5").formulas = [["=COUNTIF('Onboarding Cases'!F2:F6,\"High\")"]];
for (const range of ["A4:B5", "D4:E5", "G4:H5"]) {
  dashboard.getRange(range).format = {
    fill: "#EAF2F8",
    borders: { preset: "outside", style: "thin", color: "#9EADBA" },
    horizontalAlignment: "center",
    verticalAlignment: "center"
  };
}
dashboard.getRange("A4:H4").format.font = { bold: true, color: "#1F4E78" };
dashboard.getRange("A5:H5").format.font = { bold: true, color: "#1F1F1F", size: 16 };
dashboard.getRange("A8:E8").values = [["Case status", "Cases", "", "Priority", "Cases"]];
dashboard.getRange("A9:A11").values = [["New"], ["In Progress"], ["Resolved"]];
dashboard.getRange("B9:B11").formulas = [["=COUNTIF('Onboarding Cases'!G2:G6,A9)"], ["=COUNTIF('Onboarding Cases'!G2:G6,A10)"], ["=COUNTIF('Onboarding Cases'!G2:G6,A11)"]];
dashboard.getRange("D9:D10").values = [["High"], ["Normal"]];
dashboard.getRange("E9:E10").formulas = [["=COUNTIF('Onboarding Cases'!F2:F6,D9)"], ["=COUNTIF('Onboarding Cases'!F2:F6,D10)"]];
dashboard.getRange("A8:B8").format = { fill: "#1F4E78", font: { bold: true, color: "#FFFFFF" }, horizontalAlignment: "center" };
dashboard.getRange("D8:E8").format = { fill: "#1F4E78", font: { bold: true, color: "#FFFFFF" }, horizontalAlignment: "center" };
dashboard.getRange("A8:B11").format.borders = { preset: "all", style: "thin", color: "#D9E2F3" };
dashboard.getRange("D8:E10").format.borders = { preset: "all", style: "thin", color: "#D9E2F3" };
dashboard.getRange("A:A").format.columnWidth = 20;
dashboard.getRange("B:B").format.columnWidth = 14;
dashboard.getRange("C:C").format.columnWidth = 5;
dashboard.getRange("D:D").format.columnWidth = 20;
dashboard.getRange("E:E").format.columnWidth = 14;
workbook.recalculate();

const check = await workbook.inspect({ kind: "table", range: "Dashboard!A2:H11", include: "values,formulas", tableMaxRows: 15, tableMaxCols: 12 });
console.log(check.ndjson);
const preview = await workbook.render({ sheetName: "Dashboard", range: "A2:H11", scale: 1.5 });
await fs.writeFile(`${outputDir}/Client_Onboarding_Cases_preview.png`, new Uint8Array(await preview.arrayBuffer()));
const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(`${outputDir}/Client_Onboarding_Cases.xlsx`);
