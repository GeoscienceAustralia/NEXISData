'use strict';

nexisDataApp.directive('fileUpload', function() {
    return{
        restrict: 'E',
        replace: true,
        templateUrl: 'app/fileupload/fileupload.html',
        scope: {
            fileObject: '='
        },
        link: function(scope, element, attrs, controller){
            scope.fileObject = element.find('input')[0];
            console.log('obj = ' + scope.fileObject);
        }
    };
});