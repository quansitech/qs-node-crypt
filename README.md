# qs-crypt
node加密

## 安装
```node
npm i @quansitech/qs-crypt
```

## AES-256-CBC 
```node
const crypt = require('@quansitech/qs-crypt');

const key="1234567"
const plainText="hello world"

//加密
const cipherText = crypt.AesCBC.encrypt(plainText, key);

//解密
crypt.AesCBC.decrypt(cipherText, key);
```