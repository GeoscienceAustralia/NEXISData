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
                filepathText: '=',
                extPattern: '@',
                textPattern: '@'
            },
            link: fileUploadLink
        }
    }

    function fileUploadLink(scope, element, attrs, controller)
    {
        scope.fileObject = element.find('input')[0];

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
    }
})(angular);
