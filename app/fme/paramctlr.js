'use strict';

(function(angular){
    angular.module('ga-nexis-ui.fme-app-ctlr', [])
        .controller('fme-app-ctlr', fmeAppCtlr);

    function fmeAppCtlr($scope)
    {
        $scope.fileUploadObject = '';
    }
})(angular);
