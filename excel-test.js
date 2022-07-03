// Excelファイルを作成するテスト
// 必要なモジュールを取り込み
const fs = require('fs');
const officegen = require('officegen');
const xlsx = officegen('xlsx');

// 新規シートを作成
const sheet = xlsx.makeNewSheet();
sheet.name = "auto_generated";

// セル名を指定してセルにデータを書き込み
sheet.setCell("C2", "Greate Node.js!")

// ファイルを書き出す
const f = fs.createWriteStream("test.xlsx");
xlsx.generate(f);
