import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime } from "@zcomponent/core";
import { GlobalContext } from "./Context/GlobalContext";
import { default as Scene } from "./Scene.zcomp";
import { default as Target } from "./Target.zcomp";

interface ConstructionProps {}

/**
 * @zbehavior 
 * @zicon target
 **/
export class SlingshotTarget extends Behavior<Target> {

	private targetHit : Boolean = false;
	private globalContext : GlobalContext;

	protected zcomponent = this.getZComponentInstance(Scene)
	

	constructor(contextManager: ContextManager, instance: Target, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);
		this.globalContext = contextManager.get(GlobalContext);

		const registerCollisionEvent = (emitter, score) => {
			this.register(emitter.onCollision, (collisionEvent) => {
				if(!this.targetHit) {
					this.targetHit = true;
					this.globalContext.updateScore(score);
				}

				this.zcomponent.nodes.Audio.behaviors.AudioManager.playScoreSound();
				if(score == 10) {
					this.globalContext.uiInfo.value = "Great job, you hit the center";
				} else if(score >= 3 && score <= 5) {
					this.globalContext.uiInfo.value = "Good, that's very close to the center";
				} else if(score <= 2) {
					this.globalContext.uiInfo.value = "Let's keep practicing and aim for the center!";
				}
			});
		};
		
		registerCollisionEvent(this.instance.nodes.YellowEmitter, 10);
		registerCollisionEvent(this.instance.nodes.RedEmitter, 5);
		registerCollisionEvent(this.instance.nodes.BlueEmitter, 3);
		registerCollisionEvent(this.instance.nodes.BlueEmitter, 2);
		registerCollisionEvent(this.instance.nodes.WhiteEmitter, 1);
	}

	public resetTarget() {
		this.targetHit = false;
	}

	dispose() {
		return super.dispose();
	}
}

registerBehaviorRunAtDesignTime(SlingshotTarget);
