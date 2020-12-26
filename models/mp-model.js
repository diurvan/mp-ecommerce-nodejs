const { Schema, model } = require('mongoose');

const mpSchema = new Schema(
    {
      id: { type: Number, required:false },
      live_mode: { type: Boolean, required:false },
      type: { type: String, required:false },
      date_created: { type: String, required:false },
      application_id: { type: Number, required:false },
      user_id: { type: Number, required:false },
      version: { type: Number, required:false },
      api_version: { type: String, required:false },
      action: { type: String, required:false },
      data: {
        id: { type: String, required:true }
      },
    },
    {
        timestamps: true,
        versionKey:false
    }
)

const modelomp = model('mp', userSchema)
module.exports = modelomp

/*
{
    "id": 12345,
    "live_mode": true,
    "type": "payment",
    "date_created": "2015-03-25T10:04:58.396-04:00",
    "application_id": 123123123,
    "user_id": 44444,
    "version": 1,
    "api_version": "v1",
    "action": "payment.created",
    "data": {
        "id": "999999999"
    }
}
*/