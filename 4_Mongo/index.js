const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then(() => console.log('Connection is Successful'))
.catch(err => console.error('Couldnt connect to mongodb' , err))

// Schema

const courseSchema = new mongoose.Schema({
    name : {type: String, required : true , minlength : 5, maxlength : 200},
    tags : {type : Array , validate : {
        validator : function(tags){
            return tags.length > 1
        }
    }},
    category : {
        type : String,
        required : true,
        enum : ['DSA' , 'Web' , 'Mobile' , 'Data Science']
    },
    creator : {type : String, required : true},
    publishedDate : {type : Date, default : Date.now},
    isPublished : {type : Boolean, required : true},
    rating : {type : Number , required : function(){ return this.isPublished}}
})

// classes , objects
// car , BMW

const Course = mongoose.model('Course', courseSchema)

async function createCourse(){
    const course = new Course({
        name : 'MongoDB',
        tags : ['express'],
        category : 'Web',
        creator : "Bob",
        isPublished : true,
        rating : 4.5
    })
    
    try {
        // 1 Method to save
        // await course.validate()
        // await course.save()

        // 2 Method to save
        const result = await course.save()
        console.log(result) 
    } catch (error) {
        // console.error(error.message)

        for (field in error.errors){
            console.log(error.errors[field])
        }
    }
   
} // A) Create

// Ratings from 0 to 5
createCourse()

// 1) Relational (Comparison) Operator
// eq (equal)
// gt (greater than)
// gte (greater than or equal to)
// lt (less than)
// lte (less than or equal to)

// in
// not in



// 2 Logical Operators
// or
// and


async function getCourse(){

    const courses = await Course.find({rating : {$in : [3 , 4.2 , 4.5 , 4.3]}}).select({name : 1 , publishedDate : 1}).and([{creator : 'Mrinal'} , {rating : 2}])

    console.log(courses)
}


// async function getCourse(){

//     const courses = await Course.find({creator : 'Vivek'}).select({name : 1 , publishedDate : 1}).sort({name : 1})

//     console.log(courses)
// }

// async function getCourse(){

//     const courses = await Course.find({rating : {$gte : 3}}).select({name : 1 , publishedDate : 1}).sort({rating : -1})

//     console.log(courses)
// }

// getCourse()


async function updateCourse(id){
    let course = await Course.findById(id)

    if (!course) return;

    course.name = 'Python'

    course.creator = 'Steve'

    const updatedCourse = await course.save()

    console.log(updatedCourse)
} // C) Updating

// updateCourse('64bbc7911267dd7427037232')

// D) Deleting

async function deleteCourse(id){
    let course = await Course.findByIdAndDelete(id)

    console.log(course)
}

// deleteCourse('64bbdeeeca0f753900c34cf3')