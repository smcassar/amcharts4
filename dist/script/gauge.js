/**
 * @license
 * Copyright (c) 2018 amCharts (Antanas Marcelionis, Martynas Majeris)
 *
 * This sofware is provided under multiple licenses. Please see below for
 * links to appropriate usage.
 *
 * Free amCharts linkware license. Details and conditions:
 * https://github.com/amcharts/amcharts4/blob/master/LICENSE
 *
 * One of the amCharts commercial licenses. Details and pricing:
 * https://www.amcharts.com/online-store/
 * https://www.amcharts.com/online-store/licenses-explained/
 *
 * If in doubt, contact amCharts at contact@amcharts.com
 *
 * PLEASE DO NOT REMOVE THIS COPYRIGHT NOTICE.
 * @hidden
 */
webpackJsonp([9],{243:function(e,r,t){"use strict";t.d(r,"a",function(){return p});var n,i=t(7),a=t(124),s=t(244),u=t(17),o=t(9),d=t(1),c=t(11),I=t(6),l=t(2),f=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])},function(e,r){function t(){this.constructor=e}n(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}),p=function(e){function r(){var r=e.call(this)||this;r._axis=new u.e,r.className="ClockHand";var t=new c.b;r.fill=t.getFor("alternativeBackground"),r.stroke=r.fill;var n=new a.a;n.radius=5,r.pin=n,r.isMeasured=!1,r.startWidth=5,r.endWidth=1,r.width=Object(o.c)(100),r.height=Object(o.c)(100),r.radius=Object(o.c)(100),r.innerRadius=Object(o.c)(0);var i=new s.d;return r.hand=i,r.applyTheme(),r}return f(r,e),r.prototype.validate=function(){e.prototype.validate.call(this);var r=this.hand;r.width=this.pixelWidth;var t=Math.max(this.startWidth,this.endWidth);if(r.height=t,r.leftSide=Object(o.c)(this.startWidth/t*100),r.rightSide=Object(o.c)(this.endWidth/t*100),this.axis){var n=this.axis.renderer,i=I.relativeRadiusToValue(this.innerRadius,n.pixelRadius),a=I.relativeRadiusToValue(this.radius,n.pixelRadius);r.x=i,r.y=-t/2,r.width=a-i}},Object.defineProperty(r.prototype,"pin",{get:function(){return this._pin},set:function(e){this._pin&&this.removeDispose(this._pin),e&&(this._pin=e,e.parent=this,this._disposers.push(e))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"hand",{get:function(){return this._hand},set:function(e){this._hand&&this.removeDispose(this._hand),e&&(this._hand=e,e.parent=this,this._disposers.push(e))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"radius",{get:function(){return this.getPropertyValue("radius")},set:function(e){this.setPropertyValue("radius",e,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"innerRadius",{get:function(){return this.getPropertyValue("innerRadius")},set:function(e){this.setPropertyValue("innerRadius",e,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"startWidth",{get:function(){return this.getPropertyValue("startWidth")},set:function(e){this.setPropertyValue("startWidth",e,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"endWidth",{get:function(){return this.getPropertyValue("endWidth")},set:function(e){this.setPropertyValue("endWidth",e,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"rotationDirection",{get:function(){return this.getPropertyValue("rotationDirection")},set:function(e){this.setPropertyValue("rotationDirection",e)},enumerable:!0,configurable:!0}),r.prototype.showValue=function(e,r,t){if(this._value=e,void 0!=e&&(l.isNumber(r)||(r=0),this.axis)){var n=this.axis.renderer.positionToAngle(this.axis.anyToPosition(e)),i=this.rotation;"clockWise"==this.rotationDirection&&n<i&&(this.rotation=i-360),"counterClockWise"==this.rotationDirection&&n>i&&(this.rotation=i+360),this.animate({property:"rotation",to:n},r,t)}},Object.defineProperty(r.prototype,"value",{get:function(){return this._value},set:function(e){this.showValue(e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"axis",{get:function(){return this._axis.get()},set:function(e){var r=this;if(this.axis!=e&&this._axis.set(e,new u.d([e.events.on("datavalidated",function(){return r.updateValue()}),e.events.on("datarangechanged",function(){return r.updateValue()}),e.events.on("valueschanged",function(){return r.updateValue()}),e.events.on("propertychanged",function(){return r.invalidate()})])),e){var t=e.chart;t&&(this.rotation=t.startAngle)}this.parent=e.renderer,this.zIndex=5},enumerable:!0,configurable:!0}),r.prototype.updateValue=function(){this.value=this.value},r.prototype.processConfig=function(r){r&&l.hasValue(r.axis)&&l.isString(r.axis)&&this.map.hasKey(r.axis)&&(r.axis=this.map.getKey(r.axis)),e.prototype.processConfig.call(this,r)},r}(i.a);d.c.registeredClasses.ClockHand=p},298:function(e,r,t){e.exports=t(299)},299:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(300);window.amcharts4.gauge=n},300:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(301);t.d(r,"GaugeChartDataItem",function(){return n.b}),t.d(r,"IGaugeChartDataFields",function(){return n.IGaugeChartDataFields}),t.d(r,"IGaugeChartProperties",function(){return n.IGaugeChartProperties}),t.d(r,"IGaugeChartEvents",function(){return n.IGaugeChartEvents}),t.d(r,"IGaugeChartAdapters",function(){return n.IGaugeChartAdapters}),t.d(r,"GaugeChart",function(){return n.a});var i=t(132);t.d(r,"RadarChartDataItem",function(){return i.f}),t.d(r,"IRadarChartDataFields",function(){return i.IRadarChartDataFields}),t.d(r,"IRadarChartProperties",function(){return i.IRadarChartProperties}),t.d(r,"IRadarChartEvents",function(){return i.IRadarChartEvents}),t.d(r,"IRadarChartAdapters",function(){return i.IRadarChartAdapters}),t.d(r,"RadarChart",function(){return i.e});var a=t(63);t.d(r,"XYChartDataItem",function(){return a.f}),t.d(r,"IXYChartDataFields",function(){return a.IXYChartDataFields}),t.d(r,"IXYChartProperties",function(){return a.IXYChartProperties}),t.d(r,"IXYChartEvents",function(){return a.IXYChartEvents}),t.d(r,"IXYChartAdapters",function(){return a.IXYChartAdapters}),t.d(r,"XYChart",function(){return a.e});var s=t(42);t.d(r,"SerialChartDataItem",function(){return s.f}),t.d(r,"ISerialChartDataFields",function(){return s.ISerialChartDataFields}),t.d(r,"ISerialChartProperties",function(){return s.ISerialChartProperties}),t.d(r,"ISerialChartEvents",function(){return s.ISerialChartEvents}),t.d(r,"ISerialChartAdapters",function(){return s.ISerialChartAdapters}),t.d(r,"SerialChart",function(){return s.e});var u=t(40);t.d(r,"ChartDataItem",function(){return u.b}),t.d(r,"IChartDataFields",function(){return u.IChartDataFields}),t.d(r,"IChartProperties",function(){return u.IChartProperties}),t.d(r,"IChartEvents",function(){return u.IChartEvents}),t.d(r,"IChartAdapters",function(){return u.IChartAdapters}),t.d(r,"Chart",function(){return u.a});var o=t(49);t.d(r,"LegendDataItem",function(){return o.g}),t.d(r,"LegendPosition",function(){return o.LegendPosition}),t.d(r,"ILegendDataFields",function(){return o.ILegendDataFields}),t.d(r,"ILegendProperties",function(){return o.ILegendProperties}),t.d(r,"ILegendEvents",function(){return o.ILegendEvents}),t.d(r,"ILegendAdapters",function(){return o.ILegendAdapters}),t.d(r,"ILegendItem",function(){return o.ILegendItem}),t.d(r,"Legend",function(){return o.f}),t.d(r,"LegendSettings",function(){return o.i});var d=t(35);t.d(r,"SeriesDataItem",function(){return d.f}),t.d(r,"ISeriesDataFields",function(){return d.ISeriesDataFields}),t.d(r,"ISeriesProperties",function(){return d.ISeriesProperties}),t.d(r,"ISeriesEvents",function(){return d.ISeriesEvents}),t.d(r,"ISeriesAdapters",function(){return d.ISeriesAdapters}),t.d(r,"Series",function(){return d.e});var c=t(78);t.d(r,"XYSeriesDataItem",function(){return c.f}),t.d(r,"IXYSeriesDataFields",function(){return c.IXYSeriesDataFields}),t.d(r,"IXYSeriesProperties",function(){return c.IXYSeriesProperties}),t.d(r,"IXYSeriesEvents",function(){return c.IXYSeriesEvents}),t.d(r,"IXYSeriesAdapters",function(){return c.IXYSeriesAdapters}),t.d(r,"XYSeries",function(){return c.e});var I=t(90);t.d(r,"LineSeriesDataItem",function(){return I.f}),t.d(r,"ILineSeriesDataFields",function(){return I.ILineSeriesDataFields}),t.d(r,"ILineSeriesProperties",function(){return I.ILineSeriesProperties}),t.d(r,"ILineSeriesEvents",function(){return I.ILineSeriesEvents}),t.d(r,"ILineSeriesAdapters",function(){return I.ILineSeriesAdapters}),t.d(r,"LineSeries",function(){return I.e});var l=t(110);t.d(r,"ILineSeriesSegmentPropertiess",function(){return l.ILineSeriesSegmentPropertiess}),t.d(r,"ILineSeriesSegmentEvents",function(){return l.ILineSeriesSegmentEvents}),t.d(r,"ILineSeriesSegmentAdapters",function(){return l.ILineSeriesSegmentAdapters}),t.d(r,"LineSeriesSegment",function(){return l.d});var f=t(125);t.d(r,"CandlestickSeriesDataItem",function(){return f.b}),t.d(r,"ICandlestickSeriesDataFields",function(){return f.ICandlestickSeriesDataFields}),t.d(r,"ICandlestickSeriesProperties",function(){return f.ICandlestickSeriesProperties}),t.d(r,"ICandlestickSeriesEvents",function(){return f.ICandlestickSeriesEvents}),t.d(r,"ICandlestickSeriesAdapters",function(){return f.ICandlestickSeriesAdapters}),t.d(r,"CandlestickSeries",function(){return f.a});var p=t(67);t.d(r,"ColumnSeriesDataItem",function(){return p.b}),t.d(r,"IColumnSeriesDataFields",function(){return p.IColumnSeriesDataFields}),t.d(r,"IColumnSeriesProperties",function(){return p.IColumnSeriesProperties}),t.d(r,"IColumnSeriesEvents",function(){return p.IColumnSeriesEvents}),t.d(r,"IColumnSeriesAdapters",function(){return p.IColumnSeriesAdapters}),t.d(r,"ColumnSeries",function(){return p.a});var A=t(126);t.d(r,"StepLineSeriesDataItem",function(){return A.f}),t.d(r,"IStepLineSeriesDataFields",function(){return A.IStepLineSeriesDataFields}),t.d(r,"IStepLineSeriesProperties",function(){return A.IStepLineSeriesProperties}),t.d(r,"IStepLineSeriesEvents",function(){return A.IStepLineSeriesEvents}),t.d(r,"IStepLineSeriesAdapters",function(){return A.IStepLineSeriesAdapters}),t.d(r,"StepLineSeries",function(){return A.e});var h=t(145);t.d(r,"RadarSeriesDataItem",function(){return h.f}),t.d(r,"IRadarSeriesDataFields",function(){return h.IRadarSeriesDataFields}),t.d(r,"IRadarSeriesProperties",function(){return h.IRadarSeriesProperties}),t.d(r,"IRadarSeriesEvents",function(){return h.IRadarSeriesEvents}),t.d(r,"IRadarSeriesAdapters",function(){return h.IRadarSeriesAdapters}),t.d(r,"RadarSeries",function(){return h.e});var v=t(178);t.d(r,"RadarColumnSeriesDataItem",function(){return v.f}),t.d(r,"IRadarColumnSeriesDataFields",function(){return v.IRadarColumnSeriesDataFields}),t.d(r,"IRadarColumnSeriesProperties",function(){return v.IRadarColumnSeriesProperties}),t.d(r,"IRadarColumnSeriesEvents",function(){return v.IRadarColumnSeriesEvents}),t.d(r,"IRadarColumnSeriesAdapters",function(){return v.IRadarColumnSeriesAdapters}),t.d(r,"RadarColumnSeries",function(){return v.e});var x=t(79);t.d(r,"PieSeriesDataItem",function(){return x.f}),t.d(r,"IPieSeriesDataFields",function(){return x.IPieSeriesDataFields}),t.d(r,"IPieSeriesProperties",function(){return x.IPieSeriesProperties}),t.d(r,"IPieSeriesEvents",function(){return x.IPieSeriesEvents}),t.d(r,"IPieSeriesAdapters",function(){return x.IPieSeriesAdapters}),t.d(r,"PieSeries",function(){return x.e});var C=t(111);t.d(r,"IPieTickProperties",function(){return C.IPieTickProperties}),t.d(r,"IPieTickEvents",function(){return C.IPieTickEvents}),t.d(r,"IPieTickAdapters",function(){return C.IPieTickAdapters}),t.d(r,"PieTick",function(){return C.d});var P=t(36);t.d(r,"AxisDataItem",function(){return P.b}),t.d(r,"IAxisDataFields",function(){return P.IAxisDataFields}),t.d(r,"IAxisProperties",function(){return P.IAxisProperties}),t.d(r,"IAxisEvents",function(){return P.IAxisEvents}),t.d(r,"IAxisAdapters",function(){return P.IAxisAdapters}),t.d(r,"Axis",function(){return P.a});var S=t(52);t.d(r,"IGridProperties",function(){return S.IGridProperties}),t.d(r,"IGridEvents",function(){return S.IGridEvents}),t.d(r,"IGridAdapters",function(){return S.IGridAdapters}),t.d(r,"Grid",function(){return S.a});var g=t(66);t.d(r,"IAxisTickProperties",function(){return g.IAxisTickProperties}),t.d(r,"IAxisTickEvents",function(){return g.IAxisTickEvents}),t.d(r,"IAxisTickAdapters",function(){return g.IAxisTickAdapters}),t.d(r,"AxisTick",function(){return g.a});var E=t(53);t.d(r,"IAxisLabelProperties",function(){return E.IAxisLabelProperties}),t.d(r,"IAxisLabelEvents",function(){return E.IAxisLabelEvents}),t.d(r,"IAxisLabelAdapters",function(){return E.IAxisLabelAdapters}),t.d(r,"AxisLabel",function(){return E.a});var R=t(65);t.d(r,"IAxisLineProperties",function(){return R.IAxisLineProperties}),t.d(r,"IAxisLineEvents",function(){return R.IAxisLineEvents}),t.d(r,"IAxisLineAdapters",function(){return R.IAxisLineAdapters}),t.d(r,"AxisLine",function(){return R.a});var D=t(51);t.d(r,"IAxisFillProperties",function(){return D.IAxisFillProperties}),t.d(r,"IAxisFillEvents",function(){return D.IAxisFillEvents}),t.d(r,"IAxisFillAdapters",function(){return D.IAxisFillAdapters}),t.d(r,"AxisFill",function(){return D.a});var y=t(41);t.d(r,"IAxisRendererProperties",function(){return y.IAxisRendererProperties}),t.d(r,"IAxisRendererEvents",function(){return y.IAxisRendererEvents}),t.d(r,"IAxisRendererAdapters",function(){return y.IAxisRendererAdapters}),t.d(r,"AxisRenderer",function(){return y.a});var b=t(45);t.d(r,"IAxisBreakProperties",function(){return b.IAxisBreakProperties}),t.d(r,"IAxisBreakEvents",function(){return b.IAxisBreakEvents}),t.d(r,"IAxisBreakAdapters",function(){return b.IAxisBreakAdapters}),t.d(r,"AxisBreak",function(){return b.a});var k=t(55);t.d(r,"ValueAxisDataItem",function(){return k.g}),t.d(r,"IMinMaxStep",function(){return k.IMinMaxStep}),t.d(r,"IValueAxisDataFields",function(){return k.IValueAxisDataFields}),t.d(r,"IValueAxisProperties",function(){return k.IValueAxisProperties}),t.d(r,"IValueAxisEvents",function(){return k.IValueAxisEvents}),t.d(r,"IValueAxisAdapters",function(){return k.IValueAxisAdapters}),t.d(r,"ValueAxis",function(){return k.f});var m=t(77);t.d(r,"CategoryAxisDataItem",function(){return m.b}),t.d(r,"ICategoryAxisDataFields",function(){return m.ICategoryAxisDataFields}),t.d(r,"ICategoryAxisProperties",function(){return m.ICategoryAxisProperties}),t.d(r,"ICategoryAxisEvents",function(){return m.ICategoryAxisEvents}),t.d(r,"ICategoryAxisAdapters",function(){return m.ICategoryAxisAdapters}),t.d(r,"CategoryAxis",function(){return m.a});var L=t(107);t.d(r,"ICategoryAxisBreakProperties",function(){return L.ICategoryAxisBreakProperties}),t.d(r,"ICategoryAxisBreakEvents",function(){return L.ICategoryAxisBreakEvents}),t.d(r,"ICategoryAxisBreakAdapters",function(){return L.ICategoryAxisBreakAdapters}),t.d(r,"CategoryAxisBreak",function(){return L.a});var F=t(88);t.d(r,"DateAxisDataItem",function(){return F.b}),t.d(r,"IDateAxisDataFields",function(){return F.IDateAxisDataFields}),t.d(r,"IDateAxisProperties",function(){return F.IDateAxisProperties}),t.d(r,"IDateAxisEvents",function(){return F.IDateAxisEvents}),t.d(r,"IDateAxisAdapters",function(){return F.IDateAxisAdapters}),t.d(r,"DateAxis",function(){return F.a});var B=t(108);t.d(r,"IDateAxisBreakProperties",function(){return B.IDateAxisBreakProperties}),t.d(r,"IDateAxisBreakEvents",function(){return B.IDateAxisBreakEvents}),t.d(r,"IDateAxisBreakAdapters",function(){return B.IDateAxisBreakAdapters}),t.d(r,"DateAxisBreak",function(){return B.a});var X=t(87);t.d(r,"IValueAxisBreakProperties",function(){return X.IValueAxisBreakProperties}),t.d(r,"IValueAxisBreakEvents",function(){return X.IValueAxisBreakEvents}),t.d(r,"IValueAxisBreakAdapters",function(){return X.IValueAxisBreakAdapters}),t.d(r,"ValueAxisBreak",function(){return X.d});var Y=t(82);t.d(r,"IAxisRendererXProperties",function(){return Y.IAxisRendererXProperties}),t.d(r,"IAxisRendererXEvents",function(){return Y.IAxisRendererXEvents}),t.d(r,"IAxisRendererXAdapters",function(){return Y.IAxisRendererXAdapters}),t.d(r,"AxisRendererX",function(){return Y.a});var _=t(62);t.d(r,"IAxisRendererYProperties",function(){return _.IAxisRendererYProperties}),t.d(r,"IAxisRendererYEvents",function(){return _.IAxisRendererYEvents}),t.d(r,"IAxisRendererYAdapters",function(){return _.IAxisRendererYAdapters}),t.d(r,"AxisRendererY",function(){return _.a});var V=t(147);t.d(r,"IAxisRendererRadialProperties",function(){return V.IAxisRendererRadialProperties}),t.d(r,"IAxisRendererRadialEvents",function(){return V.IAxisRendererRadialEvents}),t.d(r,"IAxisRendererRadialAdapters",function(){return V.IAxisRendererRadialAdapters}),t.d(r,"AxisRendererRadial",function(){return V.a});var T=t(85);t.d(r,"IAxisLabelCircularProperties",function(){return T.IAxisLabelCircularProperties}),t.d(r,"IAxisLabelCircularEvents",function(){return T.IAxisLabelCircularEvents}),t.d(r,"IAxisLabelCircularAdapters",function(){return T.IAxisLabelCircularAdapters}),t.d(r,"AxisLabelCircular",function(){return T.a});var G=t(131);t.d(r,"IAxisRendererCircularProperties",function(){return G.IAxisRendererCircularProperties}),t.d(r,"IAxisRendererCircularEvents",function(){return G.IAxisRendererCircularEvents}),t.d(r,"IAxisRendererCircularAdapters",function(){return G.IAxisRendererCircularAdapters}),t.d(r,"AxisRendererCircular",function(){return G.a});var O=t(143);t.d(r,"IAxisFillCircularProperties",function(){return O.IAxisFillCircularProperties}),t.d(r,"IAxisFillCircularEvents",function(){return O.IAxisFillCircularEvents}),t.d(r,"IAxisFillCircularAdapters",function(){return O.IAxisFillCircularAdapters}),t.d(r,"AxisFillCircular",function(){return O.a});var j=t(144);t.d(r,"IGridCircularProperties",function(){return j.IGridCircularProperties}),t.d(r,"IGridCircularEvents",function(){return j.IGridCircularEvents}),t.d(r,"IGridCircularAdapters",function(){return j.IGridCircularAdapters}),t.d(r,"GridCircular",function(){return j.a});var w=t(54);t.d(r,"ITickProperties",function(){return w.ITickProperties}),t.d(r,"ITickEvents",function(){return w.ITickEvents}),t.d(r,"ITickAdapters",function(){return w.ITickAdapters}),t.d(r,"Tick",function(){return w.d});var W=t(44);t.d(r,"IBulletProperties",function(){return W.IBulletProperties}),t.d(r,"IBulletEvents",function(){return W.IBulletEvents}),t.d(r,"IBulletAdapters",function(){return W.IBulletAdapters}),t.d(r,"Bullet",function(){return W.a});var H=t(56);t.d(r,"ILabelBulletProperties",function(){return H.ILabelBulletProperties}),t.d(r,"ILabelBulletEvents",function(){return H.ILabelBulletEvents}),t.d(r,"ILabelBulletAdapters",function(){return H.ILabelBulletAdapters}),t.d(r,"LabelBullet",function(){return H.d});var M=t(127);t.d(r,"IXYChartScrollbarProperties",function(){return M.IXYChartScrollbarProperties}),t.d(r,"IXYChartScrollbarEvents",function(){return M.IXYChartScrollbarEvents}),t.d(r,"IXYChartScrollbarAdapters",function(){return M.IXYChartScrollbarAdapters}),t.d(r,"XYChartScrollbar",function(){return M.d});var N=t(243);t.d(r,"IClockHandProperties",function(){return N.IClockHandProperties}),t.d(r,"IClockHandEvents",function(){return N.IClockHandEvents}),t.d(r,"IClockHandAdapters",function(){return N.IClockHandAdapters}),t.d(r,"ClockHand",function(){return N.a});var K=t(89);t.d(r,"IXYCursorProperties",function(){return K.IXYCursorProperties}),t.d(r,"IXYCursorEvents",function(){return K.IXYCursorEvents}),t.d(r,"IXYCursorAdapters",function(){return K.IXYCursorAdapters}),t.d(r,"XYCursor",function(){return K.d});var z=t(109);t.d(r,"ICursorProperties",function(){return z.ICursorProperties}),t.d(r,"ICursorEvents",function(){return z.ICursorEvents}),t.d(r,"ICursorAdapters",function(){return z.ICursorAdapters}),t.d(r,"Cursor",function(){return z.a});var J=t(146);t.d(r,"IRadarCursorProperties",function(){return J.IRadarCursorProperties}),t.d(r,"IRadarCursorEvents",function(){return J.IRadarCursorEvents}),t.d(r,"IRadarCursorAdapters",function(){return J.IRadarCursorAdapters}),t.d(r,"RadarCursor",function(){return J.d})},301:function(e,r,t){"use strict";t.d(r,"b",function(){return d}),t.d(r,"a",function(){return c});var n,i=t(132),a=t(5),s=t(1),u=t(243),o=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])},function(e,r){function t(){this.constructor=e}n(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}),d=function(e){function r(){var r=e.call(this)||this;return r.className="GaugeChartDataItem",r.applyTheme(),r}return o(r,e),r}(i.f),c=function(e){function r(){var r=e.call(this)||this;return r.className="GaugeChart",r.startAngle=180,r.endAngle=360,r.hands=new a.g(new u.a),r.hands.events.on("insert",r.processHand,r),r.applyTheme(),r}return o(r,e),r.prototype.applyInternalDefaults=function(){e.prototype.applyInternalDefaults.call(this),this.readerTitle=this.language.translate("Gauge chart")},r.prototype.processHand=function(e){var r=e.newValue;r.axis||(r.axis=this.xAxes.getIndex(0))},r}(i.e);s.c.registeredClasses.GaugeChart=c}},[298]);
//# sourceMappingURL=gauge.js.map