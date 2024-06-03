import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime } from "@zcomponent/core";
import { Text } from "@zcomponent/three";
import { GlobalContext } from "../Context/GlobalContext";
import { default as Scene } from "../Scene.zcomp";

interface ConstructionProps {}

/**
 * @zbehavior 
 * @zicon widgets
 **/
export class UIVisualizer extends Behavior<Component> {
	protected zcomponent = this.getZComponentInstance(Scene)
	private uiInfo : Text;
	private soreInfo : Text;
	
	constructor(contextManager: ContextManager, instance: Component, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		const globalContext = contextManager.get(GlobalContext);

		this.uiInfo = this.zcomponent.nodes.UIInfo;
		this.soreInfo = this.zcomponent.nodes.ScoreInfo;

		this.register(globalContext.uiInfo, this.updateUIInfo);
		this.register(globalContext.scoreInfo, this.updateScoreInfo);
	}

	updateUIInfo = (entry: string) => {
		this.uiInfo.text.value = entry;
	}

	updateScoreInfo = (entry: number) => {
		this.soreInfo.text.value = `${entry}`;
	}

	dispose() {
		return super.dispose();
	}
}

registerBehaviorRunAtDesignTime(UIVisualizer);
