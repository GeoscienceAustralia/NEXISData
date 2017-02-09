'use strict';

nexisDataApp.directive('fileUpload', function() {
    return{
        restrict: 'E',
        replace: true,
        templateUrl: 'app/fileupload/fileupload.html',
        transclude: true,
        scope: {
            fileObject: '=',
            filepathText: '=',
            extPattern: '@'
        },
        link: function(scope, element, attrs, controller){
            scope.fileObject = element.find('input')[0];
            /*
            var files = scope.fileObject.files;
            scope.filepathText = files[0].name;
            */
        }
    };
});
