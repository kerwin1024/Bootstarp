var data = [
    //省级
    {
        id: '01',
        provinceName: '北京市',
        city: [
            // 市级
            {
                id: '0101',
                cityName: '直辖市',
                county: [
                    // 县级
                    {id: '010101', countyName: '朝阳区'},
                    {id: '010102', countyName: '海淀区'},
                    {id: '010103', countyName: '通州区'},
                    {id: '010104', countyName: '房山区'},
                    {id: '010105', countyName: '丰台区'},
                    {id: '010106', countyName: '大兴区'},
                    {id: '010107', countyName: '顺义区'},
                    {id: '010108', countyName: '西城区'},
                    {id: '010109', countyName: '延庆县'},
                    {id: '010110', countyName: '石景山区'},
                    {id: '010111', countyName: '宣武区'},
                    {id: '010112', countyName: '怀柔区'},
                    {id: '010113', countyName: '崇文区'},
                    {id: '010114', countyName: '密云县'},
                    {id: '010115', countyName: '东城区'},
                    {id: '010116', countyName: '平谷区'},
                    {id: '010117', countyName: '门头沟区'}
                ]
            }
        ]
    },
    {
        id: '02',
        provinceName: '广东省',
        city: [
            // 市级
            {
                id: '0201',
                cityName: '广东市',
                county: [
                    // 县级
                    {id: '010101', countyName: '朝阳区s'},
                    {id: '010102', countyName: '海淀区s'},
                    {id: '010103', countyName: '通州区s'},
                    {id: '010104', countyName: '房山区s'},
                    {id: '010105', countyName: '丰台区'},
                    {id: '010106', countyName: '大兴区'},
                    {id: '010107', countyName: '顺义区'},
                    {id: '010108', countyName: '西城区'},
                    {id: '010109', countyName: '延庆县'},
                    {id: '010110', countyName: '石景山区'},
                    {id: '010111', countyName: '宣武区'},
                    {id: '010112', countyName: '怀柔区'},
                    {id: '010113', countyName: '崇文区'},
                    {id: '010114', countyName: '密云县'},
                    {id: '010115', countyName: '东城区'},
                    {id: '010116', countyName: '平谷区'},
                    {id: '010117', countyName: '门头沟区'}
                ]
            }
        ]
    }];

angular.module('showBarrioApp', [])
    .constant('BarrioData', data)
    .value('BarrioData',data)

    .directive('provinceSelect',[function () {
        return {
            restrict: 'AECM',//AECM
            require: '^showBarrioController',
            templateUrl: 'template/province.hbs'
        }
    }])
    .controller('showBarrioController', ['$scope', 'BarrioData', showBarrioController]);

showBarrioController.$inject = ['$scope', 'BarrioData'];


function showBarrioController($scope, BarrioData) {
    $scope.tmp = {};
    $scope.tmp.provinces = BarrioData;
    //更换省的时候清空城市
    $scope.$watch('tmp.province', function (province) {
        $scope.tmp.city = null;
    });
    //更换城市的时候清空
    $scope.$watch('tmp.city', function (city) {
        $scope.tmp.county = null;
    }).directive('provinceSelect',[function () {
        return {
            restrict:'A',//AECM
            require:'^showBarricoController',
            templateUrl:'template/province.hbs'
        }
    }]);/*
     */
}

angular.module('mainApp', ['showBarrioApp']);