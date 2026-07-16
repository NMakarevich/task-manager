import {Z as Zt,J as Ja,p,T as Tt$1,r as rn,a as Z,n as nc,i as iG,b as rt$1,$ as $n,H as Ho,A as Ar,W as Wt,V as Vr,h as hn,c as cE,o as oM,j as ja,d as HT,Q as QT,e as nf,l as ly,G as Gb,f as ec,t as tT,g as JC,k as nb,m as af,q as JT,s as Gv,u as uy,v as qb,w as nT,x as ic,F,y as m,z as QC,X as XC,B as Ae,D,C as it$1,E as ie$1,I as oc,K as ot,L as Ei,M as pT,N as gT,O as mi,P as AT,R as tc,S as sc,U as z,Y as tu,_ as pe,a0 as Zi,a1 as BW,a2 as vh,a3 as FW,a4 as Uo,a5 as bn,a6 as ng,a7 as rg,a8 as yT,a9 as hy,aa as qt,ab as Ne,ac as $s,ad as C2,ae as Zv,af as Qv,ag as Xv,ah as Jv,ai as aT,aj as fT,ak as cy,al as Be,am as RN,an as x,ao as xe,ap as B,aq as Iu,ar as Ao,as as D_,at as Ro,au as Cu,av as w,aw as zM,ax as Pf,ay as L,az as P,aA as Vp,aB as $p,aC as GT}from'./main-OB73HZHB.js';import {i as it,V}from'./chunk-ChlM9aw1.js';var ft=["input"],gt=["label"],xt=["*"],_e={color:"accent",clickAction:"check-indeterminate",disabledInteractive:false},vt=new D("mat-checkbox-default-options",{providedIn:"root",factory:()=>_e}),u=(function(c){return c[c.Init=0]="Init",c[c.Checked=1]="Checked",c[c.Unchecked=2]="Unchecked",c[c.Indeterminate=3]="Indeterminate",c})(u||{}),fe=class{source;checked},rt=(()=>{class c{_elementRef=p(Ae);_changeDetectorRef=p(sc);_ngZone=p(z);_animationsDisabled=tu();_options=p(vt,{optional:true});focus(){this._inputElement.nativeElement.focus();}_createChangeEvent(e){let t=new fe;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return `${this.id||this._uniqueId}-input`}required=false;labelPosition="after";name=null;change=new pe;indeterminateChange=new pe;value;disableRipple=false;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=u.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){p(Zi).load(BW);let e=p(new oc("tabindex"),{optional:true});this._options=this._options||_e,this.color=this._options.color||_e.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=p(vh).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??false;}ngOnChanges(e){e.required&&this._validatorChangeFn();}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate);}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck());}_checked=false;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck());}_disabled=false;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(u.Indeterminate):this._transitionCheckState(this.checked?u.Checked:u.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e);}_indeterminate=Z(false);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges();}writeValue(e){this.checked=!!e;}registerOnChange(e){this._controlValueAccessorChangeFn=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e;}validate(e){return this.required&&e.value!==true?{required:true}:null}registerOnValidatorChange(e){this._validatorChangeFn=e;}_transitionCheckState(e){let t=this._currentCheckState,n=this._getAnimationTargetElement();if(!(t===e||!n)&&(this._currentAnimationClass&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(o);},1e3);});}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked);}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked);}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(false),this.indeterminateChange.emit(false);}),this._checked=!this._checked,this._transitionCheckState(this._checked?u.Checked:u.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate);}_onInteractionEvent(e){e.stopPropagation();}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck();});}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return "";switch(e){case u.Init:if(t===u.Checked)return this._animationClasses.uncheckedToChecked;if(t==u.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case u.Unchecked:return t===u.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case u.Checked:return t===u.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case u.Indeterminate:return t===u.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return ""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e);}_onInputClick(){this._handleInputClick();}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus();}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation();}static \u0275fac=function(t){return new(t||c)};static \u0275cmp=Zt({type:c,selectors:[["mat-checkbox"]],viewQuery:function(t,n){if(t&1&&Qv(ft,5)(gt,5),t&2){let o;Xv(o=Jv())&&(n._inputElement=o.first),Xv(o=Jv())&&(n._labelElement=o.first);}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,n){t&2&&(Zv("id",n.id),mi("tabindex",null)("aria-label",null)("aria-labelledby",null),AT(n.color?"mat-"+n.color:"mat-accent"),tc("_mat-animation-noopable",n._animationsDisabled)("mdc-checkbox--disabled",n.disabled)("mat-mdc-checkbox-disabled",n.disabled)("mat-mdc-checkbox-checked",n.checked)("mat-mdc-checkbox-disabled-interactive",n.disabledInteractive));},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",Ei],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",Ei],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",Ei],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:C2(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Ei],checked:[2,"checked","checked",Ei],disabled:[2,"disabled","disabled",Ei],indeterminate:[2,"indeterminate","indeterminate",Ei]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[hy([{provide:qt,useExisting:$s(()=>c),multi:true},{provide:Ne,useExisting:c,multi:true}]),bn],ngContentSelectors:xt,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,n){if(t&1&&(pT(),ja(0,"div",3),ec("click",function(i){return n._preventBubblingFromLabel(i)}),ja(1,"div",4,0)(3,"div",5),ec("click",function(){return n._onTouchTargetClick()}),nf(),ja(4,"input",6,1),ec("blur",function(){return n._onBlur()})("click",function(){return n._onInputClick()})("change",function(i){return n._onInteractionEvent(i)}),nf(),Ja(6,"div",7),ja(7,"div",8),ng(),ja(8,"svg",9),Ja(9,"path",10),nf(),rg(),Ja(10,"div",11),nf(),Ja(11,"div",12),nf(),ja(12,"label",13,2),gT(14),nf()()),t&2){let o=yT(2);Gv("labelPosition",n.labelPosition),nb(4),tc("mdc-checkbox--selected",n.checked),Gv("checked",n.checked)("indeterminate",n.indeterminate)("disabled",n.disabled&&!n.disabledInteractive)("id",n.inputId)("required",n.required)("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex),mi("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby)("aria-checked",n.indeterminate?"mixed":null)("aria-controls",n.ariaControls)("aria-disabled",n.disabled&&n.disabledInteractive?true:null)("aria-expanded",n.ariaExpanded)("aria-owns",n.ariaOwns)("name",n.name)("value",n.value),nb(7),Gv("matRippleTrigger",o)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",true),nb(),Gv("for",n.inputId);}},dependencies:[FW,Uo],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return c})();function st(c){return Error(`Unable to find icon with the name "${c}"`)}function yt(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function dt(c){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${c}".`)}function lt(c){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${c}".`)}var g=class{url;svgText;options;svgElement=null;constructor(s,e,t){this.url=s,this.svgText=e,this.options=t;}},ht=(()=>{class c{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,n,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=n;}addSvgIcon(e,t,n){return this.addSvgIconInNamespace("",e,t,n)}addSvgIconLiteral(e,t,n){return this.addSvgIconLiteralInNamespace("",e,t,n)}addSvgIconInNamespace(e,t,n,o){return this._addSvgIconConfig(e,t,new g(n,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,n,o){let i=this._sanitizer.sanitize(Be.HTML,n);if(!i)throw lt(n);let l=RN(i);return this._addSvgIconConfig(e,t,new g("",l,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,n){return this._addSvgIconSetConfig(e,new g(t,null,n))}addSvgIconSetLiteralInNamespace(e,t,n){let o=this._sanitizer.sanitize(Be.HTML,t);if(!o)throw lt(t);let i=RN(o);return this._addSvgIconSetConfig(e,new g("",i,n))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(Be.RESOURCE_URL,e);if(!t)throw dt(e);let n=this._cachedIconsByUrl.get(t);return n?x(ce(n)):this._loadSvgIconFromConfig(new g(e,null)).pipe(xe(o=>this._cachedIconsByUrl.set(t,o)),B(o=>ce(o)))}getNamedSvgIcon(e,t=""){let n=mt(t,e),o=this._svgIconConfigs.get(n);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(n,o),this._getSvgFromConfig(o);let i=this._iconSetConfigs.get(t);return i?this._getSvgFromIconSetConfigs(e,i):Iu(st(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear();}_getSvgFromConfig(e){return e.svgText?x(ce(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(B(t=>ce(t)))}_getSvgFromIconSetConfigs(e,t){let n=this._extractIconWithNameFromAnySet(e,t);if(n)return x(n);let o=t.filter(i=>!i.svgText).map(i=>this._loadSvgIconSetFromConfig(i).pipe(Ao(l=>{let C=`Loading icon set URL: ${this._sanitizer.sanitize(Be.RESOURCE_URL,i.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(C)),x(null)})));return D_(o).pipe(B(()=>{let i=this._extractIconWithNameFromAnySet(e,t);if(!i)throw st(e);return i}))}_extractIconWithNameFromAnySet(e,t){for(let n=t.length-1;n>=0;n--){let o=t[n];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let i=this._svgElementFromConfig(o),l=this._extractSvgIconFromSet(i,e,o.options);if(l)return l}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(xe(t=>e.svgText=t),B(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?x(null):this._fetchIcon(e).pipe(xe(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,n){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let i=o.cloneNode(true);if(i.removeAttribute("id"),i.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(i,n);if(i.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(i),n);let l=this._svgElementFromString(RN("<svg></svg>"));return l.appendChild(i),this._setSvgAttributes(l,n)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let n=t.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(e){let t=this._svgElementFromString(RN("<svg></svg>")),n=e.attributes;for(let o=0;o<n.length;o++){let{name:i,value:l}=n[o];i!=="id"&&t.setAttribute(i,l);}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(true));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:n}=e,o=n?.withCredentials??false;if(!this._httpClient)throw yt();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let i=this._sanitizer.sanitize(Be.RESOURCE_URL,t);if(!i)throw dt(t);let l=this._inProgressUrlFetches.get(i);if(l)return l;let y=this._httpClient.get(i,{responseType:"text",withCredentials:o}).pipe(B(C=>RN(C)),Ro(()=>this._inProgressUrlFetches.delete(i)),Cu());return this._inProgressUrlFetches.set(i,y),y}_addSvgIconConfig(e,t,n){return this._svgIconConfigs.set(mt(e,t),n),this}_addSvgIconSetConfig(e,t){let n=this._iconSetConfigs.get(e);return n?n.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t;}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let n=0;n<this._resolvers.length;n++){let o=this._resolvers[n](t,e);if(o)return Ct(o)?new g(o.url,null,o.options):new g(o,null)}}static \u0275fac=function(t){return new(t||c)(w(zM,8),w(Pf),w(L,8),w(it$1))};static \u0275prov=P({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();function ce(c){return c.cloneNode(true)}function mt(c,s){return c+":"+s}function Ct(c){return !!(c.url&&c.options)}var It=["*"],Tt=new D("MAT_ICON_DEFAULT_OPTIONS"),St=new D("mat-icon-location",{providedIn:"root",factory:()=>{let c=p(L),s=c?c.location:null;return {getPathname:()=>s?s.pathname+s.search:""}}}),ut=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Et=ut.map(c=>`[${c}]`).join(", "),Mt=/^url\(['"]?#(.*?)['"]?\)$/,ie=(()=>{class c{_elementRef=p(Ae);_iconRegistry=p(ht);_location=p(St);_errorHandler=p(it$1);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e;}_color;inline=false;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e);}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses());}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses());}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ie$1.EMPTY;constructor(){let e=p(new oc("aria-hidden"),{optional:true}),t=p(Tt,{optional:true});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true");}_splitIconName(e){if(!e)return ["",""];let t=e.split(":");switch(t.length){case 1:return ["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses();}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t));}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();}_usingFontIcon(){return !this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e);}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let n=e.childNodes[t];(n.nodeType!==1||n.nodeName.toLowerCase()==="svg")&&n.remove();}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>e.classList.remove(n)),t.forEach(n=>e.classList.add(n)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon);}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((n,o)=>{n.forEach(i=>{o.setAttribute(i.name,`url('${e}#${i.value}')`);});});}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Et),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)ut.forEach(i=>{let l=t[o],y=l.getAttribute(i),C=y?y.match(Mt):null;if(C){let U=n.get(l);U||(U=[],n.set(l,U)),U.push({name:i,value:C[1]});}});}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,n]=this._splitIconName(e);t&&(this._svgNamespace=t),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,t).pipe(ot(1)).subscribe(o=>this._setSvgElement(o),o=>{let i=`Error retrieving icon ${t}:${n}! ${o.message}`;this._errorHandler.handleError(new Error(i));});}}static \u0275fac=function(t){return new(t||c)};static \u0275cmp=Zt({type:c,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,n){t&2&&(mi("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),AT(n.color?"mat-"+n.color:""),tc("mat-icon-inline",n.inline)("mat-icon-no-color",n.color!=="primary"&&n.color!=="accent"&&n.color!=="warn"));},inputs:{color:"color",inline:[2,"inline","inline",Ei],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:It,decls:1,vars:0,template:function(t,n){t&1&&(pT(),gT(0));},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return c})();function Ft(c,s){if(c&1){let e=aT();ja(0,"mat-form-field",3)(1,"input",4),ly("ngModelChange",function(n){Vp(e);let o=fT();return GT(o.todoText,n)||(o.todoText=n),$p(n)}),nf(),Gb(),nf(),ja(2,"div",5)(3,"button",6),ec("click",function(){Vp(e);let n=fT();return $p(n.updateTodo())}),ja(4,"mat-icon"),HT(5,"check"),nf()(),ja(6,"button",6),ec("click",function(){Vp(e);let n=fT();return $p(n.toggleEditMode())}),ja(7,"mat-icon"),HT(8,"close"),nf()()();}if(c&2){let e=fT();nb(),uy("ngModel",e.todoText),qb();}}function Dt(c,s){if(c&1){let e=aT();ja(0,"span"),HT(1),nf(),ja(2,"div",5)(3,"button",6),ec("click",function(){Vp(e);let n=fT();return $p(n.toggleEditMode())}),ja(4,"mat-icon"),HT(5,"edit"),nf()(),ja(6,"button",6),ec("click",function(){Vp(e);let n=fT();return $p(n.deleteTodo())}),ja(7,"mat-icon"),HT(8,"delete"),nf()()();}if(c&2){let e=fT();nb(),cy(e.todo().text);}}var ae=class c{todoService=p(Tt$1);activatedRoute=p(rn);todo=ic({});isEditMode=Z(false);todoText=Z("");currentDate=this.activatedRoute.snapshot.params.date;handleCheckboxChange=s=>{this.todoService.updateTodo(F(m({},this.todo()),{isDone:s}),this.currentDate);};toggleEditMode=()=>{this.todoText.update(()=>this.todo().text),this.isEditMode.update(s=>!s);};updateTodo=()=>{this.todoService.updateTodo(F(m({},this.todo()),{text:this.todoText()}),this.currentDate),this.toggleEditMode();};deleteTodo=()=>{this.todoService.deleteTodo(this.todo().id,this.currentDate);};static \u0275fac=function(e){return new(e||c)};static \u0275cmp=Zt({type:c,selectors:[["app-todo"]],inputs:{todo:[1,"todo"]},decls:5,vars:2,consts:[[1,"todo"],[3,"change","checked"],[1,"todo-field"],["subscriptSizing","dynamic","appearance","outline",1,"todo-input"],["matInput","","type","text",3,"ngModelChange","ngModel"],[1,"todos-controls"],["matIconButton","",3,"click"]],template:function(e,t){e&1&&(ja(0,"div",0)(1,"mat-checkbox",1),ec("change",function(o){return t.handleCheckboxChange(o.checked)}),nf(),ja(2,"div",2),QC(3,Ft,9,1)(4,Dt,9,1),nf()()),e&2&&(nb(),Gv("checked",t.todo().isDone),nb(2),XC(t.isEditMode()?3:4));},dependencies:[rt,$n,Ho,Ar,Wt,Vr,hn,V,ie],styles:[".todo[_ngcontent-%COMP%]{display:flex;gap:16px;align-items:center;width:100%;padding:8px;border:1px solid var(--mat-sys-outline);border-radius:var(--mat-sys-corner-small)}.todo-field[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;gap:16px;--mat-form-field-container-vertical-padding: 4px;--mat-form-field-container-height: 32px}.todo-input[_ngcontent-%COMP%]{flex:1}"]})};function At(c,s){if(c&1&&Ja(0,"app-todo",12),c&2){let e=s.$implicit;Gv("todo",e);}}function Rt(c,s){c&1&&(ja(0,"span"),HT(1,"\u041D\u0435\u0442 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447"),nf());}function Nt(c,s){if(c&1&&Ja(0,"app-todo",12),c&2){let e=s.$implicit;Gv("todo",e);}}function Lt(c,s){c&1&&HT(0," \u041D\u0435\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447 ");}var re=class c{todoService=p(Tt$1);activatedRoute=p(rn);currentDate=this.activatedRoute.snapshot.params.date;newTodo=Z("");searchTodo=Z("");todos=nc(()=>this.todoService.todos()[this.currentDate]?.filter(s=>this.searchTodo()?s.text.toLocaleLowerCase().includes(this.searchTodo().toLocaleLowerCase()):true));activeTodos=nc(()=>this.todos()?.filter(s=>!s.isDone));completedTodos=nc(()=>this.todos()?.filter(s=>s.isDone));addTodo=()=>{this.todoService.addTodo(this.newTodo(),this.currentDate),this.newTodo.update(()=>"");};routesList=iG;static \u0275fac=function(e){return new(e||c)};static \u0275cmp=Zt({type:c,selectors:[["app-todos"]],decls:37,vars:10,consts:[[1,"todos"],[1,"todos-header"],[1,"todos-title"],["matButton","filled",1,"back-link",3,"routerLink"],[1,"todos-controls"],[1,"create-todo"],["appearance","outline","subscriptSizing","dynamic",1,"todo-input"],["matInput","","type","text","placeholder","\u0422\u0435\u043A\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438",3,"ngModelChange","ngModel"],["matButton","filled",3,"click","disabled"],[1,"search-todo"],[1,"todos-lists"],[1,"todos-active"],[3,"todo"],[1,"todos-completed"]],template:function(e,t){e&1&&(ja(0,"section",0)(1,"div",1)(2,"h2",2),HT(3),QT(4,"date"),nf(),ja(5,"a",3)(6,"mat-icon"),HT(7,"undo"),nf(),HT(8," \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E "),nf()(),ja(9,"div",4)(10,"div",5)(11,"mat-form-field",6)(12,"mat-label"),HT(13,"\u041D\u043E\u0432\u0430\u044F \u0437\u0430\u0434\u0430\u0447\u0430"),nf(),ja(14,"input",7),ly("ngModelChange",function(o){return GT(t.newTodo,o)||(t.newTodo=o),o}),nf(),Gb(),nf(),ja(15,"button",8),ec("click",function(){return t.addTodo()}),ja(16,"mat-icon"),HT(17,"add"),nf(),HT(18," \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C "),nf()(),ja(19,"div",9)(20,"mat-form-field",6)(21,"mat-label"),HT(22,"\u041D\u0430\u0439\u0442\u0438 \u0437\u0430\u0434\u0430\u0447\u0443"),nf(),ja(23,"input",7),ly("ngModelChange",function(o){return GT(t.searchTodo,o)||(t.searchTodo=o),o}),nf(),Gb(),nf()()(),ja(24,"div",10)(25,"h3"),HT(26,"\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"),nf(),ja(27,"div",11),tT(28,At,1,1,"app-todo",12,JC,false,Rt,2,0,"span"),nf(),ja(31,"h3"),HT(32,"\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"),nf(),ja(33,"div",13),tT(34,Nt,1,1,"app-todo",12,JC,false,Lt,1,0),nf()()()),e&2&&(nb(3),af("\u0417\u0430\u0434\u0430\u0447\u0438 \u043D\u0430 ",JT(4,7,t.currentDate,"d.MM.yyyy")),nb(2),Gv("routerLink",t.routesList.main.getLink()),nb(9),uy("ngModel",t.newTodo),qb(),nb(),Gv("disabled",!t.newTodo()),nb(8),uy("ngModel",t.searchTodo),qb(),nb(5),nT(t.activeTodos()),nb(6),nT(t.completedTodos()));},dependencies:[ae,it,ie,rt$1,$n,Ho,Ar,Wt,Vr,hn,cE,oM],styles:[".todos[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;padding:32px;border-radius:var(--mat-sys-corner-medium);background-color:var(--mat-sys-primary-container);color:var(--mat-sys-on-primary-container)}.todos-header[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:16px;position:relative}.todos-controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.create-todo[_ngcontent-%COMP%]{display:flex;gap:24px;align-items:center}.todo-input[_ngcontent-%COMP%]{width:400px}.todos-lists[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.back-link[_ngcontent-%COMP%]{position:absolute;right:0}"]})};var kt=class c{static \u0275fac=function(e){return new(e||c)};static \u0275cmp=Zt({type:c,selectors:[["app-todo-page"]],decls:1,vars:0,template:function(e,t){e&1&&Ja(0,"app-todos");},dependencies:[re],encapsulation:2})};export{kt as TodoPage};