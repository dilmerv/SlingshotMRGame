import { Context, ContextManager, Observable } from "@zcomponent/core";

interface ConstructionProps {}

/** @zcontext */
export class GlobalContext extends Context<ConstructionProps> {

	public uiInfo = new Observable<string>("");
	public scoreInfo = new Observable<number>(0);

	constructor(contextManager: ContextManager, constructorProps: ConstructionProps) {
		super(contextManager, constructorProps);
	}

	public updateScore(newValue: number){
		const currentScore = this.scoreInfo.value;
		this.scoreInfo.value = currentScore + newValue;
	}

	public resetScore() {
		this.scoreInfo.value = 0;
	}

}
