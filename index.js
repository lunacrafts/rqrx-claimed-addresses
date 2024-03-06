const eth_util = require("ethereumjs-util");
const fs = require('fs');
const data = require("./data.json");

const result = [];

data.forEach((account) => {
  const key = account.operation_history.op_object.eth_pub_key;

  if (key) {
    const publicKeyAsBuffer = eth_util.toBuffer('0x' + key);
    const addressBuffer = eth_util.pubToAddress(publicKeyAsBuffer);
    const address = eth_util.bufferToHex(addressBuffer);

    console.log(address);

    result.push(address);

    // if(address == '0xbf8a3a95076b6ebdbd40b1f9cd6318e5fcbb0882') {
    //     console.log(account);
    // }
  }
});


fs.writeFileSync('./output.txt', JSON.stringify(result, null, 4), 'utf-8');