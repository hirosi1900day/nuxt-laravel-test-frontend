const OK = 200
const CREATED = 201
const INTERNAL_SERVER_ERROR = 500
const UNPROCESSABLE_ENTITY = 422

export default (context, inject) => {
   inject('OK', OK)
   inject('CREATED', CREATED)
   inject('INTERNAL_SERVER_ERROR', INTERNAL_SERVER_ERROR)
   inject('UNPROCESSABLE_ENTITY', UNPROCESSABLE_ENTITY)
 }