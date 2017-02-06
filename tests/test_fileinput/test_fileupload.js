'use strict';

// Unit test for the fileupload directive.
describe('Unit: fileupload directive', function()
{
    // The fileupload directive element created to the test.
    var fileElement;

    // The isolated scope of the directive.
    var directiveScope;

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
        //scope.variable = value.

        // Create a DOM fileupload directive element
        // Add in the tag within the angular element function.
        fileElement = angular.element("<file-upload file-object=\"testValue\">");

        // Compile the directive with the scope so that the directive has
        // access to it.
        $compile(fileElement)(scope);

        // Run the digest cycle so angular binds the data to the DOM HTML
        // test fileupload directive element.
        scope.$digest();

        // For debugging purposes, print out the HTML code of the compiled and
        // binded directive.
        console.log(fileElement[0].outerHTML);

        directiveScope = fileElement.isolateScope();
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

    // Test 3: Check that the file is correctly bound to the scope variable.
    it('Binds file DOM object to variable', function(){
        var fileDOM = getHTMLElementByID(fileElement.find("input"),
            'file-input');
        expect(directiveScope.fileObject).toEqual(fileDOM);
    });

    // Test 4: Check the filename selected is filled out in the text field.
    // Want to get the values of the filepath from both the string and text.
    it('Displays filepath in text correctly', function(){
        var fileDOM = getHTMLElementByID(fileElement.find("input"),
            'file-input');
        var textDOM = getHTMLElementByID(fileElement.find("input"),
            'file-text');
    });


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
        // Go through the list of tags and see whether the type exists.
        var foundFileType = false;
        for (var i = 0, length = inputElements.length;
             i < length && !foundFileType; i++)
        {
            if (inputElements[i].type === type)
            {
                foundFileType = true;
                break;
            }
        }
        return foundFileType;
    }

    // Returns the HTML element from the list of DOM elemtns that matches the
    // given ID
    function getHTMLElementByID(inputElements, id)
    {
        // Go through the list of tags and see whether the type exists
        for (var i = 0, length = inputElements.length;
             i < length; i++)
        {
            if (inputElements[i].id === id)
            {
                return inputElements[i];
            }
        }
    }
});