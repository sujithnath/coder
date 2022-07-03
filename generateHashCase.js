const crypto = require("crypto");

const generatePartitionKey = (key) =>  {
  if(typeof key !== 'string'){
    key = JSON.stringify(key);
  }

  return crypto.createHash("sha3-512").update(key).digest("hex");
};

exports.deterministicPartitionKey = (value = "0") => {
  const MAX_PARTITION_KEY_LENGTH = 256;

  if(value === "0"){
    return value;
  }

  if (value.partitionKey &&
      value.partitionKey.length <= MAX_PARTITION_KEY_LENGTH) {
      return value.partitionKey;
  }

  // we can run one more check if the value.partitionKey is valid hashkey and generate a new one if not

  return generatePartitionKey(value);
};

