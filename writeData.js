// Progrom to write data to mongodb and  retrieve it.


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


// Define schema
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
	name : String,
	age  : Number,
	joiningDate : Date,
	IsMale : Boolean
});


// Define a model 

var Employee = mongoose.model('Employee',employeeSchema); 

// create document, instnace of model

var satyam =  new Employee({
	name : 'satyam',
	age  :  30,
	joiningDate : 12/07/2012,
	IsMale : true
});

var shivam =  new Employee({
	name : 'shivam',
	age  :  25,
	joiningDate : 11/07/2012,
	IsMale : true
});

// save the document

satyam.save(function(err, savedData){

	if (err) {
		console.log('Error while writing data to DB::'+err);
	} else {
		console.log('saved Data is::'+savedData);
	}

});


// Retrieving documents 
Employee.find({}, function(err, savedData) {
	if (err) {
			console.log('Error found at::: '+ err);
	} else {
		console.log('Reading data ::'+savedData );
	}

});
