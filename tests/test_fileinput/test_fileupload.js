'use strict';

// Unit test for the fileupload directive.
describe('Unit: fileupload directive', function()
{
    // The fileupload directive element created to the test.
    var fileElement;

    // Include all the required modules.
    beforeEach(module('nexisDataApp'));
    beforeEach(module('app/fileupload/fileupload.html'));

    // For directives, create a compiled template fileupload directive to
    // perform the tests.
    beforeEach(inject(function($compile, $rootScope)
    {
        // Create a root scope for the tests.
        var scope = $rootScope.$new();

        // Initialise the values needed for the scope here.

        // Compile the test directive as a DOM object so that it can be tested on.

        // Create a DOM fileupload directive element
        // Add in the tag within the angular element function.
        fileElement = angular.element("<file-upload>");

        // Compile the directive with the scope so that the directive has
        // access to it.
        $compile(fileElement)(scope);

        // Run the digest cycle so angular binds the data to the DOM HTML
        // test fileupload directive element.
        scope.$digest();

        // For debugging purposes, print out the HTML code of the compiled and
        // binded directive.
        console.log(fileElement[0].outerHTML);
    }));


    // Test 1: Check the directive loads the file HTML element correctly.
    it('Loads the input element correctly', function(){
        var found = inputElementContainsType(fileElement.find("input"), 'file');
        expect(found).toBeTruthy();
    });

    // Test 2: Check the directive loads the readonly HTML text element
    // correctly.
    it('Loads the text element correctly', function(){
        var found = inputElementContainsType(fileElement.find("input"), 'text');
        expect(found).toBeTruthy();
    });

    // Want to check that the filename loaded up in the button is the same as
    // what is shown in the text field.

    // (Optional) Want to check that the text field is populated with the default
    // value that is passed in.

    // Want to check that the filter works, in that only files matching the
    // extension pattern are allowed to be loaded.

    // Want to check the observe/file changed function is called when the
    // filename is changed.

    // Determines whether an input HTML element from a list of input HTML
    // elements is of a particular type. Returns true if there is any input
    // element of the given type, returns false otherwise.
    function inputElementContainsType(inputElements, type)
    {
        // Go through the list of tags and see whether the id='file-input'
        // exists.
        var foundFileType = false;
        for (var i = 0, length = inputElements.length;
             i < length && !foundFileType; i++)
        {
            if (inputElements[i].type === type)
            {
                foundFileType = true;
            }
        }
        return foundFileType;
    }
});