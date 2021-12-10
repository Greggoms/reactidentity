exports.handler = async function (event, context) {
  const { identity, user } = context.clientContext
  // Do stuff and return a response...
  const data = {
    name: "Greg",
    age: 25,
    job: "Web Dev",
    married: false,
  }
  return {
    statusCode: 200,
    body: JSON.stringify(identity, user, data),
  }
}
