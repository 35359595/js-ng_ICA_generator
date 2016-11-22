(function(){
    angular.module('sApp', [])
        .controller('sController', ['$scope', sController]);

    function sController($scope){
        var filename = 'machine_name.ica';
        var dataForIca = 'ICA CONTENT HERE';
        $scope.file = function() {
            var blob = new Blob([dataForIca], {type: 'text/ica'});
            if(window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveBlob(blob, filename);
            }
            else{
                var elem = window.document.createElement('a');
                elem.href = window.URL.createObjectURL(blob);
                elem.download = filename;        
                document.body.appendChild(elem);
                elem.click();        
                document.body.removeChild(elem);
            }
        };
    }
})();