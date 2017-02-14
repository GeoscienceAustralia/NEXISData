'use strict';

(function(angular){
    angular.module('ga-nexis-ui.file-upload', [])
        .directive('fileUpload', fileUpload);

    function fileUpload() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'fileupload/fileupload.html',
            transclude: true,
            scope: {
                fileObject: '=',
                extPattern: '@',
                textPattern: '@'
            },
            link: fileUploadLink
        }
    }

    function fileUploadLink(scope, element, attrs, controller)
    {
        scope.fileObject = element.find('input')[0];

        // This has been commented out because this code is used for assigning
        // the file path as a text. This will be needed if this directive gets
        // to the state where an image button can be assigned.
        /*
        // Update the file path when the file value has changed.
        attrs.$observe('file-object', fileValueChanged);

        function fileValueChanged(newValue, oldValue)
        {
            if (newValue !== oldValue)
            {
                var files = scope.fileObject.files;
                if (files.length > 0)
                {
                    scope.filepathText = files[0].name;
                }
            }
        }
        */
    }
})(angular);
