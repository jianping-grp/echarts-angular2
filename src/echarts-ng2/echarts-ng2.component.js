"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ECharts = require("echarts");
var EChartOption = ECharts.EChartOption;
var EchartsNg2Component = (function () {
    function EchartsNg2Component(elementRef) {
        this.elementRef = elementRef;
        this.opts = { height: 400 };
        this.onBeforeInit = new core_1.EventEmitter();
    }
    Object.defineProperty(EchartsNg2Component.prototype, "group", {
        get: function () {
            return this._group;
        },
        set: function (group) {
            this._group = group;
            if (this.echartsInstance && this._group) {
                this.echartsInstance.group = this._group;
            }
        },
        enumerable: true,
        configurable: true
    });
    EchartsNg2Component.prototype.ngAfterViewInit = function () {
        console.log(this.host);
        this.init();
    };
    EchartsNg2Component.prototype.ngOnDestroy = function () {
        this.dispose();
    };
    EchartsNg2Component.prototype.init = function () {
        if (!this.echartsInstance) {
            this.echartsInstance = ECharts.init(this.host.nativeElement, this.theme, this.opts);
            this.echartsInstance.setOption(this.option);
        }
        else {
            this.echartsInstance.setOption(this.option);
        }
    };
    /***************** methods of echartsInstance *****************/
    EchartsNg2Component.prototype.setOption = function (option, notMerge, notRefreshImmediately) {
        this.echartsInstance.setOption(option, notMerge, notRefreshImmediately);
    };
    EchartsNg2Component.prototype.getWidth = function () {
        return this.echartsInstance.getWidth();
    };
    EchartsNg2Component.prototype.getHeight = function () {
        return this.echartsInstance.getHeight();
    };
    EchartsNg2Component.prototype.getDom = function () {
        return this.echartsInstance.getDom();
    };
    EchartsNg2Component.prototype.getOption = function () {
        return this.echartsInstance.getOption();
    };
    EchartsNg2Component.prototype.resize = function (opts) {
        this.echartsInstance.resize();
    };
    EchartsNg2Component.prototype.dispatchAction = function (payload) {
        this.echartsInstance.dispatchAction(payload);
    };
    EchartsNg2Component.prototype.on = function (eventName, handler, context) {
        this.echartsInstance.on(eventName, handler, context);
    };
    EchartsNg2Component.prototype.off = function (eventName, handler) {
        this.echartsInstance.off(eventName, handler);
    };
    EchartsNg2Component.prototype.showLoading = function (type, opts) {
        this.echartsInstance.showLoading(type, opts);
    };
    EchartsNg2Component.prototype.hideLoading = function () {
        this.echartsInstance.hideLoading();
    };
    EchartsNg2Component.prototype.getDataURL = function (opts) {
        return this.echartsInstance.getDataURL(opts);
    };
    EchartsNg2Component.prototype.clear = function () {
        this.echartsInstance.clear();
    };
    EchartsNg2Component.prototype.isDisposed = function () {
        this.echartsInstance.isDisposed();
    };
    EchartsNg2Component.prototype.dispose = function () {
        this.echartsInstance.dispose();
    };
    EchartsNg2Component.prototype.convertToPixel = function (finder, value) {
        return this.echartsInstance.convertToPixel(finder, value);
    };
    /**************** methods of ECharts *****************/
    EchartsNg2Component.prototype.connect = function (group) {
        ECharts.connect(group);
    };
    EchartsNg2Component.prototype.disconnect = function (group) {
        ECharts.disConnect(group);
    };
    EchartsNg2Component.prototype.getInstanceByDom = function (target) {
        ECharts.getInstanceByDom(target);
    };
    EchartsNg2Component.prototype.registerMap = function (mapName, geoJson, specialAreas) {
        ECharts.registerMap(mapName, geoJson, specialAreas);
    };
    EchartsNg2Component.prototype.registerTheme = function (themeName, theme) {
        ECharts.registerTheme(themeName, theme);
    };
    __decorate([
        core_1.ViewChild('host'), 
        __metadata('design:type', Object)
    ], EchartsNg2Component.prototype, "host", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EchartsNg2Component.prototype, "theme", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof EChartOption !== 'undefined' && EChartOption) === 'function' && _a) || Object)
    ], EchartsNg2Component.prototype, "option", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EchartsNg2Component.prototype, "style", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], EchartsNg2Component.prototype, "group", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EchartsNg2Component.prototype, "onBeforeInit", void 0);
    EchartsNg2Component = __decorate([
        core_1.Component({
            selector: 'echarts-ng2',
            template: "<div #host [ngStyle]=\"style ? style : null\"></div>" // #host中this.host 类型是HTMLElement
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _b) || Object])
    ], EchartsNg2Component);
    return EchartsNg2Component;
    var _a, _b;
}());
exports.EchartsNg2Component = EchartsNg2Component;
//# sourceMappingURL=echarts-ng2.component.js.map