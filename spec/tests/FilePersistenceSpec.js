
var getContactFileName = function() {

	// We assume contacts are stored under data sub-folder
	return "data\\" + "MyContacts.json";
}

var Contact = function(firstName, lastName, phone){
	this.firstName = firstName;
	this.lastName = lastName;
	this.phone = phone;
}

describe("FilePersistence Test Suite", function(){

	var fs = require('fs');
	var contactsFile = require('../../src/FilePersistence');
	var fileName = getContactFileName();

	// truncate any existing file.
	fs.truncateSync(fileName,0);

	it("should add contacts",function(done){

		var contact = new Contact("Steve", "Jobs", "23002300");

		contactsFile.AddContact(fileName,contact);

		var contact = new Contact("Larry", "Page", "23002300");

		contactsFile.AddContact(fileName,contact);

		var readContacts = contactsFile.ReadContacts(fileName);

		expect(readContacts.length).toBe(2);
		expect(readContacts[0].firstName).toBe("Steve");

		done();
	});


	it("should add new contact",function(done){

		var contact = new Object();
		contact.firstName = "Bill";
		contact.lastName = "Gates";
		contact.phone = "23002300";

		contactsFile.AddContact(fileName, contact);


		var readContacts = contactsFile.ReadContacts(fileName);

		expect(readContacts.length).toBe(3);
		expect(readContacts[2].firstName).toBe("Bill");
		done();
	});

	it("should update contact",function(done){

		var readContacts = contactsFile.ReadContacts(fileName);

		expect(readContacts.length).toBe(3);
		expect(readContacts[1].firstName).toBe("Larry");

		contactsFile.UpdateContact(fileName,"Larry","32003200");

		var readContacts = contactsFile.ReadContacts(fileName);

		expect(readContacts.length).toBe(3);
		expect(readContacts[1].firstName).toBe("Larry");
		expect(readContacts[1].phone).toBe("32003200");
		done();
	});

	it("should delete contact",function(done){

		var readContacts = contactsFile.ReadContacts(fileName);

		expect(readContacts.length).toBe(3);
		expect(readContacts[1].firstName).toBe("Larry");

		contactsFile.DeleteContact(fileName,"Larry");

		var readContacts = contactsFile.ReadContacts(fileName);

		expect(readContacts.length).toBe(2);
		expect(readContacts[1].firstName).toBe("Bill");
		done();
	});
});
