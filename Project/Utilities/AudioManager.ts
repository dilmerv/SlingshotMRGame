import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime } from "@zcomponent/core";
import { default as Scene } from "../Scene.zcomp";

interface ConstructionProps {}

/**
 * @zbehavior 
 * @zicon volume_up
 **/
export class AudioManager extends Behavior<Component> {

	protected zcomponent = this.getZComponentInstance(Scene);

	constructor(contextManager: ContextManager, instance: Component, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);
		this.zcomponent.nodes.MusicBackground.play();
	}

	public playLaunchBallSound()
	{
		this.zcomponent.nodes.SFXLaunchBall.seek(0);
		this.zcomponent.nodes.SFXLaunchBall.play();
	}

	public playSlingshotThrowSound()
	{
		this.zcomponent.nodes.SFXThrowWood.seek(0);
		this.zcomponent.nodes.SFXThrowWood.play();
	}

	public playScoreSound()
	{
		this.zcomponent.nodes.SFXScoreUp.seek(0);
		this.zcomponent.nodes.SFXScoreUp.play();
	}

	dispose() {
		return super.dispose();
	}
}

// Run at design time
registerBehaviorRunAtDesignTime(AudioManager);
