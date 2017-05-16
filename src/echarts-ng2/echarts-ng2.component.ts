import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild} from '@angular/core';
import * as ECharts from "echarts";

import EChartOption = ECharts.EChartOption;
import echartsInstance = ECharts.ECharts
@Component({
  selector: 'echarts-ng2',
  template: `<div #host [ngStyle]="style ? style : null"></div>`// #host中this.host 类型是HTMLElement
})
export class EchartsNg2Component implements AfterViewInit, OnDestroy{
  @ViewChild('host')host;
  private echartsInstance: echartsInstance;
  private opts: Object = {height:400};
  private _group:string;

  @Input() theme:Object|string;
  @Input() option: EChartOption;
  @Input() style:any;
  @Input()
  set group(group:string){
    this._group=group;
    if (this.echartsInstance && this._group){
      this.echartsInstance.group=this._group
    }
  }
  get group(){
    return this._group;
  }

  @Output() onBeforeInit=new EventEmitter<any>();
  constructor(
    private elementRef:ElementRef
  ) {
  }

  ngAfterViewInit(){
    console.log(this.host);
    this.init()
  }
  ngOnDestroy(){
    this.dispose()
  }
  init():void{
    if (!this.echartsInstance){
      this.echartsInstance = ECharts.init(this.host.nativeElement,this.theme,this.opts);
      this.echartsInstance.setOption(this.option);
    }
    else {
      this.echartsInstance.setOption(this.option)
    }
  }
  /***************** methods of echartsInstance *****************/

  setOption(option:EChartOption, notMerge?:boolean, notRefreshImmediately?:boolean):void{
    this.echartsInstance.setOption(option,notMerge,notRefreshImmediately)
  }
  getWidth():number{
    return this.echartsInstance.getWidth();
  }
  getHeight():number{
    return this.echartsInstance.getHeight();
  }
  getDom():HTMLCanvasElement|HTMLDivElement{
    return this.echartsInstance.getDom();
  }
  getOption():Object{
    return this.echartsInstance.getOption();
  }
  resize(opts?: { width?: number|string, height?: number|string, silent?: boolean }):void{
    this.echartsInstance.resize();
  }
  dispatchAction(payload:object){
    this.echartsInstance.dispatchAction(payload)
  }
  on(eventName:string, handler:Function, context?:Object):void{
    this.echartsInstance.on(eventName, handler, context)
  }
  off(eventName:string, handler?:Function):void{
    this.echartsInstance.off(eventName,handler)
  }
  showLoading(type?:string, opts?:Object):void{
    this.echartsInstance.showLoading(type, opts)
  }
  hideLoading():void{
    this.echartsInstance.hideLoading()
  }
  getDataURL(opts:{
    // 导出的格式，可选 png, jpeg
    type?: string,
    // 导出的图片分辨率比例，默认为 1。
    pixelRatio?: number,
    // 导出的图片背景色，默认使用 option 里的 backgroundColor
    backgroundColor?: string
  }):string{
    return this.echartsInstance.getDataURL(opts)
  }
  clear():void{
      this.echartsInstance.clear();
  }
  isDisposed():void{
      this.echartsInstance.isDisposed();
  }
  dispose():void{
    this.echartsInstance.dispose();
  }
  convertToPixel(finder: {
    seriesIndex?: number,
    seriesId?: string,
    seriesName?: string,
    geoIndex?: number,
    geoId?: string,
    geoName?: string,
    xAxisIndex?: number,
    xAxisId?: string,
    xAxisName?: string,
    yAxisIndex?: number,
    yAxisId?: string,
    yAxisName?: string,
    gridIndex?: number,
    gridId?: string
    gridName?: string
  } | string, value: string|Array<any>):string|Array<any>{
      return this.echartsInstance.convertToPixel(finder,value);
  }

  /**************** methods of ECharts *****************/
  connect(group:string|Array<string>):void{
    ECharts.connect(group)
  }
  disconnect(group:string):void{
    ECharts.disConnect(group)
  }
  getInstanceByDom(target:HTMLDivElement|HTMLCanvasElement):void{
    ECharts.getInstanceByDom(target)
  }
  registerMap(mapName:string, geoJson:Object, specialAreas?:Object):void{
    ECharts.registerMap(mapName,geoJson,specialAreas)
  }
  registerTheme(themeName:string, theme:Object):void{
    ECharts.registerTheme(themeName,theme)
  }



}
