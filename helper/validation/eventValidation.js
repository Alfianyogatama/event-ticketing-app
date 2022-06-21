const yup = require('yup')

async function validate(schema, data) {
  try {
    const value = await schema.validate(data)
    return value
  } catch (err) {
    throw err
  }
}

exports.eventUpdateStatusValidate = async (data) => {
  const schema = yup.object({
    status: yup.string().required('status is required')
  })

  return validate(schema, data)
}

