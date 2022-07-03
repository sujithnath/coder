const { deterministicPartitionKey } = require("./generateHashCase");

const hexadecimalValidator = (value) => {
  re = /[0-9A-Fa-f]{6}/g;

  return re.test(value);
};

describe('deterministicPartitionKey', ()=>{

  test("deterministicPartitionKey should return value if no event with length 128", ()=>{
    const partitionKey = deterministicPartitionKey();
    expect(partitionKey).toBe("0");
  });

  test("deterministicPartitionKey return value to be a string", ()=>{
    const partitionKey = deterministicPartitionKey(12);
    const isString = typeof partitionKey === 'string';
    expect(isString).toBe(true)
  });

  test("deterministicPartitionKey should generate new hashkey if input hasKey length is more than 256", ()=>{
    const samplePartitionKey = "asdasdasdasdasdasdasdasdas12312312312dasdasdasdasdasds123123123123123asdasdasdasdasd12312312312312asdasdadasdasdasdasdasdasdasdasdas12312312312dasdasdasdasdasds123123123123123asdasdasdasdasd12312312312312asdasdadasdasdasdasdasdasdasdasdas12312312312dasdasdasdasdasds123123123123123asdasdasdasdasd12312312312312asdasdadasdasdasdasdasdasdasdasdas12312312312dasdasdasdasdasds123123123123123asdasdasdasdasd12312312312312asdasdad";
    const sampleInput = {
      partitionKey: samplePartitionKey
    }

    const partitionKey = deterministicPartitionKey(sampleInput);
    const notSamePartitionKey = partitionKey === samplePartitionKey;

    expect(notSamePartitionKey).toBe(false)
  });

  test("deterministicPartitionKey should generate new valid hashkey if input hasKey length is more than 256", ()=>{
    const samplePartitionKey = "asdasdasdasdasdasdasdasdas12312312312dasdasdasdasdasds123123123123123asdasdasdasdasd12312312312312asdasdadasdasdasdasdasdasdasdasdas12312312312dasdasdasdasdasds123123123123123asdasdasdasdasd12312312312312asdasdadasdasdasdasdasdasdasdasdas12312312312dasdasdasdasdasds123123123123123asdasdasdasdasd12312312312312asdasdadasdasdasdasdasdasdasdasdas12312312312dasdasdasdasdasds123123123123123asdasdasdasdasd12312312312312asdasdad";
    const sampleInput = {
      partitionKey: samplePartitionKey
    }

    const partitionKey = deterministicPartitionKey(sampleInput);

    expect(hexadecimalValidator(partitionKey)).toBe(true)
  });


  test("deterministicPartitionKey should return same hashkey", ()=>{
    const samplePartitionKey = "asd123";
    const sampleInput = {
      partitionKey: samplePartitionKey
    }

    const hashKey = deterministicPartitionKey(sampleInput);
    const notSamePartitionKey = hashKey === samplePartitionKey;

    expect(notSamePartitionKey).toBe(true)
  });



  test("deterministicPartitionKey should generate new hashkey if input is empty object", ()=>{
    const sampleInput = {}

    const hashKey = deterministicPartitionKey(sampleInput);

    expect(hashKey).toHaveLength(128);
  });

})

