import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, Observable, useOnBeforeRender } from "@zcomponent/core";
import { default as Slingshot } from "./Slingshot.zcomp";
import { default as Scene } from "./Scene.zcomp";
import { IRigidBody } from "@zcomponent/physics/lib/components/IRigidBody";
import { Line, Group } from "@zcomponent/three";
import { LineBasicMaterial, Vector3, BufferGeometry } from "three";
import { Box } from "@zcomponent/three";
interface ConstructionProps {}

/**
 * @zbehavior 
 * @zicon arrow_circle_down
 **/
export class SlingshotGrabber extends Behavior<Slingshot> {

	/**
	 * @zui
	 * @zdefault 0.5
	 */
	public launchForce : number = 0.5;

	/**
	 * @zui
	 * @zdefault 2
	 */
	public widthForLines = new Observable(5);

	protected zcomponent = this.getZComponentInstance(Scene)

	private currentGrabbedObject? : IRigidBody;
	private releasedGrabbedObject? : IRigidBody;

	private slingshotWorldPosition : Vector3 = new Vector3();
	private currentWorldGrabPosition : Vector3 = new Vector3();

	private force : Vector3 = new Vector3();
	private releasedForce : Vector3 = new Vector3();
	private releasedPosition : Vector3 = new Vector3();
	private launchObjectAllowed : Boolean = false;
	
	// rubber band
	private rubberBandMaterial : LineBasicMaterial;
	private rubberBandVisualizer : Line;
	private rubberBandLeft : Box;
	private rubberBandCenter : Box;
	private rubberBandRight : Box;
	
	private targetArrowDirection : Group;
	private targetShotVisualizer : Line;
	private targetShotMaterial : LineBasicMaterial;

	constructor(contextManager: ContextManager, instance: Slingshot, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		// left controller logic
		this.register(this.zcomponent.nodes.RigidbodyGrabber_Left.onGrab, (body) => {
			this.handleGrabState(body);
		});

		this.register(this.zcomponent.nodes.RigidbodyGrabber_Left.onRelease, (body) => {
			this.handleReleaseState(body);
		});

		// right controller logic
		this.register(this.zcomponent.nodes.RigidbodyGrabber_Right.onGrab, (body) => {
			this.handleGrabState(body);
		});

		this.register(this.zcomponent.nodes.RigidbodyGrabber_Right.onRelease, (body) => {
			this.handleReleaseState(body);
		});

		this.register(this.zcomponent.nodes.Slingshot.nodes.PullTriggerActivator.onCollisionLeave, (collisionObject) => {
			// only allow this as long as we've an object in hand
			if(this.currentGrabbedObject) this.launchObjectAllowed = true;
		});

		// additional initialization code
		this.rubberBandMaterial = new LineBasicMaterial({ color: 0xff0000, linewidth: this.widthForLines.value ?? 2 });
		this.targetShotMaterial = new LineBasicMaterial({ color: 0x4e82c1, linewidth: this.widthForLines.value ?? 2 });
		
		this.rubberBandVisualizer = this.zcomponent.nodes.SlingshotRubberBand;
		this.rubberBandLeft = this.zcomponent.nodes.Slingshot.nodes.RubberBandLeft;
		this.rubberBandCenter = this.zcomponent.nodes.Slingshot.nodes.RubberBandCenter;
		this.rubberBandRight = this.zcomponent.nodes.Slingshot.nodes.RubberBandRight;
		this.targetShotVisualizer = this.zcomponent.nodes.SlingshotTargetShot;
		this.targetArrowDirection = this.zcomponent.nodes.SlingshotArrowDirection;

		// frame by frame execution
		this.register(useOnBeforeRender(contextManager), this.frame);
	}

	private handleGrabState(rigidbody : IRigidBody) {
		this.currentGrabbedObject = rigidbody;
	}

	private handleReleaseState(rigidbody : IRigidBody) {
		if(this.currentGrabbedObject) {
			this.releasedGrabbedObject = this.currentGrabbedObject;
			this.releasedForce.copy(this.force);
			this.releasedPosition.copy(this.currentWorldGrabPosition);
		}

		this.currentGrabbedObject = undefined;
		if(this.launchObjectAllowed) this.launchObject();
		this.launchObjectAllowed = false;
		this.rubberBandVisualizer.visible.value = false;
		this.targetShotVisualizer.visible.value = false;
		this.targetArrowDirection.visible.value = false;

		this.rubberBandLeft.visible.value = true;
		this.rubberBandCenter.visible.value = true;
		this.rubberBandRight.visible.value = true;

		this.zcomponent.nodes.SlingshotTarget.behaviors.SlingshotTarget.resetTarget();

		// sound effects

		if(this.isBallGrabbed(this.releasedGrabbedObject)){
			this.zcomponent.nodes.Audio.behaviors.AudioManager.playLaunchBallSound();
		}

		if(!this.isBallGrabbed(this.releasedGrabbedObject)){
			this.zcomponent.nodes.Audio.behaviors.AudioManager.playSlingshotThrowSound();
		}
	}

	private isBallGrabbed(rigidbody : IRigidBody | undefined) : Boolean {
		if(!rigidbody) return false;
		const ballGrabbed = rigidbody.getInstance().tags.value.find(t => t == "Ball");
		return ballGrabbed != undefined;
	}

	private frame = () => {
		if(!this.currentGrabbedObject || !this.isBallGrabbed(this.currentGrabbedObject)) return;

		this.currentGrabbedObject.getElement().getWorldPosition(this.currentWorldGrabPosition);

		this.zcomponent.nodes.Slingshot.nodes.InitialPullLocation.element.getWorldPosition(this.slingshotWorldPosition);

		const distance = this.currentWorldGrabPosition.distanceTo(this.slingshotWorldPosition);
		this.force.subVectors(this.slingshotWorldPosition, this.currentWorldGrabPosition).normalize();
		this.force.multiplyScalar(this.launchForce * distance);

		this.simulateRubberBand();
		this.simulateTargetShot();
	}

	private launchObject() {
		setTimeout(() => { this.applyImpulse(); }, 25);
	}

	private simulateRubberBand() {
		if(!this.launchObjectAllowed) return;

		this.rubberBandLeft.visible.value = false;
		this.rubberBandCenter.visible.value = false;
		this.rubberBandRight.visible.value = false;

		this.rubberBandVisualizer.visible.value = true;
		const points: Vector3[] = [];

		// start line point
		const lineStartPoint = new Vector3();
		this.zcomponent.nodes.Slingshot.nodes.LeftTape.element.getWorldPosition(lineStartPoint);
		points.push(lineStartPoint);

		// mid line point
		const lineMidPoint = this.currentWorldGrabPosition;
		points.push(lineMidPoint);

		// end line point
		const lineEndPoint = new Vector3();
		this.zcomponent.nodes.Slingshot.nodes.RightTape.element.getWorldPosition(lineEndPoint);
		points.push(lineEndPoint);

		const geometry = new BufferGeometry().setFromPoints(points);
		this.rubberBandVisualizer.element.geometry = geometry;
		this.rubberBandVisualizer.element.material = this.rubberBandMaterial;
	}

	private simulateTargetShot() {
		if(!this.launchObjectAllowed) return;

		this.targetShotVisualizer.visible.value = true;
		this.targetArrowDirection.visible.value = true;
		
		const points: Vector3[] = [];
		points.push(this.currentWorldGrabPosition);

		// Calculate the end point by adding the force vector to the current grab position
		// resize it to be about 10% of the original force vector
		const smallLineTarget = new Vector3();
		smallLineTarget.copy(this.force);
		smallLineTarget.multiplyScalar(0.01);
		
		const endPoint = new Vector3().copy(this.currentWorldGrabPosition).add(smallLineTarget);
		points.push(endPoint);

		this.targetArrowDirection.element.position.set(endPoint.x, endPoint.y, endPoint.z);
		this.targetArrowDirection.element.lookAt(this.force);

		const geometry = new BufferGeometry().setFromPoints(points);
		this.targetShotVisualizer.element.geometry = geometry;
		this.targetShotVisualizer.element.material = this.targetShotMaterial;
	}

	private applyImpulse(){
		if(!this.releasedGrabbedObject) return;
		this.releasedGrabbedObject.applyForce(this.releasedForce, this.releasedPosition);
		this.releasedGrabbedObject = undefined;
	}

	dispose() {
		return super.dispose();
	}
}

registerBehaviorRunAtDesignTime(SlingshotGrabber);
