// Progrom to write data to mongodb abd retrieve it.
// To do :- Update document .



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

// create document, instance of model

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



// save  document

shivam.save(function(err, savedData){

	if (err) {
		console.log('Error while writing data to DB::'+err);
	} else {
		console.log('Writing Data ::'+savedData);
	}

});




/*	Remove the document
    Use Model.remove(conditions, [callback]) 
    Refer http://mongoosejs.com/docs/api.html#model_Model.remove
*/


Employee.remove({name:'shivam'}, function(err, result){
console.log('Result is ::::  '+result);
}); 


/* Removing document without using callback, use exec() on returned Query
var removeQuery = Employee.remove({name:'shivam'});
removeQuery.exec();
*/



// Retrieving documents

Employee.find({ name: 'shivam'}, function(err, savedData){
	if (err) {
			console.log('Error found at::: '+ err);
	} else {
		console.log('Reading data ::----'+savedData);
	}
});



// Find count of saved data

/*Employee.count({name : 'satyam'}, function(err, savedDataCount) {
	if (err) {
			console.log('Error found at::: '+ err);
	} else {
		console.log('Reading data ::'+savedDataCount );
	}
}); 


// Retrieve all saved data
Employee.find({}, function(err, savedData){
	if (err) {
			console.log('Error found at::: '+ err);
	} else {
		console.log('Reading data ::'+savedData );
	}
});

// Retrieve only those documents whose name is 'satyam'

*/



/*
var query = Employee.findOne({name: 'satyam'});
query.select('age joiningDate');

query.exec(function(err, employee) {
console.log('111:::'+ '%s %s', employee.age, employee.joiningDate);
});
*/
























































