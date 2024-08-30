# mock

生成模拟数据。

## 安装

```bash
npm install @gunny/mock
```

## 使用

```js
import * as mock from "@gunny/mock";

mock.number(); // 794
```

## API

### 通用

#### 数字

生成 0 到 1000 的整数：

```js
number(0, 1000); // 227
```

生成数据包含两位小数：

```js
number(0, 1000, 2); // 760.86
```

#### 布尔值

```js
boolean(); // false
```

#### 数组

```js
array(2, (index) => ({
  id: index + 1,
  name: "name" + (index + 1),
})); // [ { id: 1, name: 'name1' }, { id: 2, name: 'name2' } ]
```

#### 枚举

```js
enumerate(["first", "second", "third"]); // second
```

#### 日期时间

生成随机日期时间：

```js
datetime(); // 2074-11-07 23:27:31
```

生成指定范围的日期时间：

```js
datetime("2000-01-01 00:00:00", "2050-12-31 23:59:59"); // 2044-04-29 00:44:16
```

或者：

```js
datetime(new Date(2000, 0, 1, 0, 0, 0), new Date(2050, 11, 31, 23, 59, 59)); // 2044-09-21 22:10:20
```

#### 日期

生成随机日期：

```js
date(); // 2012-04-21
```

生成指定范围的日期：

```js
date("2000-01-01", "2050-12-31"); // 2012-11-18
```

或者：

```js
date(new Date(2000, 0, 1), new Date(2050, 11, 31)); // 2046-11-06
```

#### 时间

生成随机时间：

```js
time(); // 22:34:28
```

生成指定范围的时间：

```js
time("09:00:00", "18:00:00"); // 17:57:00
```

或者：

```js
time(new Date(0, 0, 1, 9, 0, 0), new Date(0, 0, 1, 18, 0, 0)); // 09:02:44
```

#### 文本

```js
text(); // 箾烀飫菼钌峌散恗襃醄，莿耖鰣嚞犈胣坷干謢，垴矋韓侯潌雄鯀霳蔇獀鲚懁众剄，塅紒偢祘諐矞幋铙荣硶蜾，潃糥琔虫鋠虷棓，讱尐骇忘喈阑僩珶，純妍觿鑝葧骔，蟠夂舉纖垸逫绾殞獑蓽，鸖辕糯皚籏擲屣豶駌躟攚芗輤，纟赿祷挥嶡峯韗讐倃酓宰确铅嵪杉，珑袕腺术蒆柞鎙，縡匶橯瀿嗅膳壒硲，纚閶蠌洩忙顶殃，诉忂藎遠茇，痙攧劁肛紵溿鼒憋箣鰵虗，悊咝餞剂亳謅，玐僱釀鋎縫澾呗铳奐緝崏谌，婊汪虏帄銹只瞨忛絁墐嚉緸挲畅，笒癏臕茫黂磕璜泐猰闭叨砽枵戡，嬲躊髖紤硤。
```

指定字符数范围：

```js
text(100, 1000); // 砒咝錠湎蔆蹋狿爕充鋡齃巺謸荁，嘉鱿蕸肢竭志韃，柉錑楈漳洞怤，贏鼈焬菸繥贴焏爧。
```

#### UUID

```js
uuid(); // b3f45642-05ab-4911-04f1-5848ff3dcf56
```

#### 递增 ID

```js
const id = createId();
id(); // 1
id(); // 2
id(); // 3
```

自定义起始值：

```js
const id = createId(10);
id(); // 11
id(); // 12
id(); // 13
```

自定义步长：

```js
const id = createId(10, 2);
id(); // 12
id(); // 14
id(); // 16
```

### 个人

#### 姓名

```js
name(); // 伯鹏
```

#### 男性姓名

```js
name("男"); // 金和平
```

#### 女性姓名

```js
name("女"); // 荀桂兰
```

#### 姓

```js
lastName(); // 古
```

#### 名

```js
firstName(); // 军
```

#### 男性名

```js
firstName("男"); // 建平
```

#### 女性名

```js
firstName("女"); // 雨涵
```

#### 性别

```js
gender(); // 女
```

#### 英文姓名

```js
enName(); // Dylan Lee
```

#### 英文男性姓名

```js
enName("male"); // Justin Sanchez
```

#### 英文女性姓名

```js
enName("female"); // Sophia Thomas
```

#### 英文姓

```js
enLastName(); // Taylor
```

#### 英文名

```js
enFirstName(); // Chloe
```

#### 英文男性名

```js
enFirstName("male"); // Christopher
```

#### 英文女性名

```js
enFirstName("female"); // Avery
```

#### 英文性别

```js
enGender(); // female
```

#### 称谓

```js
appellation(); // 教授
```

#### 婚姻状况

```js
marital(); // 分居
```

#### 移动号码

```js
mobile(); // 18998694709
```

#### 固定号码

```js
landline(); // 0835-48300226
```

#### 电子邮箱

```js
email(); // William.Davis@icloud.com
```

#### 身份证号码

```js
idCardNo(); // 766610192606308042
```

#### 职业

```js
profession(); // 律师
```

#### 银行卡号

```js
bankCardNo(); // 6271647963012682853
```

### 商业

#### 公司名

```js
company(); // 广州市海跃室内装饰设计有限责任公司
```

#### 部门

```js
department(); // 人力资源部
```

#### 行业

```js
industry(); // 牧业
```

### 位置

#### 区域

```js
region(); // 西南区
```

#### 省份

```js
province(); // 江西省
```

#### 城市

```js
city(); // 吕梁市
```

#### 区县

```js
county(); // 岳普湖县
```

#### 地址

```js
address(); // 福建省南平市武夷山市模拟25街道模拟26路22号49栋211层41室
```

### 电脑

#### ipv4

```js
ipv4(); // 199.171.174.50
```

#### ipv6

```js
ipv6(); // 70b7:e41a:8f58:6902:bf9a:79f1:4f6a:47f6
```

#### MAC 地址

```js
mac(); // 6f:8b:c8:e9:e1:f1
```

#### 文件名

```js
fileName(); // g2nch8.txt
```

#### 文件路径

```js
filePath(); // /home/Administrator/Documents/
```

#### 包含文件名的文件路径

```js
filePath(true); // /home/Administrator/Documents/uchjko.docx
```

#### 文件扩展名

```js
extension(); // xlsx
```

#### 网址

```js
url(); // https://developer.ehbihwoe.jp/HHvVQNBrKv
```

#### 主机名

```js
hostname(); // drive.prhdmczuey.biz
```

### 产品

#### 产品名

```js
productName(); // 卓沃
```

#### 产品类别

```js
productCategory(); // 家具
```

#### 颜色

```js
color(); // 黑色
```

#### 尺寸

```js
size(); // 细码
```

#### 重量

```js
weight(); // 4.7kg
```

#### 条形码

```js
barcode(); // 9508464975848
```

#### sku

```js
sku(); // MX-KJ-4242-U
```

### 工具函数

#### integer

生成一个整数

```js
integer(10, 100); // 54
```

#### integer

生成一个整数：

```js
integer(10, 100); // 54
```

#### decimal

生成一个包含制定小数位数的小数：

```js
decimal(10, 100, 2); // 34.36
```

#### random

不传递第三个数或者传递 0，等同于 `integer`，否则等同于 `decimal`：

```js
random(10, 100); // 26
random(10, 100, 2); // 60.26
```

#### pick

从字符串随机挑选一个字符，或从数组中随机挑选一个元素，或从对象中随机挑选一个值：

```js
pick("0123456789"); // 3
pick(["first", "second", "third"]); // first
pick({ key1: "first", key2: "second", key3: "third" }); // second
```

#### upperFirst

将字符串首字母变成大写：

```js
upperFirst("mockData"); // MockData
```

#### lowerFirst

将字符串首字母变成小写：

```js
lowerFirst("MockData"); // mockData
```

#### pascalCase

将字符串变成大驼峰格式：

```js
pascalCase("mock data"); // MockData
pascalCase("Mock data"); // MockData
pascalCase("Mock Data"); // MockData
pascalCase("Mock-Data"); // MockData
pascalCase("mock-data"); // MockData
pascalCase("mock_data"); // MockData
pascalCase("mockData"); // MockData
```

#### camelCase

将字符串变成小驼峰格式：

```js
camelCase("mock data"); // mockData
camelCase("Mock data"); // mockData
camelCase("Mock Data"); // mockData
camelCase("Mock-Data"); // mockData
camelCase("mock-data"); // mockData
camelCase("mock_data"); // mockData
camelCase("MockData"); // mockData
```

#### capitalize

将字符串首字母变成大写，其它字母变成小写。

```js
capitalize("mock data"); // Mock data
capitalize("Mock data"); // Mock data
capitalize("Mock Data"); // Mock data
capitalize("Mock-Data"); // Mock-data
capitalize("mock-data"); // Mock-data
capitalize("mock_data"); // Mock_data
capitalize("mockData"); // Mockdata
```

#### kebabCase

将字符串变成连字符格式：

```js
kebabCase("mock data"); // mock-data
kebabCase("Mock data"); // mock-data
kebabCase("Mock Data"); // mock-data
kebabCase("Mock-Data"); // mock-data
kebabCase("mock-data"); // mock-data
kebabCase("mock_data"); // mock-data
kebabCase("MockData"); // mock-data
```

#### pickMultiChar

从字符串中随机挑选指定个数的字符组成新的字符串：

```js
pickMultiChar("0123456789", 4); // 7079
```

#### formatDate

格式化日期对象：

```
支持以下占位符：
YYYY: 年
MM: 月
DD: 日
HH: 时
mm: 分
ss: 秒
```

```js
formatDate(new Date(), "YYYY-MM-DD HH:mm:ss"); // 2024-08-30 17:06:54
```

## 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源。

## 如何维护

### 克隆仓库到本地

```bash
git clone https://github.com/sutras/mock.git
```

### 安转依赖

```bash
npm install
```

### 开发

```bash
npm run dev
```

### 查看输出结果

```bash
npm run preview
```

### 打包构建

```bash
npm run build
```

### 测试

```bash
npm run test
```
