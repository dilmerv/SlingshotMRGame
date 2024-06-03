import { ContextManager, Observable, registerLoadable, useOnBeforeRender } from "@zcomponent/core";
import { Group } from "@zcomponent/three/lib/components/Group";
import * as THREE from "three";
import { Vector3 } from "three";
import { default as Ball } from "./Ball.zcomp"
import { GlobalContext } from "./Context/GlobalContext";

interface ConstructorProps {
    /**
     * @zprop
     * @zdefault 5
     */
    numBalls: number,
    /**
     * @zprop
     * @zdefault 1.5
     */
    checkToSpawnNewBallAfter: number,
    /**
     * @zprop
     * @zdefault 0.25
     */
    minYAxisBeforeSpawningNewBalls: number
}

/**
 * @zcomponent
 * @zicon favorite
 */
export class BallSpawner extends Group {
    private balls: Ball[] = [];
    private elapsedTime: number = 0;
    private startTime: number = 0;
    private checkFrequencyAfterSeconds: number = 0;
    private minYAxisBeforeSpawning: number = 0;
    private numberOfBalls: number = 0;

    private globalContext : GlobalContext;

    constructor(contextManager: ContextManager, constructorProps: ConstructorProps) {
        super(contextManager, constructorProps);
        this.globalContext = contextManager.get(GlobalContext);
        this.spawnBalls(constructorProps.numBalls);
        this.numberOfBalls = constructorProps.numBalls;
        this.checkFrequencyAfterSeconds = constructorProps.checkToSpawnNewBallAfter;
        this.minYAxisBeforeSpawning = constructorProps.minYAxisBeforeSpawningNewBalls;
        this.register(useOnBeforeRender(contextManager), this.frame);
    }

    private frame = () => {
        this.elapsedTime = Date.now() - this.startTime;
        if((this.elapsedTime / 1000) >= this.checkFrequencyAfterSeconds)
        {
            const ballsAboveMin = this.balls.find(b => {
                let ballMesh = b.nodeByLabel.get("Ball");
                let ballWorldPosition: Vector3 = new Vector3();
                ballMesh?.element.getWorldPosition(ballWorldPosition);
                return ballWorldPosition.y > this.minYAxisBeforeSpawning;
            });

            if(ballsAboveMin == undefined)
            {
                this.balls.forEach(b => b.dispose());
                this.spawnBalls(this.numberOfBalls);
            }
            this.startTime = Date.now();
        }
    }

    private spawnBalls = (numBalls = 5) => {
        this.globalContext.uiInfo.value = `Let me give you ${numBalls} new ball(s)`;
        for(let i = 0; i < numBalls; i++) {
            const ball = new Ball(this.contextManager, {});
            ball.position.value = [0, i / (numBalls * 2), 0];
            this.appendChild(ball);
            this.balls.push(ball);
        }
        this.startTime = Date.now();
    }

    public dispose = () => {
        this.balls.length = 0;
        return super.dispose();
    }
}