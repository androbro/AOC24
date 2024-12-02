var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var D1P2_fs = require('node:fs/promises');
var D1P2_fileData = '';
var D1P2_leftList = [];
var D1P2_rightList = [];
var D1P2_differences = [];
var D1P2_result = 0;
//execution
D1P2_main();
function D1P2_main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, D1P2_readFile()];
                case 1:
                    _a.sent();
                    D1P2_getLists();
                    D1P2_findSimilarities();
                    D1P2_addUpAllDifferences();
                    return [2 /*return*/];
            }
        });
    });
}
//read txt file
function D1P2_readFile() {
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, D1P2_fs.readFile('./input.txt', 'utf8')];
                case 1:
                    D1P2_fileData = _a.sent();
                    console.log('filled Filedata');
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
//get the 2 lists
function D1P2_getLists() {
    // Split by newlines first
    var lines = D1P2_fileData.trim().split('\n');
    // Process each line
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        // Split each line by whitespace and filter out empty strings
        var numbers = line.trim().split(/\s+/);
        // Add numbers to respective lists
        if (numbers.length >= 2) {
            D1P2_leftList.push(Number(numbers[0]));
            D1P2_rightList.push(Number(numbers[1]));
        }
    }
    console.log('Left list:', D1P2_leftList);
    console.log('Right list:', D1P2_rightList);
}
//add up smallest numbers
function D1P2_findSimilarities() {
    D1P2_leftList.forEach(function (leftElement, index) {
        var similarityValue = D1P2_rightList.filter(function (x) { return x === leftElement; });
        D1P2_differences.push(leftElement * similarityValue.length);
    });
    console.log('merged list values:', D1P2_differences);
}
function D1P2_addUpAllDifferences() {
    D1P2_differences.forEach(function (value) {
        D1P2_result += value;
    });
    console.log('the final result: ', D1P2_result);
}
