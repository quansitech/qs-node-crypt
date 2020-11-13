const crypto = require('crypto');

exports.AesCBC = {
    algorithm: 'aes-256-cbc',
    encrypt: function(plainText, key){
        const hash = crypto.createHash('sha256');
        hash.update(key);
        const enKey = hash.digest('hex').substr(0, 32);
        const iv = enKey.substr(0, 16);

        const cipher = crypto.createCipheriv(this.algorithm, enKey, iv);

        let encryptedText = cipher.update(plainText, 'utf8', 'base64');
        encryptedText += cipher.final('base64');
        return encryptedText;
    },
    decrypt: function(cipherText, key){
        const hash = crypto.createHash('sha256');
        hash.update(key);
        const enKey = hash.digest('hex').substr(0, 32);
        const iv = enKey.substr(0, 16);

        const decipher = crypto.createDecipheriv(this.algorithm, enKey, iv);
        let plainText = decipher.update(cipherText, 'base64', 'utf8');
        plainText += decipher.final('utf8');
        return plainText;
    }
}