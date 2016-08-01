export default function template($templateCache) {
    $templateCache.put('template/color-picker/directive.html',
        '<div class="color-picker-wrapper" ng-class="{' +
        '\'color-picker-disabled\': AngularColorPickerController.options.disabled,' +
        '\'color-picker-swatch-only\': AngularColorPickerController.options.swatchOnly,' +
        '}">' +
        '   <div class="color-picker-input-wrapper" ng-class="{\'input-group\': AngularColorPickerController.options.swatchBootstrap && AngularColorPickerController.options.swatch}">' +
        '       <span ng-if="AngularColorPickerController.options.swatchPos === \'left\'" class="color-picker-swatch" ng-click="AngularColorPickerController.api.open($event)" ng-show="AngularColorPickerController.options.swatch" ng-class="{\'color-picker-swatch-left\': AngularColorPickerController.options.swatchPos !== \'right\', \'color-picker-swatch-right\': AngularColorPickerController.options.swatchPos === \'right\', \'input-group-addon\': AngularColorPickerController.options.swatchBootstrap}"></span>' +
        '       <input class="color-picker-input form-control" type="text" ng-model="AngularColorPickerController.ngModel" ng-readonly="AngularColorPickerController.options.swatchOnly" ng-disabled="AngularColorPickerController.options.disabled" ng-change="AngularColorPickerController.onChange($event)" size="7" ng-class="{\'color-picker-input-swatch\': AngularColorPickerController.options.swatch && !AngularColorPickerController.options.swatchOnly && AngularColorPickerController.options.swatchPos === \'left\'}" placeholder="{{AngularColorPickerController.options.placeholder}}">' +
        '       <span ng-if="AngularColorPickerController.options.swatchPos === \'right\'" class="color-picker-swatch" ng-click="AngularColorPickerController.api.open($event)" ng-show="AngularColorPickerController.options.swatch" ng-class="{\'color-picker-swatch-left\': AngularColorPickerController.options.swatchPos !== \'right\', \'color-picker-swatch-right\': AngularColorPickerController.options.swatchPos === \'right\', \'input-group-addon\': AngularColorPickerController.options.swatchBootstrap}"></span>' +
        '   </div>' +
        '   <div class="color-picker-panel" ng-show="AngularColorPickerController.visible" ng-class="{' +
        '       \'color-picker-panel-top color-picker-panel-right\': AngularColorPickerController.options.pos === \'top right\',' +
        '       \'color-picker-panel-top color-picker-panel-left\': AngularColorPickerController.options.pos === \'top left\',' +
        '       \'color-picker-panel-bottom color-picker-panel-right\': AngularColorPickerController.options.pos === \'bottom right\',' +
        '       \'color-picker-panel-bottom color-picker-panel-left\': AngularColorPickerController.options.pos === \'bottom left\',' +
        '       \'color-picker-panel-round\': AngularColorPickerController.options.round,' +
        '       \'color-picker-show-hue\': AngularColorPickerController.options.hue,' +
        '       \'color-picker-show-alpha\': AngularColorPickerController.options.alpha && AngularColorPickerController.options.format !== \'hex\',' +
        '       \'color-picker-show-inline\': AngularColorPickerController.options.inline,' +
        '   }">' +
        '       <div class="color-picker-grid-wrapper">' +
        '           <div class="color-picker-row">' +
        '               <div class="color-picker-grid color-picker-sprite">' +
        '                   <div class="color-picker-grid-inner"></div>' +
        '                   <div class="color-picker-picker">' +
        '                       <div></div>' +
        '                   </div>' +
        '               </div>' +
        '               <div class="color-picker-hue color-picker-sprite" ng-show="AngularColorPickerController.options.hue">' +
        '                   <div class="color-picker-slider"></div>' +
        '               </div>' +
        '               <div class="color-picker-opacity color-picker-sprite" ng-show="AngularColorPickerController.options.alpha && AngularColorPickerController.options.format !== \'hex\'">' +
        '                   <div class="color-picker-slider"></div>' +
        '               </div>' +
        '           </div>' +
        '       </div>' +
        '       <div class="color-picker-actions">' +
        '           <button ' +
        '               class="color-picker-action color-picker-action-clear"' +
        '               ng-class="AngularColorPickerController.options.clear.class"' +
        '               ng-show="AngularColorPickerController.options.clear.show"' +
        '               ng-click="AngularColorPickerController.api.clear($event)"' +
        '           >' +
        '               {{AngularColorPickerController.options.clear.label}}' +
        '           </button><!--' +
        '           --><button ' +
        '               class="color-picker-action color-picker-action-reset"' +
        '               ng-class="AngularColorPickerController.options.reset.class"' +
        '               ng-show="AngularColorPickerController.options.reset.show"' +
        '               ng-click="AngularColorPickerController.api.reset($event)"' +
        '           >' +
        '               {{AngularColorPickerController.options.reset.label}}' +
        '           </button><!--' +
        '           --><button' +
        '               class="color-picker-action color-picker-action-close"' +
        '               ng-class="AngularColorPickerController.options.close.class"' +
        '               ng-show="AngularColorPickerController.options.close.show"' +
        '               ng-click="AngularColorPickerController.api.close($event)"' +
        '           >' +
        '               {{AngularColorPickerController.options.close.label}}' +
        '           </button>' +
        '       </div>' +
        '   </div>' +
        '</div>'
    );
}

template.$inject = ['$templateCache'];
