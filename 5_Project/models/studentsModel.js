const mongoose = require('mongoose')
const Joi = require('joi')

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 30 },
  
    isEnrolled : {
      type : Boolean,
      default : false
    },
  
    Phone : {
      type : String,
      required : true,
      minlength : 10,
      maxlength : 25
    }
  });
  
  const Student = mongoose.model("Student", studentSchema);

  function validateData(category) {
    const schema = {
      name: Joi.string().min(3).required(),
    };
  
    return Joi.validate(category, schema);
  }

  exports.Student = Student
  exports.validate = validateData
  