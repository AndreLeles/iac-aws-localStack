module.exports.hello = async (event) => {
  console.log("message: 'Hello, World!'")
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello, World!' }),
  };
};
