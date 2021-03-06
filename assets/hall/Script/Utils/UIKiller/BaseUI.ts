import { ConstValue } from "../../Data/ConstValue";

const { ccclass, property } = cc._decorator;

export enum UIShowType {
    none = -1,
    scaleIn = 1,
}

export enum UIHideType {
    none = -1,
    scaleOut = 1,
}

export enum EnumUIDir {
    none = "",
}

export interface UIClass<T extends BaseUI> {
    new(): T;
    getUrl(): string;
    getClassName():string;
}

@ccclass
export default class BaseUI extends cc.Component {

    protected static className = "BaseUI";

    protected static uiDir = EnumUIDir.none;

    protected mTag: any;

    public get tag(): any {
        return this.mTag;
    }

    public set tag(value: any) {
        this.mTag = value;
    }

    public static getClassName() {
        return this.className;
    }

    public static getUrl(): string {
        cc.log(this.className);
        return ConstValue.PREFAB_UI_DIR + this.uiDir + "/" + this.className;
    }

    init(data){
        this.data=data;
    }

    /**
     * 注册事件
     */
    registerEvent() {

    }

    /**
     * 取消事件
     */
    unregisternEvent() {

    }

    onEnable() {
        console.log('onEnable');
        this.registerEvent();
    }

    onDisable() {
        this.unregisternEvent();
    }

    onShow(type: UIShowType) {
        console.log(type);
    }

    onHide(type: UIHideType) {
        console.log(type);
    }
}
