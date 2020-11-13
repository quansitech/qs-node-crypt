# qs-crypt
node加密

## 安装
```node

```

## AES-256-CBC 
```php
$key="1234567";
//加密
$plainText = "hello world";
$cipherText = AesCBC::encrypt($plainText, $key);

//解密
$plainText = AesCBC::decrypt($cipherText, $key);
```