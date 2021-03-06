'use strict';

// Unit test for the fileupload directive.
describe('Unit: fileupload directive', function()
{
    // The fileupload directive element created to the test.
    var fileElement;

    // The isolated scope of the directive.
    var directiveScope;

    // Include all the required modules.
    beforeEach(module('ga-nexis-ui.file-upload'));
    beforeEach(module('fileupload/fileupload.html'));

    // For directives, create a compiled template fileupload directive to
    // perform the tests.
    beforeEach(inject(function($compile, $rootScope)
    {
        // Create a root scope for the tests.
        var scope = $rootScope.$new();

        // Create a DOM fileupload directive element
        // Add in the tag within the angular element function.
        fileElement = angular.element("<file-upload file-object=\"testObject\" ext-pattern=\".zip\" text-pattern=\"/^(.*\.(?!(zip)$))?[^.]*$/i\" />");

        // Compile the directive with the scope so that the directive has
        // access to it.
        $compile(fileElement)(scope);

        // Run the digest cycle so angular binds the data to the DOM HTML
        // test fileupload directive element.
        scope.$digest();

        directiveScope = fileElement.isolateScope();

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

    // Test 3: Check that the file is correctly bound to the scope variable.
    it('Binds file DOM object to variable', function(){
        var fileDOM = getHTMLElementByID(fileElement.find("input"),
            'file-input');
        expect(directiveScope.fileObject).toBe(fileDOM);
    });

    // Test 4: Check passed in ext pattern is set on input file element.
    it('Bind accept to input file element correctly', function(){
        var fileDOM = getHTMLElementByID(fileElement.find("input"),
            'file-input');
        var patternVal = angular.element(fileDOM).attr('accept');
        expect(patternVal).toEqual(".zip");
    });

    // Test 5: Check passed in text pattern is set on input file element.
    it('Bind ng-pattern to input file element correctly', function(){
        var fileDOM = getHTMLElementByID(fileElement.find("input"),
            'file-input');
        var patternVal = angular.element(fileDOM).attr('ng-pattern');
        expect(patternVal).toEqual("/^(.*\.(?!(zip)$))?[^.]*$/i");
    });

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
